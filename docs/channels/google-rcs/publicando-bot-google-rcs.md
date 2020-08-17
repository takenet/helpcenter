---
id: publicando-bot-google-rcs
title: Como publicar seu Chatbot no Google RCS
sidebar_label: Como publicar seu Chatbot no Google RCS
---

> **ATENÇÃO:** O uso do Google RCS está restrito a algumas empresas. Siga os passos descritos neste artigo apenas se sua empresa possui acesso a este canal. Caso tenha interesse em utilizar o canal Google RCS entre em contato enviando um email para community@take.net.

Antes de iniciar o processo de publicação de um contato inteligente no canal Google RCS, verifique todos os pré-requisitos necessários.

### Pré-requisitos

1. Ter acesso ao [Console do Google RCS Business Messaging](https://rbm-console.sandbox.google.com/console/).
2. **Criar um agente** no console do Google RCS Business Messaging.
3. Possuir um telefone Android habilitado para testar o **RCS**

Para habilitar um telefone como usuário de teste do Google RCS, abra o aplicativo **Mensagens** ou faça o download [clicando aqui](https://play.google.com/store/apps/details?id=com.google.android.apps.messaging).

* Dentro do aplicativo, clique no ícone de pesquisa.
* Digite "*xyzzy*" e clique no botão pesquisar para habilitar o menu **Debug**.
* Clique no ícone do menu (três pontos no canto superior direito) e depois escolha as opções **Debug → RCS → Report RCS Connection State**.
* O aplicativo mostrará uma mensagem indicando se o RCS está **Ativo** ou **Inativo** para este aparelho.
* Caso a mensagem indique que o RCS está **Inativo**, clique no ícone de menu, escolha as opções **Configurações → Recursos de Chat** e ative as opções desativadas. Verifique se o RCS ficará **Ativo**. Caso não funcione seu aparelho ou operadora ainda não suporta o RCS.

4. Habilitar um celular como usuário de teste de um agente do RCS.

Para isso, acesse o agente criado no Console do Google RCS e clique na opção **Devices**.
Informe um número de telefone Android, previamente habilitado para utilizar o RCS (conforme descrito no item 3).

![Imagem que demonstra com habilitar um aparelho celular como usuário de teste de um agente do RCS](/img/channels/google-rcs/add-test-device-rcs.png)

Clique em **Send test message** e escolha uma mensagem de teste para ser enviada para o número definido.

Você receberá uma mensagem de *RBM Test Manager* avisando que foi foi convidado para se tornar um testador. Clique em **Make me a tester** para aceitar.

## Configurando o agente no Console do Google RCS

**1.** Acesse o agente no Console do Google RCS e clique em **Service account**. Clique no botão **Create key** para criar uma chave que dará acesso ao BLiP para enviar mensagens em nome do seu agente.

![Imagem que demonstra como criar uma chave de acesso ao seu agente no Google RCS](/img/channels/google-rcs/agent-info-rcs.png)

Ao final do processo de criação de uma chave você terá um arquivo JSON (**ServiceCredentialJson**). Guarde essa informação, ela será utilizada mais adiante.

**2.** Ainda no Console do Google RCS, acesse as informações do seu agente (*Agent Information*) no menu de configurações (*Setup*) e preencha todas as informações solicitadas. **Apenas agentes que possuam todas as informações definidas poderão ser submetidos para análise e aprovação do Google.**

**3.** Acesse o menu Integrações (*Integrations*) e selecione a opção **Cloud Pub/Sub**. Escolha a opção **Push**.

* Endpoint URL

Insira a URL de enpoint do BLiP para o canal Google RCS. Esta é a configuração que define qual URL deverá ser utilizada pelo Google RCS para enviar as mensagens recebidas pela sua empresa. Por isso, você deverá configurar a URL do BLiP para recebimento de mensagens do RCS.

> [https://googlercs.gw.msging.net/{{chave-aleatoria}}](https://googlercs.gw.msging.net/{{chave-aleatória}})

Se o seu contato inteligente (bot) estiver em uma organização, utilize a URL abaixo:

> [https://{{id-da-organizacao}}.googlercs.gw.msging.net/{{chave-aleatória}}](https://googlercs.gw.msging.net/{{chave-aleatória}})

**Chave-aleatoria** é um código alfanumérico, gerado por você, utilizado para identificar unicamente seu bot. **Sugerimos que seja utilizado um UUID (Universally Unique Identifier ou Globally Unique Identifier).** [Clique aqui](https://www.uuidgenerator.net/) para gerar um UUID.

Copie o **Client token** fornecido pelo Google e siga para a próxima configuração. **Não clique em Verify**. Ao final do processo você irá voltar a este ponto.

## Configurando o seu contato inteligente no BLiP

Após configurado um número de teste, criar uma chave de acesso e submeter as informações do agente ao Google é preciso configurar seu contato inteligente (bot) no BLiP.

**4.** Acesse seu bot no BLiP, e vá para a tela de configurações avançadas. Caso não saiba como acessar as configurações avançadas do seu bot, [clique aqui](/docs/management/configuracoes-avancadas-bot).

**5.** Utilizando sempre o domínio `postmaster@googlercs.gw.msging.net`, adicione as chaves de configuração do RCS alterando os valores com os seus dados, conforme demonstrado na tabela abaixo.

| Domínio                            | Chave                 | Valor           |
| ---------------------------------- | --------------------- | --------------- |
| postmaster@googlercs.gw.msging.net | AccountExternalId     | CHAVE-ALEATORIA |
| postmaster@googlercs.gw.msging.net | RcsClientToken        | CLIENT-TOKEN    |
| postmaster@googlercs.gw.msging.net | ServiceCredentialJson | CREDENTIAL-JSON |

#
- **AccountExternalId** - Chave aleatória utilizada para identificar seu bot. Essa é a mesma informação utilizada na URL de PubSub durante a configuração do agente no Google RCS.
- **RcsClientToken** - Token obtido durante a criação da chave do RCS no passo 3.
- **ServiceCredentialJson** - Conteúdo do arquivo JSON obtido durante a criação da chave do RCS no passo 1. Para obter o conteúdo do arquivo, abra-o em um editor de texto (por exemplo o bloco de notas) e copie o conteúdo. Ele será parecido com o abaixo:

```JSON
{
    "type": "service_account",
    "project_id": "rbm-blip-tutorial",
    "private_key_id": "ad369413a02a4d1ce86c0000000000000000",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuAIBADANBgkqhkiG9w0BAQEFAASCBKIwggSeAgEAAoIBAQCplmUw25iMDSSJ\n-----END PRIVATE KEY-----\n",
    "client_email": "rbm-agent@rbm-blip-tutorial.iam.gserviceaccount.com",
    "client_id": "11470398472629999999999",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/rbm-agent%40rbm-blip-tutorial.iam.gserviceaccount.com"
}
```

**6.** Após realizada todas as configurações anteriores, clique no botão **Verify** do passo **3**. Esta é a última etapa de configuração. Caso todos os passos tenham sido executados com sucesso, basta testar o funcionamento da sua aplicação.

**7.** Para testar o funcionamento do bot, acesse o aplicativo **Mensagens**, através do número de teste habilitado, e envie uma mensagem para o seu agente.


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>