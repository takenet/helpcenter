---
id: visao-geral-desk
title: Visão geral do BLiP Desk
sidebar_label: Visão geral do BLiP Desk
---

O objetivo de um contato inteligente (bot, chatbot ou aplicação conversacional) é resolver o problema de um cliente através de uma conversa. Para isso, é possível utilizar diversas ferramentas disponíveis, como botões, links, mídias, integrações com APIs e algoritmos de processamento de linguagem natural (NLP), por exemplo.

Apesar disso, em alguns contextos específicos, essas ferramentas podem ser incapazes de resolver completamente o problema do cliente. Nessas situações, repassar o cliente para um atendente humano pode ser a melhor opção.

*<p align="center"> Mas afinal, o que é BLiP Desk? 🤔 </p>*

O BLiP Desk é a ferramenta do BLiP que permite que um bot redirecione (transborde) a conversa de um usuário para um atendente humano. Esse transbordo acontece de forma transparente para o cliente, ou seja, ele tem a sensação de ainda conversar com o bot, mas é um atendente quem está respondendo. Para utilizar o BLiP Desk é preciso ativá-lo no canal de **Atendimento** do BLiP. [Clique aqui para saber como ativar o BLiP Desk](https://help.blip.ai/hc/pt-br/articles/360001215251-Como-ativar-o-BLiP-Desk-como-um-canal-de-atendimento).

Antes de começar a utilizar o BLiP Desk, é preciso entender os conceitos teóricos fundamentais adotados por ele:

## Equipes e Atendentes

Um **atendente** representa o ser humano que terá acesso ao BLiP Desk para realizar atendimento de um bot.

O atendente precisa de uma conta BLiP para utilizar o BLiP Desk. Entretanto, o acesso à ferramenta de atendimento acontece de forma isolada, através do link https://desk.blip.ai.

Uma **equipe** representa um conjunto de atendentes capazes de realizar atendimentos de um determinado assunto.

Por exemplo: João, Maria e Rafael são atendentes de uma empresa de seguros. João e Maria são responsáveis pelas contas do tipo *Basic*, enquanto Rafael é responsável pela carteira de clientes *Premium*. Neste cenário, provavelmente os três atendentes serão distribuídos em duas equipes: *Basic* (com João e Maria) e *Premium* (composta por Rafael).

Além do criador do bot, qualquer pessoa que possuir acesso de escrita no módulo de atendimento pode gerenciar suas equipes e atendentes.

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

**Observação: A fila de atendimentos é igualmente acessível para todos os atendentes.**

### Tickets

O último conceito importante para a ferramenta BLiP Desk são os Tickets. Um **ticket** representa um atendimento. No momento em que um atendente inicia um atendimento, um novo ticket é gerado. Da mesma forma, quando um atendimento é encerrado pelo atendente, o ticket correspondente é fechado.

Em todos os atendimentos, é possível visualizar os tickets anteriores do mesmo usuário, mesmo que tenham sido criados por outros atendentes.
