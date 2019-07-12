---
id: integ-agendando-uma-mensagem-scheduler
title: Agendando uma mensagem com a extensão scheduler
sidebar_label: Agendando uma mensagem com a extensão scheduler
---

Ao criar um chatbot de lembretes, é imprescindível a funcionalidade de agendamento de mensagem. Imagine que o usuário enviou uma mensagem para o chatbot com a seguinte sentença.

Lembrar-me de tomar remédio em 10 minutos

Neste caso, seu chatbot precisa enteder o contexto da conversa, extrair as infromações de comando e finalmente agendar uma mensagem para os próximos 10 minutos. Para entender o contexto e extrair as inforamações necessárias você pode utilizar o [TextC](https://github.com/takenet/textc-csharp) por exemplo. Os artigos[ Chatbots e a importância do contexto](https://help.blip.ai/hc/pt-br/articles/360000664031) e [Construindo um chatbot assistente virtual utilizando o Textc](https://help.blip.ai/hc/pt-br/articles/360000648192) explicam como utilizar essa ferramenta, na difícil e importante tarefa de entender o contexto de uma conversa.

Neste artigo, Vamos nos preocupar apenas com o agendamento da mensagem.

Para isso, serão necessários duas modificações em seu MessageReceiver:

* Adicione a interface *ISchedulerExtension* no construtor de seu MessageReceiver. Obs.: Ele será injetado automaticamente pelo SDK
* Utilize o método *ScheduleMessageAsync(Meesage m, DateTimeOffset d)* para agendar sua mensagem

O código abaixo apresenta a utilização da extensão de agendamento.

```csharp
//Note that I just changed the MessageReceiver class name from PlainTextMessageReceiver to SchedulerExtensionMessageReceiver
public class SchedulerExtensionMessageReceiver : IMessageReceiver
{
    private readonly ISchedulerExtension _schedulerExtension;
    private readonly IMessagingHubSender _sender;

    public SchedulerExtensionMessageReceiver(IMessagingHubSender sender, ISchedulerExtension schedulerExtension)
    {
        _schedulerExtension = schedulerExtension;
        _sender = sender;
    }

    //Schedule a message to next 10 minutes
    public async Task ReceiveAsync(Message receivedMessage, CancellationToken cancellationToken)
    {
        var schedullingDate = DateTimeOffset.Now.AddMinutes(10);
        var messageContent = "tomar remédio";

        var message = new Message
        {
            Id = Guid.NewGuid().ToString(),
            To = receivedMessage.From,
            Content = new PlainText { Text = messageContent }
        };

        await _schedulerExtension.ScheduleMessageAsync(message, schedullingDate);
    }
}
```
