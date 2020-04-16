---
id: como-gerenciar-lista-de-distribuicao-notificacao-whatsapp
title: Como gerenciar uma lista de distribuição para enviar notificações WhatsApp
sidebar_label: Como gerenciar uma lista de distribuição para enviar notificações WhatsApp
---

### 1. Levantamento de todos os seus contatos

Antes de mais nada, como seus usuários podem estar vindo de diferentes plataformas e momentos, iremos modularizar este conteúdo para fácil compreensão. Sobretudo, vale ressaltar que todo o conteúdo de levantamento de contatos no WhatsApp está relacionado ao número de contato dos usuários.

#### 1.1 Levantamento de todos os seus contatos que já interagiram com seu bot 

Suponha que você possui um BLiP Chatbot e alguns usuários que já interagiram com seu bot não estão na sua lista de distribuição. Para identificar estes usuários, o endpoint de [Get contacts with paging](https://docs.blip.ai/#get-contacts-with-paging) deverá ser utilizado. Se tratando do canal Whatsapp, o filtro utilizado na consulta abaixo, retorna todos os usuários que comunicaram com o seu bot utilizando o canal whatsapp.

```http


POST https://http.msging.net/commands HTTP/1.1
Content-Type: application/json
Authorization: Key YOUR_TOKEN

{  
  "id": "a456-42665544000-0123e4567-e89b-12d3",
  "method": "get",
  "uri": "/contacts?$filter=(substringof('WhatsApp'%2Csource))"
```

Para cada contato retornado na consulta, haverá uma chave `identity`, que representa o identificador do usuário no WhatsApp.
```javascript
"items": [
            {
                "name": "John Doe 1",
                "identity": "553199999999@wa.gw.msging.net",
                "extras": {},
                "source": "WhatsApp"
            },
            {
                "name": "John Doe 2",
                "identity": "553188888888@wa.gw.msging.net",
                "phoneNumber": "+553188888888",
                "extras": {},
                "source": "WhatsApp"
            }
        
]
```
#### 1.2 Levantamento de todos os seus contatos em uma plataforma externa


Em posse dos números dos contatos, é preciso ter acesso ao identificador do usuário no WhatsApp. **Lembre-se de realizar essa operação uma única vez para cada cliente.** 

A busca pelo identificador é feita através de uma requisição HTTP, considerando o número do celular do cliente no formato internacional. Veja um exemplo de um número considerando o identificador do país igual a 55 (Brasil) e o DDD igual a 31 (Minas Gerais)

> +5531999998888

```http
POST https://http.msging.net/commands HTTP/1.1
Content-Type: application/json
Authorization: Key YOUR_TOKEN

{  
  "id": "a456-42665544000-0123e4567-e89b-12d3",
  "to": "postmaster@wa.gw.msging.net",
  "method": "get",
  "uri": "lime://wa.gw.msging.net/accounts/+5531999998888"
}
```

Repare que um dos cabeçalhos dessa requisição exige um **token** (YOUR_TOKEN) de autorização do bot. Para saber onde encontrar o token de seu bot [clique aqui](/docs/api-sdks/como-encontrar-a-api-key-do-meu-bot).

Veja abaixo um exemplo de resposta para essa requisição. Repare que a propriedade `resource` possui um objeto JSON que contém a propriedade `alternativeAccount`, esse é o valor que identifica o cliente no canal WhatsApp.

> 5531999998888@wa.gw.msging.net - identificador do cliente que possui o número de celular 5531999998888

```json
{
    "type": "application/vnd.lime.account+json",
    "resource": {
        "fullName": "John Doe",
        "alternativeAccount": "5531999998888@wa.gw.msging.net",
        "identity": "5531999998888@wa.gw.msging.net",
        "phoneNumber": "+5531999998888",
        "source": "WhatsApp"
    },
    "method": "get",
    "status": "success",
    "id": "a456-42665544000-0123e4567-e89b-12d3",
    "from": "postmaster@wa.gw.msging.net",
    "to": "bot@msging.net",
    "metadata": {
        "#command.uri": "lime://wa.gw.msging.net/accounts/+5531999998888"
    }
}
```
**Obs.: Essa operação deve ser executada uma única vez para cada cliente.**

### 2.  Criar uma lista de distribuição

Atualmente existem duas formas de criar uma lista de distribuição, diretamente no builder ou utilizando a API. Abaixo são apresentados cada uma dessas formas com suas respectivas especificidades.

#### 2.1 Criando lista de distribuição via Builder

Para executar a ação de criar lista de distribuição no Builder, clique sobre um bloco qualquer e selecione a aba Ações. Na funcionalidade de adicionar ação de entrada selecione a opção lista de distribuição. Com a finalização de todos os processos anteriores, digite o nome desejado no campo de nome de lista e o botão de adicionar nova lista deve ser clicado para conclusão do processo. A imagem abaixo indica de forma compilada os passos aqui apresentados.

![Criando lista de distribuição via Builder](/img/channels/whatsapp/como-gerenciar-lista-de-distribuicao-notificacao-whatsapp-1.png)


#### 2.2 Criando lista de distribuição via API

Para executar a ação de criar lista de distribuição via API, utilizaremos o endpoint [a documentação](https://docs.blip.ai/#create-a-list) 
substitua o `{your_distributionList}` pelo nome desejado para sua lista.

```http
POST https://http.msging.net/commands HTTP/1.1
Content-Type: application/json
Authorization: Key {YOUR_TOKEN}

{  
  "id": "1",
  "to": "postmaster@broadcast.msging.net",
  "method": "set",
  "type": "application/vnd.iris.distribution-list+json",
  "uri": "/lists",
  "resource": {  
    "identity": "{your_distributionList}@broadcast.msging.net"
  }
}

```

 ### 3. Inserir todos os números na lista de distribuição no formato correto

Finalizando todas as etapas anteriores, utilizaremos a API para inserir todos os contatos levantados na lista criada. Para isso utilizaremos o endpoint [**add a member to list**](https://docs.blip.ai/#add-a-member-to-list), para cada usuário a ser inserido devemos executar a requisição abaixo, lembre-se de substituir o `{your_distributionList}` pelo nome da sua lista criada que pode ser obtida nos passos anteriores ou no endpoint [**get all lists**](https://docs.blip.ai/#get-all-lists).

```http
POST https://http.msging.net/commands HTTP/1.1
Content-Type: application/json
Authorization: Key {YOUR_TOKEN}

{  
  "id": "3",
  "to": "postmaster@broadcast.msging.net",
  "method": "set",
  "uri": "/lists/{your_distributionList}@broadcast.msging.net/recipients",
  "type": "application/vnd.lime.identity",
  "resource": "5531999998888@wa.gw.msging.net"
}

``` 


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>