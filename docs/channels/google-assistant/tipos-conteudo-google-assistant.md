---
id: tipos-conteudo-google-assistant
title: Tipos de conteúdo suportados pelo Google Assistant
sidebar_label: Tipos de conteúdo suportados pelo Google Assistant
---

## Texto

Envie mensagens de texto para o seu cliente através do Google Assistant! Mas lembre-se, o número máximo de caracteres permitido é de 640 (seiscentos e quarenta). Mensagens vazias não são permitidas.
Para mais informações acesse https://docs.blip.ai/#plain-text.

![](/img/channels/google-assistant/tipos-conteudo-google-assistant-1.png)<br>

### Imagem

Quando enviar uma imagem através deste canal é obrigatório que seja adicionado um título e uma URL, mas um texto é opcional. Os formatos aceitos são JPEG, PNG e GIF. Para mais informações acesse https://docs.blip.ai/#images.

![](/img/channels/google-assistant/tipos-conteudo-google-assistant-2.png)<br>

### Áudio

Caso deseje enviar um áudio para o seu cliente, deverá ser enviado em conteúdo dinâmico. Serão obrigatórios o uso de um título, URL do áudio em mp3 e https, texto que funcionará como um quick reply e URL de uma imagem opcional que seja em formato JPEG, PNG ou GIF. Para mais informações acesse https://docs.blip.ai/#audio.  

![](/img/channels/google-assistant/tipos-conteudo-google-assistant-3.png)<br>

## Web Link

Para enviar um web link para os seus clientes, você pode trabalhar com um conteúdo simples do builder ou um conteúdo dinâmico caso deseje adicionar uma imagem. Lembrando que o título, o texto e a URL são obrigatórios para este canal. Para mais informações acesse https://docs.blip.ai/#web-link.

![](/img/channels/google-assistant/tipos-conteudo-google-assistant-4.png)<br>
## Pedido de localização

O Google Assistant permite a solicitação da localização do seu cliente. É obrigatório o uso de uma label que seja do tipo **Plain Text**, com o texto que será utilizado para fazer o pedido.

Para validar a entrada, utilize o tipo **Location**. Para mais informações acesse https://docs.blip.ai/#request-location.

## Document List (Lista de itens)

Se seu contato inteligente precisa enviar uma lista para o seu cliente, deverá ser feito através de um conteúdo dinâmico.

Para isso é obrigatório:

* O texto da header, que será usado na mensagem de texto antes da lista.
* Deve ter entre 2 (dois) e 30 (trinta) itens.
* Para cada item da lista, o título é obrigatório e deve ser único.
* Poderão ser enviadas imagens, em formatos JPEG, PNG ou GIF.

Para mais informações acesse https://docs.blip.ai/#list.

![](/img/channels/google-assistant/tipos-conteudo-google-assistant-7.png)<br>

## Carrossel

Para enviar um carrossel, deverá ser feito através de um conteúdo dinâmico.

O tipo carrossel para o Google Assistant não foi mapeado a partir de uma Collection, mas sim a partir de um Document Select (também chamado de *Multimedia Menu* no LIME), pois o tipo Document Select real do LIME (com várias opções em um card) não tem conversão possível para o Assistant. O esperado no Document Select para virar um carrossel é:

* **Header**: Obrigatório. PlainText com o texto para a mensagem que virá antes do carrossel.

* **Options**: Obrigatórias entre 2 (dois) e 10 (dez) itens. Cada option será um item do carrossel e deve ter:

* **Label**: MediaLink com a imagem do item do carrossel (JPEG, PNG ou GIF), título do item do carrossel (único para cada option) e texto do item do carrossel (opcional).

* **Value**: PlainText ou WebLink (veja mais abaixo). Todos os itens devem ter o mesmo tipo de value.

![](/img/channels/google-assistant/tipos-conteudo-google-assistant-8.png)<br>

### Quick reply

Aprimore seu contato inteligente através do quick reply. Ele deve conter no máximo 8 (oito) opções, um texto obrigatório que será usado no texto antes das opções e um texto para as opções, que deverão possuir no máximo 25 (vinte e cinco) caracteres. Para mais informações acesse https://docs.blip.ai/#quick-replies.

![](/img/channels/google-assistant/tipos-conteudo-google-assistant-9.png)<br>

**Observação:** Quick reply pode ser usado junto com qualquer tipo.

Caso queira saber mais sobre os tipos de conteúdos aceitos no Google Assistant, [acesse a documentação oficial](https://developers.google.com/actions/assistant/responses).

Para mais informações sobre os tipos de conteúdos suportados pelo BLiP, [acesse a documentação](https://docs.blip.ai/#content-types).
