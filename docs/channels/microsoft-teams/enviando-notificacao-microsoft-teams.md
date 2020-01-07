---
id: enviando-notificacao-microsoft-teams
title: Enviando notificações com o Microsoft Teams
sidebar_label: Enviando notificações com o Microsoft Teams
---
**Atualmente, a integração com o canal Google Assistant está disponível apenas para usuários do tipo *Enterprise*.**

Gere uma chave:

* **1º Passo:** Abra esta URL, substituindo “AQUI” pelo **Project ID** do seu projeto do Actions:
* **a)** https://console.developers.google.com/apis/api/actions.googleapis.com/overview?project=**AQUI**

* **2º Passo:** Se você vir um botão **“Enable”**, clique nele. Caso não, prossiga para o passo 3.

* **3º Passo:** Abra esta URL, trocando o **"AQUI"** do final pelo **Project ID** do seu projeto do Actions:
* **a)** https://console.developers.google.com/apis/credentials?project=AQUI

* **4º Passo:** Clique em **Create credentials > Service Account Key**:

![](/img/channels/google-assistant/enviando-notificacao-google-assistant-2.png)<br>

* **5º Passo:** Na caixa de seleção de **Service Account**, escolha **New Service Account**.

* **6º Passo:** Dê um nome para a conta como *“notifications"* e mude o **Role** para **Project > Owner**.

* **7º Passo:** Escolha JSON para o **key type** e clique em Create. Um arquivo JSON com a **service account key** será baixado para seu computador.

![](/img/channels/google-assistant/enviando-notificacao-google-assistant-3.png)<br>

* **8º Passo:** O arquivo vai ser parecido com este:

![](/img/channels/google-assistant/enviando-notificacao-google-assistant-4.png)<br>

* **9º Passo:** Copie e cole o conteúdo do arquivo nas configurações avançadas do bot, da seguinte maneira (colocar isso na última tela de configuração do canal):

* **a)** **Domínio:** postmaster@assistant.gw.msging.net
* **b)** **Chave:** `ServiceCredentialJson`.
* **c)** **Valor:** conteúdo do arquivo baixado.

![](/img/channels/google-assistant/enviando-notificacao-google-assistant-5.png)<br>

* **10º Passo:** Crie outra entrada na tabela de configurações avançadas, com a chave sendo `DefaultPushClickMessage` (colocar isso na última tela de configuração do canal). O valor será a mensagem enviada por padrão para o bot sempre que um usuário clicar em uma notificação push. Não é possível diferenciar qual push foi clicado nem quando.

É necessário configurar duas novas actions no aplicativo do Actions On Google. Basta alterar o arquivo `actions.json`, criado anteriormente, para ter as duas novas ações seguindo o padrão.
* **a)** Uma action para tratar a permissão dada ou negada (PERMISSION) e
* **b)** Uma action para tratar o clique do usuário em uma notificação do aplicativo (`iris.assistant.intent.PUSH_CLICKED`).

```json
{
  "actions": [
    {
      "description": "Default Welcome Intent",
      "name": "MAIN",
      "fulfillment": {
        "conversationName": "IRISBot"
      },
      "intent": {
        "name": "actions.intent.MAIN",
        "trigger": {
          "queryPatterns": [
            "talk to IRISBot",
            "I want to talk to IRISBot"
          ]
        }
      }
    },
   {
     "description": "Permission",
     "name": "PERMISSION",
     "fulfillment": {
       "conversationName": "IRISBot"
     },
     "intent": {
       "name": "actions.intent.PERMISSION",
       "trigger": {
         "queryPatterns": [
           "interact with push notification"
         ]
       }
     }
   },
    {
       "description": "Push Interaction Intent",
       "name": "PUSH_CLICKED",
       "fulfillment": {
         "conversationName": "IRISBot"
       },
       "intent": {
         "name": "iris.assistant.intent.PUSH_CLICKED",
         "trigger": {
           "queryPatterns": [
             "interact with push notification"
           ]
         }
       }
    }
  ],
  "conversations": {
    "IRISBot": {
      "name": "IRISBot",
      "url": "https://assistant.gw.msging.net/irisbot-624c5"
    }
  },
  "locale": "en"
}
```
E enviá-lo novamente para o Actions on Google, usando o comando do `gactions`. Com isso, duas novas actions vão aparecer no painel, em **Build > Actions**:

![](/img/channels/google-assistant/enviando-notificacao-google-assistant-6.png)<br>

Entre na nova ação de push interaction e vá para a seção *“User engagement”*, onde você deve selecionar a opção de querer enviar notificações push. Preencha o *“Content title”* com o nome de sua preferência (a notificação será exibida usando este nome, que também será usado para pedir permissão de enviar notificações, ex.: “Você gostaria de receber notificações de Nome do seu bot?”). Salve no alto da página, à direita.



Entretanto, antes de poder enviar notificações, é necessário pedir a permissão da pessoa e salvar seu id e qual intent será usado para receber as notificações (será o intent `PUSH_CLICKED` criado aqui em cima), caso a pessoa permita as notificações. Primeiro, pergunte se a pessoa deseja as notificações e, caso ela marque sim, o gateway deve devolver uma response com possible intent da seguinte forma:

![](/img/channels/google-assistant/enviando-notificacao-google-assistant-7.png)<br>

```json
{
"expectedInputs": [
       {
           "inputPrompt": {
               "richInitialPrompt": {
                   "items": [
                       {
                           "simpleResponse": {
                               "textToSpeech": "PLACEHOLDER"
                           }
                       }
                   ]
               }
           },
           "possibleIntents": [
               {
                   "intent": "actions.intent.PERMISSION",
                   "inputValueData": {                       
                   "@type": "type.googleapis.com/google.actions.v2.PermissionValueSpec",
                       "permissions": [
                           "UPDATE"
                       ],
                       "updatePermissionValueSpec": {
                           "intent": "iris.assistant.intent.PUSH_CLICKED"
                       }
                   }
               }
           ]
       }
   ],
}
```
![](/img/channels/google-assistant/enviando-notificacao-google-assistant-8.png)<br>

Para isso será recebida a resposta da pessoa, concedendo ou não a permissão. Devolver alguma mensagem pra pessoa falando que salvou a permissão.

Para enviar notificações, deve ser enviada uma custom push message para o Assistant, marcando o usuário desejado no `target` e mandando o título da notificação:

```json
{
   "customPushMessage": {
       "userNotification": {
           "title": "este é um título"
       },
       "target": {
           "userId": "ABwppHEdPIEOjDg9SSFaUeaV9Uc8JoFDs1Kchrj4RgIS8fauKNfpr3K5ag",
           "intent": "iris.assistant.intent.PUSH_CLICKED",
           "locale": "en-US"
       }
   }
}
```

A notificação vai aparecer da seguinte forma, sendo:
* **a)** **“este é um título”:** título enviado.
* **b)** **“IRISBot”:** Nome setado para a ação, na hora de configurar o *user engagement*.
* **c)** **“Mari Ana”:** Nome usado para invocar o bot no Assistant
Imagem: Imagem do aplicativo escolhida no painel do Actions.

![](/img/channels/google-assistant/enviando-notificacao-google-assistant-9.png)<br>