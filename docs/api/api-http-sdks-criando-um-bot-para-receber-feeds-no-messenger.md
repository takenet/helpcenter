---
id: api-http-sdks-criando-um-bot-para-receber-feeds-no-messenger
title: [HTTP] Criando um bot para receber feeds no Messenger
sidebar_label: [HTTP] Criando um bot para receber feeds no Messenger
---

O BLiP possui um modelo de integração através de requisições HTTP. Esse modelo possibilita que todos os recursos da plataforma estejam acessíveis para qualquer linguagem de programação, já que praticamente todas as linguagens modernas possuem algum tipo de biblioteca para envio e recebimento de requisições HTTP.

Mas a explosão atual de API's HTTP nos permite criar chatbots sem a necessidade de uma única linha de código! Ferramentas como [If This Than That](https://ifttt.com/), [Integromat](https://www.integromat.com/en/) e [Zapier](https://zapier.com/) oferecem interfaces intuitivas para combinar API's de forma fácil.

Para demonstrar o poder desta integração, que tal criar um chatbot que envia as última notícias de um *feed* para você no Facebook Messenger (ou em qualquer um dos canais suportados pelo BLiP)?

Vamos começar criando um novo *zap* no Zapier (você pode clicar [aqui](https://zapier.com/app/login?next=%2Fapp%2Feditor) para ir direto para o editor. Não esqueça que é preciso ter uma conta, que pode ser gratuita mesmo).

Para a *trigger app*, escolha “RSS”.

![Escolhendo RSS para a trigger app](/img/practice/api-http-sdks/api-http-sdks-criando-um-bot-para-receber-feeds-no-messenger-1.png)

Escolha a opção “New item in Feed” (deve ser a única) e clique em “Save + Continue”.

![Escolhendo a opção "New item in Feed"](/img/practice/api-http-sdks/api-http-sdks-criando-um-bot-para-receber-feeds-no-messenger-2.png)

No passo seguinte, adicione o endereço do *feed RSS* que lhe interessar (como exemplo usei o endereço <https://take.net/blog/feed/> do *feed* do *blog* da Take). Pode deixar os demais campos em branco e clique em “Continue”.

![Adicionando o endereço do feed RSS](/img/practice/api-http-sdks/api-http-sdks-criando-um-bot-para-receber-feeds-no-messenger-3.png)

Em seguida, escolha um item buscado no *feed* para que seja feito um teste. Este passo deve ocorrer sem problemas, então clique em “Continue” para configurarmos a ação que será tomada quando uma nova notícia for recuperada do *feed*.

![Escolhendo um item buscado no feed para testar](/img/practice/api-http-sdks/api-http-sdks-criando-um-bot-para-receber-feeds-no-messenger-4.png)

Pronto, agora chegou o momento de definir o que o Zapier fará sempre que um novo artigo estiver disponível no *feed*. Para isso clique no botão "Add a Step", no canto lateral esquerdo.

![Adicionando um step no Zapier](/img/practice/api-http-sdks/api-http-sdks-criando-um-bot-para-receber-feeds-no-messenger-5.png)

Escolha a opção Action/Search e depois procure pela opção Webhooks na lista de *action apps*.

![Escolhendo a opção Action/Search e Weebhooks](/img/practice/api-http-sdks/api-http-sdks-criando-um-bot-para-receber-feeds-no-messenger-6.png)

Selecione a opção de POST para a *action* e clique em “Save + Continue”.

![Selecionando a opção de POST para a action](/img/practice/api-http-sdks/api-http-sdks-criando-um-bot-para-receber-feeds-no-messenger-7.png)

Esta é a tela mais importante deste *zap*: o mapeamento do conteúdo do *feed* para o formato Json de mensagem esperado pelo BLiP. No Painel do BLiP, escolha o bot (contato inteligente) que será usado para envio das mensagens. Entre na tela de **Configurações** do mesmo e escolha o sub menu **Informações de conexão**, localizado no canto esquerdo.

![Escolhendo o Bot que será usado para o envio das mensagens](/img/practice/api-http-sdks/api-http-sdks-criando-um-bot-para-receber-feeds-no-messenger-8.png)

Copie a “URL para enviar mensagens” do BLiP para a “URL” (exigida) pelo Zapier. O “Payload Type” deverá ser json.

![Copiando a "URL para enviar mensagens" do BLiP](/img/practice/api-http-sdks/api-http-sdks-criando-um-bot-para-receber-feeds-no-messenger-9.png)

Para a configuração do “Data” vamos montar um envelope de uma mensagem com um [Weblink](https://docs.blip.ai/#web-link), conforme a documentação do BLiP disponível [aqui](https://docs.blip.ai/#introduction).

| Propriedade (Json) | Valor                                                                                                                                                               | 
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                 | Identificador único qualquer, por exemplo um Guid ou Id (vindo do feed, dependerá do formato do seu *feed*).                                                         |
| to                 | Endereço do contato que receberá as notícias do feed. Este endereço depende de cada canal. (Clique aqui caso não saiba como encontrar o identificador de um usuário).|
| type	             | Fixo, de acordo com a documentação.                                                                                                                                  |
| content__uri       | Link (vindo do *feed*).                                                                                                                                              |
| content__text	     | Title (vindo do *feed*).                                                                                                                                             |

Observe que a propriedade content é um outro objeto Json. Para informar as propriedades deste objeto utilizamos a sintaxe especial do Zapier com “__” (2 *underscores*) como separador. Veja como deverá ficar:

![Como ficará o seu Template](/img/practice/api-http-sdks/api-http-sdks-criando-um-bot-para-receber-feeds-no-messenger-10.png)

Por fim, ao final do formulário do Zapier, em “Headers”, adicione o cabeçalho Authorization fornecido na página de Configurações do Webhook do seu contato. Observe que ele será dividido entre os 2 campos do formulário.

![Adicionando o cabeçalho Authorization](/img/practice/api-http-sdks/api-http-sdks-criando-um-bot-para-receber-feeds-no-messenger-10.png)

Cliquem agora no botão “Continue”. A página seguinte deverá produzir um conteúdo de teste a partir de uma das entradas do *feed*. Clique no botão “Create & Continue” e, se tudo ficou corretamente configurado, você deverá receber uma mensagem no canal que você configurou com o texto da notícia do *feed*.

Para que o feed seja monitorado e as novas notícias sejam enviadas automaticamente, ligue este novo zap clicando no botão do canto superior direito do Zapier, para que fique na posição “ON”. Clique então no botão “Finish”, e aproveite as novidades do seu *feed* favorito. ;)

Você pode utilizar outros recursos do Zapier para tornar seu contato ainda mais interessante, como por exemplo criar um [*feed único que agregue todos os seus feeds favoritos*](https://zapier.com/blog/make-your-own-rss-superfeed/) e utilizar o endereço deste *feed* agregado, gerado pelo Zapier, neste zap. Você pode ainda usar como trigger app o Webhook do Zapier, recebendo notícias de serviços especializados de feed como [Feedly](https://developer.feedly.com/) ou [SuperFeedr](https://superfeedr.com/subscriber).

