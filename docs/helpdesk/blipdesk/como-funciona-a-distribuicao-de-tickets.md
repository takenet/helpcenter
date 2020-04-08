---
id: como-funciona-a-distribuicao-de-tickets
title: Como funciona a distribuição de tickets?
sidebar_label: Como funciona a distribuição de tickets?
---

A distribuição de tickets do BLiP Desk tenta sempre balancear a carga de atendimentos dentre todos os atendentes disponíveis. Para isso, todo ticket a ser distribuído é enviado a um atendente segundo uma série de critérios.

## Seleção e Priorização dos atendentes
Quando um novo **ticket** chega para ser distribuído, o primeiro ponto a ser observado é a **equipe que fará o atendimento** deste ticket. As esquipes de cada atendente podem ser gerenciadas conforme [este artigo](https://help.blip.ai/docs/en/helpdesk/blipdesk/gerenciamento-equipes/).

Em seguida é observado o status de cada atendente no momento, apenas aqueles que estiverem com o status **Online** estarão aptos a receber o ticket.

E por último apenas atendentes que tem **pelo menos 1 slot** disponível serão considerados. O slot de atendimento disponível é a quantidade de atendimentos simultâneos permitidos (configurado pela tela de atendentes) menos a quantidade de tickets em atendimento no momento pelo atendente.

Todos os atendentes que atenderem a estes 3 critérios estarão aptos a receber o novo ticket disponível. Porém para balancear a carga de atendimento entre os atendentes, alguns critérios são utilizados para escolher o atendente mais adequado, dentre todos os que estão aptos.

O **primeiro critério** é a **quantidade de atendimentos no momento** que o atendente possui. Aquele que estiver atendendo a **menor quantidade** de tickets no momento irá receber o novo ticket.

**Exemplo**:
Ambos os atendentes *A* e *B* estão aptos a receber um novo ticket, sendo que o atendente *A* está atendendo 2 ticket no momento enquanto o atendente *B* está atendendo apenas 1. Neste caso o atendente **B** irá receber o ticket pois ele *possui a menor quantidade de atendimentos* no momento.

Em caso de empate, ou seja, mais de um atendente com a mesma quantidade de atendimentos simultâneos, será escolhido para receber o novo ticket aquele que recebeu um ticket há mais tempo.

**Exemplo**:
Ambos os atendentes *A* e *B* estão aptos a receber um novo ticket e ambos estão com 2 atendimentos no momento. O atendente *A* recebeu seu último ticket as 10:45, enquanto o atendente B recebeu seu último atendimento às 10:55 do mesmo dia. Neste caso o atendente **A** irá receber o novo ticket pois, apesar de ambos estarem como mesmo número de atendimentos no momento, ele está a mais tempo sem receber um novo ticket.

## TL; DR;
A distribuição utiliza a **equipe** do ticket, **status** do atendente e os **slots** disponíveis do atendente para definir quem é elegível a receber um novo ticket. Como critério de desempate, é utilizado a **quantidade de atendimentos** em andamento, seguido de quem **recebeu o ticket há mais tempo**.


## Priorização dos tickets

Normalmente os tickets são priorizados para serem distribuidos por ordem de criação dentro da plataforma BLiP, desde que seja possível encontrar um atendente apto a recebe-lo. Isto significa que o primeiro ticket a ser criado, se houver um atendente que possa recebe-lo, será o primeiro a ser distribuido.

Porém quando um ticket é transferido para outra equipe, o mesmo é fechado com o status de `Transferido` e um novo ticket é aberto para a equipe desejada. Neste caso, o novo ticket possui a mesma "*prioridade*" que o ticket original teria.

**Exemplo**:
Existem os tickets **A** e **B**, criados na plataforma nesta ordem. Caso o ticket **A** seja transferido, criando assim o ticket **C**, o novo ticket **C** terá *prioridade* para ser distribuido antes do ticket **B**, pois ele foi criado por uma transferência de um ticket que originalmente foi criado antes do ticket **B**.

<center>[ Ticket "A" | Ticket "B" ] -> [ Ticket "C" | Ticket "B" ]</center>

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>