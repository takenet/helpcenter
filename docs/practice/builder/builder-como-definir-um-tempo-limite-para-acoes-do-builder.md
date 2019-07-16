---
id: builder-como-definir-um-tempo-limite-para-acoes-do-builder
title: Como definir um tempo limite (timeout) para ações do Builder
sidebar_label: Como definir um tempo limite (timeout) para ações do Builder
---

Todas as ações do Builder possum um tempo limite (máximo) de execução - *um timeout*. Caso esse tempo limite seja alcançado a ação é bloqueada. Ou seja, imagine que seu bot possui um timeout para ações de 30 segundos e que uma ação do tipo **Requisição HTTP** seja executada no Builder. Se a resposta para essa requisição demorar mais que 30 segundos, a ação simplesmente será cancelada.

Por padrão, todas as ações possuem um tempo máximo de execução de 30 segundos, esse valor é definido pela plataforma. Caso você precise ajustar esse valor, acesse o **Builder**, clique em **Configurações** (aba de variáveis) e altere o valor da variável **Tempo limite de ações**. 

![Definindo timeout](/img/practice/builder/builder-como-definir-um-tempo-limite-para-acoes-do-builder-1.png)

**Importante**: O valor dessa variável deverá ser dado em segundos e poderá variar entre 0 e 60.

*Adicionado na Release 19.25*