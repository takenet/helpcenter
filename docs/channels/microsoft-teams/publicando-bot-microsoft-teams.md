---
id: publicando-bot-microsoft-teams
title: Como publicar seu bot no Microsoft Teams
sidebar_label: Como publicar seu bot no Microsoft Teams
---


### Introdução ao Microsoft Teams
Acesse [o site oficial](https://products.office.com/pt-br/microsoft-teams/group-chat-software), utilize a versão online ou baixe e instale o aplicativo do Microsoft Teams.

### Criação da aplicação
Na aba aplicativos, pesquise e instale o aplicativo App Studio.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-1.png)<br>


Após a instalação, o aplicativo estará disponível para criação de novos aplicativos personalizados.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-2.png)<br>

Como apresentado na imagem abaixo, basta selecionar a aba de **manifest editor** e clicar na opção **create a new app** para criação de novos aplicativos.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-3.png)<br>

Para conclusão do processo de criação do aplicativo é necessário o preenchimento de todos os campos obrigatórios. É importante ressaltar que, o valor do campo **App ID** *(4f2ec3e7-097e-42eb-b9ea-b43791cef48e)* será necessário nas próximas etapas e este será retratado como **AccountExternalId**.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-4.png)<br>

Por sua vez, será necessário configurar a aplicação como bot, conforme apresentado na imagem abaixo. Analogamente, preencha todos os campos de acordo com o tipo de seu bot.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-5.png)<br>

Finalizada sua configuração inicial, gere uma senha no botão **"generate new passwork"** e armazene a mesma, pois utilizaremos da mesma nas demais etapas. Além disso, preencha o campo **Bot endpoint address** com https://abs.gw.msging.net/**{AccountExternalId}**, substitua o **{AccountExternalId}** com o valor do mesmo.
Em suma, o valor abaixo do nome do Bot (*05465a70-2a28-45c7-babe-333aa39cbcd1*) corresponde ao **ApplicationId**, enquanto a senha gerada e parcialmente visualizada no campo *password* equivale ao **ApplicationPassword**.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-6.png)<br>

Conforme indicação na imagem abaixo, baixe o pacote do aplicativo desenvolvido nas etapas anteriores.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-7.png)<br>

Novamente na aba de aplicativos, na funcionalidade apontada abaixo, carregue e adicione o aplicativo previamente baixado.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-8.png)<br>


### Integração com o BLiP
Abra as configurações do seu bot no Builder e acesse as configurações avançadas.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-9.png)<br>

Nesta etapa, adicione as variáveis de integração. O *domínio* sempre será **postmaster@abs.gw.msging.net**, a *chave*, por sua vez, corresponde ao nome da variável de integração, algumas destas variáveis já foram apresentadas anteriormente com a localização dos seus valores, são elas: **AccountExternalId, ApplicationId e ApplicationPassword**.

Com objetivo de integralizar as duas plataformas, outras variáveis são necessárias para rotulação do tipo de conteúdo trafegado são elas: **AudioSentence, DocumentSentence, GifSentence, VideoSentence, WeblinkSentence, TextButton**. Quando um destes tipos de conteúdos são enviados, o rotulo apresentado adapta-se ao valor preenchido respectivamente, portanto preencha o valor da forma que melhor lhe convém.

![](/img/channels/microsoft-teams/publicando-bot-microsoft-teams-10.png)<br>