---
id: api-sdks-event-track-sdk-csharp
title: [SDK C#] Track de Usuários que utilizaram uma determinada funcionalidade
sidebar_label: [SDK C#] Track de Usuários que utilizaram uma determinada funcionalidade
---

Pense na tarefa de trackear quantos usuários utilizaram uma determinada funcionalidade (ou enviaram um determinado conteúdo) para o chatbot.

Para isso, vamos utilizar a extensão de análise de eventos:

1. Crie o projeto template do SDK C# do BLiP (veja como aqui)
2. Adicione a interface IEventTrackExtension no construtor de seu MessageReceiver. Obs.: Ele será injetado automaticamente pelo SDK
3. Utilize o método AddAsync(string eventName, string eventAction) para computar uma nova incidência de um evento.

Veja o exemplo abaixo

```csharp
public class EventTrackMessageReceiver : IMessageReceiver
{
    private readonly IEventTrackExtension _eventTrackExtension;
    private readonly IMessagingHubSender _sender;
    public EventTrackMessageReceiver(IMessagingHubSender sender,
    IEventTrackExtension eventTrackExtension)
    {
        _sender = sender;
        _eventTrackExtension = eventTrackExtension;
    }
    public async Task ReceiveAsync(Message message,
    CancellationToken cancellationToken)
    {
        await _eventTrackExtension.AddAsync("featureX", "used");
    }
}
```
