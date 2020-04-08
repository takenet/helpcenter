---
id: publicando-chatbot-no-workplace-custom-integration
title: Publicando seu chatbot no Workplace - Integrações Personalizadas
sidebar_label: Publicando seu chatbot no Workplace - Integrações Personalizadas
---

Para publicar um bot no [Workplace](/docs/channels/workplace/o-que-e-workplace) da sua empresa acesse o portal do BLiP, escolha o bot desejado, clique em *Canais > Workplace*, no menu lateral direto, e clicar na chave *Disponível no canal*.

Siga as três instruções abaixo para coletar todas as informações necessárias no processo de publicação do seu bot neste canal.

## 1. Crie o seu aplicativo no Workplace

Acesse o Workplace da sua empresa (com um perfil de administração), selecione **Admin Panel** e clique em **Integrations**.

![Abrindo integrações do Workplace](/img/channels/workplace/workplace-publicando-chatbot-no-workplace-1.png)

Na página de integrações, clique no botão **Create Custom Integration**, para adicionar uma nova aplicação no workplace de sua organização.

![Criando uma integração](/img/channels/workplace/workplace-publicando-chatbot-no-workplace-2.png)

Informe um nome e uma descrição para o app, depois clique em **Create**.

![Informando dados sobre a integração](/img/channels/workplace/workplace-publicando-chatbot-no-workplace-3.png)

## 2. Configure o seu APP

Depois de criar uma aplicação será necessário coletar algumas informações que o BLiP utilizará para enviar e receber mensagens. Na tela de configuração da sua aplicação clique no botão **Create Access Token**, copie o token e salve-o em um local temporário (Este token só será mostrado uma unica vez).

Copie também o **App Secret**, você precisará fornecer ao BLiP essas informações.

![Criando o Access Token](/img/channels/workplace/workplace-publicando-chatbot-no-workplace-4.png)

![Access Token criado](/img/channels/workplace/workplace-publicando-chatbot-no-workplace-5.png)

Na seção *Integration Permissions* selecione as opções: *Read user email, Read group Membership, Mention bot, Read work profile e Message any member*. Veja na imagem abaixo as permissões necessárias.

![Permissões da integração](/img/channels/workplace/workplace-publicando-chatbot-no-workplace-6.png)

Em *Configure Webhooks* especifique o *Callback URL* e o *Verify Token* com os valores abaixo:

```
Callback URL: https://workplace.gw.msging.net
Verify Token: ze3jRmmaLU5KUTtUN
```

Habilite as opções: *mention, message_deliveries, messages, messaging_postbacks and message_reads* em **Subscription Fields**, então clique em **Save**.

![Configurando Webhook](/img/channels/workplace/workplace-publicando-chatbot-no-workplace-7.png)

## 3. Obtenha o seu APP ID

Pesquise a aplicação criada no campo de pesquisa do Workplace, escolha a aplicação e clique em Chat. ​Veja a URL da página e copie o identificador da sua aplicação que aparece ao final. Esse é o *App Id* da sua aplicação. Adicione também essa informação no portal do BLiP.

![Obtendo App Id](/img/channels/workplace/workplace-publicando-chatbot-no-workplace-8.png)

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>