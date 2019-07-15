---
id: builder-criando-um-elemento-web-atraves-de-um-weblink-no-blip-chat
title: Criando um elemento web através de um weblink no BLiP Chat
sidebar_label: Criando um elemento web através de um weblink no BLiP Chat
---

Canais como o Facebook Messenger e o BLiP Chat suportam o tipo de conteúdo weblink com targets especiais: Self, SelfCompact e SelfTall. Dessa forma é possível exibir a página web dentro da própria conversa, sem que o usuário precise sair para um browser (se você não sabe o que é um weblink ou o que é o target de um weblink clique aqui).

Essa é uma estratégia muito interessante para bots que precisam solicitar dados complexos aos usuários. Imagine, por exemplo, como é difícil solicitar de um usuário, via apenas texto, um conjunto de elementos ou até mesmo um intervalo de datas. Além de ser difícil tratar todos os formatos de datas possíveis, que alguém pode escrever, é bem frustrante para o usuário digitar vários caracteres para montar uma data complexa.

Neste artigo explicarei, passo a passo, como criar uma página web e utilizá-la dentro de uma conversa do BLiP Chat, para solicitar uma data ao cliente.

## Para este exemplo, você vai precisar de:

1. Página web (HTML, CSS e JS), devidamente construida, com um elemento datepicker (seletor de data). [Clique aqui para baixar uma página de exemplo](https://github.com/takenet/blip-chat-extension/blob/master/samples/demo-webview.html);
2. Adicione um script Javascript (blip-chat-extension) para permitir que sua página envie conteúdo para seu bot;
3. Endpoint público (com https), que aponte para a sua página; (caso queira apenas testar, utilize o link: <https://blip-weblink-demo.herokuapp.com/>);
4. Um bot que envie o tipo de conteúdo Weblink com o link da página criada no passo 1 (utilizando um dos targets: Self, SelfCompact e SelfTall).

## Detalhando cada etapa

### 1. Página Web

Crie uma página web contendo os componentes necessários para o seu caso de uso. No exemplo deste artigo, a página web utilizada (veja imagem abaixo) contém apenas um datepicker e um botão enviar. O usuário deverá escolher uma data e depois clicar no botão enviar. Ao clicar no botão a janela será fechada e a data enviada para o bot. (Acesse a página de exemplo clicando [neste link](https://blip-weblink-demo.herokuapp.com/)).

![Página de exemplo](../../assets/practice/builder/builder-criando-um-elemento-web-atraves-de-um-weblink-no-blip-chat-1.png)

Você têm total liberdade para utilizar qualquer componente em sua página web, mas lembre-se que os componentes devem suportar os mais diversos browsers (desktop e mobile).

Outra dica importante é criar páginas mais netras, sem muitas cores e efeitos. Isso evita que o usuário sinta uma grande diferença entre todos os conteúdos nativos (texto, imagens e etc) e o conteúdo customizado que você está criando.

### 2. Adicione o script blip-chat-extension na página criada no passo anterior

Além de apresentar um conteúdo para o cliente, provavelmente, será necessário também trocar informações entre a janela web e o bot. Neste caso, será necessário utilizar a biblioteca blip-chat-extension.

No nosso exemplo sempre que o usuário escolher uma data e clicar no botão **Enviar** o bot deverá receber uma mensagem contendo a data escolhida pelo usuário. O fragmento de script abaixo utiliza o objeto **webView** para enviar mensagem na janela de conversa no momento em que o cliente clica no botão Enviar. 

    <script>
        vardatepicker = $('#datepicker').datepicker({
            uiLibrary:'bootstrap4'
        });

        //Carrega webview extensions
        var webView = newBlipChatExtension()

        $('#button').click(function () {
            
            vardate = datepicker.value();
            console.log(date);
            $('#value').text(date);

            //envia mensagem de texto simples. (Usuário consegue visualizar a mensagem na janela de conversa)
            webView.sendMessage(date);

            //finalizar webview
            webView.closeWebView();
        })
    </script>

**Observação**: Não se esqueça de adicionar a tag script que importa o pacote **blip-chat-extension**.

    <script src="https://unpkg.com/blip-chat-extension@1.0.4" type="text/javascript">

Além de enviar dados da página web para o bot é possível ainda criar uma regra que define quando a janela pode ou não ser fechada. Neste exemplo, o usuário não pode finalizar a janela enquanto não fornecer a data. O código abaixo ilustra esse processo.

    //Método que define as regras para fechamento da webview
    webView.overrideOnClose(function () {

        if (datepicker.value() != '') {
            //Permite fechar a webiview
            return true;
        }

        alert('Escolha uma data antes de fechar a Webview');
        
        //Impede o fechamento da webiview
            returnfalse;
    })

### 3. Criar endpoint (URL) público para sua página

Para que seja possível utilizar sua página web dentro da conversa do bot será preciso ter acesso à página através de uma URL pública. Esse enpoint necessariamente precisa ser executado em um ambiente seguro através **HTTPS**.

Para o exemplo deste artigo a página web é executada na URL: <https://blip-weblink-demo.herokuapp.com/>.

### 4. Criar bot que envie weblink

Finalmente, para que o usuário final receba uma página web é necessário enviar um conteúdo do tipo Weblink. Para isso acesse seu bot, selecione o Builder, escolha um bloco e adicione um conteúdo Weblink. 

![Enviando conteúdo do tipo Weblink](../../assets/practice/builder/builder-criando-um-elemento-web-atraves-de-um-weblink-no-blip-chat-2.png)

Clique [neste link](https://drive.google.com/file/d/1bH2Kkya47lOMUxs4Uhque1ONItFFqqeQ/view) para baixar o fluxo de um bot que envia um weblink.


