---
id: publicando-bot-no-whatsapp
title: Publicando seu bot no canal WhatsApp
sidebar_label: Publicando seu bot no canal WhatsApp
---

O processo de publicação de um contato inteligente no canal WhatsApp é bem simples.

### Pré-requisitos

Antes de começar, garanta que sua empresa já recebeu as informações necessárias para a publicação do canal. São elas:

* Número do contato no WhatsApp (**Ex. +553133496201**)
* Hostname do container - WhatsApp Business API Client (**Ex. yourcompany-wa\.msging\.net**)
* Porta do container (**Ex. 443**)
* Usuário do container (**Ex. admin**)
* Senha do container (**Ex. 123456**)
* Certificado VNAME do número do contato no WhatsApp (**Ex. CmEKHQiW9d6G2fWzAxIGZW50On**)

Todas as informações anteriores, necessárias para ativação do canal WhatsApp, são enviadas, por email, para as organizações que já possuem um plano do BLiP e já passaram pelo processo de ativação do contato no WhatsApp.

### 1. Dados do container (WhatsApp Business API Client)
De posse das informações necessárias, acesse o portal do BLiP, escolha o bot que será publicado e clique no módulo **Canais**. Selecione WhatsApp e clique na aba configurações

![Configurações canal whatsapp](/img/channels/whatsapp/publicando-bot-no-whatsapp-1.png)<br>

Entre com as informações solicitadas, **Nome do host, porta, usuário, senha,** e clique em Avançar.

### 2. Dados do número

Na segunda etapa do processo de publicação é necessário validar a propriedade do número utilizado. Para isso, o WhatsApp disponibiliza 2 formas de validação:

* Através de uma mensagem SMS: O número informado receberá um código de validação através de uma mensagem SMS.

* Através de uma ligação de voz: O número informado receberá uma ligação de voz (em inglês), com uma gravação contendo um código de validação. **Obs.: Caso escolha a opção de ativação por ligação de voz, garanta que o número que está sendo ativado pode receber uma ligação de voz originada por um número internacional**.

**IMPORTANTE: Durante esta etapa garanta que o número que está sendo ativado no WhatsApp esteja acessível.  Você receberá uma mensagem de texto ou ligação de voz neste número.**

Entre com as informações solicitadas na segunda etapa de validação: **código do país** (55 para o Brasil), **número do telefone do contato** (com DDD) e o certificado VNAME, conforme imagem abaixo.

![Entrando com informações solicitadas canal whatsapp](/img/channels/whatsapp/publicando-bot-no-whatsapp-2.png)<br>

Logo após adicionar as informações acima será necessário informar ao BLiP se o número que está sendo ativado possui um código PIN. Um código PIN é um código de 6 caracteres que serve para garantir a propriedade do seu número.

Caso essa seja a primeira ativação do número marque **Não** para esta opção. Caso esteja realizando a publicação de um número que já possui um código PIN, marque **Sim** para esta opção e informe o valor do PIN.

Finalmente, escolha o modo de validação do número que achar melhor e clique em **Salvar e Avançar**.

![Configurando canal whatsapp](/img/channels/whatsapp/publicando-bot-no-whatsapp-3.png)<br>

**Obs.: Caso o código informado de validação do número do WhatsApp seja inserido de forma incorreta será necessário aguardar um período para refazer o processo. Essa é uma medida de segurança do WhatsApp, <u>por isso tenha certeza de que o código recebido é exatamente o código que você está informando ao BLiP.</u>**

Logo após clicar no botão **Salvar e avançar**, o número do WhatsApp que está sendo ativado receberá uma ligação de voz ou um SMS com um código de validação de 6 dígitos. O BLiP solicitará que você informe esse código recebido durante o processo de validação do número (SMS ou Ligação), conforme descrito na tela abaixo.

![Configurando canal whatsapp](/img/channels/whatsapp/publicando-bot-no-whatsapp-4.png)<br>

Entre com o código e clique em **Salvar e avançar**.

### 3. Informações do perfil de contato

Essa é a terceira e última etapa do processo de publicação de um bot no WhatsApp. Agora é o momento de definir quais serão as informações do perfil do seu contato. Algumas dessas informações serão exibidas quando o cliente clicar no perfil do seu contato no WhatsApp.

Entre com as seguintes informações:

* Código PIN:  um código de 6 caracteres que serve para garantir a propriedade do seu número. **IMPORTANTE: <u>Salve essa informação em algum lugar. Esse é o código que garante a propriedade do seu número no WhatsApp. Por uma questão de segurança, o BLiP não armazena essa informação. Essa informação poderá ser solicitada em ativações futuras. NÃO PERCA O PIN DO SEU NÚMERO</u>**.
* Mensagem de status: Mensagem aparecerá como o status do seu contato no WhatsApp.
* Descrição: Texto que descreve o que seu contato pode fazer.
* Endereço: Opcionalmente adicione o endereço da sua empresa.
* Email: Opcionalmente adicione um email de contato da sua empresa.
* Site: Opcionalmente adicione o site da sua empresa.

![Configurando canal whatsapp](/img/channels/whatsapp/publicando-bot-no-whatsapp-5.png)<br>

Depois de preencher todas as informações, clique em **Salvar**.

Pronto, seu contato já está publicado no WhatsApp. Para testar se tudo está funcionando corretamente, adicione o número do seu bot na agenda do seu celular, e inicie uma conversa através do WhatsApp.

**Atenção: Verifique que seu bot já foi previamente construído (no Builder ou programaticamente) antes de realizar o teste. Para saber como criar seu bot através do Builder clique aqui.**

Caso tenha alguma dificuldade durante o processo de publicação, veja o vídeo abaixo. Ele demonstra, passo a passo, como publicar um bot de atendimento humano no WhatsApp.

<iframe width="778" height="517" src="https://www.youtube.com/embed/JtY0woSr9wo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>