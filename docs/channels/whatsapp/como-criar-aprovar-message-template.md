---
id: como-criar-aprovar-message-template
title: Como criar e aprovar um Message Template no WhatsApp
sidebar_label: Como criar e aprovar um Message Template no WhatsApp
---

Para disparar uma notificação (mensagens ativas) no canal WhatsApp é necessário criar e aprovar um modelo de mensagem (também conhecido como *Message Template*). Message Templates são mensagens que já foram pré-aprovadas pelo WhatsApp e que possuem um formato reutilizável, ou seja, através de variáveis é possível utilizar o mesmo template e disparar diferentes mensagens. Para saber mais detalhes sobre os modelos de mensagem consulte a [documentação do WhatsApp](https://developers.facebook.com/docs/whatsapp/message-templates).

Um exemplo de Message Template para notificar os usuários que acabaram de criar uma conta em uma aplicação qualquer seria:

> Olá, {{1}}! Sua conta foi criada no BLiP. 👏 Para mais informações acesse https://blip.ai.

Note que neste exemplo foi utilizado uma variável representada pelo padrão {{1}}. O número 1 indica o índice da variável, ou seja, {{1}} representa a primeira variável do template. Para adicionar outras variáveis utilize o mesmo padrão e incremente o valor do índice. O exemplo abaixo define um template com duas variáveis.

> Olá, {{1}}! Sua conta foi criada no BLiP. 👏 Para mais inforamções acesse {{2}}.

## Criando um Message Template no BLiP

Acesse o portal do BLiP, selecione um **bot previamente publicado no canal WhatsApp** e acesse o módulo de **Conteúdos**.
Selecione o item **Modelo de Mensagens** e clique no botão **"+ Adicionar Novo"**.

​![Imagem que demonstra como criar um Message Template](/img/channels/whatsapp/whatsapp-message-templates.png)<br>

Preencha as informações necessárias para a submissão de um message tempalte.

![Imagem do formulário de criação de um Message Template](/img/channels/whatsapp/creating-message-template.png)

* Nome do modelo: nome que identifica seu template (*use apenas letras minúsculas, números ou o caracter underline '_'*)
* Categoria: categoria que mais se aproxima do conteúdo da sua mensagem.
* Idioma do modelo: o idioma utilizado no template (*é possível disponibilizar diferentes traduções para cada template*)
* Conteúdo da mensagem: (*tipos suportados: texto, documentos e imagens*)

**Observação: clique no botão 'Adicionar tradução' caso queira utilizar um mesmo template em diferentes idiomas**

## Analisando o status do Message Template

Após a submissão de um Message Template ele ficará **em análise** com o status de **Pendente**. Ao final do processo o template receberá o status de **Aprovado** ou **Reprovado**, caso seja aceito ou rejeitado pelo WhatsApp, respectivamente.

## Utilizando templates aprovados

Para utilizar um message template é necessário ter acesso a duas informações, **namespace** e **element_name**.

![Imagem que demonstra como obter o Namespace e o Element_Name de um Message template](/img/channels/whatsapp/message-templates-info.png)

Para mais informações sobre como utilizar a API do BLiP para enviar Mensagens Ativas (Notificações), [clique aqui](/docs/channels/whatsapp/enviar-notificacao-whatsapp-blip-api).

