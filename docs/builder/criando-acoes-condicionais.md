---
id: criando-acoes-condicionais
title: Criando ações condicionais
sidebar_label: Criando ações condicionais
---

[Uma ação representa uma tarefa que será executada em um bloco do Builder](/docs/builder/visao-geral-das-acoes). Existem diversas ações disponíveis no Builder, como Requisição HTTP, Registro de Eventos, Scripts JS entre várias outras.

No momento de criar uma ação é possível definir se a mesma será [local ou global](/docs/builder/definindo-acoes-globais), se será uma [ação de entrada ou saída](/docs/builder/visao-geral-das-acoes), além de qual(is) a(s) condição(ões) necessária(s) para que a mesma seja executada.

Para definir a condição necessária para que uma determinada ação seja executada utilize a seção **Condição**, localizada na parte inferior da tela de definição de uma ação.

![Criando ações condicionais no Builder](/img/builder/builder-criando-acoes-condicionais-1.png)<br>

No exemplo acima, a ação de **Registro** de evento será executada apenas nos blocos que contem, em seu nome, as palavras <u>Início</u> ou <u>Exceções</u>.

<font color=gray>Adicionado na Release 19.25</font>
