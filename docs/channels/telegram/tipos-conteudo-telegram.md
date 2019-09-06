---
id: tipos-conteudo-telegram
title: Conteúdos disponíveis no canal Telegram
sidebar_label: Conteúdos disponíveis no canal Telegram
---

Veja abaixo todos os tipos de conteúdos disponíveis na integração entre o BLiP e o Telegram. Para mais informações sobre os tipos de conteúdos presentes no BLiP, acesse a sessão de [Content-types](https://docs.blip.ai/#content-types) na documentação.

## Texto

Como um tradicional canal de mensagem, o Telegram permite o envio de mensagens de texto. Na integração com o BLiP, este tipo de conteúdo está disponível como textos simples (sem formatações).

## Digitando

Mostra ao usuário que uma mensagem está sendo digitada, como acontece em conversas comuns nos aplicativos de mensageria. Para mais informações, acesse: https://docs.blip.ai/#chat-state

Veja na imagem abaixo um exemplo dos conteúdos de **texto** e **digitando**.

![Exemplo de texto e digitando](/img/channels/telegram/funcionalidades-telegram-text.jpg)

## Arquivos de media

Além de texto, no Telegram, uma mensagem pode conter links para conteúdos multimídia como áudio, imagens, vídeos e arquivos. É importante ressaltar que o BLiP trafega apenas o link do conteúdo. Garanta que os arquivos que deseja enviar estão disponíveis em alguma URL pública.

![Arquivos: Imagens, audios, videos e documentos](/img/channels/telegram/funcionalidades-telegram.jpg)

### Áudio

Os áudios são úteis para a entrega de informações rápidas, áudios longos geralmente não são atrativos. Para saber mais informações sobre o objeto áudio no Telegram, acesse a [documentação oficial](https://core.telegram.org/bots/api#inputmediaaudio).

![Arquivos: audios](/img/channels/telegram/funcionalidades-telegram-audio.jpg)

### Documento/Arquivo

Seu contato inteligente pode enviar documentos como PDFs, compartilhando uma URL que contenha o arquivo. Para mais informações sobre como o Telegram trata documentos, [acesse a documentação](https://core.telegram.org/bots/api#inputmediadocument).

![Exemplo de Weblink](/img/channels/telegram/funcionalidades-telegram-arquivo.jpg)

### Gif

O envio de Gifs **não é suportado**. Caso você envie um Gif para o seu cliente, ele receberá como uma imagem. Observe o caso abaixo:

![Arquivos: Imagens](/img/channels/telegram/funcionalidades-telegram-image.jpg)


*Obs.:* Para mais informações sobre os atributos de uma animação no Telegram, [acesse a documentação oficial](https://core.telegram.org/bots/api#inputmediaanimation).

### Imagens

Para mais informações sobre o tratamento de imagens do Telegram, [acesse a documentação oficial](https://core.telegram.org/bots/api#inputmediaphoto).

![Arquivos: Imagens](/img/channels/telegram/funcionalidades-telegram-image.jpg)

### Vídeo

Para aprimorar seu contato, é possível enviar vídeos compartilhando uma URL que contenha um arquivo. Para saber mais como o Telegram comporta vídeos em seu canal, acesse a [documentação oficial](https://core.telegram.org/bots/api#inputmediavideo).

![Arquivos: videos](/img/channels/telegram/funcionalidades-telegram-video.jpg)

## Enviar localização

Quer que seu cliente lhe faça uma visita? Não se preocupe, basta informar a localização (latitude e longitude) do seu estabelecimento!

![Mapa para localização](/img/channels/telegram/funcionalidades-telegram-mapa.jpg)

## Menu 

Através do objeto mensagem, é possível realizar o envio de um menu de texto para os seus clientes fazerem uma escolha. Para mais informações sobre os tipos de conteúdos suportados no Telegram [acesse a documentação oficial](https://core.telegram.org/bots/api#available-types).

![Menu](/img/channels/telegram/funcionalidades-telegram-menu.jpg)

## Quick Reply

Quick replys fornecem uma maneira de apresentar um conjunto de até 11 botões na conversa além de uma frase opcional. As opções de um quick reply aparecem acima do espaço reservado para digitar mensagens. Na integração do Telegram com o BLiP, este recurso está disponível no formato semelhante à um Menu. Esse conteúdo é muito útil para facilitar a conversa com seu cliente, enviando as possíveis respostas que seu contato irá processar. Para mais informações sobre os tipos de conteúdos suportados no Telegram [acesse a documentação oficial](https://core.telegram.org/bots/api#available-types).

## Web Link

Este recurso permite o envio de um link para uma página da Web para um cliente, incluindo metadados, como o título do link, a descrição e uma imagem em miniatura. Para mais informações sobre os tipos de conteúdos suportados no Telegram [acesse a documentação oficial](https://core.telegram.org/bots/api#available-types).

![Exemplo de Weblink](/img/channels/telegram/funcionalidades-telegram-weblink.jpg)