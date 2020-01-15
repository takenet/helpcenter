---
id: criando-um-chatbot-curriculo-usando-api-http
title: Criando um chatbot 'currículo' usando API HTTP
sidebar_label: Criando um chatbot 'currículo' usando API HTTP
---

Através da plataforma [blip.ai](https://blip.ai) você consegue criar chatbots nos principais canais de mensageria do mercado, como [Facebook Messenger](https://www.messenger.com/), [Telegram](https://telegram.org/), [Skype](https://www.skype.com/pt-br/), SMS, WhatsApp ou através do BLiP Chat, canal do próprio BLiP.

Através da plataforma é possível construir bots utilizando um dos SDK’s [C#](https://docs.blip.ai/#using-sdk-csharp) e [JavaScript](https://docs.blip.ai/#using-sdk-javascript), ou ainda através de requisições HTTP utilizando o [Webhook](https://docs.blip.ai/#using-http) do BLiP. Nestes modelos o desenvolvedor tem total flexibilidade para incluir o chatbot em sua aplicação. Existe ainda uma outra forma de construir bots no BLiP através do Builder, ferramenta de construção visual de bots.

De forma simplista, um Webhook é a exposição de um endpoint http em sua aplicação para possibilitar que API’s de terceiros faça requisições em seus serviços. Nesta estrutura o Blip.ai realiza requisições em um endpoint definido pelo desenvolvedor do chatbot sempre que novas mensagens ou notificações estiverem disponíveis. Outra vantagem é não estar amarrado a nenhuma linguagem específica para construir seu chatbot.

O objetivo deste artigo é demonstrar o passo a passo para a criação e publicação de um chatbot **currículo**, através do [blip.ai](https://blip.ai), utilizando o modelo de integração Webhook. Para isso, será implementado um chatbot simples que responderá a alguns comandos básicos sobre informações de um profissional hipotético.

## Sobre o chatbot ‘currículo’

Quase todo profissional possui um currículo no formato tradicional: folha A4, tópicos relevantes, preferencialmente com no máximo 2 laudas e algumas seções básicas como informações gerais, formação acadêmica, experiência profissional, principais habilidades e alguma proficiência em línguas. Existem também versões menos tradicionais no formato digital, como portfólios, jogos e vídeos explicativos.

Recentemente, com a explosão dos chatbots como nova interface de interação entre pessoas e organizações, surgiram alguns trabalhos que utilizam esta nova tendência conversacional para apresentar suas experiências profissionais. Destaco aqui os trabalhos de [Esther Crawford](https://medium.com/the-mission/how-i-turned-my-resume-into-a-bot-and-how-you-can-too-f03847352baa#.3hw9lyi3a) e [Caio Calado](https://medium.com/@caio_caladoo/ola-caiobot-meu-linkedin-como-um-chatbot-no-messenger-9db6fa736f70#.4awx67ut0) como referências para este assunto.

Assim, nosso objetivo aqui é representar, a partir de um chatbot, as informações mais importantes sobre a carreira de um profissional.

Para simplificar vamos reduzir o escopo do chatbot para tratar apenas os seguintes cenários:

1. **Envio de informações gerais**: Nome, idade, telefone, email e site.
2. Envio de **informações** sobre **formação acadêmica**.
3. Envio das **principais experiências profissionais**.
4. Envio de uma **lista** com as **principais habilidades**.

Embora seja possível, não vamos nos preocupar, inicialmente, com uma interpretação elaborada de linguagem natural. O artigo do André Bires ([Construindo um chatbot assistente virtual utilizando o Textc](/docs/api-sdks/utilizando-textc-construir-conversa)) dá algumas dicas de como utilizar a biblioteca Textc para melhorar a interpretação de texto de seu chatbot.

## Criando seu chatbot

Antes de mais nada, precisamos criar um novo contato (chatbot) na plataforma [blip.ai](https://blip.ai).

1. Acesse a plataforma, faça login e clique no botão **Criar Chatbot**.
2. Escolha a opção Criar do zero.
3. Preencha as informações básicas de seu chatbot (nome e foto).

## Criando uma API para receber as requisições do blip

Para este artigo apresentarei uma api desenvolvida em C# utilizando o framework [ASP.NET Web API](https://dotnet.microsoft.com/apps/aspnet/apis). Entretanto tenha em mente que a tecnologia escolhida para construir a API não importa, escolha aquela que lhe for mais conveniente. Para ver um outro exemplo de webhook, utilizando uma API escrita em JavaScript usando Node.JS, veja este [post](/docs/api-sdks/criando-um-bot-para-busca-de-imagens-no-bing).

* Crie um projeto de uma aplicação *ASP.NET Web API* no *VisualStudio*

O mínimo que precisamos fazer agora é criar dois endpoints na API, um para receber as mensagens enviadas pelos usuários de seu chatbot e outra para receber notificações.

* Crie um *Controller* para Mensagens, com uma action **Post**

```csharp
public class MessagesController : ApiController
{
    // POST api/messages
    public async Task<IHttpActionResult> Post(JObject jsonObject)
    {
        Console.WriteLine($"Message Received: {jsonObject}");

        return Ok();
    }
}
```

* Crie outro *Controller* para Notificações, com uma action **Post**

```csharp
public class NotificationsController : ApiController
{
    // POST api/notifications
    public void Post([FromBody]JObject jsonObject)
    {
        Console.WriteLine($"Received Notification  {jsonObject}");
    }
}
```

## Publicando a API no Azure

Mais uma vez essa é uma escolha pessoal. Você pode publicar sua API onde se sentir mais confortável, no Azure, AWS, Heroku ou na infraestrutura privada de sua empresa. A única coisa que precisamos é de um endereço externo, público e válido. A API criada neste artigo foi publicada no endereço <http://resumebottemplate.azurewebsites.net>.

### Configuração dos endpoints no portal do BLiP

1. Vá até o portal do BLiP, selecione seu chatbot e clique **Configurações** na parte superior direita.

2. Clique no sub menu **Informações de conexão** localizado no canto esquerdo.

3. Escolha a opção Conectar usando HTTP

4. Insira os endpoints de sua API nos campos ‘Url de Mensagens’ e ‘Url de Notificações’ (por exemplo: <http://resumebottemplate.azurewebsites.net/api/messages> e <http://resumebottemplate.azurewebsites.net/api/notifications> no meu caso).

![Configuração dos endpoints no portal do BLiP](/img/api-sdks/api-sdks-criando-um-chatbot-curriculo-usando-api-http-1.png)

Pronto, seu chatbot já está devidamente configurado e pronto para receber a regra de resposta das mensagens.

## Implementado as respostas de seu chatbot

Conforme destacado anteriormente, nosso chatbot não terá uma regra muito complexa. O objetivo aqui é apenas provocar o leitor para mais uma aplicabilidade dos chatbots. Neste sentido, o chatbot será capaz de interpretar comandos de texto com as seguintes sentenças:

| Sentenças (palavras aceitas)           | Ações                                            | 
|----------------------------------------|--------------------------------------------------|
| info - informação - about              | Envia informações gerais.                        |
| formação - formacao - education        | Envia dados sobre formação acadêmica.            |
| experiência - experiencia - experience | Envia as principais experências profissionais.   |
| habilidade - skills                    | Envia uma lista com algumas habilidades.         |

Pensando nisso seu chatbot precisará, logo que receber uma mensagem, identificar se o conteúdo enviado bate com algum dos comandos listados acima. Mas antes de começar lembre-se que **todo conteúdo enviado (ou recebido) para o chatbot** deve seguir o **padrão dos tipos aceitos pelo BLiP**. Neste [link](https://docs.blip.ai/#content-types) é possível encontrar todas as opções disponíveis. Para este artigo vamos utilizar apenas o tipo **texto**, conhecido como [PlainText](https://docs.blip.ai/#plain-text).

```csharp
public class MessagesController : ApiController
{
    public MessagesController()
    {
    }

    // POST api/messages
    public async Task<IHttpActionResult> Post(JObject jsonObject)
    {
        Console.WriteLine($"Message Received: {jsonObject}");

        var content = message["content"].Value<string>();
        var from = message["from"].Value<string>();
        var messageContent = "";

        switch (content.Trim())
        {
        case "info":
        case "informação":
        case "about":
            messageContent = "Meu nome é Jonh Lorem Foo, eu tenho 25 anos. \n\nVocê pode me encontrar por telefone: +55 31 99827 1039 ou através do meu email: loremfoo@ipsum.com";
            break;

        case "formação":
        case "formacao":
        case "education":
            messageContent = "*Mestre em Física Nuclear pela NASA\n*Graduado em Economia pela Faculdade de Harvard - USA";
            break;

        case "experiência":
        case "experiencia":
        case "experience":
            messageContent = "Possuo 10 anos de experiência em análise de dados complexos. Meus últimos trabalhos foram para:\n\nGoogle\nFacebook\nNSA\nMicrosoft";
            break;

        case "habilidade":
        case "skills":
            messageContent = "Principais habilidades: \n\nComunicador\nExtrovertido\nGosta de trabalhar em equipe\nProgramação Android";
            break;

        default:
            //default message if user send a unknow command
            messageContent = "Oi, eu sou o chatbot do Jonh :) \nPosso lhe passar várias informações profissionais sobre ele. \n\nSe quiser saber mais me mande um dos comandos abaixo: \n\n about \n education \n experience \n skills!";
            break;
        }

        var replyMessage = new
        {
            id = Guid.NewGuid(),
            to = from,
            type = "text/plain",
            content = messageContent
        };

        await ReplyMessageAsync(replyMessage);

        return Ok();
    }
}
```

Caso a mensagem enviada possua alguma das sentenças o chatbot deverá responder o conteúdo específico daquele comando. Para isso será necessário enviar uma mensagem de resposta para o usuário com as informações referentes a pergunta.

O método **ReplyMessageAsync(string text)** envia uma mensagem de resposta com um texto qualquer.

```csharp
public class MessagesController : ApiController
{
    private readonly WebClientService webClientService;

    public MessagesController()
    {
        webClientService = new WebClientService(new Uri("https://msging.net/messages"), "<your-api-key-here>");
    }
            
    // POST api/messages
    public async Task<IHttpActionResult> Post(JObject message)
    {
        ... Código de tratamento das mensagens recebidas pelo chatbot 
    }

    private async Task ReplyMessageAsync(object message)
    {
        var response = await webClientService.SendMessageAsync(message);
    }
}
```

Para isso, foi utilizado um client Http simples que executa um post em uma url específica da plataforma BLiP. Note que para enviar a resposta é necessário obter a Url de resposta e a chave de autenticação no portal BLiP. Vá nas **Configurações** de seu chatbot, clique na seção **Informações de conexão**, no menu lateral esquerdo, e copie as url’s para envio de mensagens/notificações e a chave de autenticação de seu bot. Veja a imagem abaixo.

![Informações de conexão](/img/api-sdks/api-sdks-criando-um-chatbot-curriculo-usando-api-http-2.png)

Finalmente, se o conteúdo recebido não for compatível com nenhuma das sentenças aceitas (default case) o chatbot responderá uma mensagem padrão explicando ao usuário quais são os comandos aceitos.

## Publicando e testando seu chatbot

Para testarmos nossa aplicação vou publicá-la no Facebook Messenger.

1. Para isso, basta ir até o portal blip.ai e clicar na opção **Publicações**, no menu lateral esquerdo.
2. Depois escolha o seu canal de preferência (por exemplo, *Facebook Messenger*).
3. Siga o passo a passo indicado e seu chatbot já estará disponível.

A imagem abaixo mostra uma interação simples com o chatbot criado.

![Interação com o chatbot criado](/img/api-sdks/api-sdks-criando-um-chatbot-curriculo-usando-api-http-3.jpg)

[Clique aqui](https://m.me/744908842324712) para testar o ResumeBotTemplate no Facebook Messenger.

## Conclusão

Neste artigo discutimos um pouco sobre uma aplicação válida para um chatbot, um currículo digital. De forma rápida e simples foi apresentado um passo a passo de como criar, configurar e publicar um *chatbot*, usando *Webhook*, através do [blip.ai](https://blip.ai).

Todo o código desenvolvido para este artigo está disponível no [Github](https://github.com/takenet/messaginghub-docs/tree/master/samples/webhook/ResumeBot) com informações *fake*. Caso tenha gostado sinta-se a vontade para utilizá-lo como template para criar o seu chatbot currículo. Nos próximos dias continuarei evoluindo este chatbot, em meu [repositório](https://github.com/ravpacheco/resumebot). Fique atento, para cada nova versão publicarei novos *posts*.