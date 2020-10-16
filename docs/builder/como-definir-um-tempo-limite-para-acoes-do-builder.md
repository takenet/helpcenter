---
id: como-definir-um-tempo-limite-para-acoes-do-builder
title: Como definir um tempo limite (timeout) para ações do Builder
sidebar_label: Como definir um tempo limite (timeout) para ações do Builder
---

Todas as ações do Builder possuem um tempo limite (máximo) de execução - *um timeout*. Caso esse tempo limite seja alcançado a ação é bloqueada. Ou seja, imagine que seu bot possui um timeout para ações de 30 segundos e que uma ação do tipo **Requisição HTTP** seja executada no Builder. Se a resposta para essa requisição demorar mais que 30 segundos, a ação simplesmente será cancelada.

Por padrão, cada *ação* (http, set variable), tem um timeout de 30 segundos pra ser executada, e temos ainda o timeout global de 60 segundos entre um input de usuário e o próximo input. Então cada ação não pode demorar mais de 30 segundos, e todas combinadas não podem demorar mais de 60 segundos. É possível ajustar o tempo de timeout das ações individuais para um valor entre 0 e 60 segundos, para isso, acesse o **Builder**, clique em **Configurações** (aba de variáveis) e altere o valor da variável **Tempo limite de ações**. 

![Definindo timeout](/img/builder/builder-como-definir-um-tempo-limite-para-acoes-do-builder-1.png)

**Importante**: O valor dessa variável deverá ser dado em segundos e poderá variar entre 0 e 60.

*Adicionado na Release 19.25*


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>