---
id: visao-geral-dos-tipos-de-conteudo
title: [Builder] Visão geral dos tipos de conteúdo
sidebar_label: [Builder] Visão geral dos tipos de conteúdo
---
Dentro de qualquer **bloco de conteúdo**, é possível definir quais as mensagens serão enviadas do bot para o cliente. O BLiP suporta qualquer tipo de conteúdo disponível nos canais conectados à plataforma.

No Builder, para adicionar um conteúdo em um bloco, basta selecionar o ícone correspondente ao conteúdo desejado. Os tipos mais utilizados (texto, quick reply, imagem, carousel e menu) possuem um ícone específico e podem ser escolhidos facilmente. Os demais tipos de conteúdo podem ser encontrados através do ícone mais conteúdos ("..."), conforme imagem abaixo.

![Tipos de conteúdo](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-1.png)

Veja abaixo o detalhamento de todos os tipos de conteúdos suportados pelo Builder. Para mais detalhes sobre todos os tipos de conteúdo suportados pela plataforma veja a seção Content-Types na documentação do BLiP.

* **Texto**
  
![Tipo de conteúdo texto](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-2.png)

Envia uma mensagem de texto (<https://docs.blip.ai/#text>) para o usuário.

* **Quick Reply**
  
![Tipo de conteúdo quick reply](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-3.png)

Envia uma mensagem do tipo quick reply (respostas de escopo imediato <https://docs.blip.ai/#quick-replies>) para o usuário.

* **Imagem**
  
![Tipo de conteúdo imagem](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-4.png)

Envia uma mensagem de imagem (<https://docs.blip.ai/#images>) para o usuário.

* **Carrousel**

![Tipo de conteúdo carrousel](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-5.png)

Envia uma mensagem do tipo carrousel (<https://docs.blip.ai/#carousel>) para o usuário.

* **Menu**

![Tipo de conteúdo menu](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-6.png)

Envia uma mensagem com conteúdo do tipo menu (<https://docs.blip.ai/#menu>) para o usuário.

* **Digitando**

![Tipo de conteúdo digitando](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-7.png)

Mostra ao usuário que uma mensagem está sendo digitada, como acontece em conversas comuns nos aplicativos de mensageria (<https://docs.blip.ai/#chat-state>).

* **Áudio**

![Tipo de conteúdo audio](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-8.png)

Envia uma mensagem com conteúdo do tipo áudio (<https://docs.blip.ai/#audio>) para o usuário.

* **Vídeo**

![Tipo de conteúdo video](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-9.png)

Envia uma mensagem com conteúdo do tipo vídeo (<https://docs.blip.ai/#video>) para o usuário.

* **Documento**

![Tipo de conteúdo documento](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-10.png)

Envia uma mensagem com um conteúdo do tipo documento (<https://docs.blip.ai/#document-files>) para o usuário — PDF, por exemplo.

* **Enviar localização**

![Tipo de conteúdo enviar localizacao](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-11.png)

Envia uma mensagem com um mapa que aponta um determinada localização geográfica (<https://docs.blip.ai/#send-location>) para o usuário.

* **Pedir localização**

![Tipo de conteúdo pedir localizacao](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-12.png)

Envia uma mensagem com um pedido de compartilhamento da localização do usuário. (<https://docs.blip.ai/#request-location>)

* **Link Web**

![Tipo de conteúdo link web](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-13.png)

Envia um link da web (<https://docs.blip.ai/#web-link>) para o usuário.

* **Conteúdo HTTP**

![Tipo de conteúdo http](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-14.png)

Tipo de conteúdo especial que possibilita a geração de dados dinâmicos.

Em algumas situações, a criação de um conteúdo acontece de forma dinâmica. Uma lista de produtos, por exemplo, depende da quantidade de produtos em estoque em um dado momento. Assim, não é possível criar um carrousel no Builder com todos os produtos disponíveis durante todo o dia. Nesses casos, torna-se necessária a utilização do Conteúdo HTTP.

Através deste tipo, a responsabilidade para geração do conteúdo é transferida para uma API. Atualmente, são aceitos **Quick Reply**, **Carrossel** e **Menu** como conteúdo dinâmico.

Basta preencher a URL que o BLiP deverá utilizar para buscar o conteúdo. Para saber o formato correto para cada um dos tipos do BLiP, [consulte a documentação](https://docs.blip.ai/#ContentTypesSamples).

**Observação: A URL do conteúdo HTTP deve suportar uma requisição do tipo GET.**

* **Entrada do usuário**

![Tipo de conteúdo entrada do usuario](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-15.png)

Além de enviar conteúdos, o bot pode precisar solicitar alguma entrada de dados para o usuário — para isso, existe o conteúdo **Entrada do usuário**. Através deste conteúdo, é possível parar a execução da máquina de estados e aguardar por alguma informação que deverá ser enviada pelo cliente.

É possível armazenar em uma variável o conteúdo recebido em qualquer conteúdo do tipo Entrada do usuário. Para isso, basta definir o nome da variável.

![Armazenamento de entrada do usuario em variavel](/img/builder/builder-visao-geral-dos-tipos-de-conteudo-16.png)

Além disso, é possível ainda fazer validações sobre a entrada do usuário. Basta marcar a opção **Validar a entrada do usuário**, definir a regra e uma mensagem de erro.

As regras disponíveis para validação da entrada do usuário são:

| Regra | Descrição                                                                   |
| ------------------ | --------------------------------------------------------------------------- |
| Texto              | Valida se a entrada do usuário é um texto                                                           |
| Data            | Valida se a entrada do usuário representa uma data                                                       |
| Número               | Valida se a entrada do usuário é um número.                                                        |
| Regex            | Valida se a entrada do usuário corresponde a um padrão regex.                                                        |
| Tipo             | Valida se a entrada do usuário corresponde a um tipo específico do BLiP. Exemplo: `image/jpeg` verifica se  o usuário enviou uma imagem.

Caso a regra definida em uma entrada do usuário não seja satisfeita, o usuário receberá a mensagem de erro definida.

**Observações:**

* Um bloco pode conter 0 (zero) ou 1 (uma) Entrada do usuário.
* Na grande maioria das vezes, todo bloco conterá uma Entrada do usuário.
* Caso um bloco não possua Entrada do usuário, o processamento da máquina de estados levará o cliente para o bloco que contenha.
