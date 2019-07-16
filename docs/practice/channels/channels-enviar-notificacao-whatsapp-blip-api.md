---
id: channels-enviar-notificacao-whatsapp-blip-api
title: Enviar notificações WhatsApp via API do BLiP
sidebar_label: Enviar notificações WhatsApp via API do BLiP
---

Com a abertura da API oficial do WhatsApp (início de Agosto de 2018), tornou-se possível utilizar este canal para melhorar a comunicação entre clientes e empresas.

Através do BLiP, é possível criar soluções de atendimento humano e automatizado em vários canais. No caso dos bots para o WhatsApp, além de responder as mensagens recebidas automaticamente, também é permitido enviar notificações para o cliente de forma ativa.

Qualquer mensagem enviada pelo bot (contato inteligente da empresa no WhatsApp), após uma janela de 24 horas, da última mensagem enviada pelo cliente é considerada uma notificação (associada à um *MessageTemplate*).

Utilizando a API do BLiP é possível enviar notificações para usuários de um bot no WhatsApp. No vídeo abaixo, demonstro, passo a passo, como realizar este procedimento.

<iframe width="560" height="315" src="https://www.youtube.com/embed/JtY0woSr9wo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>

**Resumo das etapas**:

**1)** Criar bot no BLiP  
**2)** Configurar o canal WhatsApp com as informações do seu **WEC** - WhatsApp Enterprise Client (container)  
**3)** Realizar uma requisição HTTP para a API do BLiP (utilizando Postman)  
**4)** Testes  
