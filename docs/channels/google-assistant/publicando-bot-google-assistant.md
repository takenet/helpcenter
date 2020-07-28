---
id: publicando-bot-google-assistant
title: Como publicar seu bot no Google Assistant
sidebar_label: Como publicar seu bot no Google Assistant
---

> **Atualmente, a integração com o canal Google Assistant está disponível apenas para usuários do tipo *Enterprise*.**

  **1.** Para conectar seu bot ao Assistant, acesse o [Console do Actions](https://console.actions.google.com/u/0/) e **crie um projeto**.

![actions console](/img/channels/google-assistant/publicando-bot-google-assistant-1.png)

  **2.** Escolha um nome para o seu projeto e configure a língua e a região da Action.

![configurando projeto no Actions](/img/channels/google-assistant/publicando-bot-google-assistant-2.png)

  **3.** Escolha a categoria do projeto.

![Configurando categoria do projeto no Actions](/img/channels/google-assistant/publicando-bot-google-assistant-3.png)

  **4.** Agora, vá para as Configurações do Projeto no canto superior direito e copie o **Project Id**

  ![Menu de configurações do projeto](/img/channels/google-assistant/publicando-bot-google-assistant-4.png) 
  ![Project Id](/img/channels/google-assistant/publicando-bot-google-assistant-5.png)


  **5.** Faça o download do [Gactions CLI](https://developers.google.com/assistant/conversational/df-asdk/actions-sdk/gactions-cli), cole o executável na pasta do projeto e, através de linhas de comando (cmd), rode o comando:

  ```
  gactions init
  ```

  **6.** Configure o arquivo `JSON` de acordo com o seu bot.

  ![Arquivo de configuração JSON](/img/channels/google-assistant/publicando-bot-google-assistant-6.png)

  **7.** Atualize as suas configurações do Actions rodando o comando:

  ```
  gactions update --action_package action.json --project [YOUR_PROJECT_ID]
  
  ```

  **8.** Acesse o [BLiP](https://portal.blip.ai), selecione o seu bot e vá em **Configurações**. Acesse as **Configurações Avançadas** e adicione a seguinte configuração:  

    Domínio: postmaster@assistant.gw.msging.net
    Chave:  AccountExternalId
    Valor:  [PROJECT-ID]  

  ![Configurações avançadas no BLiP](/img/channels/google-assistant/publicando-bot-google-assistant-7.png)


**Parabéns!** Seu bot está pronto e conectado ao Google Assistant.


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>