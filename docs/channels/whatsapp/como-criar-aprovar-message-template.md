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

Preencha as informações necessárias para a submissão de um message template.

![Imagem do formulário de criação de um Message Template](/img/channels/whatsapp/creating-message-template-05.png)

* Nome do modelo: nome que identifica seu template (*use apenas letras minúsculas, números ou o caracter underline '_'*)
* Categoria: categoria que mais se aproxima do conteúdo da sua mensagem.
* Idioma do modelo: o idioma utilizado no template (*é possível disponibilizar diferentes traduções para cada template*)
* Conteúdo da mensagem: (*tipos suportados: texto, documentos e imagens*)

**Observação: clique no botão 'Adicionar tradução' caso queira utilizar um mesmo template em diferentes idiomas**


------------------------------

Confira como utilizar todos os tipos de conteúdo suportados e um exemplo de como ele será recebido pelo usuário no WhatsApp:

#### 1) Tipo de Conteúdo: Texto

![Imagem do formulário de criação de um Message Template tipo texto](/img/channels/whatsapp/creating-message-template-01.png)

##### Exemplo:

![Exemplo de Conteúdo do tipo Texto](/img/channels/whatsapp/creating-message-template-02.png)

#### 2) Tipo de Conteúdo: Imagem

![Imagem do formulário de criação de um Message Template tipo imagem](/img/channels/whatsapp/creating-message-template-03.png)

##### Exemplo:

![Exemplo de Conteúdo do tipo Imagem](/img/channels/whatsapp/creating-message-template-04.png)

#### 3) Tipo de Conteúdo: Video

![Imagem do formulário de criação de um Message Template tipo video](/img/channels/whatsapp/creating-message-template-08.png)

##### Exemplo:

![Exemplo de Conteúdo do tipo Vídeo](/img/channels/whatsapp/creating-message-template-09.png)

#### 4) Tipo de Conteúdo: Documento

![Imagem do formulário de criação de um Message Template tipo documento](/img/channels/whatsapp/creating-message-template-06.png)

##### Exemplo:

![Exemplo de Conteúdo do tipo Documento](/img/channels/whatsapp/creating-message-template-07.png)

------------------------------

## Message Template com botões

Recentemente o [WhatsApp liberou uma funcionalidade](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates/interactive-message-templates/) que permite o envio de **conteúdos com botões**, como *Call to Actions* e *Quick replies*, **apenas através de Message Templates** (para utilizar esse tipo de conteúdo no seu fluxo de conversa, será necessário enviar através de [conteúdo dinâmico](https://help.blip.ai/docs/en/docs/en/builder/tipo-conteudo-dinamico) ou [mensagens prontas do Desk](https://hmg-help.blip.ai/docs/en/channels/whatsapp/como-enviar-notificacoes-respostas-prontas/)).

Já é possível cria-los através do nosso Portal!

Veja abaixo os tipos de conteúdo com botões disponíveis nesta nova atualização e como cria-los:

Abaixo do conteúdo, há o menu dos botões disponíveis.

![Exemplo de Botao de URL preenchido](/img/channels/whatsapp/botoes-escolher.png)

### 1. Call to action (ir para um link)

Tipo de botão que permite enviar um link que levará o usuário para a página correspondente.

Selecione o botão *Botões de ação*, selecione *Link do website* e preencha as informações necessárias.

![Exemplo de Botao de URL preenchido](/img/channels/whatsapp/url-call_to_action-1.png)

**Observação: lembre-se de preencher a url seguindo a estrutura do exemplo!**

Ao salvar as informações, é possível visualizar uma prévia de como ficará o template.

![Exemplo de template com Botao de URL](/img/channels/whatsapp/url-call_to_action-2.png)

##### Exemplo de como ele será recebido pelo usuário no WhatsApp:

![Exemplo de conteúdo com botão call to action](/img/channels/whatsapp/callActionWeb.png)

### 2. Call to action (ligar para telefone)

Tipo de botão que permite enviar um número de telefone que ao ser clicado acionará a aplicação correspondente do sistema (Ex.: Telefone, Agenda, Skype e até mesmo o WhatsApp).

Selecione o botão *Botões de ação*, selecione *Número de telefone* e preencha as informações necessárias.

![Exemplo de Botao de Telefone preenchido](/img/channels/whatsapp/phone_number-call_to_action-1.png)

**Observação: lembre-se de colocar o código do país no número de telefone seguindo o exemplo!**

Ao salvar as informações, é possível visualizar uma prévia de como ficará o template.

![Exemplo de template com Botao de Telefone](/img/channels/whatsapp/phone_number-call_to_action-2.png)

##### Exemplo de como ele será recebido pelo usuário no WhatsApp:

![Exemplo de conteúdo com botão call to action](/img/channels/whatsapp/callActionCel.png)

### 3. Quick reply

Tipo de conteúdo com botões que permite o envio de respostas rápidas e predefinidas.

Selecione o botão *Respostas rápidas* e preencha os textos que iram nos botões.

![Exemplo de Botao de Respostas rápidas](/img/channels/whatsapp/quick_replies-1.png)

**Observação: lembre-se você pode adicionar até no máximo 3 botões!**

Ao salvar as informações, é possível visualizar uma prévia de como ficará o template.

![Exemplo de template com Botao de Telefone](/img/channels/whatsapp/quick_replies-2.png)

##### Exemplo de como ele será recebido pelo usuário no WhatsApp:

![Exemplo de conteúdo com botão quick reply](/img/channels/whatsapp/quickReply.png)

------

Ainda é possível adicionar estes botões juntamente a outros tipos de conteúdo além de texto, como imagens, vídeos e documentos.


![Exemplo de botão com documento](/img/channels/whatsapp/imagemBotao.png)


## Analisando o status do Message Template

Após a submissão de um Message Template ele ficará **em análise** com o status de **Pendente**. Ao final do processo o template receberá o status de **Aprovado** ou **Reprovado**, caso seja aceito ou rejeitado pelo WhatsApp, respectivamente.

## Utilizando templates aprovados

Para utilizar um message template é necessário ter acesso a duas informações, **namespace** e **element_name**.

![Imagem que demonstra como obter o Namespace e o Element_Name de um Message template](/img/channels/whatsapp/message-templates-info.png)

Para mais informações sobre como utilizar a API do BLiP para enviar Mensagens Ativas (Notificações), [clique aqui](/docs/channels/whatsapp/enviar-notificacao-whatsapp-blip-api).

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>