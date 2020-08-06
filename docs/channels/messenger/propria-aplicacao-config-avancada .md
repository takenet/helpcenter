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

## 3. Permissões necessárias pela aplicação do Facebook para conectar via Configurações Avançadas

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

