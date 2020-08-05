---
id: como-criar-sua-propria-aplicacao-facebook
title: Como criar e/ou atualizar sua própria aplicação do Facebook
sidebar_label: Como criar e/ou atualizar sua própria aplicação do Facebook
---

> **Observações: Essa é uma configuração para usuários avançados! Siga essas instruções apenas se souber o que está fazendo.**

Por padrão, todo bot publicado no canal Facebook, através do portal do BLiP, utiliza a aplicação **BLiP Messaging**, mantida pela equipe do BLiP, para enviar e receber mensagens. Esse processo facilita a integração com o Facebook e diminui muito o número de atividades necessárias para ter um bot disponível neste canal. Apesar disso, por várias razões, algumas pessoas/empresas podem desejar utilizar suas próprias aplicações do Facebook nesse processo.

O BLiP permite que qualquer bot seja publicado no Facebook utilizando, não só a aplicação padrão da plataforma, como também outra aplicação customizada.

Existem duas formas de utilizar uma aplicação customizada para publicar bots no Facebook Messenger:
[Clique aqui](https://help.blip.ai/docs/en/channels/messenger/como-configurar-sua-propria-aplicacao-facebook/) para saber detalhes de como configurar sua aplicação customizada no BLiP.

-----------------

Para criar uma aplicação própria do Facebook recomenda-se seguir os passos da página oficial através [deste link](https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup/).

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

![Configurações de versão da Aplicação](/img/channels/messenger/messenger-como-configurar-sua-propria-aplicacao-facebook-3.png)

**Atenção**: É recomendável que sua aplicação do Facebook esteja configurada para a versão **v5.0**. Caso contrário sua aplicação pode apresentar instabilidades.

-----------------

> **Atenção: Para que sua aplicação funcione corretamente é preciso adicionar os produtos: Login do Facebook, Messenger e Webhooks.**

![Produtos necesários na Aplicação](/img/channels/messenger/messenger-como-criar-aplicacao-facebook-5.png)

-----------------

## 1. Configurações do Produto: Login do Facebook
Após adicionar o produto **Login do Facebook**, clique no menu **Login do Facebook -> Configurações** e configure as informações de OAuth do cliente conforme imagem abaixo:

![Configurando informações de url de login](/img/channels/messenger/messenger-como-configurar-sua-propria-aplicacao-facebook-6.png)<br>

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

![Configurações da versão de eventos de Webhook](/img/channels/messenger/messenger-como-configurar-sua-propria-aplicacao-facebook-5.png)<br>

> **Nota: Lembre-se de substituir {IdOrganização} pelo valor correspondente.** 

-----------------

Acessar  **Messenger->Configurações->Webhook->Controles de versão de campo do webhook** .<br>
Verificar se a versão dos webhooks selecionadas estão marcadas como v5.0. Faça as alterações se necessário, caso contrário sua aplicação pode apresentar instabilidades:

![Configurações da versão de eventos de Webhook](/img/channels/messenger/messenger-como-configurar-sua-propria-aplicacao-facebook-4.png)<br>

-----------------

Acessar  **Messenger->Configurações->Webhook->Adicionar ou Remover Páginas** e adicionar uma página onde será publicado um bot seu.<br>
Para a página selecionada clicar em **Adicionar Assinaturas** e eelecionar os itens, conforme apresentado pela imagem abaixo:

![Configurações de eventos de Webhook](/img/channels/messenger/messenger-como-configurar-sua-propria-aplicacao-facebook-2.png)<br>

-----------------
Após os passos acima é necessário enviar a Aplicação para revisão do Facebook.

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>

