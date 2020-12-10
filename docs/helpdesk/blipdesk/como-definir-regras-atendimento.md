---
id: como-definir-regras-atendimento
title: Como definir regras de atendimento no BLiP Desk
sidebar_label: Como definir regras de atendimento no BLiP Desk
---

>A partir do dia 30/11/2020, as novas regras de atendimento serão obedecidas de acordo com a sequência em que forem criadas. Por isso, cadastre suas regras na exata ordem em que devem ser aplicadas.

Uma regra de atendimento define como seu bot direciona os atendimentos humanos entre as equipes cadastradas.

Qualquer integrante da equipe de um bot que tenha acesso de escrita no módulo de **Atendimento** — pode definir as regras de atendimento das equipes.

Para definir uma regra, vá até o módulo de atendimento. No menu lateral esquerdo, selecione a opção **Regras de atendimento**, conforme a imagem abaixo:

![Menu regras de atendimento](/img/helpdesk/desk-como-definir-regras-atendimento-1.png)<br><br>

Para adicionar uma regra, clique no botão **+ Adicionar regra** no canto superior direito. Uma regra de atendimento é formada por:

![Dados de regras de atendimento](/img/helpdesk/desk-como-definir-regras-atendimento-2.png)<br><br>

## Fonte de dados

Informação que será levada em consideração para a definição da regra de atendimento. As possíveis fontes são:

1. Conteúdo da mensagem direcionada
2. Nome do cliente que solicitou atendimento
3. E-mail do cliente que solicitou atendimento
4. Extras do cliente que solicitou atendimento

## Operador

Operador de comparação para a regra de atendimento. Os possíveis operadores são:

1. Contém
2. Não contém
3. É igual
4. Não é igual

## Valor esperado

Valor esperado para comparação com a fonte de dados utilizando um operador. O valor esperado deve ser formado por **caracteres alfanuméricos**.

## Equipe alvo

Equipe de atendentes que receberá o atendimento caso a regra correspondente seja verdadeira. **Garanta que a equipe alvo desejada já tenha sido criada anteriormente.**<br><br>

**<p align="center"> ... </p>**

Após definida todas as regras de atendimento, sempre que um usuário for enviado para um bloco de atendimento humano o BLiP analisará as regras e definirá qual deve ser a equipe responsável por realizar o atendimento. Caso não exista nenhuma regra cadastrada ou nenhuma regra seja satisfeita o usuário será enviado para a equipe **Default**.

Veja [este artigo](https://help.blip.ai/docs/en/helpdesk/blipdesk/exemplos-regras-atendimento/) para encontrar alguns exemplos práticos da criação de regras de atendimento.


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>
