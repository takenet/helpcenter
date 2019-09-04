---
id: arquitetura-email
title: Arquitetura do canal de Email
sidebar_label: Arquitetura do canal de Email
---

A arquitetura dos provedores de e-mail pode ser um pouco complexa, mas basicamente, quando o cliente envia uma mensagem para o endereço de e-mail do seu bot, as mensagens passam pelos servidores do seu provedor de e-mail e são recebidas e processadas pelos servidores do BLiP.

Visando facilitar esse processo, o BLiP utiliza um serviço externo - [**Mailgun**](https://www.mailgun.com/) - para ajudar na gestão dos e-mails. Dessa forma, os emails recebidos (ou enviados) por um bot do BLiP passam também pelos servidores do Mailgun, conforme demonstrado na imagem abaixo.

![](/img/channels/email/arquitetura-email-1.png)<br>
* **Observação:** Todos os usuários do BLiP já possuem um endereço de e-mail padrão para cada chatbot criado.*
