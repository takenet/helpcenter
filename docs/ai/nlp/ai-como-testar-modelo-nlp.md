---
id: ai-como-testar-modelo-nlp
title: Como testar seu modelo de NLP
sidebar_label: Como testar seu modelo de NLP
---

Antes de testar o funcionamento do seu modelo, verifique se todos os pré-requisitos abaixo já foram realizados. Caso não saiba o que é um **modelo**, **intenção**, **entidades** ou **provedores de NLP**, [clique aqui antes de continuar](https://help.blip.ai/hc/pt-br/articles/360001204332-Conceitos-b%C3%A1sicos-para-utilizar-NLP-e-IA-em-chatbots).

1. Configuração de um provedor ([Dialogflow](https://help.blip.ai/hc/pt-br/articles/360017477712-Como-configurar-o-DialogFlow-como-um-provedor-de-Intelig%C3%AAncia-Artificial), [Watson](https://help.blip.ai/hc/pt-br/articles/360019263231-Como-configurar-o-Watson-Assistant-como-um-provedor-de-Intelig%C3%AAncia-Artificial))
2. [Adição de pelo menos uma intenção](https://help.blip.ai/hc/pt-br/articles/360000646132-Como-criar-uma-inten%C3%A7%C3%A3o)
3. (Opcional) [Adição de uma entidade](https://help.blip.ai/hc/pt-br/articles/360000646072-Como-criar-uma-entidade-)
4. [Treinamento e publicação de ao menos uma versão do modelo](https://help.blip.ai/hc/pt-br/articles/360000646172-Treinando-e-publicando-seu-modelo-de-intelig%C3%AAncia-artificial)

Depois de garantir que todos os passos anteriores já foram seguidos é hora de testar se seu modelo. Para isso, acesse o módulo de **Inteligencia Artificial**, escolha o sub menu **Publicação**, clique no botão **Testar modelo de IA** e na janela de conversa lateral digite a frase que deseja testar.

![Como treinar modelo NLP](/img/practice/ai/ai-como-testar-modelo-nlp-1.png)<br><br>

Repare que ao enviar uma frase de teste o BLiP exibirá:
* A(s) intenção(ões) associada(s) a frase;
* Qual a confiabilidade (score) associada a cada uma das intenções; 

![Treinamento NLP](/img/practice/ai/ai-como-testar-modelo-nlp-2.png)<br><br>

Seu objetivo agora é testar o máximo de frases que os usuários supostamente enviariam para o contato da sua empresa. Analise a possibilidade de adicionar novas frases em suas intenções ou criar novas inteções/entidades, para os exemplos de frase não reconhecidos pelo seu modelo.

* **Observação: Lembre-se de treinar e publicar a primeira versão do seu modelo antes de realizar o treinamento.**
* **Observação 2: A partir da segunda versão do modelo, novas alterações devem ser testadas após novos treinamentos.**
