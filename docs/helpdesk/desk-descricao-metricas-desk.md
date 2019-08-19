---
id: desk-descricao-metricas-desk
title: Descrição das métricas do BLiP Desk
sidebar_label: Descrição das métricas do BLiP Desk
---

O módulo de atendimento do BLiP exibe métricas em tempo real e por período, baseando-se nos eventos ocorridos em cada atendimento. Esses eventos estão divididos em duas categorias:

* Tickets
* Métricas de tempo

A descrição de como cada uma dessas métricas é calculada está descrito nas definições abaixo:

## Tickets

* **Abertos**: Total de tickets abertos pelo BLiP Desk no período. (Presente na tela de relatório de tickets)
* **Na fila**: Tickets na fila aguardando atendimento no momento. Status momentâneo.
* **Em atendimento**: Tickets que já receberam a primeira resposta do atendente. Status momentâneo.
* **Perdidos**: Tickets cancelado pelo usuário antes de serem atribuídos a um atendente.
* **Abandonados**: Tickets cancelado pelo usuário após serem atribuídos a um atendente.
* **Atendidos**: Tickets finalizados ou transferidos pelo atendente. Automaticamente fechado.
* **Fechados**: Total de tickets fechados pelo BLiP Desk no período. Normalmente, corresponde a soma dos perdidos, abandonados e atendidos. 


## Métricas - Tempo

* **Tempo na fila**: Tempo que um usuário aguarda na fila para ser atribuído a um atendente
* **Tempo da primeira resposta**: Tempo que o atendente gasta para dar a primeira resposta ao usuário, após ser atribuído.
* **Tempo de espera**: Total do tempo em que o usuário aguarda para ser atendido. * Tempo na fila + Tempo para primeira resposta.
* **Tempo médio de resposta**: Tempo médio que o atendente demora para responder uma mensagem do cliente.
* **Tempo médio de atendimento**: Duração médio dos atendimentos do período.
