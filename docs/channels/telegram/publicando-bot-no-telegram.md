---
id: publicando-bot-no-telegram
title: Publicando seu bot no canal Telegram
sidebar_label: Publicando seu bot no canal Telegram
---

O processo de publicação de um contato inteligente no canal Telegram é muito simples.

### Pré-requisitos

Antes de começar, garanta que você já possui uma conta válida no Telegram e que o aplicativo já está instalado em seu aparelho (ou navegador web).

### 1. *Inicie uma conversa com o contato @botfather*

Acesse seu aplicativo do Telegram, clique pesquisar contatos e procure por um contato chamado BotFather (@botfather). Esse é um bot criado pela equipe do Telegram para ajudar os usuários no processo de criação de bots na plataforma. Você também pode iniciar uma conversa com o @botfather clicando [neste link](https://telegram.me/botfather).

### 2. *Criando seu bot no Telegram*

Para criar o seu bot no Telegram, envie a mensagem **/newbot** para o BotFather. Depois disso, você será solicitado a inserir um nome e um nome de usuário (identificador) para sua aplicação. 

![Imagem de exemplo do comando /newbot](/img/channels/telegram/telegram-newbot.png)

Insira o nome do seu Bot Telegram, ele será exibido nos detalhes de contato e em outros locais dentro do aplicativo.

![Imagem de exemplo inserindo nome do bot](/img/channels/telegram/telegram-newbot-name.png)

Insira o nome de usuário (identificador) do seu bot. O nome de usuário é um nome curto, que poderá ser usado em menções e links do telegram. Os nomes de usuário têm de **5 a 32 caracteres** que só podem ser latinos, números e sublinhados. Não existe distinção entre letras maiúsculas e minúsculas nos nomes de usuário, entretanto ele, necessariamente, deve terminar em **“bot”**.

![Imagem de exemplo inserindo nome de usuário do bot](/img/channels/telegram/telegram-newbot-username.png)

Após inserida essas informações você receberá um token de autorização para seu novo bot. É através desse token que o BLiP conseguirá enviar mensagens em nome do seu bot.

### 3. *Inserindo seu token no BLiP*

Após seguir os 2 passos anteriores, o Telegram disponibilizará o token, que é uma cadeia de caracteres necessária para autorizar o bot e enviar solicitações para a API do Telegram. Acesso o portal do BLiP, selecione seu bot, clique em Canais > Telegram e insira o token do seu bot no local indicado. Clique no botão salvar para ativar o canal.

*Obs.: Mantenha seu token armazenado e em segurança, caso contrário ele poderá ser usado por qualquer pessoa para controlar seu bot.*

![Imagem de exemplo buscando o token do bot](/img/channels/telegram/telegram-newbot-token.png)

Para mais informações sobre a criação de um bot através do **BotFather**, os comandos que ele disponibiliza, geração de um novo token e demais tipos de suporte, acesse a documentação oficial [clicando aqui](https://core.telegram.org/bots#6-botfather).

![Imagem da publicação do bot no blip](/img/channels/telegram/telegram-newbot-publish.png)
