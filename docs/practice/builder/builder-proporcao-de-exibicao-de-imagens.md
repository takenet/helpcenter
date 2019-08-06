---
id: builder-proporcao-de-exibicao-de-imagens
title: Proporção de exibição de imagens (Aspect Ratio)
sidebar_label: Proporção de exibição de imagens (Aspect Ratio)
---

Um dos parâmetros de configuração de um conteúdo que possua uma imagem é o **AspectRatio**. Essa propriedade permite a definição do formato de exibição de uma imagem no canal de destino. Ela é útil especialmente nos canais BLiP Chat e Facebook Messenger, que permitem a exibição de imagens com as proporções 1:1 (quadrado) e 1:2 (retangular).

Ao enviar uma imagem através do Builder selecione uma das opções disponíveis no campo AspecRatio para alterar o comportamento. Veja o exemplo abaixo:

![Aspect Ratio](/img/practice/builder/builder-proporcao-de-exibicao-de-imagens-1.png)

Caso esteja utilizando um dos SDKs ou a API HTTP do BLiP utilize a propriedade **aspectRatio** para definir a proporção.

```json
{
    "id": "1",
    "to": "1630307207029499@messenger.gw.msging.net",
    "type": "application/vnd.lime.media-link+json",
    "content": {
        "title": "Gato",
        "text": "Segue uma imagem de um gato",
        "type": "image/jpeg",
        "uri": "http://2.bp.blogspot.com/-pATX0YgNSFs/VP-82AQKcuI/AAAAAAAALSU/Vet9e7Qsjjw/s1600/Cat-hd-wallpapers.jpg",
        "aspectRatio": "1:1"
    }
}
```

Para mais detalhes sobre o tipo de conteúdo Media Link acesse [a documentação](https://docs.blip.ai/#media-link).