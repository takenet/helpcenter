---
id: tipo-conteudo-dinamico
title: Tipo de Conteúdo - Conteúdo Dinâmico
sidebar_label: Tipo de Conteúdo - Conteúdo Dinâmico
---

O tipo **Dinâmico** é um tipo de conteúdo de mensagem que se permite ser definido em **tempo de execução**, ou seja, durante o **fluxo do bot**, permitindo que o conteúdo passado para o usuário seja construído e exibido sob-demanda e de forma personalizada para cada um.

![Selecionando tipo de conteúdo dinâmico](/img/builder/tipo-conteudo-dinamico-1.png)

Através dele é possível construir qualquer um dos outros [tipos de conteúdo](https://help.blip.ai/docs/en/builder/visao-geral-dos-tipos-de-conteudo/) de forma programática e dinâmica. Para isso é preciso conhecer a estrutura de cada um deles e preencher o bloco de conteúdo conforme abaixo:

![Tipo de conteúdo dinâmico](/img/builder/tipo-conteudo-dinamico-2.png)

### 1. MIME Type: Definindo o tipo de conteúdo

Essa informação irá dizer ao bloco o que ele deve esperar receber (uma imagem, um menu ou um carrossel, por exemplo) e exibir. Esses valores podem ser **encontrados na documentação** do tipo de conteúdo que você deseja, **encontrados [clicando aqui](https://docs.blip.ai/#content-types)**.

Os **principais tipos** podem ser encontrados na tabela abaixo:

| Conteúdo                                           | MIME Type                                 |
|----------------------------------------------------|-------------------------------------------|
| [Texto](https://docs.blip.ai/#plain-text)          | text/plain                                |
| [Quick Reply](https://docs.blip.ai/#quick-replies) | application/vnd.lime.select+json          |
| [Imagem](https://docs.blip.ai/#images)             | application/vnd.lime.media-link+json      |
| [Documento](https://docs.blip.ai/#document-files)  | application/vnd.lime.media-link+json      |
| [Menu](https://docs.blip.ai/#menu)                 | application/vnd.lime.select+json          |
| [Carrossel](https://docs.blip.ai/#carousel)        | application/vnd.lime.document-select+json |

*Obs.: Não deixe de conferir os [tipos de conteúdo suportados por cada canal](https://help.blip.ai/contenttypes/) para se certificar de que o canal conseguirá exibir o conteúdo desejado*.

### 2. Conteúdo da mensagem

O conteúdo da mensagem é um **JSON** contendo as suas informações que serão exibidas para o usuário no bot. Esse JSON corresponde ao objeto **`content`** da estrutura do tipo de conteúdo escolhido e deve seguir o padrão. **Você pode salvar esse JSON em uma variável e a utilizar neste campo**. Por exemplo, caso o tipo de conteúdo desejado seja um **[Quick Reply](https://docs.blip.ai/#quick-replies)**, o JSON deverá apresentar esse padrão:

![Objeto content tipo quick reply](/img/builder/tipo-conteudo-dinamico-3.png)

*Obs.: Não se esqueça de alterar as informações para que elas sejam exibidas de acordo com a sua necessidade.*

### 3. Metadados

Utilize este campo caso você precise enviar algum tipo de informação extra (metadado) para o seu bot, mas que não precisam ser exibidas para o usuário.

Essas informações são passadas no formato ***Key: value*** :

![Metadados](/img/builder/tipo-conteudo-dinamico-4.png)

## Exemplo: Lista de boletos

Digamos que você tenha uma API que te retorne uma lista de boletos para aquele cliente específico de acordo com uma informação, como CPF, por exemplo.

O JSON com a resposta da API é estruturado da seguinte forma:

```json
{
   "status":"ok",
   "results":[
      {
         "titulo":"Pedido A - Parcela 1/12",
         "id": "ABTOASDLZ2224",
         "valor":"R$ 29.90",
         "vecto":"2020-06-11"
      },
      {
         "titulo":"Pedido A - Parcela 2/12",
         "id": "ABTOASDLZ2225",
         "valor":"R$ 29.90",
         "vecto":"2020-07-10"
      },
      {
         "titulo":"Pedido A - Parcela 3/12",
         "id": "ABTOASDLZ2226",
         "valor":"R$ 29.90",
         "vecto":"2020-08-10"
      },
      {
         "titulo":"Pedido B - Parcela 1/5",
         "id": "APAXLDLZ7854",
         "valor":"R$ 69.90",
         "vecto":"2020-08-15"
      }
   ]
}
```

Para exibir esta resposta em um conteúdo do tipo [Texto](https://docs.blip.ai/#plain-text), conforme o exemplo abaixo, será necessário transformar a resposta para adaptá-la ao padrão exigido pelo conteúdo.

![Exemplo de Conteúdo de Texto](/img/builder/tipo-conteudo-dinamico-5.png)

Para isso, será necessária a execução de um script, que separa cada um dos boletos e os transforma em uma única estrutura. Para este exemplo, a resposta vinda da API está salva na variável **resposta**(1). A estrutura criada neste script, e que será usada para preencher o conteúdo dinâmico, será salva na variável **content**(2).

![Exemplo de Conteúdo de Texto](/img/builder/tipo-conteudo-dinamico-6.png)

```javascript
function run(resposta) {

    var json = JSON.parse(resposta);
   
    var aux = "";

    var count = 1;
    json.results.forEach(function (element) {
        aux = aux.concat(count, " - ", "Data: ", element.vecto, " valor: ", element.valor, "\n");
        count++;
    })
    return content;

}
```

Como o tipo de conteúdo Texto espera um MIME Type do tipo `text/plain`, ele será colocado nas configurações do bloco de conteúdo dinâmico. O campo de conteúdo será preenchido com a varíavel `content`, gerada no javascript acima.

![Exemplo de Conteúdo de Texto](/img/builder/tipo-conteudo-dinamico-7.png)

---------------- 

## Exemplo: Message Template com botões no WhatsApp

É possível também enviar um Message Template pré-aprovado no WhatsApp como conteúdo dinâmico durante o fluxo do bot.

>**No momento, para enviar os tipos de conteúdo Quick Reply e botões de Call to Action durante o fluxo de conversa do bot, esta é a única maneira.**

Para isso é preciso criar um Message Template e enviar para a aprovação do WhatsApp. Caso queira saber como fazer isso, acesse [clicando aqui](https://help.blip.ai/docs/en/channels/whatsapp/como-criar-aprovar-message-template/).

Após a aprovação do Message Template, copie o seu **namespace** e **element name**. No bot, crie um conteúdo do tipo Conteúdo Dinâmico, preencha o Mime Type como `application/json` e o valor de conteúdo, conforme abaixo.

![Exemplo de Conteúdo de Texto](/img/builder/tipo-conteudo-dinamico-8.png)

```json
{
    "type": "template",
    "template": {
        "namespace": "YOUR-NAMESPACE",
        "name": "YOUR-ELEMENTNAME",
        "language": {
            "policy": "deterministic",
            "code": "pt_BR"
        }
    }
}
```