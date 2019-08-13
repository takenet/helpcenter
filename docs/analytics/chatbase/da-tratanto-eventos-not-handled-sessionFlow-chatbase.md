---
id: da-tratando-eventos-not-handled-sessionFlow-chatbase
title: Tratando eventos not_Handled no relatório SessionFlow do Chatbase
sidebar_label: Tratando eventos not_Handled no relatório SessionFlow do Chatbase
---

O Chatbase é uma das ferramentas, para análise de dados, disponível no BLiP (para saber como configurar a integração entre o BLiP e o Chatbase [clique aqui](practice/integrations/integ-chatbase-como-enviar-dados-chatbase.md)).

Entre outras funcionalidades, o Chatbase fornece um relatório chamado Session Flow. A partir dele, é possível visualizar um mapa das principais jornadas realizadas dentro do seu bot.

![relatório SessionFlow](/img/practice/data-analytics/da-tratando-eventos-not-handled-sessioFlow-chatbase-1.png)<br>

Para que este relatório seja montado corretamente, é preciso classificar cada mensagem enviada pelo cliente entre 2 categorias:

* **handled** = Mensagens que o bot efetivamente entendeu
* **not_Handled** = Mensagens que o bot não conseguiu entender o significado

Além disso, cada mensagem classificada como **handled** precisa estar acompanhada de uma string que represente a intenção do usuário com a mensagem. Para saber mais sobre como o Chatbase classifica as mensagens no relatório SessionFlow [clique aqui](https://chatbase.com/documentation/session-flow).

Por padrão, para bots criados no Builder, o BLiP envia ao Chatbase todas as mensagens recebidas pelo seu bot utilizando a categoria **handled** e usa o título dos blocos como o valor da intenção do usuário.

Para marcar uma determinada mensagem como **not_Handled** é necessário realizar um passo extra. Selecione o bloco que representa o ponto do fluxo em que o bot não entendeu algo e crie uma ação de entrada do tipo Registro de Eventos, seguindo o padrão abaixo:

**Categoria**: updateTrack
**Ação**: updateTrack

**Extras**:
**Key**: #updateTrack
**Value**: True

**Key**: notHandled
**Value**: True

Veja o exemplo na imagem abaixo:

![Registro de not_handled chatbase](/img/practice/data-analytics/da-tratando-eventos-not-handled-sessioFlow-chatbase-2.png)