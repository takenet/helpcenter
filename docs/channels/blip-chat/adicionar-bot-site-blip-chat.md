---
id: adicionar-bot-site-blip-chat
title: Como adicionar um bot em um site utilizando o BLiP Chat?
sidebar_label: Como adicionar um bot em um site utilizando o BLiP Chat?
---

Para integrar seu o bot a uma página web com o BLiP é muito simples. Para isso, você precisará publicar o seu bot no canal BLiP Chat.

O canal permite que um bot seja integrado em um site de duas formas diferentes: **como um widget** ou de **forma embutida** (embedded) ao site, junto ao corpo html do site.

**Antes de começar, acesse o [portal](https://portal.blip.ai/) e escolha o bot que deseja colocar em seu site.**

## Integrar um bot a um site como um widget

1. Clique no módulo **Canais** (no portal do BLiP) e escolha o canal **BLiP Chat**.
​
![Menu canais de conversa BLiP](/img/channels/blip-chat/chat-adicionar-bot-site-blip-chat-1.png)<br>

2. Clique na aba **Configurações** e informe o domínio do(s) site(s) que deseja colocar o BLiP Chat.

**Observação**: Essa é uma operação obrigatória. Por uma questão de segurança, seu bot funcionará apenas nas páginas cujo domínio tenha sido previamente habilitado no portal do BLiP. No exemplo da imagem abaixo, o BLiP Chat será carregado apenas em páginas cujo domínio seja **seudominio<span>.</span>com**

![configurações blip chat](/img/channels/blip-chat/chat-adicionar-bot-site-blip-chat-2.png)<br>

3. Clique na aba **Instalação**, copie o script apresentado e cole-o dentro do <u>body da sua página web</u>.

![instalação blip chat](/img/channels/blip-chat/chat-adicionar-bot-site-blip-chat-3.png)<br>

## Integrar um bot a um site de forma embutida

1. Repita os mesmos 3 passos do modo de integração como widget.  
2. Realize uma alteração no script copiado no portal  

O script padrão de integração do BLiP Chat é idêntico ao script abaixo (com a exceção da chave, que é única para cada bot).

```html
<script src="https://unpkg.com/blip-chat-widget" type="text/javascript">
</script>
<script>
   (function () {
      window.onload = function () {
         new BlipChat()
                    .withAppKey('YOUR-BLIP-CHAT-KEY')
                    .withButton({"color":"#2CC3D5"})
                    .build();
      }
})();
</script>
```

Para embutir a interface em um elemento html com o id **'your-element-id'** do seu site altere o script conforme abaixo:

```html
<script src="https://unpkg.com/blip-chat-widget" type="text/javascript">
</script>
<script>
   (function () {
      window.onload = function () {
         new BlipChat()
                    .withAppKey('YOUR-BLIP-CHAT-KEY')
                    .withButton({"color":"#2CC3D5"})
                    .withTarget('your-element-id')
                    .build(options);
      }
})();
</script>
```

**Observações**:

\* Independentemente da forma de integração, são possíveis ainda algumas customizações para personalizar a experiência do usuário com a interface do BLiP Chat. Para verificar todos os detalhes, [clique aqui](/docs/channels/blip-chat/customizacoes-disponiveis-blip-chat).

\* Para configurações avançadas do scritpt do BLiP Chat na web, consulte o projeto no [Github](https://github.com/takenet/blip-chat-widget).