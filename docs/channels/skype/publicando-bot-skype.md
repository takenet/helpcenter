---
id: publicando-bot-skype
title: Como publicar seu Chatbot no Skype
sidebar_label: Como publicar seu Chatbot no Skype
---

## Adquirindo o Application ID

Acesse o [Application Registration Portal](https://apps.dev.microsoft.com) da Microsoft e crie um aplicativo. Informe o nome do seu chatbot.

Preencha o campo **Application ID** do BLiP com o *Application ID* informado no portal, conforme a imagem abaixo:

![](/img/channels/skype/publicando-bot-skype-1.png)<br>
![](/img/channels/skype/publicando-bot-skype-2.png)<br>
![](/img/channels/skype/publicando-bot-skype-3.png)<br>

## Adquirindo a Senha

Na mesma tela de cadastro do aplicativo, clique em **Generate Password**.

![](/img/channels/skype/publicando-bot-skype-4.png)<br>

No BLiP, preencha o campo **Senha** e clique em **Salvar**. Será gerada uma URL de retorno.

![](/img/channels/skype/publicando-bot-skype-5.png)<br>
## Criando seu chatbot no Skype

Acesse o [BotFramework](https://dev.botframework.com/bots/new) utilizando a sua conta Microsoft, e crie um bot usando o seu *Application ID*.

![](/img/channels/skype/publicando-bot-skype-6.png)<br>

Copie a **URL de retorno** gerada pelo BLiP e cole no campo **Messaging endpoint** do [BotFramework](https://dev.botframework.com/), conforme a imagem acima. Preencha o restante do formulário e efetue o cadastro.

## Testando o seu Chatbot

Após efetivar o cadastro será exibida uma página contendo algumas informações sobre o bot. Para testá-lo você precisa clicar em **Skype** na página Channels para adicioná-lo aos seus contatos no Skype e começar uma conversa com ele pela aplicação do Skype. **Não** teste o bot usando o botão Teste localizado no canto superior direito.

Para o seu chatbot funcionar no Skype, a equipe do Skype precisa aprová-lo.

Para isto, você deve ir no [BotFramework](https://dev.botframework.com/bots/new) Portal usando sua conta Microsoft e clicar em **My Bots**. Nesta tela serão listados os bots existentes. Selecione o bot que você quer disponibilizar no Skype e clique em **Edit** no canal Skype. Em seguida, clique em **Publish**, preencha todos os dados necessários e clique em **Submit for Review**. Seu bot será analisado pela equipe do Skype.

![](/img/channels/skype/publicando-bot-skype-7.png)<br>

Se seu bot não tiver sido aprovado ainda pode ser que você somente consiga testá-lo usando a mesma conta do Skype que você utilizou para criá-lo.

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>