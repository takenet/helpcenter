---
id: sdk-csharp-armazenando-o-ultimo-acesso-de-um-usuario
title: [SDK C#] Armazenando o último acesso de um usuário
sidebar_label: [SDK C#] Armazenando o último acesso de um usuário
---

Imagine que seu desafio seja armazenar a última vez que seu usuário utilizou um determinado serviço do chatbot.

Para isso, vamos precisar de:

1. Crie o projeto template do SDK C# do BLiP (veja como na [documentação do BLiP](https://docs.blip.ai/?csharp#using-sdk-csharp))
2. Adicione a interface IBucketExtension no construtor de seu MessageReceiver. Obs.: Ele será injetado automaticamente pelo SDK.
3. Utilize o método SetAsync(string resourceId, Document d) para armazenar um documento contendo a data de último acesso.
4. Obs.: Utilize o método GetAsync(string resourceId) para recuperar as informações salvas anteriormente.

O código abaixo mostra como salvar um documento json contendo a data de último acesso.

```csharp
public class BucketMessageReceiver : IMessageReceiver
{
    private readonly IBucketExtension _bucketExtension;
    private readonly IMessagingHubSender _sender;
    public BucketMessageReceiver(IMessagingHubSender sender, IBucketExtension bucketExtension)
    {
        _bucketExtension = bucketExtension;
        _sender = sender;
    }
    public async Task ReceiveAsync(Message message, CancellationToken cancellationToken)
    {
        //Store last access date
        var jsonLastAccess = new JsonDocument();
        jsonLastAccess.Add("lastAccessDate", DateTimeOffset.Now);
        await _bucketExtension.SetAsync(message.From.ToString(), jsonLastAccess);

        //Get last access date
        await _bucketExtension.GetAsync<JsonDocument>(message.From.ToString());
    }
}
```

