---
id: chat-o-que-e-blip-chat
title: O que é o BLiP Chat?
sidebar_label: O que é o BLiP Chat?
---

Assim como o Facebook Messenger, Telegram e outras aplicações de mensagens, o BLiP também possui o seu próprio canal: o BLiP Chat. Ele é mais uma das várias interfaces possíveis para que usuários consigam conversar com o seu bot.

**IMPORTANTE: O BLiP Chat é apenas um canal e não tem nenhuma relação com a regra de negócio do seu bot. Assim como o Facebook Messenger, o BLiP Chat é a interface pela qual o usuário visualiza as mensagens recebidas e envia mensagens para o bot. Todos os conteúdos do BLiP são suportados neste canal.**

Com o BLiP Chat, é possível disponibilizar um bot através de um link embarcado em um site ou em aplicativos móveis (Android ou iOS).

## 1. Em um site

É possível adicionar uma janela do BLiP Chat em um site através de um widget flutuante ou colocá-lo como parte do site.

A imagem abaixo apresenta o BLiP Chat integrado ao site do BLiP como um widget flutuante:

![BLiP Chat](/img/channels/blip-chat/chat-o-que-e-blip-chat-1.png)

<br>Já na imagem abaixo, o BLiP Chat foi integrado ao site de forma embutida a um elemento HTML:

![BLiP Chat embutido](/img/channels/blip-chat/chat-o-que-e-blip-chat-2.png)<br><br>

## 2. Em aplicativos móveis

Você também pode adicionar o BLiP Chat em aplicações móveis nativas. Para maiores informações sobre como utilizar as bibliotecas mobile do BLiP Chat, verifique os projetos [Android](https://github.com/takenet/blip-chat-android) e [iOS](https://github.com/takenet/blip-chat-ios) no Github

![BLiP Chat Android](/img/channels/blip-chat/chat-o-que-e-blip-chat-3.png) <br><br>

## 3. Através de um link

Por fim, também é possível enviar um link para seus usuários e permitir que eles interajam com o seu bot. Essa é uma alternativa interessante para converter usuários entre canais.

Por exemplo: é possível enviar um SMS com um link do chat e levar o usuário de um canal simples para um canal rico. Clique aqui para descobrir como gerar um link do BLiP Chat para seu bot.

\>>  [Link de acesso](https://chat.blip.ai/?appKey=YmxpcGFqdWRhMjBtYXN0ZXI6M0UwRTUzNDItMURBNS00MjQ3LTlDMEUtQTkyNTREQzIwMzUw) ao bot do BLiP.

Além da flexibilidade para embarcar o BLiP Chat em sites e aplicativos móveis também é possível customizar alguns detalhes (como cores, imagens e textos) na interface do chat. Para saber exatamente quais são as customizações possíveis e como realizá-las, clique aqui.

Outra funcionalidade importante do BLiP Chat é a possibilidade de configurar diferentes tipos de autenticação do usuário no chat, para áreas logadas e não logadas.

O primeiro tipo de autenticação (logado) é ideal para ambientes em que o usuário que está utilizando o sistema (site ou aplicativo) já é conhecido. Dessa forma, o desenvolvedor da aplicação consegue informar ao BLiP Chat informações importantes sobre o usuário, como seu identificador, nome, e-mail entre outras.

O segundo tipo de autenticação (não logado) é indicado para os demais cenários. **O comportamento padrão do BLiP Chat utiliza este tipo de autenticação**. Para saber como utilizar os tipos de autenticação disponíveis clique aqui.
