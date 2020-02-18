---
id: descricao-metricas-geradas-blip
title: Descrição das métricas geradas pelo BLiP
sidebar_label: Descrição das métricas geradas pelo BLiP
---

The BLiP Analytics module displays information based on the events that happened in a bot. These events are categorized in three dimensions:

* Messages
* Users
* Custom events

The **Dashboard** report, found in the Analytics module, has charts (or metrics) related only to the Users and Messages dimensions. However, you are free to create custom reports that use any of the three available dimensions.

Below you will find a description for each of the different metrics shown in the **Dashboard** report:

## 1. Active users

Represents the number of **unique users** that **sent or received** at least one message from the bot in the specified period.

## 2. Engaged users

Represents the number of **unique users** that talked (**sent at least one message**) to the bot in the specified period.

## 3. Active users per day

The number of unique users that sent at least one message, per day, to the bot in the specified period.

## 4. Exchanged messages

Total number of messages that were sent and received by the bot in the specified period.

## 5. Sent messages

Total number of messages sent by the bot in the specified period.

## 6. Received messages

Total number of messages received by the bot in the specified period.

## 7. Messages per day

The number of messages that were sent and received, per day, by the bot on the specified period.

## 8. Mensagens Ativas
Todas as mensagens enviadas determinado período após o último contato do usuário com o bot ou atendente são nomeadas como mensagens ativas. Este período varia de acordo com cada canal. *Essas mensagens recebem uma classificação diferente pois podem estar sujeitas a políticas de utilização e tarifação específicas do canal.*

#### 1. WhatsApp
No WhatsApp, é considerada mensagem ativa qualquer mensagem enviada 24h após o último contato do usuário com o bot ou atendente. Este canal permite apenas o envio de modelos de mensagem previamente cadastrados e aprovados pelo Facebook. Saiba mais em [Como criar e aprovar um Message Template no WhatsApp](https://help.blip.ai/docs/channels/whatsapp/como-criar-aprovar-message-template).

Para mais informações sobre mensagens ativas no WhatsApp, consulte a [documentação oficial](https://developers.facebook.com/docs/whatsapp/faq#faq_304185363498132).

#### 2. Messenger
No Messenger, é considerada mensagem ativa qualquer mensagem enviada 24h após o último contato do usuário com o bot, ou após 7 dias caso o usuário em um atendimento humano.

Para mais informações sobre mensagens ativas no Messenger, consulte a [documentação oficial](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview/).

#### 3. Demais canais
Nos demais canais disponíveis no BLiP, é considerada mensagem ativa qualquer mensagem enviada 24h após o último contato do usuário com o bot ou atendente.
