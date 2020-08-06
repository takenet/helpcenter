---
id: propria-aplicacao-config-avancada
title: Como conectar sua própria aplicação pelas Configurações Avançadas
sidebar_label: Como conectar sua própria aplicação pelas Configurações Avançadas
---

Para publicar seu bot no Facebook usando sua própria aplicação através das configurações avançadas você precisará de:

* **Aplicação previamente criada e analisada pelo Facebook.**
* **PageId - [Clique aqui](https://findmyfbid.com/) para entender como criar um Facebook PageId**
* **PageAccessToken - Token de acesso a sua página no Facebook**

*Se você precisa de ajuda para gerar um PageAccessToken [clique aqui](https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup).*

Se sua aplicação própria ainda não estiver configurada corretamente seguir os passos da **Seção 2** 
para configurar. Caso contrário é só seguir os passos da **Seção 1**:

## 1. Publicando através de sua própria aplicação do Facebook via Configurações Avançadas

 **1.1)** No portal, escolha o bot que deseja publicar, vá até a tela de Configurações Avançadas ([clique aqui](https://help.blip.ai/docs/en/management/configuracoes-avancadas-bot/) se você não sabe como chegar até a tela de Configurações Avançadas) e adicione os seguintes registros na tabela:

| Domínio | Chave | Valor |
|------------------------------------|-----------------|-----------------------|
| postmaster@messenger<span>.</span>gw<span>.</span>msging<span>.</span>net | PageAccessToken | SEU_PAGE_ACCESS_TOKEN |
| postmaster@messenger<span>.</span>gw<span>.</span>msging<span>.</span>net | PageId | SEU_PAGE_ID |
| postmaster@messenger<span>.</span>gw<span>.</span>msging<span>.</span>net | isChannelActive | True |

**1.2)** Envie uma mensagem para sua página no Facebook e teste se a mensagem chegou para o seu bot no BLiP.

> **Nota: O bot pode começar a responder em até 3 minutos.**
<br>

-----------------

## 2. Configurando sua própria aplicação do Facebook para conectar via Configurações Avançadas

> **Atenção**: É recomendável que sua aplicação do Facebook esteja configurada para a versão **v5.0**. Caso contrário sua aplicação pode apresentar instabilidades. Você pode definir essa informação nas configurações avançadas da sua aplicação:

![Configurações de versão da Aplicação](/img/channels/messenger/messenger-como-configurar-sua-propria-aplicacao-facebook-3.png)
<br>

> **Importante: Para que sua aplicação funcione corretamente é preciso adicionar os produtos: Messenger e Webhooks em sua aplicação.**

![Produtos necesários na Aplicação](/img/channels/messenger/propria-aplicacao-config-avancada-1.png)

-----------------

### 2.1) Configurações do Produto Webhooks

Após adicionar o produto **Webhooks**, é necessário configurar quais eventos do Messenger serão enviados pelo Facebook. Para isto, no menu **Webhooks**, selecione a opção **Page** e clique em **Subscribe to this Object**. Preencha com os valores abaixo:

**Url**: ht&#8203;tps:&#8203;//messenger.gw.msging.net

**Token**: ze3jRmmaLU5KUTtUN*

![Configurações de eventos de Webhook](/img/channels/messenger/messenger-como-criar-aplicacao-facebook-7.png)<br>

-----------------

### (Apenas se for utilizar Organização) Alteração de URL do Webhook

Após realizar a migração para Organização será necessário alterar a Url do Webhook sua aplicação do Facebook.Usar os valores abaixo:

**Url**: ht&#8203;tps:&#8203;//**{IdOrganização}**-messenger.gw.msging.net<br>
**Token**: ze3jRmmaLU5KUTtUN


> **Nota: Lembre-se de substituir {IdOrganização} pelo valor correspondente.** 

-----------------

### 2.2) Configurações do Produto: Messsenger
Após adicionar o produto **Messenger**, e de posse das duas informações abaixo, clique no menu **Messenger->Configurações->Webhook** e configure as informações **Url de retorno de chamada** e **Verificar Token** conforme imagem abaixo:

Url: https://messenger.gw.msging.net

*Token: ze3jRmmaLU5KUTtUN*

![Configurando informações de url de retorno de chamada](/img/channels/messenger/messenger-como-criar-aplicacao-facebook-6.png)<br>

-----------------

### (Apenas se for utilizar Organização) Alteração de URL do Messenger
Após realizar a migração para Organização será necessário alterar a Url de retorno de chamada em sua aplicação do Facebook.
Acesse sua aplicação, clique no menu **Messenger**, entre em **Configurações** e altere as informações **Url de retorno de chamada** e **Verificar Token**, com os dados abaixo:

**Url**: ht&#8203;tps:&#8203;//**{IdOrganização}**-messenger.gw.msging.net<br>
**Token**: ze3jRmmaLU5KUTtUN

![Configurações da versão de eventos de Webhook](/img/channels/messenger/propria-aplicacao-portal-5.png)<br>

> **Nota: Lembre-se de substituir {IdOrganização} pelo valor correspondente.** 

-----------------

Acessar  **Messenger->Configurações->Webhook->Controles de versão de campo do webhook** .<br>
Verificar se a versão dos webhooks selecionadas estão marcadas como **v5.0**. Faça as alterações se necessário, caso contrário sua aplicação pode apresentar instabilidades:

![Configurações da versão de eventos de Webhook](/img/channels/messenger/propria-aplicacao-portal-4.png)<br>

-----------------





Abaixo listamos alguns passos para ajudar na criação e aprovação de uma aplicação própria no Facebook:

* Acessar o site https://developers.facebook.com/apps/;
* Clicar em **Adicionar um novo Aplicativo**;
* Selecionar **Gerenciar integrações comerciais**;
* Preencher com o nome de exibição do Aplicativo e email de contato;
* Escolher a opção **Outros Empresas**;
* Clicar em  **Criar ID do aplicativo**;


![Configurando informações básicas de Aplicativo no Facebook 1](/img/channels/messenger/messenger-como-criar-aplicacao-facebook-1.png)<br>

-----------------

* Após a aplicação ser criada ir em **Configurações -> Básico**;
* Preencher os campos de acordo com a sua empresa. Abaixo segue exemplo dos valores usados pela aplicação padrão do BLiP;

![Configurando informações básicas de Aplicativo no Facebook 2](/img/channels/messenger/messenger-como-criar-aplicacao-facebook-2.png)<br>

* Ainda em **Configurações -> Básico**, acessar  **Status de verificação** e clicar em **Começar** em **Verificação da empresa**;
* Associar uma conta do **Gerenciador do Negócio**. Caso não tenha ainda os detalhes para criação estão
[neste link](https://www.facebook.com/business/help/1710077379203657?id=180505742745347):


![Configurando informações básicas de Aplicativo no Facebook 3](/img/channels/messenger/messenger-como-criar-aplicacao-facebook-3.png)<br>

* Preencher a seção de **Informações de contato do encarregado da proteção dos dados**:

![Configurando informações básicas de Aplicativo no Facebook 4](/img/channels/messenger/messenger-como-criar-aplicacao-facebook-4.png)<br>

-----------------

* Ir em **Configurações -> Avançado** e selecionar a versão do API citada abaixo:

![Configurações de versão da Aplicação](/img/channels/messenger/messenger-propria-aplicacao-portal-3.png)

**Atenção**: É recomendável que sua aplicação do Facebook esteja configurada para a versão **v5.0**. Caso contrário sua aplicação pode apresentar instabilidades.

-----------------

> **Atenção: Para que sua aplicação funcione corretamente é preciso adicionar os produtos: Login do Facebook, Messenger e Webhooks.**

![Produtos necesários na Aplicação](/img/channels/messenger/messenger-como-criar-aplicacao-facebook-5.png)

-----------------

## 1. Configurações do Produto: Login do Facebook
Após adicionar o produto **Login do Facebook**, clique no menu **Login do Facebook -> Configurações** e configure as informações de OAuth do cliente conforme imagem abaixo:

![Configurando informações de url de login](/img/channels/messenger/messenger-propria-aplicacao-portal-6.png)<br>

-----------------

## 2. Configurações do Produto Webhooks

Após adicionar o produto **Webhooks**, é necessário configurar quais eventos do Messenger serão enviados pelo Facebook. Para isto, no menu **Webhooks**, selecione a opção **Page** e clique em **Subscribe to this Object**. Preencha com os valores abaixo:

**Url**: https://messenger.gw.msging.net

**Token**: ze3jRmmaLU5KUTtUN*

![Configurações de eventos de Webhook](/img/channels/messenger/messenger-como-criar-aplicacao-facebook-7.png)<br>

-----------------

## (Apenas se for utilizar Organização) Alteração de URL do Webhook

Usar os valores abaixo:

**Url**: [https://{IdOrganização}-messenger.gw.msging.net](https://messenger.gw.msging.net)  
**Token**: ze3jRmmaLU5KUTtUN


> **Nota: Lembre-se de substituir {IdOrganização} pelo valor correspondente.** 

-----------------

## 3. Configurações do Produto: Messsenger
Após adicionar o produto **Messenger**, e de posse das duas informações abaixo, clique no menu **Messenger->Configurações->Webhook** e configure as informações **Url de retorno de chamada** e **Verificar Token** conforme imagem abaixo:

Url: https://messenger.gw.msging.net

*Token: ze3jRmmaLU5KUTtUN*

![Configurando informações de url de retorno de chamada](/img/channels/messenger/messenger-como-criar-aplicacao-facebook-6.png)<br>

-----------------

## (Apenas se for utilizar Organização) Alteração de URL do Messenger
Após realizar a migração para Organização será necessário alterar a Url de retorno de chamada em sua aplicação do Facebook.

Acesse sua aplicação, clique no menu **Messenger**, entre em **Configurações** e altere as informações **Url de retorno de chamada** e **Verificar Token**, com os dados abaixo:

**Url**: [https://{IdOrganização}-messenger.gw.msging.net](https://messenger.gw.msging.net)  
**Token**: ze3jRmmaLU5KUTtUN

![Configurações da versão de eventos de Webhook](/img/channels/messenger/messenger-propria-aplicacao-portal-5.png)<br>

> **Nota: Lembre-se de substituir {IdOrganização} pelo valor correspondente.** 

-----------------

Acessar  **Messenger->Configurações->Webhook->Controles de versão de campo do webhook** .<br>
Verificar se a versão dos webhooks selecionadas estão marcadas como v5.0. Faça as alterações se necessário, caso contrário sua aplicação pode apresentar instabilidades:

![Configurações da versão de eventos de Webhook](/img/channels/messenger/messenger-propria-aplicacao-portal-4.png)<br>

-----------------

Acessar  **Messenger->Configurações->Webhook->Adicionar ou Remover Páginas** e adicionar uma página onde será publicado um bot seu.<br>
Para a página selecionada clicar em **Adicionar Assinaturas** e eelecionar os itens, conforme apresentado pela imagem abaixo:

![Configurações de eventos de Webhook](/img/channels/messenger/messenger-propria-aplicacao-portal-2.png)<br>

-----------------
Após os passos acima é necessário enviar a Aplicação para revisão do Facebook.

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>

