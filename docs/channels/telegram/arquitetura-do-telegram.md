---
id: arquitetura-do-telegram
title: Arquitetura do canal Telegram
sidebar_label: Arquitetura do canal Telegram
---

A Telegram Bot API foi desenvolvida com base no protocolo HTTP, com o objetivo de ajudar os desenvolvedores a construir e integrar neste canal. 

Quando o cliente envia uma mensagem para o seu contato no Telegram, as mensagens são recebidas pelo próprio aplicativo, processadas pelos servidores do Telegram e enviadas para os servidores do BLiP. Dentro dos servidores do BLiP, o seu chatbot recebe e processa as mensagens conforme sua estrutura e envia de volta para os servidores do Telegram, que são enviadas novamente para o cliente do seu negócio.

![Desenho da arquitetura do Telegram](/img/channels/telegram/telegram-architecture.png)

Para mais informações, acesse a [documentação oficial do Telegram](https://core.telegram.org/bots/api).