---
id: criando-um-bot-para-busca-de-imagens-no-bing
title: Criando um bot para busca de imagens no BING
sidebar_label: Criando um bot para busca de imagens no BING
---

Neste tutorial vamos usar o [BING](https://azure.microsoft.com/pt-br/services/cognitive-services/bing-news-search-api/) para criar um chatbot que busca imagens de acordo com o texto enviado utilizando a API HTTP do BLiP.

## 1. Criando o projeto

Para este projeto iremos utilizar o **node.js**. Para criar um projeto node, basta criar um diretório qualquer e executar o comando `npm init` neste diretório.

Após criado o projeto node, precisamos instalar os pacotes de dependências que iremos utilizar. Para utilizar Webhooks, precisamos fazer chamadas HTTP no endereço <https://msging.net/messages>. Serão necessários os pacotes `request` e `request-promise`. Além disto, para enviar mensagens via HTTP, precisamos gerar *uuids* válidos, portanto será necessário utilizar o pacote `uuid`.

Para instalar estas dependências basta executar o seguinte comando:

```bash
npm install --save request request-promise uuid
```

Para mais informações acessar a [documentação](https://docs.blip.ai/).

## 2. Configurando o chatbot

Como estamos criando um chatbot que utilizará os recursos Webhook do [blip.ai](https://blip.ai/), precisamos obter uma chave de acesso e urls para recebimento e envio de mensagens. Para isto, acesse o [portal](https://blip.ai/) e registre o seu contato utilizando a opção Webhook. Após a criação do seu contato você encontrará as informações necessárias para o desenvolvimento do bot no menu configuração. Guarde o **Cabeçalho de autenticação**, pois ele será necessário para enviar mensagens.

Com isso já temos um chatbot conectado à plataforma que consegue enviar e receber mensagens. Para habilitar o seu contato nos canais, basta acessar o menu **Publicações** e escolher o canal onde deseja publicar seu contato (no site [blip.ai](https://blip.ai/) há um guia sobre a ativação dos canais).

## 3. Ativando a Bing News Search API

Agora precisamos ativar a sua conta da Microsoft para usar o serviço Bing News Search API. Isto pode ser feito acessando-se [esta url](https://azure.microsoft.com/pt-br/services/cognitive-services/bing-news-search-api/). Clique em ***Let's go*** e selecione Bing Search. Após aceitar os termos você terá acesso à sua chave.

## 4. Mão na massa

Precisamos criar um servidor HTTP Node que recebe as mensagens através da url para receber mensagens que configuramos no passo 2.

```javascript
const SERVER_PORT = process.env.PORT || 3000;

let server = http.createServer((req, res) => {
    // Por definição, no pacote http, o corpo da requisição é recebido separado
    // em chunks, portanto precisamos reconstruí-lo.
    let body = [];
    req.on('data', (chunk) => body.push(chunk));

    req.on('end', () => {
        // Converte a string recebida como corpo da requisição para uma mensagem JSON
        let message = JSON.parse(body.toString());

        // Trata as mensagens recebidas
        handleMessage(req);

        res.end();
    });
});

server.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`);
});
```

Como próximo passo, precisamos abstrair o envio de mensagens. Para isto vamos criar uma classe `MessagingHubHttpClient` que, suprida com a urls para envio de mensagens e a chave de acesso do chatbot, envia mensagens através de requisições HTTP:

```javascript
let request = require('request-promise');
const MESSAGES_URL = 'https://msging.net/messages';

class MessagingHubHttpClient {

    // O cabeçalho de autenticação obtido ao configurar o Bot será passado para este construtor
    constructor(authHeader) {
        this._authHeader = `Key ${authHeader}`;
    }

    sendMessage(message) {
        return request({
            method: 'POST',
            uri: MESSAGES_URL,
            headers: {
                'Content-type': 'application/json',
                'Authorization': this._authHeader
            },
            body: message,
            json: true
        });
    }
}
```

O que nos resta agora é efetivamente tratar as mensagens recebidas, isto é, definir a função `handleMessage` utilizada no servidor HTTP definido acima. Porém, antes, iremos definir uma função para buscar imagens utilizando a api de busca de imagens do Bing:

```javascript
const BING_SERVICE_URI = 'https://api.cognitive.microsoft.com/bing/v5.0/images/search';

function searchImage(query) {
    return request({
        method: 'GET',
        uri: `${BING_SERVICE_URI}?q=${query}&mkt=pt-br`,
        headers: {
            'Ocp-Apim-Subscription-Key': this._bingApiKey
        },
        json: true
    }); 
} 
```
```javascript
// Substitua {SEU_CABECALHO_DE_AUTENTICACAO} pelo cabeçalho de autenticação obtido ao criar seu Bot no Painel Blip
let client = new MessagingHubHttpClient('{SEU_CABECALHO_DE_AUTENTICACAO}');

function handleMessage(message) {
    if (message.type !== 'text/plain') {
        return;
    }

    // Obtem o conteudo da mensagem recebida pelo contato
    let query = message.content.toString();

    // Faz a chamada na API de busca do Bing
    searchImage(query)
        .then(data => {
            // Cria uma nova mensagem para responder o usuario que enviou a mensagem.
            // O campo `to` da messagem deve ser igual ao campo `from` da mensagem recebida
            let response = {
                id: uuid.v4(),
                to: message.from
            };

            if (data.value.length === 0) {
                // Cria um conteudo de somente texto para a mensagem de resposta
                response.content = `Nenhuma imagem encontrada para o termo '${query}'`;
                response.type = 'text/plain';
            }
            else {
                let image = data.value[0];

                // Cria um conteudo de imagem para a mensagem de resposta
                response.content = {
                    uri: image.contentUrl,
                    type: `image/${image.encodingFormat}`,
                    previewUri: image.thumbnailUrl,
                    previewType: `image/${image.encodingFormat}`,
                    size: parseInt(image.contentSize.match(/\d*/)[0])
                };
                response.type = 'application/vnd.lime.media-link+json';
            }

            // Responde a mensagem para o usuario
            return client.sendMessage(response);
        });
}
```

## 5. Hospedando o chatbot

Por ser uma aplicação Node.js, o chatbot criado deve ser hospedado em um servidor de hospedagem que seja compatível com esta ferramenta. Alguns bons exemplos de serviços de hospedagem gratuitos para Node.js incluem [Heroku](https://www.heroku.com/), [Nodejitsu](https://www.nodejitsu.com/) e [Microsoft Azure](https://azure.microsoft.com/pt-br/).

Após hospedar seu chatbot, você deve ainda incluir sua **URL para receber mensagens** nas configurações dele no [portal do BLiP](https://portal.blip.ai) como a URL onde ele está hospedado.

O código deste e outros exemplos estão [no Github](https://github.com/takenet/blip-sdk-js/tree/master/examples/bing-image-search).


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>