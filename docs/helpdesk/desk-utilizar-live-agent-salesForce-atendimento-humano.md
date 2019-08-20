---
id: desk-utilizar-live-agent-salesForce-atendimento-humano
title: Integração SalesForce Live Agent - Como utilizar a ferramenta Live Agent do SalesForce para atendimento humano?
sidebar_label: Integração SalesForce Live Agent - Como utilizar a ferramenta Live Agent do SalesForce para atendimento humano?
---

Para utilizar a ferramenta **Live Agent** do **SalesForce** durante o processo de atendimento humano é preciso ter uma conta SalesForce e realizar algumas configurações dentro do BLiP.

## 1 - Criando uma conta no SalesForce

[Clique aqui](https://www.salesforce.com/) para acessar a ferramenta do SalesForce e criar sua conta.
Para mais detalhes sobre o processo de criação desta conta siga os passos definidos [neste artigo](https://help.salesforce.com/articleView?id=account_add.htm&type=5).

## 2 - Realizando configurações no SalesForce

[Clique aqui](https://developer.salesforce.com/docs/atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup_get_settings.htm) e veja todos os passos necessários para realizar a configuração de um serviço externo à sua aplicação SalesForce. Ao final do processo você terá 4 configurações necessárias para a integração entre o BLiP e o SalesForce:

* Chat endpoint name
* Organization ID
* Deployment ID
* Button ID

![Configurações SalesForce](/img/helpdesk/desk-utilizar-live-agent-salesForce-atendimento-humano-1.png)<br>

## 3 - Adicionando suas configurações ao BLiP

Acesse o módulo **Atendimento** em seu bot, escolha o provedor **SalesForce** e clique na aba **Configurações**.

Adicione os dados obtidos no passo anterior e clique em **Conectar**. Pronto, a partir de agora os tickets de atendimento humano serão enviados para a ferramenta **Live Agent**.

![Configurações SalesForce no BLiP](/img/helpdesk/desk-utilizar-live-agent-salesForce-atendimento-humano-2.png)
***Observação: Lembre-se que ao ativar um provedor de atendimento humano diferente do BLiP Desk os recursos de Monitoramento e Relatórios não estarão mais disponíveis.***
