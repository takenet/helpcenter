---
id: gerenciando-chatbot-atraves-log
title: Gerenciando seu chatbot atráves do log
sidebar_label: Gerenciando seu chatbot atráves do log
---

A ferramenta de log é uma das ferramentas mais poderosas para se entender o fluxo do seu chatbot nos mínimos detalhes. Basicamente, você poderá visualizar todas as mensagens enviadas e recebidas, assim como informações de quem as enviou. Veja abaixo como as mensagens são apresentadas no log: 

![Mensagens no Log](/img/management/gerenciando-chatbot-atraves-log-1.png)

Como é possível ver, as mensagens são apresentas como requisições contendo os seguintes parâmetros: 

| Nome     | Descrição                   |
|----------|-----------------------------|
| Date     | Data do envio               |
| Id       | Identificador da requisição |
| From     | Sujeito do envio            |
| To       | Sujeito do recebimento      |
| Type     | Tipo da mensagem            |
| Content  | Conteúdo da mensagem        |
| Metadata | Metadados da mensagem       |

Além destes dados, é possível também, obter dados mais detalhados da mensagem em questão, para isto basta clicar sobre o id da mensagem. Veja abaixo como estes novos detalhes são apresentados:


![Detalhes das Mensagens no Log](/img/management/gerenciando-chatbot-atraves-log-2.png)

É extremamente recomendado utilizar a ferramenta de log para identificar possíveis erros no seu chatbot. Para ilustrar, um caso comum em que a ferramenta de log pode te apresentar erros detalhadamente são nos envios de notificações (message templates).


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>