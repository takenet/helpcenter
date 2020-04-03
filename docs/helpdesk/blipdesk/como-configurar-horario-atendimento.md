---
id: como-configurar-horario-atendimento
title: Como configurar horário de atendimento
sidebar_label: Como configurar horário de atendimento
---

Como sabemos toda a **configuração do horário de atendimento é feita pela ação de executar script**, e considerando todos os níveis de conhecimento de usuário, neste artigo iremos criar **um chatbot template que permite a fácil configuração do horário de atendimento**.

## Estruturando bot de atendimento

### 1. Crie o bot de atendimento

Iniciaremos a estruturação do bot a partir do template de atendimento, conforme imagem abaixo.

![Seleção do template de atendimento humano](/img/helpdesk/como-verificar-atendentes-equipe-1.png)<br>

## Adaptando template de atendimento para verificar atendentes disponíveis por equipe

No fluxo de template de atendimento, iremos **alterar apenas o bloco "2.0 - Verifica Horário Atendimento"**, portanto nosso fluxo se mantém assim como a imagem do template de atendimento abaixo.

![](/img/helpdesk/como-configurar-horario-atendimento-1.png)<br>

### 2. Adicione o script "SetWorkSchedule" 

Adicionando este script no bloco "2.0 - Verifica Horário Atendimento", **atente-se na ordem dos scripts**. O script **"SetWorkSchedule" **deve** ser executado antes do script "CheckWorkTime"**, veja na imagem abaixo:

![](/img/helpdesk/como-configurar-horario-atendimento-2.png)<br>

Neste script em questão, **não há variáveis de entrada**. Por sua vez, nosso **retorno será salvo na variável `workSchedule`**.
Para nosso exemplo, suponhamos que precisamos dos seguintes horários de disponibilidade.

|                           | Domingo | Segunda | Terça | Quarta | Quinta | Sexta | Sábado |
| ------------------------- | ------- | ------- | ----- | ------ | ------ | ----- | ------ |
| Início de atendimento [1] | 8:30    | 8:30    | 8:30  | 8:30   | 8:30   | 8:30  | 8:30   |
| Fim de atendimento [1]    | 12:00   | 12:00   | 18:00 | 12:00  | 12:00  | 12:00 | 12:00  |
| Início de atendimento [2] | -----   | 13:00   | ----- | 13:00  | 13:00  | 13:00 | -----  |
| Fim de atendimento [2]    | -----   | 15:00   | ----- | 18:00  | 18:00  | 18:00 | -----  |
| Início de atendimento [3] | -----   | 15:30   | ----- | -----  | -----  | ----- | -----  |
| Fim de atendimento [3]    | -----   | 18:00   | ----- | -----  | -----  | ----- | -----  |

O **script resultante** é apresentado logo abaixo e pode ser customizado conforme necessidade.
```javascript
function run() {
  let workSchedule = [
    {
      num: 0,
      name: "Sunday",
      portugueseName: "Domingo",
      workTime: [
        {
          start: "8:30",
          end: "12:00"
        }
      ]
    },
    {
      num: 1,
      name: "Monday",
      portugueseName: "Segunda-feira",
      workTime: [
        {
          start: "8:30",
          end: "12:00"
        },
        {
          start: "13:00",
          end: "15:00"
        },
        {
          start: "15:30",
          end: "18:00"
        }
      ]
    },
    {
      num: 2,
      name: "Tuesday",
      portugueseName: "Terça-feira",
      workTime: [
        {
          start: "8:30",
          end: "18:00"
        }
      ]
    },
    {
      num: 3,
      name: "Wednesday",
      portugueseName: "Quarta-feira",
      workTime: [
        {
          start: "8:30",
          end: "12:00"
        },
        {
          start: "13:00",
          end: "18:00"
        }
      ]
    },
    {
      num: 4,
      name: "Thursday",
      portugueseName: "Quinta-feira",
      workTime: [
        {
          start: "8:30",
          end: "12:00"
        },
        {
          start: "13:00",
          end: "18:00"
        }
      ]
    },
    {
      num: 5,
      name: "Friday",
      portugueseName: "Sexta-feira",
      workTime: [
        {
          start: "8:30",
          end: "12:00"
        },
        {
          start: "13:00",
          end: "18:00"
        }
      ]
    },
    {
      num: 6,
      name: "Saturday",
      portugueseName: "Sábado",
      workTime: [
        {
          start: "8:30",
          end: "12:00"
        }
      ]
    }
  ];

  return JSON.stringify(workSchedule); //Return value will be saved as "Return value variable" field name
}
```

