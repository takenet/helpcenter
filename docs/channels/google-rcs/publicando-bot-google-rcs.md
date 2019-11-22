---
id: publicando-bot-google-rcs
title: Como publicar seu Chatbot no Google RCS
sidebar_label: Como publicar seu Chatbot no Google RCS
---

> **ATENÇÃO:** O uso do Google RCS está restrito a algumas empresas. Siga os passos descritos neste artigo apenas se sua empresa possui acesso à este canal. Caso tenha interesse em utilizar o canal Google RCS entre em contato [clicando aqui](mailto:community@take.net).

Antes de iniciar o processo de publicação de um contato inteligente no canal Google RCS verifique todos os pré-requisitos necessários.

### Pré-requisitos

1. Ter acesso ao Console do Google RCS Business Messaging.
2. Criar um agente no console do Google RCS Business Messaging.
3. Possuir um telefone Android habilitado para testar o **RCS**

Para habilitar um telefone como usuário de teste do Google RCS, abra o aplicativo **Mensagens**.

* Dentro do aplicativo, clique no ícone de pesquisa (no canto superior direito).In the Messages app, tap the search icon.
* Digite "*xyzzy*" e clique no butão pesquisar para habilitar o menu **Debug**.
* Clique no ícone do menu (canto superior direito) e depois escolha as opções Debug > RCS > Report RCS Connection State.
* O aplicativo mostrará uma imagem indicando se o RCS está **Ativo** ou **Inativo** para este aparelho.

4. Habilitar um celular como usuário de teste de um agente do RCS.

Para isso, acesse o agente criado no Console do Google RCS e clique na opção **Devices**.
Informe um número de telefone Android, previamente habilitado para utilizar o RCS (conforme descrito no item 3).

![Imagem que demonstra com habilitar um aparelho celular como usuário de teste de um agente do RCS]()

Clique em **Send test message** e escolha uma mensagem de teste para ser enviada para o número definido.

## Configurando o agente no BLiP

1. Acesse o agente no Console do Google RCS e clique em **Service account**. Clique no botão **Create key** para criar uma chave que dará acesso ao BLiP para enviar mensagens em nome do seu agente.

![]()

Ao final do processo de criação de uma chave você terá um arquivo JSON (**ServiceCredentialJson**) e um token (**RcsClientToken**). Essas informações serão utilizadas mais adiante.

![]()
