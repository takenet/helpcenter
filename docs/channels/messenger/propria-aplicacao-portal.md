---
id: propria-aplicacao-portal
title: Como conectar sua própria aplicação através do Portal
sidebar_label: Como conectar sua própria aplicação através do Portal
---

Para publicar seu bot no Facebook usando sua própria aplicação através do Portal do BLiP você precisará de uma **Aplicação previamente criada e analisada pelo Facebook**. <br>
Se sua aplicação própria ainda não estiver configurada corretamente seguir os passos da **Seção 2** 
para configurar. Caso contrário é só seguir os passos da **Seção 1**:

## 1. Publicando através de sua própria aplicação do Facebook via Portal

**1.1)** Vá para aba **Configurações**, e clique no botão **Usar minha própria aplicação**. Serão disponibilizados os campos para você adicionar o *App ID* e *App Secret* da sua aplicação no Facebook.

![Selecionando opção Usar aplicação Propria](/img/channels/messenger/usar-aplicacao-propria.png)<br>

**1.2)** Vá até a página do seu aplicativo no dashbord do Facebook. Clique em **Configurações > Básico**. Após isso aparecerá a tela de configurações da sua aplicação, onde está localizado o *AppID* (Id do Aplicativo) e *App Secret* (Chave Secreta do Aplicativo).

![Localizando AppId e App Secret no Facebook](/img/channels/messenger/appid-facebook-dashboard.png)<br>

**1.3)** Adicione essas informações na configuração do Messenger no BLiP e clique em **Salvar Configurações**.

![AppID e App Secret adicionados no BLiP](/img/channels/messenger/adicionar-appid-appsecret.png)<br>

**1.4)** Após isso você será redirecionado para a tela onde será concluída a conexão com o Facebook.

![Conectar aplicação própria com o Facebook](/img/channels/messenger/conectar-aplicacao-propria.png)<br>

**1.5)** Após concluída a conexão com o Facebook serão listadas as páginas para você publicar o seu bot.

![Lista páginas para conexeção com o Facebook Messenger](/img/channels/messenger/propria-aplicacao-portal-3.png)<br>

**1.6)** Envie uma mensagem para sua página no Facebook e teste se a mensagem chegou para o seu bot no BLiP.

> **Nota: O bot pode começar a responder em até 3 minutos.**
<br>

## 2. Configurando sua própria aplicação do Facebook para conectar via Portal

> **Importante: Para que sua aplicação funcione corretamente é preciso adicionar os produtos: Login do Facebook, Messenger e Webhooks em sua aplicação.**

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

## 3. Permissões necessárias pela aplicação do Facebook para conectar via Portal

Após a criação da aplicação do Facebook, você vai precisar solicitar algumas permissões específicas para que sua aplicação funcione corretamente junto ao BLiP. Para isto você deve ir em **Análise do Aplicativo->Permissões e recursos** e solicitar cada permissão separadamente:

![Menu de Permisões da Aplicação](/img/channels/messenger/propria-aplicacao-portal-6.png)<br>

Segue a lista de permissões e o motivo do seu uso:

* **pages_messaging:** Enviar e responder as messagens no Facebook Messenger automaticamente.
* **pages_user_gender:** Os bots associados a aplicação podem enviar mensagens em vários idiomas. Essa permissão será usada para aplicar o pronome correto.
* **pages_user_locale:** Os bots associados a aplicação podem enviar mensagens para pessoas em muitos países. Essa permissão pode ser usada para direcionar pessoas para bots que usam seus idiomas.
* **pages_user_timezone:** Os bots associados a aplicação podem enviar notificações para o usuário usando Tags de mensagem. Essa permissão pode ser usada para evitar o envio de notificações em horários inconvenientes, como no meio da noite.
* **pages_manage_metadata:** A aplicação usará a permissão pages_manage_metadata para permitir que o Administrador da página assine os webhooks para receber as mensagens enviadas para a página do administrador. Com essas mensagens, podemos criar chatbots. A aplicação ajudará o administrador da página a gerenciar as mensagens recebidas por um chat automático.
* **Page Public Metadata Access:** A aplicação usará este recurso para mostrar informações públicas sobre as páginas conectadas à aplicação, como o nome da página e a imagem da página.

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>