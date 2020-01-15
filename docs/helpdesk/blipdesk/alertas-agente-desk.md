---
id: alertas-agente-desk
title: Descrição dos sinais de alerta para agentes do BLiP Desk
sidebar_label: Descrição dos sinais de alerta para agentes do BLiP Desk
---

Durante qualquer atendimento, o BLiP Desk fornece diferentes alertas para otimizar o trabalho dos atendentes. Esses alertas aparecem em momentos e locais estratégicos para facilitar a percepção e o entendimento de eventos importantes. Veja na lista abaixo todos os alertas fornecidos pelo BLiP Desk e o significado de cada um deles

## Tickets na fila

O BLiP Desk apresenta, no canto superior esquerdo, qual a soma de tickets aguardando atendimento em todas as equipes que o atendente faz parte.

![Alerta de novos tickets na fila](/img/helpdesk/desk-tickets-alert.png)<br><br>

## Novo ticket 

Tickets que acabaram de ser atribuídos a um atendente e estão à espera da primeira resposta do atendente, possuem uma marcação azul com a palavra "Novo".

![Alerta de novos tickets na fila](/img/helpdesk/desk-new-ticket-alert.png)<br><br>

## Novas mensagens 

Todos os tickets que possuem mensagens não lidas pelo atendente recebem um alerta azul com a indicação do número de novas mensagens.

![Alerta de novos tickets na fila](/img/helpdesk/desk-new-messages.png)<br><br>

## Finalização / Fechamento de um ticket

Durante a finalização de um ticket o atendente é alertado sobre a adição (opcional) de tags ao ticket. A imagem abaixo ilustra o alerta nesse cenário.

![Alerta de finalização de ticket](/img/helpdesk/desk-alert-close-ticket.png)<br><br>

## Transferência de um ticket

Durante a transferência de um ticket o atendente é alertado sobre a necessidade de escolher qual equipe receberá aquele cliente. O alerta de transferência exibe ainda quantos atendentes estão disponíveis para atendimento em cada uma das equipes. Veja um exemplo do alerta na imagem abaixo.

![Alerta de transferência de ticket](/img/helpdesk/desk-alert-transfer-ticket.png)<br><br>

## Incentivo para novo atendimento

Durante a finalização de um ticket, caso existam outros tickets na fila o agente é incentivado a realizar um novo atendimento.
Este alerta também é disparado quando o atendente fica por mais de 5 minutos sem interagir no BLiP Desk.

![Alerta de incentivo de novo atendimento](/img/helpdesk/desk-incentive-ticket.png)<br><br>

## Lentidão no tempo de resposta do atendente

O BLiP Desk fornece um alerta vermelho e pulsante em todos os tickets cujo tempo de resposta do atendente está superior ao configurado na plataforma. 

![Alerta de lentidão de resposta do atendente](/img/helpdesk/desk-definindo-alerta-tempo-resposta-atendente-1.png)

Para habilitar este alerta acesse as Configurações Gerais do módulo de atendimento do seu contato intelegente. Clique [neste link](/docs/helpdesk/blipdesk/definindo-alerta-tempo-resposta-atendente) para mais detalhes.

## Inatividade do cliente 

Se configurado, o atendente receberá um alerta de inatividade para todos os clientes que ficarem muito tempo sem responder a última mensagem do atendente. Esse valor é configurável através da seção de Configurações Gerais do módulo de atendimento do bot.

Existem dois alertas de inatividade dos clientes:

* 1º Alerta: Relógio verde será apresentado nos tickets quando o primeiro tempo de inatividade configurado for satisfeito. 
* 2º Alerta: Relógio amarelo será apresentado nos tickets quando o segundo tempo de inatividade configurado for satisfeito. 

![Alertas de inatividade dos clientes](/img/helpdesk/desk-configurar-alertas-inatividade-clientes-blip-desk-1.png)

Para saber como configurar o alerta de inatividade dos clientes [clique aqui](/docs/helpdesk/blipdesk/configurar-alertas-inatividade-clientes-blip-desk).

## Ticket abandonado

Caso algum ticket seja finalizado pelo cliente o BLiP Desk exibirá um alerta de abandono de ticket. Tickets abandonados ainda devem ser finalizados pelo atendente.

![Alerta para ticket abandonado pelo cliente](/img/helpdesk/desk-abandoned-ticket.png)