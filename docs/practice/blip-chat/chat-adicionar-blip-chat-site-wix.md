---
id: chat-adicionar-blip-chat-site-wix
title: Adicionar o BLiP Chat em um site Wix
sidebar_label: Adicionar o BLiP Chat em um site Wix
---

Adicionar o widget do BLiP Chat em um site Wix é bem simples. Antes de começar, você vai precisar de uma conta válida no Wix e de um site previamente criado.

## Passo a passo

### 1. Acesse o painel de administração do seu site, vá até o editor e adicione um bloco Código HTML (conforme imagem abaixo)

![Painel de administração do site](../../assets/practice/blip-chat/chat-adicionar-blip-chat-site-wix-1.png)<br>

Adicione o script do BLiP Chat conforme indicado no portal.

![script blip chat](../../assets/practice/blip-chat/chat-adicionar-blip-chat-site-wix-2.png)<br>

### 2. Após adicionar e ajustar o bloco de Código HTML, de acordo com o estilo do seu site, será necessário permitir o domínio no portal do BLiP.

![permitir o dominio no portal do blip](../../assets/practice/blip-chat/chat-adicionar-blip-chat-site-wix-3.png)

O Wix, utiliza *iframes* como estratégia para embarcar códigos HTML. **Por isso, o domínio que deverá ser incluido no portal não é o domínio do site, mas sim o domínio do iframe gerado pelo Wix.**

Para encontrar o domínio, publique seu componente, inspecione a página web (no componente do BLiP) e encontre o valor do iframe que embarca o componente.

![Inspecionando a página para encontrar domínio](../../assets/practice/blip-chat/chat-adicionar-blip-chat-site-wix-4.png)<br>

<font color=red> Neste exemplo o domínio que deverá ser liberado no portal do BLiP é </font>**pablotestetk-wixsite-com.fileusr<span>.</span>com**.

### 3. Após adicionar o domínio como válido, faça o teste em sua página.

![Testando página](../../assets/practice/blip-chat/chat-adicionar-blip-chat-site-wix-5.png)<br>

**Observação**: O *iframe* gerado pelo Wix na página publicada é diferente do *iframe* gerado na página dentro do editor do Wix. Caso queira visualizar o BLiP Chat nos dois locais, será necessário adicionar também o domínio do *iframe* de edição.