Observe o resultado na imagem abaixo.

![](/img/helpdesk/como-configurar-horario-atendimento-3.png)<br>


### 3. Altere o script "CheckWorkTime" 

Por fim, **alteraremos o "CheckWorkTime",** aquele que deve ser o segundo script do "2.0 - Verifica Horário Atendimento". A primeira **alteração é nas variáveis de entrada**, para este exemplo nossas **variáveis de entrada são:** `config.dateTimeOffset` e `workSchedule`. O retorno do script será **salvo ainda na variável `isWorkTime`**.

![](/img/helpdesk/como-configurar-horario-atendimento-4.png)<br>

Por sua vez, temos o script propriamente dito, está apresentado abaixo e pode ser transferido para seu bot e funcionará perfeitamente, caso os passos a passos aqui apresentados sejam seguidos.

```javascript
//Default BLiP TimeZoneOffset = São Paulo (GMT-3)
var DEFAULT_OFFSET = 3;


// Receive the variables as parameters
function run(offset, weekSchedule) {
  offset = parseInt(offset) + DEFAULT_OFFSET;

   weekSchedule = JSON.parse(weekSchedule);

  let today = nowUTC(offset);

  if (isWorkDay(today, weekSchedule)) {
    let todaySchedule = getTodaySchedule(weekSchedule, today);
    let intervalTime = getIntervalTime(todaySchedule, offset);

    return checkTime(intervalTime, today);
  }

  return false;
}

function getIntervalTime(todaySchedule, offset) {
  let intervalTime = [];
  for (let i = 0; i < todaySchedule.workTime.length; i++) {
    intervalTime.push({
      start: utcDate(todaySchedule.workTime[i].start, offset),
      end: utcDate(todaySchedule.workTime[i].end, offset)
    });
  }

  return intervalTime;
}

function checkTime(intervalTime, today) {
  for (let i = 0; i < intervalTime.length; i++) {
    if (today - intervalTime[i].start > 0 && intervalTime[i].end - today > 0)
      return true;
  }
  return false;
}

function getTodaySchedule(weekSchedule, today) {
  for (let i = 0; i < weekSchedule.length; i++) {
    if (weekSchedule[i].num == today.getDay()) return weekSchedule[i];
  }
}

//Get now UTC Date
function nowUTC(offset) {
  let now = new Date();
  let utc_timestamp = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds(),
    now.getUTCMilliseconds()
  );

  return new Date(utc_timestamp + offset * 3600 * 1000);
}

//Get UTC Date
function utcDate(timeString, offset) {
  let now = new Date();

  let hour = getValueByString("hour", timeString);
  let minutes = getValueByString("minutes", timeString);

  hour += DEFAULT_OFFSET;

  let utc_timestamp = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    hour,
    minutes,
    0,
    0
  );
  return new Date(utc_timestamp + offset * 3600 * 1000);
}

//Get hour/minute by string with pattern HH:mm
function getValueByString(type, timeString) {
  if (type === "hour") {
    return parseInt(timeString.substring(0, timeString.indexOf(":")));
  } else if (type === "minutes") {
    return parseInt(
      timeString.substring(timeString.indexOf(":") + 1, timeString.length)
    );
  }

  return 0;
}

//Get if today is a work day
function isWorkDay(today, workDays) {
  for (let i = 0; i < workDays.length; i++) {
    if (workDays[i].num == today.getDay().toString()) return true;
  }
  return false;
}

```
### Observações 

Uma vez que este exemplo foi utilizado para verificação de horários para atendimento humano, **o local de alteração para definição de horário de atendimento não será o mesmo** do template de atendimento oficial. Veja **onde você pode mudar as definições**.

Altere no script `"SetWorkSchedule"`, caso queira:

  * Adicionar ou retirar dias de atendimento.
  * Adicionar, alterar ou retirar horários de atendimento de um dia.

Altere nas variáveis de configuração do chatbot, caso queira:
  * Alterar fuso horário.

## Customize o seu template

Todo conteúdo deste artigo, gerou um template que pode ser configurado, baixado e importado em seu chatbot, a partir da ferramenta abaixo:

<iframe src="https://customer-service-template-generator.netlify.com/" class="iframe-template-generator" />
