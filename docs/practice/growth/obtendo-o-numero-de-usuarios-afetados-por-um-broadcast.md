---
id: obtendo-o-numero-de-usuarios-afetados-por-um-broadcast
title: Obtendo o número de usuários afetados por um broadcast
sidebar_label: Obtendo o número de usuários afetados por um broadcast
---

O módulo de agendamento do BLiP é uma poderosa ferramenta para o engajamento dos usuários em um bot. Através dela, é possível agendar disparo de mensagens (broadcasts) para uma lista de usuários previamente definida. Por padrão todo bot já possui uma lista de usuários chamada **Todos os usuários**, que contém qualquer usuário que tenha conversado com o bot, pelo menos uma vez independente do canal. Para realizar um agendamento acesse o **Portal**, escolha seu bot e no menu superior escolha mais opções e então clique em **Agendador**.

Após realizar um broadcast é muito importante análisar a assertividade do disparo. Para isso é necessário realizar algumas requisições na API do BLiP (via requests HTTP ou via comandos nos SDKs).

## 1º Passo - Buscar todos os agendamentos

**Método da requisição:** POST

**URL:** https://msging.net/commands

**Cabeçalhos:** 

* **Key:** Authorization

* **Value:** Key API-KEY-BOT

**Corpo:** JSON com o comando que busca todos os agendamentos, de acordo com o protocolo LIME ([veja aqui](https://docs.blip.ai/?csharp#extensions) maiores informações sobre as extensões do BLiP)

<pre><code>{
    id:"640aaaca-499a-4b21-8375-1e005b0fa583",
    method:"get",
    to:"postmaster@scheduler.msging.net",
    uri:"/schedules?<b>since</b>=2018-04-18T00:00:00.938Z&$<b>skip</b>=0&$<b>take</b>=100"
}
</pre></code>


\* O parâmetro **since** define um filtro para a data inicial da pesquisa, ou seja apenas os agendamentos realizados a partir do dia 18 de março serão retornados.


\* O parâmetro **skip** define a quantidade de agendamentos serão desconsiderados (utilizado para paginação).


\* O parâmetro **take** define a quantidade de agendamentos serão retornados.



## 2º Passo - Coletar o ID do broadcast que deseja obter as informações

O retorno da requisição realizada no passo 1 retornará uma lista de agendamentos com o ID de cada mensagem agendada. Analise a propriedade **items** contida na resposta retornada pelo servidor e escolha qual dos agendamentos deseja obter as informações. Veja abaixo um exemplo de retorno:

<pre><code>{
    id:"640aaaca-499a-4b21-8375-1e005b0fa583",
    from:"postmaster@scheduler.msging.net/#az-iris3",
    method:"get",
    resource: {
        total: 3, 
        itemType: "application/vnd.iris.schedule+json",
        <b>items</b>:[
            {
                when: "2018-05-18T16:37:35.900Z",
                status:"executed",
                message: {
                    content:"Some text",
                    from:"assistentedeastronomia@msging.net",
                    id:"<b>30385066-a00c-423c-b254-0debc51093f8</b>",
                    pp:"postmaster@scheduler.msging.net/assistentedeastronomia%40msging.net",
                    to:"<b>assistentedeastronomia+senders@broadcast.msging.net</b>",
                    type:"text/plain"
                }
            },
            ...
        ],
    }
    status:"success",
    to:"bot@msging.net/default"
    type:"application/vnd.lime.collection+json"
}
</pre></code>

\* O valor **30385066-a00c-423c-b254-0debc51093f8** representa o ID da mensagem que foi agendada.

\* O node **assistentedeastronomia+senders@broadcast.msging.net**, que identifica a lista para qual o agendamento foi endereçado.


## 3º Passo - Buscar as informações sobre um determinado agendamento

De posse do ID da mensagem agendada e do identificador da lista para qual o agendamento foi feito, basta realizar uma requisição para buscar as informações relacionadas ao respectivo broadcast. O exemplo abaixo mostra um exemplo dessa requisição:

**Método da requisição:** POST

**URL:** https://msging.net/commands

**Cabeçalhos:** 

* **Key:** Authorization

* **Value:** Key API-KEY-BOT

**Corpo:** JSON com o comando que busca todos os agendamentos, de acordo com o protocolo LIME ([veja aqui](https://docs.blip.ai/?csharp#extensions) maiores informações sobre as extensões do BLiP)

<pre><code>{
    id:"829044c9-3c97-46fd-9dc0-6a8ce0dbca3c",
    method:"get",
    to:"postmaster@broadcast.msging.net",
    uri:"/lists/<b>assistentedeastronomia%2Bsenders%40broadcast.msging.net</b>/messages/<b>30385066-a00c-423c-b254-0debc51093f8</b>"
}
</pre></code>

\* O valor **assistentedeastronomia%2Bsenders%40broadcast.msging.net**, representa o identificador da lista utilizada para o agendamento (coletado no passo 2), **encodado no formato URL**.

\* O valor **30385066-a00c-423c-b254-0debc51093f8** representa o ID da mensagem que foi agendada (coletado no passo 2).

O resultado dessa requisição possui as informações detalhadas sobre um determinado agendamento. O JSON abaixo apresenta um exemplo do resultado da requisição acima:

<pre><code>{
    from:"postmaster@broadcast.msging.net/#az-iris3",
    id:"829044c9-3c97-46fd-9dc0-6a8ce0dbca3c",
    method:"get",
    <b>resource</b>:{
        id:"30385066-a00c-423c-b254-0debc51093f8",
        status:"processed",
        statusDate:"2018-05-18T16:37:42.420Z",
        <b>consumed:0</b>,
        <b>failed:0</b>,
        <b>received:0</b>,
        <b>recipients:2</b>,
        <b>sent:2</b>
    },
    status:"success",
    to:"assistentedeastronomia@msging.net/default",
    type:"application/vnd.iris.distribution-list-message+json"
}
</pre></code>

As informações mais importantes sobre cada agendamento estão dentro do objeto **resource**.

| Status    | Descrição                                                    | 
|-----------|--------------------------------------------------------------|
| consumed  | The number of analysis to be skipped.                        |
| failed    | The number of analysis to be returned.                       |
| received	| Quantidade de mensagens recebidas.                           |
| recipients| Quantidade de usuários presentes na lista.                   |
| sent	    | Quantidade de mensagens enviadas durante o broadcast.        |