---
id: builder-visao-geral-do-builder
title: Visão geral do Builder
sidebar_label: Visão geral do Builder
---

O **Builder** é mais um dos diversos componente do BLiP. Ele foi pensado para possibilitar a construção de bons chatbots de forma rápida, simples, visual e sem a obrigatoriedade de utilizar código. Através dele, é possível estruturar todo o fluxo da conversa e definir o conteúdo do bot, de forma integrada aos outros recursos da plataforma.

Antes de começar a utilizar o Builder, é preciso entender os conceitos teóricos fundamentais adotados por ele (Blocos e Transições):

## Blocos (ou estados)

Um fluxo de conversa no Builder é composto por diversos blocos que representam o estado atual de um cliente, durante a sua interação com o bot.

Existem três tipos de blocos:

![tipos de blocos](/img/concepts/getting-started/gs-viao-geral-do-builder.png)

**1. Blocos de Controle (Início e Exceção)**

Os blocos de controle são identificados pela cor preta e são nomeados “Início” e “Exceção”. Eles representam o **início da conversa** entre o cliente e o bot (antes da primeira interação) e **qualquer problema** (ou exceção) não tratada pelo fluxo, respectivamente.

Algumas considerações importantes:
* **Os blocos de controle não podem ser renomeados ou deletados;**
* **É possível referenciar os blocos de controle em qualquer outro bloco de forma transparente.**

Para saber mais sobre os blocos de controle [clique aqui](https://help.blip.ai/hc/pt-br/articles/360000697411).

**2. Blocos de Conteúdo**

Os blocos de conteúdo são identificados pela cor branca e podem ser totalmente customizados pelo usuário. Eles são responsáveis por definir como e quando seu bot entregará todo o conteúdo para o cliente.

**3. Blocos de atendimento**

Os blocos de atendimento são utilizados para transferir a conversa do Builder para um atendente humano. Esses blocos são identificados pela cor branca, detalhes azuis e um símbolo de atendimento humano no canto inferior direito. A regra de transferência da conversa pode ser customizada através das condições de saída do bloco.

## Transições (ou setas)

Durante a conversa, o estado dos usuários pode ser alterado entre blocos que estão conectados através de transições. As transições são componentes visuais importantes para o entendimento de todo o fluxo.

Assim como em qualquer máquina de estados, após realizada todas as tarefas de um bloco, o Builder realiza uma transição para o próximo bloco. Esse comportamento se repete indefinidamente.

O vídeo abaixo traz um compilado dessas informações e faz um tour pelo Builder através do portal do BLiP. Confira:

<iframe width="778" height="517" src="https://www.youtube.com/embed/82Yv6PAWCt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
