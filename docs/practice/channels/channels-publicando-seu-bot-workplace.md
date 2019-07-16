---
id: channels-publicando-seu-bot-workplace
title: Publicando seu bot no Workplace
sidebar_label: Publicando seu bot no Workplace
---

Para publicar seu bot no Workplace da sua empresa é muito fácil. Basta clicar em Publicações > Workplace, no menu lateral esquerdo, e clicar na chave Disponível no canal.

Siga todas as instruções dos 4 passos necessários para publicar seu bot.

## 1. Crie o seu aplicativo no Workplace

Va em **Integrations** no painel de controle da empresa.

![Painel integrations workplace](/img/practice/channels/channels-publicando-seu-bot-workplace-1.png)<br>

No final da pagina clique em **Create Custom Integration**

![Criando uma Custom Integration](/img/practice/channels/channels-publicando-seu-bot-workplace-2.png)<br>

Informe um nome e uma descrição para o app, depois clique em **Create**

![Criando uma Custom Integration 2](/img/practice/channels/channels-publicando-seu-bot-workplace-3.png)<br>

## 2. Configure o seu APP

O diálogo **Edit Custom Integration** irá abrir após criar o app. O *Page Access Token* será necessário futuramente. Crie um clicando em **Create Access Token**. Copie o token e salve-o em um local temporário (Este token só será mostrado uma unica vez). Copie também o *App Secret*, você precisará fornecer ao BLiP essas informações.

![Criando um Access Token](/img/practice/channels/channels-publicando-seu-bot-workplace-4.png)<br>

![Copiando um Access Token](/img/practice/channels/channels-publicando-seu-bot-workplace-5.png)<br>

Na seção *Permissions* selecione as opções *Read content e Message any member*.

![Permissions](/img/practice/channels/channels-publicando-seu-bot-workplace-6.png)<br>

Em *Configure Webhooks* especifique o callback URL e o *Verify Token* com os valores abaixo

```
Callback URL: https://workplace.gw.msging.net
Verify Token: ze3jRmmaLU5KUTtUN
```

Habilite *message_deliveries*, messages, messaging_postbacks and message_readsem **Subscription Fields**, então clique em **Save**.

![Configurações de Permissions](/img/practice/channels/channels-publicando-seu-bot-workplace-7.png)<br>

## 3. Obtenha o seu APP ID

Clique em *Mensagens* e depois clique em *See All In Work Chat* no final da aba.

![See all in Work Chat](/img/practice/channels/channels-publicando-seu-bot-workplace-8.png)<br>

Escreva o nome do seu app no campo de buscas do *Work Chat*.

![Pesquisando nome do bot workplace](/img/practice/channels/channels-publicando-seu-bot-workplace-9.png)<br>

Clique em seu app na lista de resultados e copie o *App Id* da URL.

![Copiando o App Id da URL](/img/practice/channels/channels-publicando-seu-bot-workplace-10.png)
