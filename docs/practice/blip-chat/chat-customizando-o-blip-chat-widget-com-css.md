---
id: chat-customizando-o-blip-chat-widget-com-css
title: Customizando o BLiP Chat Widget através de CSS
sidebar_label: Customizando o BLiP Chat Widget através de CSS
---

À primeira vista, pode parecer que ao adicionar o BLiP Chat Widget na sua página, ele não se encaixou muito bem com o estilo ao redor. Talvez você use um tema mais agressivo, ou deseje colocar o seu chatbot de uma forma diferente e mais atrativa no seu site.

Não tema, pois o widget já vem de fábrica, com ferramentas que podem facilmente te ajudar a adequá-lo ao estilo da sua página. E se ainda assim você sentir que falta alguma coisa, aí vão algumas dicas de como você pode dar aquele *up* e chamar mais atenção para o chat.

## Botão flutuante vs Chat embarcado

Pode acontecer do círculo flutuante não se encaixar muito com o estilo do seu site ou, pode ser, que você simplesmente queira colocar o chat dentro de um elemento qualquer na sua página.

    <!-- some element of your site -->
    <div id="chat">
    </div>

    <script>
        new BlipChat()
            .withTarget("chat")
            .build();
    </script>

A método **withTarget** do widget do BLiP Chat permite que você coloque seu chat onde quiser no site. Basta utilizar o "id" de um elemento HTML da sua página. A partir disso, a extensão vai carregar o chat no elemento que você indicar e você conseguirá ter mais liberdade para tratar o chat na sua página. Veja um exemplo abaixo:

**Antes**

![BLiP Chat](/img/practice/blip-chat/chat-customizando-o-blip-chat-widget-com-css-1.png)

**Depois**

![BLiP Chat em elemento customizado](/img/practice/blip-chat/chat-customizando-o-blip-chat-widget-com-css-1.png)

## Customizando dentro do iframe

Por motivos de segurança, fornecidos pelo próprio navegador, seu chat vem embarcado dentro de um elemento iframe. A questão é a limitação que vem junto com essa segurança.

O navegador impede qualquer tentativa de enviar regras de estilo para customizar a aparência interna do widget. Por isso, não é possível modificar o CSS do chat. Ou será que é?

    <script>
        new BlipChat()
            .withTarget("chat")
            .withCustomStyle("div { padding: 0; }")
            .build();
    </script>

O método **withCustomStyle** permite enviar para o Widget, uma *string* contendo o seu CSS customizado que será aplicado internamente no chat.

Caso queira manter esse CSS em um arquivo externo, para manter [linting](https://stackoverflow.com/questions/8503559/what-is-linting), organizar e facilitar a sua vida, você pode utilizar uma requisição para carregar (quase como adicionar um *link* no seu site):

    <script>
        fetch("localização do seu .css")
        .then(r => r.text()) // recupera o conteúdo como texto
        .then(styleSheet => { // "styleSheet" está preenchida com o conteúdo do arquivo
            new BlipChat()
                    .withTarget("chat")
                    .withCustomStyle(styleSheet)
                    .build();
        });          
    </script>

Dessa forma, você conseguirá customizar totalmente o seu chat:

**Antes**

![BLiP Chat em elemento customizado](/img/practice/blip-chat/chat-customizando-o-blip-chat-widget-com-css-2.png)

**Depois**

![BLiP Chat com CSS customizado](/img/practice/blip-chat/chat-customizando-o-blip-chat-widget-com-css-3.png)

## Chamando a atenção

Mesmo conhecendo os atalhos para deixar o chat mais atrativo, você ainda pode achar que a forma que o visitante da página visualiza a janela de chat ainda não está satisfatória.

Uma boa opção para melhorar a presença do seu bot, é adicionar, por exemplo, um balão com uma mensagem convidando o usuário:

**Antes**

![BLiP Chat](/img/practice/blip-chat/chat-customizando-o-blip-chat-widget-com-css-4.png)

**Depois**

![BLiP Chat com balão de convite](/img/practice/blip-chat/chat-customizando-o-blip-chat-widget-com-css-5.png)

ou até mesmo mudar a forma como o chat abre:

![BLiP Chat abrindo diferente](/img/practice/blip-chat/chat-customizando-o-blip-chat-widget-com-css-6.gif)

Tudo feito usando CSS, externo ao widget, controlando o que já existe em volta do iframe.

O código utilizado em todos os exemplos pode ser encontrado em: <https://henriquetorquato.github.io/>

Este artigo, imagens e códigos de exemplos foram criados pelo [Henrique Torquato](https://github.com/henriquetorquato) 😍.



