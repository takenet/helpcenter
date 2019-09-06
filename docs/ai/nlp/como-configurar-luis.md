---
id: como-configurar-luis
title: Como configurar LUIS como um provedor de Inteligência Artificial
sidebar_label: Como configurar LUIS como um provedor de Inteligência Artificial
---

Para ativar a integração entre o BLiP e o serviço LUIS - provedor de NLP Natural Language Processing (do português, Processamento de linguagem natural/Entendimento de linguagem natural) da Microsoft, são necessárias algumas configurações bem simples.

Antes de começar, certifique-se de já ter criado sua conta no LUIS através do site [luis.ai](https://www.luis.ai/).


1) Acesse o [portal do BLiP](https://portal.blip.ai), escolha seu bot.
2) Acesse a área de Inteligência Artificial, e selecione o Luis.

![](/img/ai/nlp/como-configurar-luis-1.png)<br>

3) No site do Luis clique na sua foto de perfil e vá para a tela de **settings**.

![](/img/ai/nlp/como-configurar-luis-2.png)<br>

4) Copie a **authoring key**.

![](/img/ai/nlp/como-configurar-luis-3.png)<br>

## Uso gratuito

Para o uso free do bot cole a **Authoring Key** copiada no passo anterior no campo Authoring key e também no campo **Cognitive Service Resource Key**, no BLiP. Clique em **salvar** e o ***bot está pronto para o uso free*** 😀.

![](/img/ai/nlp/como-configurar-luis-4.png)<br>


## Uso pago

É necessário ativar a aplicação usando a **Authoring Key** copiada no passo anterior no campo **Authoring Key** e também no campo **Cognitive Service Resource Key**, no BLiP.


![](/img/ai/nlp/como-configurar-luis-4.png)<br>

Clique em **salvar** e treine o modelo na aba de **Publicação no BLiP**. Isso criará uma aplicação dentro do LUIS.

![](/img/ai/nlp/como-configurar-luis-5.png)<br>

Para criar a sua chave paga, acesse [portal.azure.com](https://portal.azure.com/) e faça seu login.

![](/img/ai/nlp/como-configurar-luis-6.png)<br>

Clique em **Criar um Recurso** e busque por **Cognitive Services** e crie um recurso desse tipo.

![](/img/ai/nlp/como-configurar-luis-7.png)<br>
![](/img/ai/nlp/como-configurar-luis-8.png)<br>

Preencha os slots conforme a sua infra-estrutura.

![](/img/ai/nlp/como-configurar-luis-9.png)<br>

Após a criação do seu serviço cognitivo volte ao site [luis.ai](https://www.luis.ai/) e acesse a aplicação criada pelo BLiP, referente ao bot que você está configurando.

Dentro da aba de **Gerenciamento**, vá até a tela de **Keys and Endpoints** e clique no botão **Assign Resource**.

![](/img/ai/nlp/como-configurar-luis-10.png)<br>

Na tela que abrirá, preencha as opções da mesma forma que você fez quando criou o seu Serviço Cognitivo no Azure e o selecione no campo **LUIS resource name**.

![](/img/ai/nlp/como-configurar-luis-11.png)<br>

Depois copie a **Key 1** referente ao recurso que você acabou de adicionar e cole essa chave no campo **Cognitive Service Resource Key** na tela de configuração do provedor LUIS no BLiP.

![](/img/ai/nlp/como-configurar-luis-12.png)<br>

Pronto, seu provedor de NLP já está configurado! 🤩

Para saber mais sobre como utilizar o módulo de Inteligência Artificial do BLiP [clique aqui](/docs/general/level-up/level-up-3-checklist-de-ia).
