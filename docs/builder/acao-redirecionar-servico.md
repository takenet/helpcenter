---
id: acao-redirecionar-servico
title: Ação: Redicionar a um serviço
sidebar_label: Ação: Redirecionar a um serviço
---

Pensando em escalabilidade e na administração correta das bases de conhecimento dos bots, o BLiP possui o conceito de [hierarquias de bots](/docs/router/hierarquia-bots-subbots/). Através do Router, é possível criar um bot composto por diversos outros bots.

Neste cenário, para que seja possível trocar o usuário entre os subbots, é necessário utilizar a ação de redirecionamento de serviço, como visto na figura abaixo:

![Ação redirecionar a um serviço](/img/builder/acao-redirecionar-servico-1.png)

Esta ação é bem simples: basta informar o **identificador do Serviço (bot)** para o qual o usuário será direcionado e marcar (caso desejado) o envio da mensagem de contexto ao serviço que tratará as próximas interações do usuário.

O identificador do serviço precisa ser o mesmo informado nas configurações de **Serviços** do bot roteador.

![Configurando o nome do serviço](/img/builder/acao-redirecionar-servico-2.png)

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>