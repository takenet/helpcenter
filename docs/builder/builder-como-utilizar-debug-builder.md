---
id: builder-como-utilizar-debug-builder
title: Como utilizar a ferramenta de debug do Builder
sidebar_label: Como utilizar a ferramenta de debug do Builder
---

Caso seu bot tenha sido construído através do Builder (ferramenta visual de construção de bots do BLiP), é possível utilizar a ferramenta de Debug para analisar todo o comportamento do fluxo do seu bot. Através dessa ferramenta é possível acompanhar como acontece a execução em cada um dos blocos que compõem a conversa da sua aplicação. 

Para utilizar o Debug, é necessário ter conhecimento sobre como o Builder funciona, e quais são seus principais conceitos: conteúdos, condições de saída e ações, de entrada (Entering Actions) e saída (Leaving Actions). Caso não saiba como criar um bot através do Builder ou não esteja familiarizado com estes conceitos clique aqui.

## Acessando a ferramenta de Debug

Após acessar um bot criado através do Builder, selecione a **opção de teste** e posteriormente selecione a **opção de Debug**, conforme apresentado na tela abaixo.

![menu debug](/img/practice/builder/builder-como-utilizar-debug-builder-1.png)<br><br>

Após clicar na opção de Debug o BLiP abrirá uma nova janela com todos os recursos necessários para analisar o funcionamento da sua aplicação. O Debug é formado por 3 grandes áreas: **console**, **variáveis** e **tela de testes**.

**1. Console** - Seção responsável por exibir todo o percurso executado pelo usuário de teste ao longo do fluxo da conversa. 
**2. Variáveis** - Seção que apresenta o valor corrente de todas as variáveis do usuário de teste no debug.
**3. Tela de testes** - Seção que representa a interface de conversa para o usuário de teste do Debug.

![exmplo de debug](/img/practice/builder/builder-como-utilizar-debug-builder-2.png)<br><br>

## Utilizando o Debug para analisar o fluxo da conversa

Uma vez entendido os conceitos básicos para a utilização da ferramenta de Debug, vamos executar um exemplo real para avaliar como ela pode ser útil na identificação de problemas em um fluxo de conversa. P*ara exemplificar o funcionamento utilizaremos um novo bot*, mas você pode utilizar o Debug para qualquer *bot já existente*.

Acesse o portal, crie um novo bot (do zero), e publique o fluxo do bot. Todo bot criado no BLiP possui, por padrão, 4 blocos: Início, Boas Vindas, Exceções e Erro padrão (caso sua conta na plataforma esteja em inglês o nome dos blocos será: Start, Welcome, Exceptions, Default Error). Acesse a ferramenta de Debug e envie uma mensagem para o bot, por exemplo: "oi".

Depois de enviar a mensagem o bot responderá com os conteúdos definidos no bloco Welcome (ou Boas Vindas) e a seção de **Console** exibirá tudo o que aconteceu com o usuário de teste dentro do fluxo. Veja que o caminho percorrido pelo usuário foi a transição entre os blocos Start e Welcome (ou Início e Boas Vindas), executado devido a entrada do usuário "oi". Este comportamento é descrito na primeira linha do console. Caso queira analisar exatamente quais foram todas as ações (de entrada ou saída) executadas a partir de uma transição específica, expanda a linha no console.

![analisando debug](/img/practice/builder/builder-como-utilizar-debug-builder-3.png)<br><br>

Além da seção de console, veja que agora a seção de **variáveis** também possui valores relacionados ao usuário de teste. Neste caso apenas as variáveis **previous-state** e **state-id**, criadas automaticamente, possuem valores até o momento. Elas representam, respectivamente, o último bloco acessado e o bloco corrente do usuário.

![variáveis debug](/img/practice/builder/builder-como-utilizar-debug-builder-4.png)<br><br>

Continue enviando mensagens pela tela de teste e analise as mudanças ocorridas no console (relacionadas as transições entre os blocos) e na seção de variáveis.

## Entendendo os erros no fluxo através do Debug

Na prática, seu bot poderá apresentar erros durante o processo de construção. Através da ferramenta de Debug, encontrar e corrigir estes problemas é uma tarefa muito mais simples.

Para exemplificar um problema no fluxo crie uma ação de entrada do tipo Executar Script no bloco Welcome (ou Boas Vindas) do seu bot com o seguinte script:

```javascript
function run() { 
  var person = null;
  return person.name;
}
```

![Tela de script](/img/practice/builder/builder-como-utilizar-debug-builder-5.png)<br><br>

Após criar a ação, republique o fluxo do seu bot e volte para a tela de Debug.

O script que acabamos de criar possui um erro básico, **tentar acessar a propriedade `name` de um objeto vazio**. Por isso, no momento em que o Builder tentar executar esta ação ocorrerá um erro. Imagine, por exemplo, que esse pequeno descuido possa provocar problemas no fluxo da sua aplicação.

Clique no botão de reiniciar o usuário de teste no Debug e refaça os testes.

![Botão reiniciar debug](/img/practice/builder/builder-como-utilizar-debug-builder-6.png)<br><br>

Agora você perceberá que o console apresentará uma ação com um erro e o detalhe do que está ocasionando este problema. Repare ainda que as linhas do console são pintadas de vermelho sempre que uma ou mais ações relacionadas a essa transição possuírem erros.

![Erros no debug](/img/practice/builder/builder-como-utilizar-debug-builder-7.png)
