---
id: sdk-csharp-com-suporte-a-dotnet-core
title: SDK C# com suporte a .NET Core
sidebar_label: SDK C# com suporte a .NET Core
---

Lançamos na semana passa uma nova versão no [SDK C# do BLiP](https://docs.blip.ai/#using-sdk-csharp), que permite a construção de aplicações C# multiplataforma (Windows, Linux e Mac) e que podem ser facilmente hospedados na nuvem, inclusive em [containers Docker](https://www.docker.com/). Isso é possível graças a portabilidade do [.NET Core](https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/intro) no qual o mesmo é baseado.

Consulte a [documentação do BLiP](https://docs.blip.ai/#using-sdk-csharp) para saber como começar a utilizá-lo.

## Migrando do antigo SDK

Para realizar a migração de um chatbot que utiliza a versão antiga do SDK (baseada no pacote `Takenet.MessagingHub.Client`) é necessário realizar os seguintes passos:

* Criar um novo projeto utilizando o template do BLiP, utilizando o comando dotnet new blip-console (como descrito no menu lateral direito na seção SDK C# na [documentação do BLiP](https://docs.blip.ai/?csharp#using-sdk-csharp)).
* Copiar as classes e o arquivo application.json para o novo projeto e instalar as demais dependências (exceto do SDK do BLiP, que já está instalada no template).
* Substituir o nome das interfaces e classes antigas para o SDK novo (mapeado abaixo).
* Ajustar as chamadas dos métodos com assinaturas alteradas (mapeado abaixo).
* Não é possível reutilizar os projetos antigos pois os mesmos se baseiam na versão antiga do `.csproj` do .NET, que é incompatível com projetos .NET Standard / .NET Core utilizados no novo SDK do BLiP.

## Mapeamento de tipos

    Antigo: Takenet.MessagingHub.Client.Sender.IMessagingHubSender  
        Novo: Take.Blip.Client.ISender

<pre></pre>

    Antigo: Takenet.MessagingHub.Client.Listener.IMessageReceiver   
        Novo: Take.Blip.Client.IMessageReceiver 

<pre></pre>

    Antigo: Takenet.MessagingHub.Client.Listener.INotificationReceiver  
        Novo: Take.Blip.Client.INotificationReceiver

<pre></pre>

    Antigo: Takenet.MessagingHub.Client.Listener.ICommandReceiver  
        Novo: Take.Blip.Client.ICommandReceiver 

<pre></pre>

    Antigo: Takenet.MessagingHub.Client.IMessagingHubClient 
        Novo: Take.Blip.Client.IBlipClient 

<pre></pre>

    Antigo: Takenet.MessagingHub.Client.MessagingHubClientBuilder 
        Novo: Take.Blip.Client.BlipClientBuilder 

<pre></pre>

    Antigo: Takenet.MessagingHub.Client.Host.* 
        Novo: Take.Blip.Client.Activation.* 

<pre></pre>

    Antigo: Takenet.MessagingHub.Client.Extensions.* 
        Novo: Take.Blip.Client.Extensions.* 

<pre></pre>

    Antigo: Takenet.MessagingHub.Client.Listener.* 
        Novo: Take.Blip.Client.Receivers.* 

## Mapeamento de métodos

    Antigo: IMessagingHubSender.SendCommandAsync(Command) 
        Novo: Take.Blip.Client.ISender.ProcessCommandAsync(Command, CancellationToken)

<pre></pre>

    Antigo: IMessagingHubSender.SendCommandResponseAsync(Command) 
        Novo: Take.Blip.Client.ISender.SendCommandAsync(Command, CancellationToken) 

**Observação**: Na maior parte dos métodos da nova versão, é obrigatório informar um `cancellationToken` para garantir o cancelamento correto das operações assíncronas e evitar o congelamento do processo. Neste caso, passe sempre o `cancellationToken` recebido nos receivers.

## Executando

**Observação**: Na maior parte dos métodos da nova versão, é obrigatório informar um `cancellationToken` para garantir o cancelamento correto das operações assíncronas e evitar o congelamento do processo. Neste caso, passe sempre o `cancellationToken` recebido nos *receivers*.

Mas caso deseje que seu chatbot seja ainda um *Class library* por qualquer motivo, utilize o template `blip-console` ao criar o projeto e o altere para *Class library*. Para executar o chatbot neste caso, será necessário um outro projeto como host.