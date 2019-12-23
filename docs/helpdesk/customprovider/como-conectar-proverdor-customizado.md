---
id: como-conectar-a-um-canal-de-atendimento-personalizado
title: Como conectar a um canal de atendimento personalizado
sidebar_label: Como conectar a um canal de atendimento personalizado
---

Para realizar um atendimento utilizando um canal de atendimento customizado, existem alguns **pré-requisitos**:

1. Adicionar a URL da API que receberá as informações de atendimento
1. Adicionar uma chave de autenticação, que será enviada em cada requisição para a API, para confirmar a identidade do BLiP (*Opcional*).
1. Escolher se os tickets criados para atendimento utilizarão as regras de atendimento do Blip. Caso utilizem, adicionar as possíveis equipes para o ticket (*Opcional*).

Verificados todos os pré-requisitos acima, qualquer atendimento criado para o chatbot será encaminhado para a API configurada. Para um fluxo de atendimento completo existem as seguintes etapas:

## 1. Recebimento de novo ticket
Uma vez que o bot encaminhe a conversa para o atendimento, *se o canal personalizado estiver ativo*, a URL cadastrada no passo 1 receberá uma requisição POST com a mensagem de um novo ticket criado. (Caso o token de autenticação exista, configurado no passo 2, ele será enviado no cabeçalho da requisição). Exemplo de mensagem de ticket:
```json
{
  "type": "application/vnd.iris.ticket+json",
  "content": {
    "id": "{TICKET_ID}",
    "sequentialId": "{TICKET_SEQUENTIAL_ID}",
    "ownerIdentity": "{BOT_ID}",
    "customerIdentity": "{CUSTOMER_ID}",
    "customerDomain": "{CUSTOMER_DOMAIN}",
    "provider": "Webhook",
    "status": "Waiting",
    "storageDate": "2019-11-08T20:15:59.415Z",
    "rating": 0,
    "unreadMessages": 0,
    "closed": false,
    "customerInput": {
      "type": "text/plain",
      "value": "Hello world!"
    }
  },
  "id": "Ticket:{TICKET_ID}:Waiting",
  "from": "{TICKET_ID}@desk.msging.net/Webhook"
}
```

## 2. Atribuição de um ticket para um atendente
Uma vez que o ticket é criado, fica como responsabilidade da API que receber o ticket tratá-lo e encaminhá-lo para um atendente.

Para que um atendente seja associado a um ticket dentro do BLiP e que o ticket seja atualizado para o status de "*Em Atendimento*", é necessário o envio de um comando para atualizar o ticket dentro da plataforma. Este comando pode ser enviado conforme a [extensão do BLiP Desk](https://docs.blip.ai/#desk) e o seguinte exemplo:
```json
{
  "id": "{COMMAND_ID}",
  "to": "postmaster@desk.msging.net",
  "method": "set",
  "uri": "/tickets/change-status",
  "type": "application/vnd.iris.ticket+json",
  "resource": {
    "id": "{TICKET_ID}",
    "status": "Open",
    "agentIdentity": "{AGENT_ID}"
  }
}
```

## 3. Recebimento de mensagens vindas do cliente
Após a atribuição de um ticket a um atendente, toda mensagem enviada do usuário para o bot será redirecionada para a URL cadastrada no passo 1. A mensagem enviada estará no padrão utilizado pelo protocolo [LIME](https://limeprotocol.org/content-types.html) e pode ser vista na [documentação do BLiP](https://docs.blip.ai/#content-types). Exemplo de mensagem:
```json
{
  "type": "text/plain",
  "content": "Hello world!",
  "id": "fwd:fwd:{MESSAGE_ID}",
  "from": "{TICKET_ID}@desk.msging.net/Webhook"
}
```

## 4. Envio de mensagens vindas do atendente
Dado um ticket que já esta atribuído a um atendente, passa a ser possível enviar mensagens para o cliente e iniciar o atendimento. Para isto, basta mandar uma mensagem para o ticket desejado, com o conteúdo suportado pelo [Protocolo Lime](https://limeprotocol.org/content-types.html) e [documento pelo BLiP](https://docs.blip.ai/#content-types). Um exemplo de mensagem enviada que pode ser enviado para o cliente pelo atendente:
```json
{
  "type": "text/plain",
  "content": "Olá, vou continuar com seu atendimento!",
  "id": "{MESSAGE_ID}",
  "to": "{TICKET_ID}@desk.msging.net/Webhook",
}
```

## 5. Finalização de um ticket
Quando for necessário finalizar um ticket em atendimento, basta enviar o comando de alterar o status do ticket. **Uma vez finalizado o ticket, não é possivel atualizá-lo mais**. Este comando pode ser enviado conforme a [extensão do BLiP Desk](https://docs.blip.ai/#close-a-ticket-as-attendant). Um exemplo de comando:
```json
{
  "id": "{COMMAND_ID}",
  "to": "postmaster@desk.msging.net",
  "method": "set",
  "uri": "/tickets/change-status",
  "type": "application/vnd.iris.ticket+json",
  "resource": {
    "id": "{TICKET_ID}",
    "status": "ClosedAttendant"
  }
}
```
-um-atendimento-atraves-do-blip-desk-6.png)