---
id: funcionalidades-blip-chat-widget
title: Funcionalidades do BLiP Chat Widget
sidebar_label: Funcionalidades do BLiP Chat Widget
---

*insert some text*

Veja algumas das funcionalidades do BLiP Chat Widget.

## Como definir as informações dos contatos na primeira iteração

Esta função permite que você defina as informações, como nome, telefone e email, por exemplo, para o contato do usuário, antes mesmo da interação com o bot.

![Informações dos contatos](/img/channels/blip-chat/funcionalidades-blip-chat-widget-01.png)

O exemplo abaixo mostra como armazenar o nome, email, telefone, cidade e, dentro do campo **extras**, o plano de um usuário.
```html
<script src="https://unpkg.com/blip-chat-widget@1.6.*" type="text/javascript"></script>
<script>
	(function () {
			window.onload = function () {
				var blipClient = new BlipChat();
				blipClient
				.withAppKey('YOUR-BLIPCHAT-API-KEY')
				.withAccount({
					fullName: 'John Doe',
					email:'johndoe@gmail.com',
					phoneNumber: '+15055034455',
					city: 'Decatur',
					extras:{
						plan: 'gold'
					}
				})
				.build();
			}
	})();
</script>
```

## Como executar ações a partir de determinados eventos do Widget

Caso você precise realizar algum tipo de ação em algum evento do Chat, basta utilizar o método **withEventHandler** informando o tipo de evento a ser tratado e a ação a ser realizada.

*Os tipos de eventos podem ser*:

* ENTER_EVENT = Executar alguma ação ao abrir o Chat
* LEAVE_EVENT = Executar alguma ação ao fechar o Chat
* LOAD_EVENT = Executar alguma ação ao término do carregamento do Chat
* CREATE_ACCOUNT_EVENT = Executar alguma ação ao criar a conta do usuário

Veja o exemplo abaixo de como utilizar essa função:

```html
<script src="https://unpkg.com/blip-chat-widget" type="text/javascript"></script>
<script>
(function () {
        window.onload = function () {
          var blipClient = new BlipChat()
.withAppKey('YOUR-BLIPCHAT-API-KEY')
            .withEventHandler(BlipChat.ENTER_EVENT, function () {
              console.log('enter')
            })
            .withEventHandler(BlipChat.LEAVE_EVENT, function () {
              console.log('leave')
            })
            .withEventHandler(BlipChat.LOAD_EVENT, function () {
              console.log('chat loaded')
            })
            .withEventHandler(BlipChat.CREATE_ACCOUNT_EVENT, function () {
    		  console.log('account created')
            })

          blipClient.build()
      }
    })();
</script>
```

## Como enviar mensagens após carregar o chat

## Associar o BLiP Chat a um elemento HTML

Caso você precise definir um elemento HTML, como uma *div*, por exemplo, e associar o Widget a ele, você precisa utilizar a função **withTarget()**, passando como parâmetro o *id* do elemento em questão.

```html
<div id="myModal">
	<div class="myModalContent">
		<span class="close">&times;</span>
		<div class="iframe-chatbot" id="iframe"></div>
    </div>
</div>

<script src="https://unpkg.com/blip-chat-widget" type="text/javascript"></script>
<script>
(function () {
	window.onload = function () {
			new BlipChat()
				.withAppKey('YOUR-BLIPCHAT-API-KEY')
				.withTarget('iframe')
				.build();
			}
	})();
</script>
```

## Deletar a instância do Widget

## Como customizar o Widget

É possível customizar a interface, botão, cores, entre outras personalizações disponíveis. Caso você precise fazer esse tipo de customização, dê uma olhada neste artigo: [Customizando o BLiP Chat Widget através de CSS](https://help.blip.ai/docs/channels/blip-chat/customizando-o-blip-chat-widget-com-css/)

## Como executar um comando através do Widget

Suponha que você precise enviar um comando para a API do BLiP quando o chat for carregado. Para isso, basta que você utilize a função **sendCommand()**, conforme o exemplo abaixo:

```html
<script src="https://unpkg.com/blip-chat-widget@1.6.*" type="text/javascript"></script>
<script>
(function () {
        window.onload = function () {
			var blipClient = new BlipChat();
			blipClient.withAppKey('YOUR-APP-KEY')
			.withEventHandler(BlipChat.LOAD_EVENT, function () {
			blipClient.sendCommand({
				id: "ag0asd0as-daasdasd0a",
				to: 'postmaster@ai.msging.net',
				method: Lime.CommandMethod.GET,
				uri: '/entities'
			})
      		.build();
        }
    })();
</script>
```