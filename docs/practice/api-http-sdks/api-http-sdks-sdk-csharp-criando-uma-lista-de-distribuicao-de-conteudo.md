---
id: api-http-sdks-sdk-csharp-criando-uma-lista-de-distribuicao-de-conteudo
title: [SDK C#] Criando uma lista de distribuição de conteúdo
sidebar_label: [SDK C#] Criando uma lista de distribuição de conteúdo
---

Para alguns chatbots, a distribuição de conteúdo é a principal funcionalidade. O chatbot de uma empresa varejista, por exemplo, precisa enviar mensalmente cupons de promoções para um determinado perfil de clientes. Para isso, é necessário separar os clientes que devem receber os cupons daqueles que não devem e, finalmente, enviar as mensagens para o grupo correto.

Para resolver este problema basta utilizar a extensão de listas.

1. Crie o projeto template do SDK C# do BLiP (veja como na [documentação do BLiP](https://docs.blip.ai/?csharp#using-sdk-csharp)).
2. Adicione a interface IBroadcastExtension no construtor de seu MessageReceiver. Obs.: Ele será injetado automaticamente pelo SDK.
3. Crie uma nova lista de distribuição utilizando o método CreateDistributionListAsync(string listName).
4. Adicione um novo usuário à sua lista com o método AddRecipientAsync(string listName, Identity recipientIdentity).
5. Finalmente, envie uma mensagem para todos os usuários de sua lista com o método SendMessageAsync(string listName, Document d).

```csharp
public class BroadcastMessageReceiver : IMessageReceiver
{
    private readonly IBroadcastExtension _broadcastExtension;
    private readonly IMessagingHubSender _sender;
    public BroadcastMessageReceiver(IMessagingHubSender sender, IBroadcastExtension broadcastExtension)
    {
        _broadcastExtension = broadcastExtension;
        _sender = sender;
    }
    public async Task ReceiveAsync(Message message, CancellationToken cancellationToken)
    {
        var listName = "couponUsers";
        //Add a new distribution list with name couponUsers
        await _broadcastExtension.CreateDistributionListAsync(listName);
        //Add some users to couponUsers list
        await _broadcastExtension.AddRecipientAsync(listName, message.From.ToIdentity());
        //Send a message to couponUsers list users
        await _broadcastExtension.SendMessageAsync(listName, new PlainText { Text = "Olá você ganhou um novo cupom de descontos" });
    }
}
```