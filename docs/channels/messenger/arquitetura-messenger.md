---
id: arquitetura-messenger
title: Arquitetura do canal do Messenger
sidebar_label: Arquitetura do canal do Messenger
---

Quando uma pessoa envia uma mensagem no Messenger, ela é transferida para o servidor do Facebook. Em seguida, o servidor do Facebook envia webhooks para os servidores do BLiP, onde o aplicativo do Messenger está hospedado. Utilizando as APIs o bot pode enviar uma resposta para a pessoa no Messenger de forma transparente.

![Arquitetura do Messenger](/img/channels/messenger/arquitetura-messenger-1.png)