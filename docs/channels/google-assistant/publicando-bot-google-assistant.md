---
id: publicando-bot-google-assistant
title: Como publicar seu bot no Google Assistant
sidebar_label: Como publicar seu bot no Google Assistant
---

**Atualmente, a integração com o canal Google Assistant está disponível apenas para usuários do tipo *Enterprise*.**

* **1º Passo:** Acesse o link: https://console.actions.google.com/u/0/.

* **2º Passo:** Crie um projeto.

* **3º Passo:** Assim que o projeto for criado, serão exibidas opções. Escolha a opção “Actions SDK”, no fim da página.

* Copie e guarde a linha de comando que aparece em sua tela (será utilizada no passo 11º, que se parece com:

```
gactions update --action_package action.json --project irisbot-624c5
```

* **a)** Dê ok para fechar a janela que abriu.
* **b)** O link https://developers.google.com/actions/sdk contém mais informações sobre o SDK.

* **4º Passo:** No topo da página, clique em SKIP para ir para o Console.

* **5º Passo:** Faça o download do CLI do [Gactions](https://developers.google.com/actions/tools/gactions-cli).

* **6º Passo:** Crie uma pasta para colocar o projeto do seu bot e coloque o arquivo gactions.exe baixado dentro desta pasta.

* **7º Passo:** Inicie o terminal na pasta criada e execute: 

```
gactions init 
```

* **8º Passo:** Assim que rodar esse comando, um arquivo JSON (`action.json`) será criado na pasta.

* **9º Passo:** Pegue o id único do seu projeto no console do Google Actions (a página aberta após clicar em SKIP no passo 4:

* **a)** Abra o Project settings:

![](/img/channels/google-assistant/publicando-bot-google-assistant-1.png)<br>


* Copie o **Project ID**:

![](/img/channels/google-assistant/publicando-bot-google-assistant-2.png)<br>

* **10º Passo:** Agora é necessário configurar o action package (action.json) para que o Assistant saiba como redirecionar a conversa do usuário para o seu bot. Veja mais sobre o *action package* [aqui](https://developers.google.com/actions/sdk/create-a-project#create_an_action_package) e [aqui](https://developers.google.com/actions/reference/rest/Shared.Types/ActionPackage). Para facilitar, aqui está um exemplo de um actions package pronto (o nome do projeto, no caso, é **IRISBot** e seu **Project ID** no Console do Actions on Google é `irisbot-624c5`).

* **a)** As marcações em vermelho não precisam ser o nome do seu projeto, basta que sejam a mesma palavra dentro do `action.json`.

* **b)** A marcação em roxo é como o Assistant saberá que deve chamar seu bot para iniciar a conversa caso a pessoa fale ou digite o(s) texto(s) especificado(s). No caso, o texto de ativação do bot é *“talk to IRISBot”* ou *“I want to talk to IRISBot”*.

* **c)** A marcação em laranja é o seu **Project ID**.

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

* **11º Passo:** Agora é necessário enviar esse arquivo para o projeto criado anteriormente no console. Acesse a pasta onde o ´action.json` foi criado e execute a linha de comando copiada no passo 3 **a)**. Autentique seguindo as instruções do `gactions` no terminal (copie e cole o link no navegador, dê permissão, copie o token e insira no terminal). O seu *action package* será enviado para seu projeto no console do Actions on Google.

* **12º Passo:** Antes de poder testar a comunicação com o bot pelo simulador disponibilizado, é necessário dar permissão para o Google Assistant [neste endereço](https://myaccount.google.com/activitycontrols). Permissões necessárias:

*  **a)** Web & App Activity (Atividade na Web e de apps)	
*  **b)** Device Information (Informações do dispositivo)
*  **c)**Voice & Audio Activity (Atividade de voz e áudio)

* **13º Passo:** Agora, para ligar com seu bot de fato, é necessário fazer uma modificação nas configurações avançadas do bot no portal. 

*  **a)** Abra as configurações do seu bot no Builder:

![](/img/channels/google-assistant/publicando-bot-google-assistant-3.png)<br>

*  **b)** No fim da página, acesse as configurações avançadas clicando no link “Clique [aqui](https://portal.blip.ai/) para acessar as configurações avançadas”.

*  **c)** Nas configurações avançadas do seu bot, crie uma nova entrada como a da imagem abaixo, lembrando de alterar o campo **“Valor”** de `irisbot-624c5` para o seu **Project ID**:

* **a)** **Domínio:** postmaster@assistant.gw.msging.net
* **b)** **Chave:** `AccountExternalId`.
* **c)** **Valor:** seu **Project ID**.


![](/img/channels/google-assistant/publicando-bot-google-assistant-4.png)<br>

* **14º Passo:**No console do Assistant, você pode dar um nome para a sua Action, responsável por invocar seu bot quando chamado. É possível mudar a pronúncia, caso esteja errada, e escolher uma das vozes disponíveis para ser a voz do seu bot. Para abrir essas configurações, vá ao menu “Invocation”:

![](/img/channels/google-assistant/publicando-bot-google-assistant-5.png)<br>

* **15º Passo:** Pronto! Para testar seu bot pelo simulador do Actions Console, vá em *“Actions”* e clique no botão **“TEST”**, para que a última versão do arquivo `action.json` seja a usada na simulação.
*  **a)** Inicie a conversa pela mensagem sugerida pelo simulador, pois foi a única definida no `action.json` e serve apenas para iniciar a conversa. Uma vez que a conversa foi iniciada, qualquer mensagem do usuário cairá direto no bot.

![](/img/channels/google-assistant/publicando-bot-google-assistant-6.png)<br>