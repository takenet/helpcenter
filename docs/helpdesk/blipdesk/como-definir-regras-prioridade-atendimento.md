---
id: como-definir-regras-prioridade-atendimento
title: Como definir regras de prioridade de atendimento no Blip Desk
sidebar_label: Como definir regras de prioridade de atendimento no Blip Desk
---

A priorização de atendimento é uma funcionalidade do Blip Desk que permite que os atendimentos sejam priorizados automaticamente com base nas regras configuradas pelo contato inteligente.

Isso permite que os clientes possam ser atendidos de acordo com os critérios de prioridade definidos pela empresa. E as regras de prioridade são o que define quais serão os critérios para que um atendimento tenha ou não prioridade com relação aos demais.

Qualquer integrante da equipe de um contato inteligente que tenha acesso de escrita no módulo de **Atendimento** — pode definir as regras de prioridade de atendimento das filas.

Para definir uma regra, vá até o módulo de atendimento. No menu lateral esquerdo, selecione a opção **Regras de atendimento**, conforme a imagem abaixo:

![Menu regras de atendimento](/img/helpdesk/desk-como-configurar-priorizacao-1.png)<br><br>

Para adicionar uma regra, clique no botão **+ Criar nova regra de priorização** no canto superior direito. Uma regra de prioridade é formada por:

![Dados de regras de atendimento](/img/helpdesk/desk-como-configurar-priorizacao-2.png)<br><br>

## Se

Informação que será levada em consideração para a definição da regra de atendimento. As possíveis fontes são:

1. Mensagem: Conteúdo da mensagem direcionada
2. Nome Contato: Nome do cliente que solicitou atendimento
3. Email Contato: E-mail do cliente que solicitou atendimento
4. Extras Contato: Extras do cliente que solicitou atendimento

## Operador

Operador de comparação para a regra de atendimento. Os possíveis operadores são:

1. Contém
2. Não contém
3. É igual
4. Não é igual

## Valor esperado

Valor esperado para comparação com a fonte de dados utilizando um operador. O valor esperado deve ser formado por **caracteres alfanuméricos**.

**<p align="center"> ... </p>**

Após a definição de uma regra de prioridade o Blip avaliará a regra sempre que o atendimento for definido para a equipe que a regra foi cadastrada, alterando assim a prioridade de atendimento do ticket.

>Essa funcionalidade se encontra em **beta**


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>
