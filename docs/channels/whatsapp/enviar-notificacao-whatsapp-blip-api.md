---
id: enviar-notificacao-whatsapp-blip-api
title: Enviar notificações WhatsApp via API do BLiP
sidebar_label: Enviar notificações WhatsApp via API do BLiP
---

Através do BLiP, é possível criar aplicações para o canal WhatsApp capazes **não só de responder às mensagens recebidas**, mas também de **enviar mensagens (notificações) para o cliente de forma ativa**.

Qualquer mensagem enviada pelo bot, após um período de 24 horas em relação à última mensagem enviada pelo cliente é considerada uma notificação. Para saber mais sobre as diferenças entre uma mensagem normal e uma notificação [clique aqui](https://help.blip.ai/docs/general/politica-de-violacao-mensagens/#mensagens-de-respostas). Notificações no WhatsApp estão sempre associadas a um Modelo de Mensagem (*Message Template*), previamente aprovado pelo próprio WhatsApp. 

Para enviar uma notificação (mensagem ativa) é necessário garantir que os pré-requisitos abaixo já foram satisfeitos:

1. [Ter um bot previamente publicado no canal WhatsApp](/docs/channels/whatsapp/publicando-bot-no-whatsapp) (*disponível apenas para clientes Business e Enterprise*)
2. [Ter um Message Template criado e aprovado pelo WhatsApp](/docs/channels/whatsapp/como-criar-aprovar-message-template)<br />
Depois de criar e aprovar seu Message Template você terá acesso a dois valores **NAMESPACE** e **ELEMENT_NAME**. Esses valores identificam seu Message Template e serão necessários durante o processo.
3. Possuir saldo disponível em sua conta para o disparo de notificações no WhatsApp (*consulte a equipe de suporte do seu plano para analisar o saldo disponível em sua conta*)

## Enviando uma notificação

Para realizar o envio de uma notificação através da API do BLiP será necessário realizar 2 requisições HTTP na API do BLiP. A primeira delas tem o objetivo de buscar o identificador de um cliente no WhatsApp e deverá ser executada uma única vez para cada usuário. Já a segunda requisição é responsável por efetivamente disparar uma notificação através de um Message Template específico.

### Requisição 1: Buscando o identificador de um cliente

Antes de enviar uma notificação, é preciso ter acesso ao identificador do usuário no WhatsApp. **Lembre-se de realizar essa operação uma única vez para cada cliente.** 

A busca pelo identificador é feita através de uma requisição HTTP levando em consideração o número do celular do cliente no formato internacional. Veja um exemplo de um número considerando o identificador do país igual a 55 (Brasil) e o DDD igual a 31 (Minas Gerais)

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

Veja abaixo um exemplo de resposta para essa requisição. Repare que a propriedade `resource` possui um objeto JSON com que contém a propriedade `alternativeAccount`, esse é o valor que identifica o cliente no canal WhatsApp.

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

### Requisição 2: Envio da notificação com texto somente

De posse do identificador do cliente que receberá a notificação, realize a requisição HTTP descrita abaixo **alterando** o `id` da mesma:

```http
POST https://http.msging.net/messages HTTP/1.1
Content-Type: application/json
Authorization: Key YOUR_TOKEN

{
  "id": "123e4567-e89b-12d3-a456-426655440002",
  "to": "553199998888@wa.gw.msging.net",
  "type": "application/json",
  "content": {
    "type": "hsm",
    "hsm": {
      "namespace": "NAMESPACE",
      "element_name": "ELEMENT_NAME",
      "language": {
                "policy": "deterministic",
                "code": "pt_BR"
      },
      "localizable_params": [
        {
          "default": "BLiPPer"
        }
      ]
    }
  }
}
```

### Requisição 3: Envio da notificação com imagem

De posse do identificador do cliente que receberá a notificação, realize a requisição HTTP descrita abaixo **alterando** o `id` da mesma:

```http
POST https://http.msging.net/messages HTTP/1.1
Content-Type: application/json
Authorization: Key YOUR_TOKEN

{
   "id":"964g2478-e89b-12d3-a456-256325440002",
   "to":"553199998888@wa.gw.msging.net",
   "type":"application/json",
   "content":{
      "type":"template",
      "template":{
         "namespace":"NAMESPACE",
         "name":"ELEMENT_NAME",
         "language":{
            "code":"pt_BR",
            "policy":"deterministic"
         },
         "components":[
            {
               "type":"header",
               "parameters":[
                  {
                     "type":"image",
                     "image":{
                        "link":"https://www.blip.ai/wp-content/uploads/2018/02/logo-blip.png"
                     }
                  }
               ]
            },
            {
               "type":"body",
               "parameters":[

               ]
            }
         ]
      }
   }
}
```
### Requisição 4: Envio da notificação com documento

De posse do identificador do cliente que receberá a notificação, realize a requisição HTTP descrita abaixo **alterando** o `id` da mesma:

```http
POST https://http.msging.net/messages HTTP/1.1
Content-Type: application/json
Authorization: Key YOUR_TOKEN

{
   "id":"851d4853-f78i-12d3-a456-256325440002",
   "to":"553199998888@wa.gw.msging.net",
   "type":"application/json",
   "content":{
      "type":"template",
      "template":{
         "namespace":"NAMESPACE",
         "name":"ELEMENT_NAME",
         "language":{
            "code":"pt_BR",
            "policy":"deterministic"
         },
         "components":[
            {
               "type":"header",
               "parameters":[
                  {
                     "type":"document",
                     "document":{
                        "filename":"take.pdf",
                        "link":"http://www.orimi.com/pdf-test.pdf"
                     }
                  }
               ]
            },
            {
               "type":"body",
               "parameters":[
                  {
                     "type":"text",
                     "text":"BLiP"
                  }
               ]
            }
         ]
      }
   }
}
```

Note que além do **token** do bot e do **identificador do cliente** será necessário alterar no corpo da requisição os valores  `NAMESPACE` e `ELEMENT_NAME` correspondentes ao Message Template pré aprovado.
Além disso é precisso inserir os valores das varáveis definidas na criação do Message Template, quando for o caso.  

---

O vídeo abaixo demonstra, passo a passo, como realizar este procedimento.

<iframe width="778" height="517" src="https://www.youtube.com/embed/JtY0woSr9wo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>