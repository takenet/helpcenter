---
id: visao-geral-das-acoes
title: Visão geral das ações
sidebar_label: Visão geral das ações
---

Uma das funções de um bloco (ou estado) é executar ações de entrada e saída. Uma ação representa uma tarefa que deve ser executada antes do envio dos conteúdos de um bloco (**ação de entrada**), ou imediatamente após o envio dos conteúdos (**ação de saída**).

As ações representam o principal ponto de flexibilidade do Builder do BLiP. Através de uma ação, é possível utilizar qualquer funcionalidade do BLiP — como as diversas extensões da plataforma, por exemplo (<https://docs.blip.ai/#extensions>) — além de realizar requisições para qualquer API pública na web.

As ações disponíveis são:

![Requisicao HTTP](/img/builder/builder-visao-geral-das-acoes-1.png)

## Requisição HTTP

Essa ação permite realizar uma requisição HTTP para qualquer API pública.

![Corpo requisicao HTTP](/img/builder/builder-visao-geral-das-acoes-2.png)

Para mais informações, acesse este artigo: [Ação: Requisição HTTP](acao-requisicao-http).

## Registro de evento
  
Essa ação permite realizar o registro de um evento qualquer no módulo de análise do BLiP. Registro de eventos são necessários para a criação de relatórios customizados. [Clique aqui](/docs/builder/acao-registro-evento) para saber mais informações.

![Registro de evento](/img/builder/builder-visao-geral-das-acoes-3.png)

Todo evento no BLiP é formado por uma **categoria**, uma **ação** e um **conjunto de metadados (opcionais)**. O usuário deve informar essas propriedades para registrar um evento.

## Definir contato

Através desta ação, é possível adicionar diversas informações sobre o usuário que está interagindo com o bot. A partir dessas informações, é possível aumentar o conhecimento do seu bot sobre cada um de seus usuários, além de categorizar os clientes de acordo com suas preferências.

![Definir contato](/img/builder/builder-visao-geral-das-acoes-4.png)

Uma vez adicionadas as informações de um contato, é possível visualizá-las em diferentes **módulos** do BLiP. Para saber mais sobre a ação de **Definir Contatos** [clique aqui](https://help.blip.ai/hc/pt-br/articles/360020287152-Salvando-informa%C3%A7%C3%B5es-de-um-usu%C3%A1rio).

## Gerenciar listas de distribuição

Uma funcionalidade muito interessante do BLiP é a possibilidade de criar e utilizar listas de distribuição ([clique aqui para saber o que é uma lista de distribuição](http://localhost:3000/docs/builder/o-que-sao-listas-de-distribuicao)) para envios de mensagens direcionadas a um público específico. O módulo de agendamento do BLiP permite agendar e enviar mensagens para listas específicas.

![Gerenciar listas de distribuicao](/img/builder/builder-visao-geral-das-acoes-5.png)

A ação de gerenciamento de listas de distribuição permite adicionar ou remover o usuário que está interagindo com o bot de uma lista. [Clique aqui](/docs/builder/acao-gerenciar-listas) para saber mais informações.

## Redirecionar a um serviço

Uma função importante para permitir a migração dos usuários entre os *subbots* de um roteador, permitindo ainda o envio de mensagem de contexto entre eles.

![Ação redirecionar a um serviço](/img/builder/acao-redirecionar-servico-1.png)

Para saber mais informações, [clique aqui](/docs/builder/acao-redirecionar-servico).

## Processar comando

Esta ação permite realizar comandos para integrar o Builder e as APIs internas do BLiP, como para recuperar todos os tickets de um bot, por exemplo.

![Ação para processar comando](/img/builder/builder-visao-geral-das-acoes-7.png)

Para saber mais sobre esta ação e como enviar comandos, [clique aqui](/docs/builder/acao-processar-comando).

## Executar script

A ação de executar script permite realizar funções através de lógica de programação, permitindo mais flexibilidade para a construção do seu bot.

![Ação para executar script](/img/builder/builder-visao-geral-das-acoes-8.png)

Para saber mais sobre como executar scripts dentro do Builder, [clique aqui](/docs/builder/acao-executar-script).

## Definir variável

Caso você precise armazenar dados e informações de algum contato, é possível armazená-los em variáveis, através da ação **Definir variável**.

![Ação para executar script](/img/builder/builder-visao-geral-das-acoes-9.png)

Para saber mais sobre utilizar variáveis e definí-las no Builder, [clique aqui](/docs/builder/acao-definir-variavel).

## Observações:

* As ações do Builder **são processadas sequencialmente** (uma após a outra), **até que todas sejam executadas**.
* Ações inválidas, como uma requisição HTTP incorreta, podem bloquear a execução do fluxo de conversa de um usuário. **Fique atento quando cadastrar uma ação em seu bloco**.