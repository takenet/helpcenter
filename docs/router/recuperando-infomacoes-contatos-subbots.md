---
id: recuperando-infomacoes-contatos-subbots
title: Como recuperar informações de contatos em um subbot
sidebar_label: Como recuperar informações de contatos em um subbot
---



## Contexto do roteador ativado 
Ao utilizar o contexto do roteador, o subbot executa ações e comandos em nome do roteador. Desta forma as variáveis de contexto, dados do contato, atendimento humano, análise, recursos e inteligência artificial utilizados por subbot virão do roteador.

Para ativar esta funcionalidade, basta acessar as `configurações gerais` do subbot, veja na imagem abaixo.


![Ativar contexto do roteador](/img/router/recuperando-infomacoes-contatos-subbots-1.png)

Uma vez que o contexto do roteador seja ativado nos demais subbots, **todos os dados serão compartilhados de forma centralizada, exceto atendimento humano.**

## Contexto do roteador desativado

Quando o contexto do roteador está desativado nos subbots, as informações dos contatos não são compartilhadas. Dessa forma, é necessário que estas informações **sejam encaminhadas sempre que houver um redirecionamento**, para tal ação, habilite a opção de `enviar mensagem` e **preencha o valor do contexto com as informações** do contato ou demais informações que deseja utilizar no subbot encaminhado em **formato JSON**, observe o exemplo na imagem abaixo.

![Redirecionando a um serviço com informações](/img/router/recuperando-infomacoes-contatos-subbots-2.png)


Uma vez que todas as informações foram encaminhadas no redirecionamento, basta no bloco inicial do subbot encaminhado, salvar a entrada em uma variável, veja no exemplo abaixo.

![Salvando informações encaminhadas em uma variável](/img/router/recuperando-infomacoes-contatos-subbots-3.png)

Por fim, utilize a funcionalidade de `definir contato` para adicionar atributos do usuário a partir das informações salvas na variável, a imagem abaixo ilustra esta tarefa.

![Salvando informações encaminhadas em uma variavel](/img/router/recuperando-infomacoes-contatos-subbots-4.png)

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>