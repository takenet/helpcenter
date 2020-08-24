---
id: recebendo-solicitacoes-de-agente-humano
title: Recebendo Solicitações de Atendimento Humano no Business Messages
sidebar_label: Recebendo Solicitações de Atendimento Humano no Business Messages
---

## Solicitando atendimento humano

Ao criar o seu agente no Google Business Messages (GBM) você pode definir se ele terá atendimento automatizado (bot), atendimento humano, ou ambos. Se você optou por **ambos**, os usuários do GBM podem pedir para falar com um ser humano durante uma conversa com a sua marca.

Ao selecionar esta opção, o seu cliente está dizendo que deseja conversar com um ser humano, e não um chatbot. Isso pode acontecer quando o chatbot não está conseguindo solucionar o problema, por exemplo.

![](/img/channels/google-bm/solicitar-agente-humano-aplicativo.png)


## Tratando solicitações de atendimento humano em seu contato inteligente (bot)

Quando seu cliente selecionar a opção da captura de tela acima, seu contato inteligente (bot) receberá uma mensagem parecida com esta:

```JSON
{
    "id": "ab825f5e-0fa7-4bf3-a733-b3870bf9373a",
    "from": "79d9abe2-d1c3-424b-9bb7-7a55b79380a9@businessmessages.gw.msging.net",
    "to": "seubot@msging.net",
    "type": "application/vnd.iris.human-agent-request",
    "content": "True"
}
```

A parte mais importante desta mensagem é o seu **tipo**.

Se você estiver utilizando o Builder para construir o seu contato inteligente, você deverá utilizar a variável **{{input.type}}** para saber que se trata de uma solicitação de atendimento humano.

Quando uma mensagem do tipo `application/vnd.iris.human-agent-request` for recebida, você poderá criar condições de saída para encaminhar o seu cliente para seus atendentes. Você ainda pode utilizar a variável **{{input.type}}** nas ações do seu fluxo, para validar se há atendentes disponíveis no momento.
Veja no exemplo abaixo como seu fluxo poderá ficar:

![](/img/channels/google-bm/solicitar-agente-humano-condicao-saida.png)

Você não é obrigado a encaminhar o seu cliente para o atendimento humano sempre que ele solicitar. Entretanto o Google sugere que quando o seu contato inteligente não puder fazer isso, você deve informar ao cliente quando um ser humano estará disponível.

> **Lembre-se:** O seu cliente pode solicitar atendimento humano a qualquer momento durante a conversa. Leve isto em consideração no desenvolvimento do seu contato inteligente. Caso você não faça a tratativa corretamente, seu cliente poderá ter uma experiência ruim ao conversar com sua marca.

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>