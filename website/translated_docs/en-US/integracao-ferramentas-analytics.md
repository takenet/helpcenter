---
id: integracao-ferramentas-analytics
title: Integração com ferramentas de analytics
sidebar_label: Integração com ferramentas de analytics
---

Durante o evento [Chatbot4Devs](http://chatbot4devs.take.net/), o BLiP, anunciou mais uma grande novidade: o hub de ferramentas de *analytics* 😃!

**Mas afinal, o que é um hub?** Hub (traduzido do Inglês, como um "pivô" ou concentrador) define uma estrutura, através da qual, é possível realizar o processo de transmissão (ou difusão) de determinada informação, tendo, como principal característica, que uma mesma informação sendo enviada para muitos receptores ao mesmo tempo (*broadcast*). Ou seja, sempre que o hub recebe uma informação, ele é capaz de enviar o mesmo dado para várias outras ferramentas.

Pensando em todo o ciclo de vida de um **bom chatbot**, analisar e entender tudo que acontece durante as interações dos clientes é tarefa fundamental. Por isso, o BLiP disponibilizou, em sua última release, um módulo de integração com ferramentas de *analytics*.

A partir de agora, além dos já conhecidos dashboards de **Visão Geral** e **Análise de dados**, é possível também enviar as mensagens trocadas pelo bot para ferramentas especializadas nessas análises.

## Como funciona o Hub de analytics ?
O Hub de ferramentas de analytics do BLiP envia eventos e mensages recebidas (ou enviadas) pelo seu bot para todas as ferramentas de análises ativas. Essa é uma forma ágil de testar a qualidade e usabilidade de diferentes ferramentas sem a necessidade de integrar-se a cada delas diretamente.

Atualmente, o hub de analytics conta com duas ferramentas:

* [Chatbase](https://chatbase.com/) - Ferramenta do Google, especializada na análise de dados em chatbots ([Clique aqui para saber como habilitar a integração com Chatbase no seu bot](https://help.blip.ai/hc/pt-br/articles/360002965832-Integra%C3%A7%C3%A3o-Chatbase-Como-enviar-dados-de-um-bot-para-o-Chatbase-));
* [BotAnalytics](https://botanalytics.co/) - Ferramenta especializada na análise de dados gerados em aplicações conversacionais e na evolução das interações entre humanos e bots ([Clique aqui para saber como habilitar a integração com o BotAnalytics no seu bot](https://help.blip.ai/hc/pt-br/articles/360020501031-Integra%C3%A7%C3%A3o-BotAnalytics-Como-enviar-dados-de-um-bot-para-o-BotAnalytics-));
* [Dashbot](https://www.dashbot.io/) - Ferramenta especializada na análise de dados gerados em chatbots e aplicações de voz. Focado na melhoria da satisfação dos usuários, engajamento e monetização ([Clique aqui para saber como habilitar a integração com o Dashbot no seu bot](https://help.blip.ai/hc/pt-br/articles/360020239532-Integra%C3%A7%C3%A3o-Dashbot-Como-enviar-dados-de-um-bot-para-o-Dashbot-));
* [Webhook](https://en.wikipedia.org/wiki/Webhook) - Integração customizada, que possibilita enviar os dados trafegados pelo chatbot para qualquer ferramenta ([Clique aqui para saber como enviar os eventos de seu bot para uma aplicação customizada através do Webhook](https://help.blip.ai/hc/pt-br/articles/360020500911));
