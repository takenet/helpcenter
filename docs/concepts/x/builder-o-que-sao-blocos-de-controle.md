---
id: builder-o-que-sao-blocos-de-controle
title: [Builder] O que são blocos de controle (Início e Exceção)
sidebar_label: [Builder] O que são blocos de controle (Início e Exceção)
---
Os blocos de controle representam estados específicos no fluxo de conversa de um bot. Os dois blocos de controle marcam o **Início** da conversa entre o cliente e o bot (antes da primeira interação) e qualquer **Exceção** (ou problema) não tratada pelo fluxo, respectivamente.

## Início
A conversa do seu bot sempre começa através de uma entrada do usuário. Por isso, o único conteúdo existente no bloco de controle **Início** é uma **Entrada de usuário**. Apesar de não ser possível alterar nenhum conteúdo neste bloco, as condições de saída e ações podem ser totalmente customizadas.

## Exceção
Qualquer condição não tratada, em qualquer ponto da conversa do bot, redireciona o usuário para o bloco Exceção. Qualquer informação de conteúdo, condições de saída e ações podem ser customizadas neste bloco.

Todo novo bloco do Builder possui uma condição de saída padrão, previamente configurada, para o bloco **Exceção**. Apesar disso, é possível modificar esse comportamento conforme a necessidade do usuário.

Algumas considerações importantes:

* **Os blocos de controle não podem ser renomeados ou deletados;**
* **É possível referenciar os blocos de controle em qualquer outro bloco de forma transparente.**
