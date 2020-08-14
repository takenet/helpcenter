---
id: como-adicionar-message-tags
title: Como adicionar tags nas mensagens (Message Tags)
---

> **Observação: O uso de Message Tags usando a API do BLiP está em manutenção. Enquanto isto você pode enviar mensagens ativas no Facebook Messnger através do portal. Para saber como [clique aqui](http://help.blip.ai/docs/en/channels/messenger/como-enviar-mensagens-ativas-messenger-via-portal/)**.

De acordo com a política do Messenger, as empresas devem responder às mensagens do usuário dentro da janela de 24 horas. **Fora da janela de mensagens padrão, é necessário adicionar as tags de mensagem**, que permitem enviar atualizações importantes e relevantes.

Entretanto, **as tags de mensagem não podem ser usadas para enviar conteúdo promocional, incluindo, entre outras, ofertas, ofertas, cupons e descontos**. O uso de tags fora dos casos de uso aprovados, pode **resultar em restrições** na capacidade da página de enviar mensagens. Consulte a [política da plataforma Messenger para mais detalhes](https://developers.facebook.com/docs/messenger-platform/policy-overview).

Abaixo são apresentadas algumas tags juntamente das suas respectivas descrições, acesse a [documentação oficial do Messenger de Message Tags](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags/) para mais informações:

| Tags                   | Descrição                                                                                                                                                |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CONFIRMED_EVENT_UPDATE | Envie lembretes ou atualizações ao usuário para um evento no qual ele se registrou. Essa tag pode ser usada para eventos futuros e eventos em andamento. |
| POST_PURCHASE_UPDATE   | Notifique o usuário sobre uma atualização em uma compra recente.                                                                                         |
| ACCOUNT_UPDATE         | Notifique o usuário sobre uma alteração não recorrente em seu aplicativo ou conta.                                                                       |
| HUMAN_AGENT            | Permite que agentes humanos respondam às perguntas do usuário. As mensagens podem ser enviadas dentro de 7 dias após uma mensagem do usuário.            |

Para realizar o envio dessas mensagens com as tags propriamente ditas, é necessário utilizar a API, especificamente no endpoint [Send message with replacement variable](https://docs.blip.ai/?http#send-message-with-replacement-variable). Para adicionar a tag na mensagem, **basta adicionar a mesma no metadados da requisição**, veja abaixo:

```json
{
  "id": "{randomGUID}",
  "to": "{identity}",
  "type": "text/plain",
  "content": "Hello my friend, come to check out our prices!",
  "metadata": {
          "#messagePurpose": "{tag}"
    } 
}
```
**Substitua os valores indicados** com `{}` em conformidade com a descrição interna, veja abaixo o que cada um representa detalhadamente:

| Indicação       | Descrição                                                                            | Exemplo                              |
|-----------------|--------------------------------------------------------------------------------------|--------------------------------------|
| {randomGUID}    | GUID é um **identificador** que para cada requisição deve ser **único**                      | 94939d06-75d7-4200-a14e-a7a905eb8b21 |
| {user_identity} | Id do contato. O valor pode ser encontrado no Builder na variável `contact.identity` | 123456789@messenger.gw.msging.net    |
| {tag}           | Tag message em conformidade ao envio.                                                | POST_PURCHASE_UPDATE                 |


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>