---
id: descricao-metricas-geradas-blip
title: Descrição das métricas geradas pelo BLiP
sidebar_label: Descrição das métricas geradas pelo BLiP
---

O módulo de análise do BLiP exibe informações baseadas nos diversos eventos ocorridos em um bot. Esses eventos estão categorizados em três dimensões:

* Mensagens
* Usuários
* Eventos personalizados

O relatório **Visão geral**, presente no módulo de análise, possui gráficos (ou métricas) relacionados apenas às dimensões de Mensagens e Usuários. Todos os demais relatórios customizados podem conter relatórios de qualquer uma das três dimensões disponíveis.

A descrição de como cada uma das métricas contidas no relatório **Visão geral** estão dispostas abaixo:

## 1. Usuários ativos

Representa o número de **usuários únicos** que **enviaram ou receberam** pelo menos uma mensagem do bot, no período selecionado.

## 2. Usuários engajados

Representa o número de **usuários únicos** que conversaram (**enviaram pelo menos uma mensagem**) com o bot no período selecionado.

## 3. Usuários ativos por dia

Quantidade de usuários únicos que enviaram pelo menos uma mensagem, por dia, para o bot no período selecionado.

## 4. Mensagens Trafegadas

Quantidade total de mensagens enviadas e recebidas pelo bot no período selecionado

## 5. Mensagens Enviadas

Quantidade total de mensagens enviadas pelo bot no período selecionado

## 6. Mensagens Recebidas

Quantidade total de mensagens recebidas pelo bot no período selecionado

## 7. Mensagens por dia

Quantidade de mensagens enviadas e recebidas, por dia, para o bot no período selecionado.

## 8. Mensagens Ativas
Todas as mensagens enviadas determinado período após o último contato do usuário com o bot ou atendente são nomeadas como mensagens ativas. Este período varia de acordo com cada canal. *Essas mensagens recebem uma classificação diferente pois podem estar sujeitas a políticas de utilização e tarifação específicas do canal.*

#### 1. WhatsApp
No WhatsApp, é considerada mensagem ativa qualquer mensagem enviada 24h após o último contato do usuário com o bot ou atendente.
Este canal permite apenas o envio de modelos de mensagem previamente cadastrados e aprovados pelo Facebook. Saiba mais em [Como criar e aprovar um Message Template no WhatsApp](https://help.blip.ai/docs/channels/whatsapp/como-criar-aprovar-message-template).

Para mais informações sobre mensagens ativas no WhatsApp, consulte a [documentação oficial](https://developers.facebook.com/docs/whatsapp/faq#faq_304185363498132).

#### 2. Messenger
No Messenger, é considerada mensagem ativa qualquer mensagem enviada 24h após o último contato do usuário com o bot, ou após 7 dias caso o usuário em um atendimento humano.

Para mais informações sobre mensagens ativas no Messenger, consulte a [documentação oficial](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview/).

#### 3. Demais canais
Nos demais canais disponíveis no BLiP, é considerada mensagem ativa qualquer mensagem enviada 24h após o último contato do usuário com o bot ou atendente.

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>