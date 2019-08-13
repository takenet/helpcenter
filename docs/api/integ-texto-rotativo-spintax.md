---
id: integ-texto-rotativo-spintax
title: Texto rotativo com spintax
sidebar_label: Texto rotativo com spintax
---

Através do BLiP é possível enviar conteúdos de **texto rotativo** utilizando **spinning syntax** (ou **spintax**), uma notação que permite a definição de textos dinâmicos que alternam de valor a cada vez que são entregues ao cliente. Isso permite a construção de conversas mais fluídas e naturais com seus clientes, de forma a evitar **mensagens repetitivas** que afetam negativamente a experiência do usuário.

Para definir um texto rotativo, basta criar grupos de valores delimitados entre chaves (os caracteres `{` e `}`) com as opções separadas por pipes(o caracter `|`).

Um exemplo de spintax é:

`{Oi|Ola}, seja bem-vindo! Como {posso|podemos} te ajudar?`

Esta sintaxe poderá dar saída a qualquer um dos seguintes valores:

* Oi, seja bem-vindo! Como posso te ajudar?
* Olá, seja bem-vindo! Como posso te ajudar?
* Oi, seja bem-vindo! Como podemos te ajudar?
* Olá, seja bem-vindo! Como podemos te ajudar?

Por padrão, o Builder aceita textos com o padrão spintax em qualquer conteúdo. Para ativar o processamento dos textos rotativos nos bots criados através dos SDKs ou da API HTTP do BLiP, basta incluir nos medatados da mensagem a propriedade `#message.spinText` com o valor `true`, como no exemplo abaixo:

```json
{
    "id": "1",
    "to": "128271320123982@messenger.gw.msging.net",
    "type": "text/plain",
    "content": "{Oi|Ola}, seja bem-vindo! Como {posso|podemos} te ajudar?",
    "metadata": {
        "#message.spinText": "true"
    }
}
```
