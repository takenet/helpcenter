---
id: publicando-bot-microsoft-teams
title: Como publicar seu bot no Microsoft Teams
sidebar_label: Como publicar seu bot no Microsoft Teams
---


## Pré-requisitos

1. Possuir uma conta no Microsoft Teams. Acesse [o site oficial](https://products.office.com/pt-br/microsoft-teams/group-chat-software) para utilizar a versão online, ou fazer o download do aplicativo do Microsoft Teams para Windows, Linux ou Mac.

## Configurando o contato inteligente no Microsoft Teams
**1.** Na aba aplicativos, pesquise e instale o aplicativo **App Studio**.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-1.png)
<br>

**2.** Após a instalação, o App Studio estará disponível para criação de novos aplicativos personalizados.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-2.png)
<br>

**3.** Clique na aba de **Manifest editor** e em seguida selecione a opção **+ Create a new app** para criar seu aplicativo.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-3.png)<br>

**4.** Em **App details** preencha todos os campos obrigatórios e os campos opcionais que desejar. Neste momento os dados não precisam ter relação com o BLiP, portanto sinta-se livre para preecnher como preferir.

**5.** Copie o valor do campo **App ID** e salve em um local temporário. Ele será necessário nas próximas etapas.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-4.png)<br>

**6.** No menu lateral esquerdo, selecione a opção **Bots** e clique em **Set up**, conforme apresentado na imagem abaixo. Assim como feito no passo 4 preencha os campos de acordo com as informações do seu bot.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-5.png)<br>

**7.** Finalizada sua configuração inicial, clique no botão **Generate new password**, copie o valor gerado e salve em um local temporário. Ele será necessário nas próximas etapas. **Atenção:** Esse valor só será exibido uma vez.

**8.** Copie o ID do bot (exibido abaixo do nome dele) e salve em um local temporário. Ele será necessário nas próximas etapas.

**9.** O campo **Bot endpoint address** se trata da URL de enpoint do BLiP para o canal Microsoft Teams. Esta é a configuração que define qual URL deverá ser utilizada pelo Teams para enviar as mensagens recebidas pelo seu aplicativo. Por isso, você deverá configurar a URL do BLiP, conforme abaixo:

> [https://abs.gw.msging.net/{{id-do-bot}}](https://abs.gw.msging.net/{{id-do-bot}})

Se o seu contato inteligente (bot) estiver em uma organização, utilize a URL abaixo:

> [https://{{id-da-organizacao}}.abs.gw.msging.net/{{id-do-bot}}](https://{{id-da-organizacao}}.abs.gw.msging.net/{{id-do-bot}})

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-6.png)<br>

## Configurando o contato inteligente no BLiP

Após preecnher todas as informações do Microsoft Teams é preciso configurar seu contato inteligente (bot) no BLiP.

**10.** Acesse seu contato inteligente no BLiP, e vá para a tela de configurações avançadas. Caso não saiba como acessar as configurações avançadas do seu bot, [clique aqui](/docs/management/configuracoes-avancadas-bot).

**11.** Utilizando sempre o domínio `postmaster@abs.gw.msging.net`, adicione as chaves de configuração do microsoft Teams substituindo os valores com os seus dados, conforme demonstrado na tabela abaixo.

| Domínio                      | Chave                 | Valor        |
| ---------------------------- | --------------------- | ------------ |
| postmaster@abs.gw.msging.net | ApplicationId         | APP-ID       |
| postmaster@abs.gw.msging.net | ApplicationPassword   | APP-PASSWORD |
| postmaster@abs.gw.msging.net | AccountExternalId     | ID-DO-BOT    |

- **ApplicationId** - App ID copiado no passo 5.
- **ApplicationPassword** - *Password* copiado no passo 7.
- **AccountExternalId** - ID do bot copiado no passo 8, e utilizado para configurar o **Bot endpoint address** no passo 9.

**12.** Com objetivo ter uma integração ainda melhor do BLiP com o Teams, outras variáveis são necessárias para rotulação do tipo de conteúdo trafegado, são elas: **AudioSentence**, **DocumentSentence**, **GifSentence**, **VideoSentence**, **WeblinkSentence**, **TextButton**. Quando um destes tipos de conteúdos é enviado, o rótulo apresentado adapta-se ao valor preenchido nas configurações avançadas. Sinta-se livre para preencher os valores da forma que melhor lhe convém.

| Domínio                      | Chave            | Valor                      |
| ---------------------------- | ---------------- | -------------------------- |
| postmaster@abs.gw.msging.net | AudioSentence    | Você recebeu um áudio!     |
| postmaster@abs.gw.msging.net | DocumentSentence | Você recebeu um documento! |
| postmaster@abs.gw.msging.net | GifSentence      | Você recebeu um GIF!       |
| postmaster@abs.gw.msging.net | VideoSentence    | Você recebeu um vídeo!     |
| postmaster@abs.gw.msging.net | WeblinkSentence  | Você recebeu um weblink!   |
| postmaster@abs.gw.msging.net | TextButton       | Você recebeu uma mensagem! |


## Testando o seu contato inteligente no Teams

**13.** No menu lateral esquerdo, selecione a opção **Test and distribute** e clique em **Download**, conforme apresentado na imagem abaixo. Será feito o download de um arquivo com um "pacote de aplicativo".

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-7.png)<br>

**14.** Volte à aba de aplicativos, clique na opção **Carregar um aplicativo personalizado** e escolha o arquivo baixado no passo 13. Caso algum erro ocorra ao escolher o arquivo, verifique se todas as informações preenchidas durante as configurações do contato inteligente no Microsoft Teams estão corretas. Repita o passo 13 e 14 se algum ajuste foi necessário.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-8.png)<br>

> Caso a opção **Carregar um aplicativo personalizado**  não esteja disponível, significa que seu email é corporativo e sua empresa não possui contrato com a Microsoft para acesso privilegiado dos recursos Microsoft Teams. Portanto, contrate o serviço ou faça a integração utilizando um email não corporativo.

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>