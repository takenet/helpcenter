---
id: builder-o-que-e-um-bloco-de-conteudo
title: [Builder] O que é um bloco de contéudo
sidebar_title: [Builder] O que é um bloco de conteúdo
---
Além de representar os possíveis estados de um cliente no fluxo da conversa os blocos de conteúdo são responsáveis por outras três funções: **envio (e recebimento) de conteúdos, escolha de condições de saída** e a **execução de ações**. Essas funções estão organizadas através de abas na tela de edição de um bloco, conforme exibido pela figura abaixo:

![Abas na tela de edição do builder](../../assets/concepts/builder/buider-o-que-e-um-bloco-de-conteudo-1.png)

## 1. Conteúdo
Sempre que um usuário alcança um determinado estado (um bloco), todo o conteúdo disponível nele é enviado para o cliente. Esses conteúdos representam os cards suportados nos principais aplicativos de mensagem do mercado.

Além dos tradicionais conteúdos estáticos — texto, digitando, imagem, áudio, menu, carrousel e quick reply, por exemplo — existem outros dois tipos de conteúdos especiais:

* **Conteúdo HTTP**

Em algumas situações específicas, pode ser necessário enviar um conteúdo que varia de acordo com uma ou mais condições. Imagine, por exemplo, que o bot de um e-commerce precisa enviar um carrousel com todas as opções de produto de uma determinada categoria. Para construir o carrousel, é necessário analisar várias informações, como quais produtos estão disponíveis, seu preço e a quantidade disponível em estoque. Somente após essa análise é possível montar e enviar o conteúdo para um usuário.

Pensando nisso, o Builder criou o Conteúdo HTTP. Através dele, é possível definir o endpoint de uma aplicação responsável por construir o conteúdo de acordo com as regras específicas de cada bot.

O único compromisso da aplicação responsável por construir o conteúdo é retornar um objeto JSON referente ao tipo escolhido de acordo com a especificação definida na documentação do BLiP (<https://docs.blip.ai/#content-types>).

\* *Atualmente, é possível criar Menus, Quick Replies e Carrousel através do Conteúdo HTTP.*

* **Entrada do usuário**
  
Além de enviar conteúdos, o bot pode precisar solicitar alguma entrada de dados para o usuário. Para isso, existe o conteúdo Entrada do usuário, com o qual é possível parar a execução da máquina de estados e aguardar por alguma informação que deverá ser enviada pelo cliente. É através da Entrada do usuário que todas as mensagens enviadas pelos clientes são recebidas pelo bot.

**Observações:**

* Um bloco pode conter 0 (zero) ou 1 (uma) Entrada do usuário;
* Caso um bloco não possua Entrada do usuário, o processamento da máquina de estados levará o cliente para o bloco que contenha;

[Clique aqui](https://help.blip.ai/hc/pt-br/articles/360000933252--Builder-Vis%C3%A3o-geral-dos-tipos-de-conte%C3%BAdo) para ver, detalhadamente, todos os tipos de conteúdo suportados pelo Builder.

## 2. Condições de Saída
Para que seja possível condicionar a mudança de estado do usuário, o Builder disponibiliza o recurso de condição de saída. Através dessa funcionalidade, é possível definir regras para a transição entre os blocos.

Essas regras podem levar em consideração: o valor de variáveis, a entrada de dados feita pelos clientes, além de intenções e entidades analisadas no modelo de IA do bot. Para cada regra, deve ser definido um bloco alvo para o qual o usuário será enviado caso a condição seja satisfeita.

[Clique aqui](https://help.blip.ai/hc/pt-br/articles/360000945711--Builder-Vis%C3%A3o-geral-das-condi%C3%A7%C3%B5es-de-sa%C3%ADda) para visualizar todas as regras possíveis para uma condição de saída do Builder.

**Observações:**

* As condições de saída de um bloco do Builder **são processadas sequencialmente** (uma após a outra) **até que uma condição verdadeira seja alcançada**. Ou seja, é preciso cadastrar as condições ordenadas a partir das mais específicas até a mais genérica.
* Por padrão, todo bloco possui uma condição de saída padrão (Fallback) pré-configurada. Apesar de ser possível alterar a saída padrão de qualquer bloco, não é possível removê-la.

## 3. Ações
A terceira e última função de um bloco é executar ações de entrada e saída. Uma ação representa uma tarefa que deve ser executada antes do envio dos conteúdos de um bloco (**ação de entrada**), ou uma tarefa que deve ser executada após o envio dos conteúdos e antes da transição entre o estado atual e o próximo (**ação de saída**).

As ações representam o principal ponto de flexibilidade do Builder do BLiP. Através de uma ação, é possível utilizar qualquer funcionalidade do BLiP — como as diversas extensões da plataforma, por exemplo (<https://docs.blip.ai/#extensions>) — além de realizar requisições para qualquer API pública na web.

[Clique aqui](https://help.blip.ai/hc/pt-br/articles/360000933312--Builder-Vis%C3%A3o-geral-das-a%C3%A7%C3%B5es) para ver, com exemplos, todas as ações possíveis do Builder do BLiP.

**Observações:**

* As ações do Builder **são processadas sequencialmente** (uma após a outra) **até que todas sejam executadas**.
* Ações inválidas, como uma requisição HTTP inválida, podem bloquear a execução do fluxo de conversa de um usuário. **Fique atento quando cadastrar uma ação em seu bloco.**
