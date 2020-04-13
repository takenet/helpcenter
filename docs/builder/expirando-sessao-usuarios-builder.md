---
id: expirando-sessao-usuarios-builder
title: Expirando a sessão dos usuários do Builder
sidebar_label: Expirando a sessão dos usuários do Builder
---

Um problema muito comum durante o desenvolvimento de um bot é garantir que os usuários estejam sempre em pontos estratégicos no fluxo de uma conversa. Por isso, em alguns contextos específicos, pode ser necessário garantir que os usuários **que estão à algum tempo sem interagir** com sua aplicação sejam enviados para o ponto inicial da conversa.

Por padrão, a sessão de um usuário no Builder nunca expira, mas você pode **alterar esse comportamento** definindo um tempo máximo de expiração de sessão. Ou seja, usuários que ficarem sem interagir com o bot por um tempo superior ao definido no tempo de sessão serão automaticamente enviados para o início do fluxo.

Para isso, acesse o **Builder**, clique no botão de **Configurações do Builder** e clique na opção **Expiração de Sessão**. Defina o tempo máximo da sessão em segundos.

![Configuração de Expiração de Sessão Builder](/img/builder/builder-expirando-sessao-usuarios-builder-1.png)<br>

No exemplo acima, usuários que ficarem mais de 1 hora (3600 segundos) sem interagir com o bot serão automaticamente enviados para o bloco início.

<font color="gray">Adicionado na Release 19.25</font>

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>