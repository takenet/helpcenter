---
id: como-validar-entrada-usuario
title: Como validar a entrada do usuário
sidebar_label: Como validar a entrada do usuário
---

Durante diversos momentos na interação de um contato com o seu chatbot, pode ser necessário **validar a entrada do usuário** e só permitir que o contato **continue o fluxo quando apresentar uma resposta válida**.

## 1. Identificando a entrada de usuário

Sempre que um bloco do fluxo `"Aguarda resposta"`, significa que esta resposta é uma entrada do usuário, como apresentado na imagem abaixo. De tal modo, para validar esta entrada, primeiramente, **precisamos clicar sobre ela**.

![Identificando a entrada de usuário](/img/builder/salvando-entrada-variavel-1.png)<br/>

Ao clicar sobre a entrada do usuário, um menu de opção é aberto com a opção `"VALIDAR A ENTRADA DO USUÁRIO"`, conforme imagem abaixo.

![Habilitando e selecionando tipo de validação](/img/builder/como-validar-entrada-usuario-1.png)<br/>

## 2. Habilite e selecione o tipo de validação

Inicialmente, **habilite a opção "VALIDAR A ENTRADA DO USUÁRIO"** e selecione o tipo de validação.


### Tipos de validação

#### Texto

Este tipo de validação, verifica se a entrada do usuário apresentada é um texto. Isto **contempla números, pontuações, caracteres especiais**, dentre outros. A validação é mais utilizada para barrar situações onde o usuário envia áudio, imagens e outros conteúdos de mídia.

#### Número

Por sua vez, a validação de número, verifica se a entrada do usuário apresentada é numeral. Isto **contempla números inteiros, positivos, negativos e decimais** (separados por ponto ou virgula).

#### Data

A validação de data, apura se a entrada do usuário apresentada é uma data. Isto **contempla diferentes formados de data**, tais como: dd/mm/aaaa, mm/dd/aaaa, dd-mm-aaaa, mm-dd-aaaa, dd-mm, dd/mm, mm-dd, mm-dd-aa...

#### Expressão Regular

No que lhe diz respeito a validação por expressão regular, é possível afirmar que este **tipo de validação é uma das mais poderosas validações**, abaixo segue alguns exemplos dessa validação:

* CPF: ^\d{3}.?\d{3}.?\d{3}-?\d{2}$
* Email: ^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$
* CEP: ^\d{5}-\d{3}$
* Telefone: ^[1-9]{2}-[2-9][0-9]{7,8}$

#### Tipo

Por fim, a validação de tipo, verifica se a entrada do usuário condiz com um tipo de conteúdo correspondente **ao Lime Protocol**, [clique aqui para entender mais sobre estes tipos de conteúdo](https://docs.blip.ai/#content-types).

## 3. Preencha a instrução de validação

O valor deste campo será sempre apresentado para o usuário caso o valor da validação seja falso. Por seu lado, caso a validação seja positiva, o fluxo segue normalmente.

![Exemplo de instrução de validação](/img/builder/como-validar-entrada-usuario-2.png)<br/>

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>
