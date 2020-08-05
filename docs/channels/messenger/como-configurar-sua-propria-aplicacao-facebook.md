---
id: como-configurar-sua-propria-aplicacao-facebook
title: Como configurar sua própria aplicação do Facebook em um bot no BLiP
sidebar_label: Como configurar sua própria aplicação do Facebook em um bot no BLiP
---

> **Observação: Essa é uma configuração para usuários avançados! Siga essas instruções apenas se souber o que está fazendo.**

Por padrão, todo bot publicado no canal Facebook, através do portal do BLiP, utiliza a aplicação **BLiP Messaging**, mantida pela equipe do BLiP, para enviar e receber mensagens. Esse processo facilita a integração com o Facebook e diminui muito o número de atividades necessárias para ter um bot disponível neste canal. Apesar disso, por várias razões, algumas pessoas/empresas podem desejar utilizar suas próprias aplicações do Facebook nesse processo.

O BLiP permite que qualquer bot seja publicado no Facebook utilizando, não só a aplicação padrão da plataforma, como também outra aplicação customizada.

Existem duas formas de utilizar uma aplicação customizada para publicar bots no Facebook Messenger:

* **A) Usando uma Aplicação previamente criada e analisada pelo Facebook, um PageId e um PageAccessToken**
* **B) Usando uma Aplicação previamente criada e analisada pelo Facebook e gerando um token através do BLiP**

> ***Se você não sabe como criar uma aplicação no Facebook [clique aqui para a documentação oficial do Facebook](https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup). Ou [clique aqui para a documentação do BLiP.](https://help.blip.ai/docs/en/channels/messenger/como-criar-sua-propria-aplicacao-facebook)*<br>**

-----------------

##  A) Usando Aplicação, PageId e PageAccessToken

Para utilizar uma aplicação customizada durante a publicação de um bot no Facebook você precisará de:

* **Aplicação previamente criada e analisada pelo Facebook.**
* **PageId - [Clique aqui](https://findmyfbid.com/) para entender como criar um Facebook PageId**
* **PageAccessToken - Token de acesso a sua página no Facebook**

*Se você precisa de ajuda para gerar um PageAccessToken [clique aqui](https://developers.facebook.com/docs/messenger-platform/getting-started/app-setup).*

**Atenção**: Verificar na documentação sobre a [Criação/Atualização de aplicação prória no Facebook](https://help.blip.ai/docs/en/channels/messenger/como-criar-sua-propria-aplicacao-facebook) qual a versão da API está sendo usada pelo BLiP.

## 1. Configuração das informações da aplicação do Facebook BLiP

A última etapa do processo de publicação customizada acontece no BLiP. No portal, escolha o bot que deseja publicar, vá até a tela de Configurações Avançadas (clique aqui se você não sabe como chegar até a tela de Configurações Avançadas) e adicione os seguintes registros na tabela.

| Domínio | Chave | Valor |
|------------------------------------|-----------------|-----------------------|
| postmaster@messenger<span>.</span>gw<span>.</span>msging<span>.</span>net | PageAccessToken | SEU_PAGE_ACCESS_TOKEN |
| postmaster@messenger<span>.</span>gw<span>.</span>msging<span>.</span>net | PageId | SEU_PAGE_ID |

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