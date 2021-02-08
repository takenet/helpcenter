---
id: enviando-email-pelo-bot-atraves-do-builder
title: Enviando email pelo bot através do Builder
sidebar_label: Enviando email pelo bot através do Builder
---

Enviar um email é uma tarefa comum para quem está desenvolvendo um bot. Email de controle, alertas ou confirmação de informações são alguns dos cenários comuns para essa demanda. O BLiP abstrai todo o processo de envio e recebimento de emails para o seu bot.

## Qual é o email do meu bot?

No BLiP, todo chatbot já possui, automaticamente, um email. Este email é formado sempre pelo identificador do bot + **@blip.bot**. Assim, um bot criado com o identificador "mailgunportal", terá um email **mailgunportal@blip.bot**. Para saber exatamente qual é o email do seu bot acesse no **Portal** o módulo **Canais > Email**, conforme imagem abaixo:

![Email do Bot](/img/builder/builder-enviando-email-pelo-bot-atraves-do-builder-1.png)

## Como enviar um email utilizando o Builder?

Para enviar um email no Builder é bem simples, basta realizar uma requisição HTTP para a API interna do BLiP. **Antes de enviar o email pense em qual o melhor momento do fluxo da conversa para fazer essa operação.** 

Para exemplificar, vamos imaginar que seu bot faz a coleta de informações de possível leads em uma empresa. Em algum ponto do fluxo você precisará enviar um conteúdo em troca das informações obtidas dos usuários. Esse é um momento interessante para enviar um email, por exemplo.

![Enviando conteúdo](/img/builder/builder-enviando-email-pelo-bot-atraves-do-builder-2.png)

Após definido em qual ponto do fluxo o email será disparado, acesse o bloco correspondente e crie uma ação de **Requisição HTTP** (entrada ou saída, de acordo com o seu contexto) para a API do BLiP com as seguintes informações:

**Nome da ação:** Envio de email confirmação

**Método da requisição:** POST

**URL:** <https://http.msging.net/messages>

**Cabeçalhos:**

* **Key:** `Authorization`
* **Value:** `Key API-KEY-BOT`
* **Corpo:** JSON com uma mensagem, de acordo com o protocolo LIME, com o tipo desejado ([veja aqui](https://docs.blip.ai/#content-types) todas as opções de conteúdos).

```json
{
   "to":"xpto%40xpto.com@mailgun.gw.msging.net",
   "type":"text/plain",
   "content":"Olá {{contact.name}}, acesse seu ebook no link {{link}}"
}
```

Repare que o destinatário do email deve ser informado no campo **to** do JSON que será enviado para a API do BLiP (destacado em azul). Neste exemplo, o email do destinatário é: **xpto@<span>xpto.com</span>**. Como todo *Node* do LIME possui o caracter **@**, é preciso subsituir o @ do email por seu código ASCII correspondente (**%40**). Além do email do destinatário é preciso identificar o canal de email (**@mailgun.<span>gw.msging.net</span>**), para que o BLiP saiba enviar sua mensagem corretamente.

Para enviar um email para **abcdef@<span>foo.bar</span>** o campo **to** do JSON será: **abcdef%<span>40foo.bar</span>@<span>mailgun.gw.msging.net</span>**

Além de montar a mensagem que será enviada por email e o seu respectivo destinatário, você precisará também da <u>*API-KEY-BOT*</u>. Para saber onde encontrar a API key do seu bot [clique aqui](/docs/api-sdks/como-encontrar-a-api-key-do-meu-bot).

![Enviando email](/img/builder/builder-enviando-email-pelo-bot-atraves-do-builder-3.png)

***Observação:*** *Atualmente o canal de email suporta apenas o tipo de conteúdo texto.*

## Como enviar um email utilizando um dos SDKs?

Para enviar um email através de um dos SDKs dos BLiP é muito fácil, basta enviar uma mensagem, conforme o exemplo abaixo lembrando de substituir no campo **to** o email do destinatário.

### Exemplo:

Enviando um email para **xpto@xpto.com** com o conteúdo "Hello World":

#### SDK JS

```javascript
client.sendMessage({
    id: Lime.Guid(),
    type: "text/plain",
    to: "xpto%40xpto.com@mailgun.gw.msging.net",
    content: "Hello World"
});
```

#### SDK C#

```csharp
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Lime.Messaging.Contents;
using Lime.Protocol;
using Take.Blip.Client;

//Replying a received message with a simple text message.
public class PlainTextMessageReceiver : IMessageReceiver
{
    private readonly ISender _sender;
    private readonly Settings _settings;

    public PlainTextMessageReceiver(ISender sender, Settings settings)
    {
        _sender = sender;
        _settings = settings;
    }

    public async Task ReceiveAsync(Message message, CancellationToken cancellationToken)
    {
        var document = new PlainText {Text = "Welcome to our service! How can I help you?"};
        await _sender.SendMessageAsync(document, Node.Parse("xpto%40xpto.com@mailgun.gw.msging.net"), cancellationToken);
    }
}
```


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>