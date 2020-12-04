---
id: como-disparar-notificacoes-hubspot
title: Integração Hubspot - Disparando notificações através da Hubspot
sidebar_label: Integração Hubspot - Disparando notificações através da Hubspot
---
A Hubspot é uma ferramenta de CRM extremamente completa, que integra o time de marketing e vendas como um todo. Trabalhar com um bot integrado à Hubspot pode ser muito vantajoso para potencializar os resultados de vendas da empresa.

### Requisitos
Ter um bot ativo no WhatsApp
Ter templates de notificações ativas aprovadas pelo WhatsApp

## Como realizar a integração

Acesse a URL https://app.hubspot.com/oauth/authorize?client_id=09925f21-3a8f-4e50-b963-8f7a4a2a3075&redirect_uri=https://blip-notificacao-hubspot.hmg-cs.blip.ai&scope=contacts%20automation%20tickets e clique em Conectar app:

(img)

Selecione a conta HubSpot que deseja instalar o aplicativo e clique em Continue com essa conta:

(img)

HubSpot exibirá o aplicativo instalado na sua conta:

(img)

## Como utilizar a integração

Para utilizar a intagração, basta criar o workflow com envio de notificação. Confira o passo a passo.

### No menu superior, clique em Automation > Workflows

(img)

### Clique em Create workflow

(img)

### Crie um fluxo de trabalho baseado em Contato e clique em Next

(img)

### Defina a regra de disparo do fluxo e na aba Reinscrição, marque para permitir reinscrição dos contatos que atendem ao critério:

(img)

### Clique em Salvar e depois no sinal de mais (+)

(img)

### Na tela exibida à direita, role até o final e selecione Notificações ativas

(img)

### Preencha as informações e clique em Save

(img)

### Clique em Review (topo à direita)

(img)

### Marques Sim na etapa de inscrição de contatos existentes

(img)

### E depois em Turn on para ativar o fluxo

(img)

Toda vez que a regra ocorrer, a notificação será enviada ao contato que satisfez as condições.
