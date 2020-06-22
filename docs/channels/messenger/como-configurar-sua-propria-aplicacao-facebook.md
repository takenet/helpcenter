---
id: como-configurar-sua-propria-aplicacao-facebook
title: Como configurar sua própria aplicação do Facebook em um bot no BLiP
sidebar_label: Como configurar sua própria aplicação do Facebook em um bot no BLiP
---

> **Observação: Essa é uma configuração para usuários avançados! Siga essas instruções apenas se souber o que está fazendo.**

Por padrão, todo bot publicado no canal Facebook, através do portal do BLiP, utiliza a aplicação **BLiP Messaging**, mantida pela equipe do BLiP, para enviar e receber mensagens. Esse processo facilita a integração com o Facebook e diminui muito o número de atividades necessárias para ter um bot disponível neste canal. Apesar disso, por várias razões, algumas pessoas/empresas podem desejar utilizar suas próprias aplicações do Facebook nesse processo.

O BLiP permite que qualquer bot seja publicado no Facebook utilizando, não só a aplicação padrão da plataforma, como também qualquer outra aplicação customizada.

Para utilizar uma aplicação customizada durante a publicação de um bot no Facebook você precisará de:

* **Aplicação previamente criada e analisada pelo Facebook.**
* **PageId - [Clique aqui](https://findmyfbid.com/) para entender como criar um Facebook PageId**
* **PageAccessToken - Token de acesso a sua página no Facebook**

*Se você não sabe como criar uma aplicação no Facebook, ou precisa de ajuda para gerar um PageAccessToken [clique aqui](https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup).*

**Atenção**: É recomendável que sua aplicação do Facebook esteja configurada para a versão **v5.0**. Caso contrário sua aplicação pode apresentar instabilidades. Você pode definir essa informação nas configurações avançadas da sua aplicação:

![Configurações de versão da Aplicação](/img/channels/messenger/messenger-como-configurar-sua-propria-aplicacao-facebook-3.png)


## 1. Configuração de Webhooks
De posse das duas informações acima, vá até o portal de desenvolvedores do Facebook, acesse sua aplicação, clique no menu **Webhook** e configure as informações **Url de retorno de chamada** e **Verificar Token**, conforme imagem abaixo:

Url: https://messenger.gw.msging.net

*Token: ze3jRmmaLU5KUTtUN*

![Configurando informações de url de retorno de chamada](/img/channels/messenger/messenger-como-configurar-sua-propria-aplicacao-facebook-1.png)<br>

## 2. Configurações dos eventos de Webhook

Após configurado o Webhook da aplicação é necessário configurar quais eventos do Messenger a serão enviados pelo Facebook. Ainda no portal de desenvolvedores do Facebook, clique no menu **Messenger** e selecione **Configurações** de Webhooks. Selecione os itens, conforme apresentado pela imagem abaixo:

![Configurações de eventos de Webhook](/img/channels/messenger/messenger-como-configurar-sua-propria-aplicacao-facebook-2.png)<br>

Verifique se a versão dos webhooks que você selecionou estão marcadas como **v5.0**. Faça as alterações se necessário, caso contrário sua aplicação pode apresentar instabilidades:

![Configurações da versão de eventos de Webhook](/img/channels/messenger/messenger-como-configurar-sua-propria-aplicacao-facebook-4.png)<br>

## 3. Configuração das informações da aplicação do Facebook BLiP

A última etapa do processo de publicação customizada acontece no BLiP. No portal, escolha o bot que deseja publicar, vá até a tela de Configurações Avançadas (clique aqui se você não sabe como chegar até a tela de Configurações Avançadas) e adicione os seguintes registros na tabela.

| Domínio | Chave | Valor |
|------------------------------------|-----------------|-----------------------|
| postmaster@messenger<span>.</span>gw<span>.</span>msging<span>.</span>net | PageAccessToken | SEU_PAGE_ACCESS_TOKEN |
| postmaster@messenger<span>.</span>gw<span>.</span>msging<span>.</span>net | PageId | SEU_PAGE_ID |

## 4. Testando o processo de configuração

Envie uma mensagem para sua página no Facebook e teste se a mensagem chegou para o seu bot no BLiP.

<br>

-----------------

## Migração para Organização
Após realizar a migração para Organização será necessário alterar a Url de retorno de chamada em sua aplicação do Facebook.

Acesse o portal de desenvolvedores do Facebook, acesse sua aplicação, clique no menu **Messenger**, entre em **Configurações** e altere as informações **Url de retorno de chamada** e **Verificar Token**, com os dados abaixo:

**Url**: [https://{IdOrganização}-messenger.gw.msging.net](https://messenger.gw.msging.net)  
**Token**: ze3jRmmaLU5KUTtUN

![Configurações da versão de eventos de Webhook](/img/channels/messenger/messenger-como-configurar-sua-propria-aplicacao-facebook-5.png)<br>

> **Nota: Lembre-se de substituir {IdOrganização} pelo valor correspondente.**

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>