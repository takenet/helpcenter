---
id: propria-aplicacao-portal
title: Como conectar sua própria aplicação através do Portal
sidebar_label: Como conectar sua própria aplicação através do Portal
---

Para publicar seu bot no Facebook usando sua própria aplicação através do Portal do BLiP você precisará de uma **Aplicação previamente criada e analisada pelo Facebook**. <br>
Se sua aplicação própria ainda não estiver configurada corretamente seguir os passos da **Seção 2** 
para configurar. Caso contrário é só seguir os passos da **Seção 1**:

## 1. Publicando através de sua própria aplicação do Facebook via Portal

**1.1)** Vá para aba **Configurações**, e clique no botão **Usar minha própria aplicação**. Será disponibilizado os campos para se adicionar seu *App ID* e *App Secret* da sua aplicação no Facebook.

![Selecionando opção Usar aplicação Propria](/img/channels/messenger/usar-aplicacao-propria.png)<br>

**1.2)** Vá até a página do seu aplicativo no dashbord do Facebook. Clique em **Configurações > Básico**. Após isso aparecerá a tela de configurações da sua aplicação, onde está localizado o *AppID* (Id do Aplicativo) e *App Secret* (Chave Secreta do Aplicativo).

![Localizando AppId e App Secret no Facebook](/img/channels/messenger/appid-facebook-dashboard.png)<br>

**1.3)** Adicione essas informações na configuração do Messenger no BLiP e clique em **Salvar Configurações**.

![AppID e App Secret adicionados no BLiP](/img/channels/messenger/adicionar-appid-appsecret.png)<br>

**1.4)** Após isso você será redirecionado para a tela onde será concluída a conexão com o Facebook.

![Conectar aplicação própria com o Facebook](/img/channels/messenger/conectar-aplicacao-propria.png)<br>

**1.5)** Após concluída a conexão com o Facebook serão listadas as páginas para você publicar o seu bot.

![Lista páginas para conexeção com o Facebook Messenger](/img/channels/messenger/propria-aplicacao-portal-3.png)<br>

## 2. Configurando sua própria aplicação do Facebook para conectar via Portal

> **Atenção: Para que sua aplicação funcione corretamente é preciso adicionar os produtos: Login do Facebook, Messenger e Webhooks em sua aplicação.**

![Produtos necesários na Aplicação](/img/channels/messenger/propria-aplicacao-portal-1.png)

-----------------



### 2.1) Configurações do Produto: Login do Facebook
Após adicionar o produto **Login do Facebook**, clique no menu **Login do Facebook -> Configurações** e configure as informações de OAuth do cliente conforme imagem abaixo:

**URIs de Redirecionamento do OAuth válidos**: ht&#8203;tps:&#8203;//portal.blip.ai/facebookCallback

![Configurando informações de url de login](/img/channels/messenger/propria-aplicacao-portal-2.png)<br>

-----------------

### 2.2) Configurações do Produto Webhooks

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

### 2.3) Configurações do Produto: Messsenger
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

## 1. Configuração das informações da aplicação do Facebook BLiP

A última etapa do processo de publicação customizada acontece no BLiP. No portal, escolha o bot que deseja publicar, vá até a tela de Configurações Avançadas (clique aqui se você não sabe como chegar até a tela de Configurações Avançadas) e adicione os seguintes registros na tabela.

| Domínio | Chave | Valor |
|------------------------------------|-----------------|-----------------------|
| postmaster@messenger<span>.</span>gw<span>.</span>msging<span>.</span>net | PageAccessToken | SEU_PAGE_ACCESS_TOKEN |
| postmaster@messenger<span>.</span>gw<span>.</span>msging<span>.</span>net | PageId | SEU_PAGE_ID |
| postmaster@messenger<span>.</span>gw<span>.</span>msging<span>.</span>net | isChannelActive | True |

## 2. Testando o processo de configuração

Envie uma mensagem para sua página no Facebook e teste se a mensagem chegou para o seu bot no BLiP.

> **Nota: O bot pode começar a responder em até 3 minutos.**

<br>
-----------------

##  B) Usando uma Aplicação e gerando um token através do BLiP

Para utilizar uma aplicação customizada durante a publicação de um bot no Facebook você precisará de:

* **Aplicação previamente criada e analisada pelo Facebook.**
* **App Id - Id único da Aplicação**
* **App Secret - Chave secreta do Aplicação**

*Se você não sabe onde pegar o AppId e/ou o AppSecret [clique aqui](https://help.blip.ai/docs/en/channels/messenger/publicando-bot-no-messenger/) e olhe a seção **Publicando na sua própria aplicação do Facebook**.*

## 1. Autentição pelo portal do BLiP

Para fazer a publicação dos seu bot siga os passos detalhados [nesta página](https://help.blip.ai/docs/en/channels/messenger/publicando-bot-no-messenger/) na seção **Publicando na sua própria aplicação do Facebook**

## 2. Testando o processo de configuração

Envie uma mensagem para sua página no Facebook e teste se a mensagem chegou para o seu bot no BLiP.

> **Nota: O bot pode começar a responder em até 3 minutos.**

<br>

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>