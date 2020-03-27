---
id: dominando-customizando-template-atendimento
title: Dominando e customizando o template de atendimento
sidebar_label: Dominando e customizando o template de atendimento
---

Neste artigo abordaremos todos os **detalhes e especificidades do template de atendimento**, permitindo a partir deste prévio conhecimento, a customização, conforme cada negócio.

## Pré requisitos: Utilize o template de atendimento

Crie seu bot a partir do template de atendimento para que as customizações aqui apresentadas sejam possíveis, a imagem abaixo mostra como **criar um bot utilizando o template de atendimento**.

![Seleção do template de atendimento humano](/img/helpdesk/como-verificar-atendentes-equipe-1.png)<br>

## Estrutura chatbot de atendimento

### Variáveis de configuração

Por padrão, o chatbot com este template contém **configurações básicas que são utilizadas durante todo fluxo**. Para visualizar essas configurações **acesse as variáveis de configuração** do seu bot, o caminho é:

1. Clique no botão de configuração(engrenagem) no canto esquerdo.
2. Na janela de Configurações gerais que abrirá, identifique a opção "VARIÁVEIS DE CONFIGURAÇÃO".
3. Clique sobre a opção para visualizar as variáveis de configuração.

![Acesso as variaveis de configurações](/img/helpdesk/dominando-customizando-template-atendimento-1.png)<br>

Cada uma das variáveis customizáveis será apresenta abaixo juntamente a suas particularidades. 

#### dateTimeOffset

A variável **dateTimeOffset** representa o `fuso horário` e vem, como padrão, com o valor `-3` que equivale ao fuso horário de São Paulo (GMT-3). Desse modo, caso seu fuso horário seja diferente deste valor, basta alterar em conformidade.

#### startDate e endDate

A variável **startDate** representa o início do `horário de atendimento` e, por sua vez, o **endDate** o fim do `horário de atendimento`. Por padrão estas são preenchidas com: 

* **startDate**: `08:30`.
* **endDate**: `18:50`.

Em suma, por padrão, **os horários de atendimento são os mesmos para todos os dias de atendimento**. Dessa forma, caso seu negócio possua em alguns dias, diferentes horários de atendimentos, utilize o [Template/ Atendimento Humano - Horários](/template/?Id=Atendimento_humano_horarios) no artigo que acompanha este template, alguns detalhes para customizações são apresentados [Como configurar horário de atendimento](/docs/helpdesk/blipdesk/como-verificar-atendentes-equipe).


#### workDays

A variável **workDays** representa os `dias da semana` de atendimento e, por padrão, tem o valor `0,1,2,3,4,5,6`, estes correspondem: 

| Valor | Dia da semana |
|-------|---------------|
| 0     | Domingo.      |
| 1     | Segunda-feira |
| 2     | Terça-feira.  |
| 3     | Quarta-feira. |
| 4     | Quinta-feira. |
| 5     | Sexta-feira.  |
| 6     | Sábado        |

Customize o valor desta variável retirando ou adicionado o dia da semana de atendimento, sempre, **separando os valores com vírgula**.

