---
id: definindo-acoes-globais
title: Definindo ações globais no Builder
sidebar_label: Definindo ações globais no Builder
---

Uma ação **representa uma tarefa** que deve ser executada em qualquer bloco do Builder, seja antes do envio dos conteúdos de um bloco (ação de entrada), ou imediatamente após o envio dos conteúdos (ação de saída). Existem diversas ações disponíveis no Builder, como Requisição HTTP, Registro de Eventos, Scripts JS entre várias outras. Para saber mais sobre ações **clique aqui**.

Ações podem ser definidas de forma **local**, ou seja, no escopo de um bloco do Builder ou de forma **global**. Uma ação global será executada de forma conjunta as entradas de usuários presentes no fluxo do seu bot. Ações **globais de entrada** são executadas <u>imediatamente após</u> a máquina de estados (Builder) retomar sua execução por ter recebido uma entrada do usuário. Já as ações **globais de saída** são executadas <u>imediatamente antes</u> da máquina de estados parar sua execução para aguardar uma nova entrada do usuário.

O diagrama abaixo exemplifica a ordem de execução das ações do fluxo ao receber uma entrada do usuário:

![Diagrama de fluxo das ações do builder](/img/builder/builder-fluxo-de-acoes.png)<br>

Para definir uma ação global, acesse as **Configurações do Builder** do seu bot e escolha a opção **Ações Globais**.

![Menu opções globais Builder](/img/builder/builder-definindo-acoes-globais-1.png)<br>

## Mas afinal, quando utilizar uma ação global?

Pense em utilizar ações globais para tarefas que precisam ser realizadas a cada iteração (entradas responsáveis por receber as mensagens) dos seus usuários. Um exemplo de utilização deste tipo de ação é o registro de evento para cada um dos blocos responsáveis por receber conteúdos dos usuário. Nesse cenário é possível utilizar a variável *{{state<span>.</span>name}}* para garantir que todos os eventos levem em consideração o nome do bloco associado à entrada.

![Ações globais exemplo](/img/builder/builder-definindo-acoes-globais-2.png)<br>

<font color=gray>Adicionado na Release 19.25</font>


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>