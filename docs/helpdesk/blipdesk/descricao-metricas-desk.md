---
id: descricao-metricas-desk
title: Descrição das métricas do BLiP Desk
sidebar_label: Descrição das métricas do BLiP Desk
---

O módulo de **atendimento humano** do BLiP exibe métricas em tempo real e por período, baseando-se nos eventos ocorridos em cada atendimento. Esses eventos estão divididos em duas categorias:

* Métricas relacionadas a **tickets**
* Métricas relacionadas a **tempo**

A descrição e a explicação de como cada uma dessas métricas é calculada está descrito abaixo:

## Ticket

Um ticket pode ser entendido como uma **ramificação** (branch) de uma conversa para um atendimento. Após a finalização de um ticket, o **ramo** anteriormente aberto é finalizado e o cliente volta a conversar com o bot. Para saber mais sobre os tickets [clique aqui](/docs/helpdesk/blipdesk/visao-geral-desk).

Ao longo de um atendimento um ticket pode assumir diferentes status. A lista abaixo apresenta as métricas calculadas a partir de todos os **status** possíveis de um ticket. 

* **Aberto**: Total de tickets que foram abertos pelo BLiP Desk em um determinado período. (*Presente apenas na tela de relatório de tickets*)
* **Na fila**: Total de tickets que estão aguardando atribuição a um atendente. Esses são os tickets que estão na fila à espera de atendimento.
* **Em atendimento**: Total de tickets que foram atribuídos a um atendente e iniciou-se o atendimento. **Um ticket é considerado fora da fila e em atendimento após a primeira resposta do atendente.**. 
* **Perdido**: Total de tickets cancelados por clientes* antes de serem atribuídos a um atendente.
* **Abandonado**: Total de Tickets cancelados por clientes* após serem atribuídos a um atendente.
* **Atendido**: Tickets finalizados e transferidos pelo atendente. *Tickets transferidos geram um ticket com um novo ID para transferência, por isso são considerados como atendidos*.
* **Fechado**: Total de tickets fechados pelo BLiP Desk no período. Tickets **perdidos**, **abandonados** e **atendidos** são considerados como tickets fechados.

> \* Um ticket só pode ser cancelado/fechado por um cliente através de uma requisição à API do BLiP, pois essa funcionalidade não está presente nativamente no Desk. Portanto, caso você não tenha feito ou permitido que seu cliente faça essa requisição, as métricas **Perdidos** e **Abandonados** ficarão zeradas nos relatórios.

## Métricas - Tempo

* **Tempo na fila**: Tempo do ticket na fila até ser atribuído à algum atendente.
* **Tempo da primeira resposta**: Tempo que o atendente gasta para dar a primeira resposta ao usuário após receber um ticket.
* **Tempo de espera**: Total do tempo que o usuário aguarda para ser atendido. É a soma do **Tempo na fila** e do **Tempo para primeira resposta**.
* **Tempo médio de resposta**: Tempo médio que o atendente demora para responder uma mensagem do cliente. *É calculado apenas para atendimentos com **pelo menos uma interação** entre atendente e cliente, **após a primeira resposta do atendente**.* [Clique aqui](/docs/helpdesk/blipdesk/visao-geral-desk#interacão) caso não saiba o que significa uma **interação**.
* **Tempo médio de atendimento**: Duração médio dos atendimentos do período, a partir da primeira resposta do atendente.

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>