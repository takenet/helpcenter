---
id: aux-utilizando-textc-construir-conversa
title: Utilizando o Textc para construir uma conversa contextual
sidebar_label: Utilizando o Textc para construir uma conversa contextual
---

No [artigo anterior](http://blog.blip.ai/2016/10/17/chatbots-com-textc.html), apresentamos o [Textc](https://github.com/takenet/textc-csharp) e como utilizá-lo para reconhecer comandos básicos dos usuários. Uma funcionalidade importante da biblioteca é o contexto, que provê **informações que podem ser utilizadas para complementar a entrada do usuário** e satisfazer sintaxes.

Pensando no chatbot da pizzaria, imagine que ele devesse suportar um comando com a seguinte estrutura:

`Mande uma pizza grande sabor Marguerita para a Rua Acme, 1234`

Precisaríamos da seguinte **sintaxe**:

`:Word?(quero,mande,solicito) :Word?(uma) :Word?(pizza) size:Word(pequena media,média,grande,gigante) :Word?(sabor,de) flavor:Word(marguerita,pepperoni,calabresa) :Word?(para) :Word?(à,a,o) address:Text`

As variáveis que temos são:

* **size**: O tamanho da pizza
* **flavor**: Opção de sabor
* **address**: Endereço para entrega

E o seguinte método para processar o pedido:

```csharp
public Task<string> ConfirmOrderAsync(string size, string flavor, string address, IRequestContext context)
{
    // 1. Cria e armazena o pedido
    var order = new Order
    {
        Size = size,
        Flavor = flavor,
        Address = address
    };
    var orderId = SaveOrder(order);

    // 2. Salva o pedido no contexto
    context.SetVariable(nameof(orderId), orderId);

    // 3. Envia a mensagem de confirmação
    var builder = new StringBuilder();
    builder.AppendLine($"Seu pedido ({orderId}):");
    builder.AppendLine($"- Sabor: {flavor}");
    builder.AppendLine($"- Tamanho: {size}");
    builder.AppendLine($"- Endereço para entrega: {address}");
    builder.AppendLine();
    builder.AppendLine("Você confirma ?");

    return Task.FromResult(builder.ToString());
}
```

No segundo passo, armazenamos no contexto as informações do pedido do usuário. Dessa forma, caso o cliente envie apenas `quero uma pizza na` próxima mensagem, as variáveis faltantes serão extraídas do contexto, ocorrendo o match. Isso é válido mesmo se o cliente enviar uma entrada parcial, como `quero uma pizza calabresa` ou `quero uma pizza media de pepperoni`.

E por último, precisamos tratar a negativa do cliente, que deve cancelar o pedido e limpar os dados do contexto. A sintaxe ficaria assim:

`:Word(nao,não) orderId:Long`

E a implementação do método:

```csharp
public Task<string> CancelOrderAsync(long orderId, IRequestContext context)
{
    DeleteOrder(orderId);
    context.Clear();
    return Task.FromResult("O pedido foi cancelado e suas preferências removidas");
}
```

Executando o exemplo, temos:

```html
> Mande uma pizza grande sabor Marguerita para à Rua Acme, 1234
Seu pedido:
- Sabor: marguerita
- Tamanho: grande
- Endereço para entrega: rua acme 1234
Você confirma?

> sim
Seu pedido foi realizado com sucesso!
Ah, salvamos suas preferências para os próximos pedidos :)

> quero uma pizza calabresa
Seu pedido:
- Sabor: calabresa
- Tamanho: grande
- Endereço para entrega: rua acme 1234
Você confirma?

> sim
Seu pedido foi realizado com sucesso!
Ah, salvamos suas preferências para os próximos pedidos :)

> quero uma pizza média de pepperoni
Seu pedido:
- Sabor: pepperoni
- Tamanho: média
- Endereço para entrega: rua acme 1234
Você confirma?

> não
O pedido foi cancelado e suas preferências removidas

> quero uma pizza marguerita
There's no match for the specified input
```

Apesar de ser um exemplo bastante simples, ele ilustra como o contexto pode facilitar a navegação por parte do usuário.

Os códigos do Textc deste e de outros exemplos estão [no Github](https://github.com/takenet/textc-csharp/tree/master/src/Takenet.Textc.Samples).
