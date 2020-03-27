---
id: salvando-entrada-variavel
title: Salvando entrada do usuário em variável
sidebar_label: Salvando entrada do usuário em variável
---
Durante a construção da sua aplicação no Builder, pode ser necessário **armazenar valores em variáveis**. Isso é indispensável para a construção de fluxos condicionais, ou para simplesmente armazenar/recuperar valores ao longo da interação do usuário.

Antes de mais nada, é importante esclarecer que uma **variável do builder é formada** exclusivamente por uma sequência de **caracteres alfanuméricos** (maiúsculas ou minúsculas), **não sendo permitido utilizar caracteres especiais**, por exemplo, `!@#$%¨¨&*()_+`. Todas as variáveis são *case sensitive*, ou seja, as variáveis `Teste` e `teste` são consideradas **variáveis diferentes**. 

## 1. Identificando a entrada de usuário

Sempre que um bloco do fluxo "Aguarda resposta", significa que esta resposta é uma entrada do usuário, como apresentado na imagem abaixo. De tal modo, para salvar esta entrada, primeiramente, **precisamos clicar sobre ela**.

![](/img/builder/salvando-entrada-variavel-1.png)<br/>

Ao clicar sobre a entrada do usuário, um menu de opção é aberto com a opção "SALVAR RESPOSTA EM VARIÁVEL", conforme imagem abaixo.

![](/img/builder/salvando-entrada-variavel-2.png)<br/>

## 2. Habilite e preencha o nome da variável

Inicialmente, **habilite a opção "SALVAR RESPOSTA EM VARIÁVEL"** e **preencha o campo** **Variável** com o nome da sua variável, para este exemplo, será `nome`.
![](/img/builder/salvando-entrada-variavel-3.png)<br/>

Por fim, após finalização destas etapas, voltando à aba de conteúdo do seu bloco, será possível visualizar que a **entrada do usuário agora tem o nome da variável definida**.

![](/img/builder/salvando-entrada-variavel-4.png)<br/>


