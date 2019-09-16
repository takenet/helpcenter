---
id: visao-geral-desk
title: Visão geral do BLiP Desk
sidebar_label: Visão geral do BLiP Desk
---

O objetivo de um contato inteligente é resolver o problema de um cliente através de uma conversa. Para isso, é possível utilizar diversas ferramentas, como botões, links, mídias, integrações com APIs e algoritmos de processamento de linguagem natural (NLP), por exemplo.

Apesar disso, em alguns contextos específicos, essas ferramentas podem ser incapazes de resolver completamente o problema do cliente. Nessas situações, repassar o cliente para um atendente humano pode ser a melhor opção.

O BLiP Desk é a ferramenta do BLiP que permite que um bot redirecione (transborde) a conversa de um usuário para um atendente humano. Esse redirecionamento acontece de forma transparente para o cliente, ou seja, ele tem a sensação de ainda conversar com o bot, mas é um atendente quem está respondendo. 

Veja abaixo as principais funcionalidades do BLiP Desk.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR_ec8f0foelg0Da6FpgXqEcb8ABBEJMXGIc2KG93S8Cl2Bz5H4YNEsOw4bq7bCKiE4JxEAP3OD9bJ-/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>  

<br/>

Antes de começar a utilizar o BLiP Desk, **é preciso entender os conceitos** adotados por ele:

## Equipes e Atendentes

Um **atendente** (ou agente) representa o ser humano que terá acesso ao BLiP Desk para realizar atendimento de um bot.

O agente precisa de uma conta BLiP para utilizar o BLiP Desk. Entretanto, o acesso à ferramenta de atendimento acontece de forma isolada, através do link https://desk.blip.ai.

Uma **equipe** representa um conjunto de atendentes capazes de realizar atendimentos sobre um determinado assunto.

Por exemplo: João, Maria e Rafael são atendentes de uma empresa de seguros. João e Maria são responsáveis pelas contas do tipo *Basic*, enquanto Rafael é responsável pela carteira de clientes *Premium*. Neste cenário, provavelmente os três atendentes serão distribuídos em duas equipes: *Basic* (com João e Maria) e *Premium* (composta por Rafael).

Além do criador do bot, qualquer pessoa que possuir acesso de escrita no módulo de atendimento do BLiP pode gerenciar suas equipes e atendentes.

**Observações:**

* Todo atendente precisa de uma conta BLiP para conseguir acessar o BLiP Desk.
* Um atendente pode fazer parte de N equipes.

## Regras de atendimento

Dado que o seu bot possui mais de uma equipe de atendimento, é necessário definir regras para o direcionamento dos atendimentos entre as equipes. No exemplo anterior, as equipes Basic e Premium receberão atendimentos baseados em alguma regra.

As regras abaixo representam um exemplo de como encaminhar mensagens entre diferentes equipes:

* Regra 1: Se a **mensagem** contém “atendimento basic”, encaminhe para a equipe *Basic*
* Regra 2: Se a **mensagem** contém “atendimento premium”, encaminhe para a equipe *Premium*

Para mais detalhes sobre como funcionam as regras de atendimento ou como criar uma regra, veja o artigo: [Como definir regras de atendimento no BLiP Desk.](https://help.blip.ai/hc/pt-br/articles/360001215891-Como-definir-regras-de-atendimento-no-BLiP-Desk)

## Fila de atendimento

Conforme explicado na seção anterior, todo atendimento é enviado para uma equipe através de uma regra de atendimento. No BLiP Desk, cada equipe possui uma fila de atendimento do tipo FIFO (*First in First out*), ou seja, os atendimentos são tratados de acordo com a ordem de chegada.

Cada novo atendimento é adicionado na fila correspondente a uma equipe. A partir desse momento, qualquer atendente disponível — logado e com status online na ferramenta — poderá, ativamente, atender um novo cliente.

**Observação: Todos os atendentes de uma equipe possuem o mesmo acesso aos tickets da fila correspondente.**

## Tickets

Um **ticket** representa um atendimento, até sua finalização ou transferência. No momento em que um atendente inicia um atendimento, um novo ticket é gerado. Da mesma forma, quando um atendimento é encerrado pelo atendente, o ticket correspondente é fechado.

Em todos os atendimentos, é possível visualizar os tickets anteriores do mesmo usuário, mesmo que tenham sido criados por outros atendentes.

## Interação

Interação é mais um importante conceito para o entendimento do BLiP Desk. Um conjunto de mensagens iniciado pelo usuário e terminado pela resposta de um atendente. Interações nunca começam por mensagens do atendente.

Este é um conceito usado no cálculo de algumas métricas do BLiP Desk. Interações não necessariamente possuem apenas duas mensagens (uma de cada parte) e um ticket pode ter diversas interações.

Para ilustrar, imagine um ticket que contenha uma sequência de 2 mensagens do cliente, 3 do atendente e 5 do cliente (10 mensagens no total). Tal ticket possui apenas 1 interação: as 2 primeiras mensagens, que foram do cliente, completam uma interação com as 3 mensagens do atendente. Já as 5 últimas mensagens do cliente estão à espera da resposta do agente, por isso não configuram uma interação ainda.

Agora que você já sabe os principais conceitos relacionados a ferramenta de **atendimento** do BLiP, adicione essa funcionalidade em seu contato inteligente. [Clique aqui para saber como ativar o BLiP Desk](https://help.blip.ai/hc/pt-br/articles/360001215251-Como-ativar-o-BLiP-Desk-como-um-canal-de-atendimento).

## Tag 

Tags são uma forma de categorizar um atendimento finalizado. Elas podem ser adicionadas durante ou ao finalizar um ticket.

## Comentários

Comentários podem ser escritos por atendentes e referem-se ao cliente. Comentários podem ser apenas lidos por atendentes que estejam atendendo o cliente em questão.

## Histórico

O histórico mostra todos os tickets atendidos para o cliente em questão.

## Finalizar (ou encerrar) um ticket

Encerra a instância de um ticket, adicionando a ele todas as tags marcadas. A diferença entre finalizar e encerrar é apenas simbólica: finalizar é quando o atendente fecha um ticket ativamente; encerrar é quando ele o fecha após o ticket ser cancelado pelo cliente.

## Transferir um ticket

Finaliza o ticket atual, adicionando nele todas as tags, e cria um novo ticket, associado a este, que é encaminhado à equipe escolhida. Este novo ticket não recebe as tags do ticket transferido.