---
id: metrics-o-que-sao-usuarios-unicos
title: O que são usuários únicos do BLiP
sidebar_label: O que são usuários únicos do BLiP
---

O cálculo de usuário único do BLiP é feito por canal. Cada canal identifica um usuário (de forma particular) através de um identificador único.

Para formar o identificador de um usuário o BLiP utiliza duas informações: o identificador do usuário e o identificador do canal ao qual esse usuário pertence.

## Canal Messenger

O usuário Rafael Pacheco, no canal Facebook, possui o identificador **100015312991176**. No BLiP o canal Facebook Messenger é identificado como **messengergwmsging<span>.</span>net**. Assim, quando o Rafael Pacheco entrar em contato com um bot, será computado um usuário único de id **100015312991176@messenger<span>.</span>gw<span>.</span>msging<span>.net</span>**

## Canal BLiP Chat

O BLiP Chat divide seus usuários em duas categorias:

* Usuários integrados

Usuários integrados são aqueles que o desenvolvedor identificou no momento de utilizar o BLiP Chat em seu site ou aplicativo móvel.

Imagine o cenário de um usuário (de nome Rafael Pacheco, por exemplo) identificado pelo desenvolvedor como o usuário **ravpacheco@gmail<span>.</span>com** e a senha **1234567**. No BLiP o canal BLiP Chat é identificado como **0mn\.io**. Assim, quando o usuário Rafael Pacheco entrar em contato com um bot, pela primeira vez, será computado um usuário único de id **ravpacheco%40gmail<span>.</span>com@0mn<span>.</span>io**.

* Usuários não integrados

Usuários não integrados são temporários, gerados aleatoriamente pela plataforma, porque o desenvolvedor não forneceu nenhuma identificação do mesmo, no momento de utilizar o BLiP Chat em seu site ou aplicativo móvel.

Para usuários não integrados o BLiP Chat gera um identificador único para cada sessão de conversa com o bot. Imagine o cenário de um usuário qualquer, não identificado pelo desenvolvedor, com um identificador aleatório **999bbe42-68b0-4816-bf58-53194ef2deeb**. No BLiP o canal BLiP Chat é identificado como **0mn\.io**. Assim, quando o usuário entrar em contato com um bot, pela primeira vez, será computado um usuário único de id **999bbe42-68b0-4816-bf58-53194ef2deeb@0mn<span>.</span>io**.
