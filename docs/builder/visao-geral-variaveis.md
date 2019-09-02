---
id: visao-geral-variaveis
title: Visão geral das variáveis
sidebar_label: Visão geral das variáveis
---

Durante a construção da sua aplicação no Builder, pode ser necessário armazenar valores em variáveis. Isso é indispensável para a construção de fluxos condicionais, ou para simplesmente armazenar/recuperar valores ao longo da interação do usuário.

Em qualquer ponto do fluxo da conversa, é possível recuperar o valor de qualquer variável definida anteriormente. Em contrapartida, só é possível armazenar valores em uma variável em locais específicos do Builder, como:

* Entrada de dados dos usuários (nos blocos de controle e de conteúdo);

* Resultados de requisições em API;

* Resultado da execução de um script;

* Tela de variáveis globais de configuração;

Uma variável do builder é formada exclusivamente por uma sequência de caracteres alfanuméricos (maiúsculas ou minúsculas), não sendo permitido utilizar caracteres especiais. **Todas as variáveis são case sensitive**. Existem quatro tipos de variáveis no Builder: Variáveis de **contexto**, variáveis de **usuário**, variáveis de **configuração** e variáveis de **sistema**. Confira cada uma delas abaixo:

## Variáveis de Contexto

Em uma conversa entre duas ou mais pessoas, construímos, inconscientemente, um contexto. Por exemplo: em um encontro casual entre dois amigos, Maria e João, um deles começa a falar sobre seu cachorro.

Ao encontrar João, Maria diz:

*- Oi João, tudo bem?*

João então responde:

*- Olá Maria, tudo ótimo. Hoje estou radiante, ganhei um cachorro lindo.*

Logo após o primeiro contato, Maria começa a fazer perguntas sobre o cachorro que João ganhou:

*- Que legal João, qual é o nome dele ?*

Prontamente, João responde:

*- O nome dele é Toto.*

Repare que, na fala de Maria, não existe nenhuma relação explícita entre a frase “qual é o nome dele?” e o cachorro de João. A relação entre o pronome possessivo “dele” e o cachorro de João só é perceptível devido ao contexto da conversa — os dois amigos sabem que, a princípio, estão conversando sobre o cachorro de João.

As variáveis de contexto permitem o armazenamento/recuperação de valores relativas aos assuntos conversados entre o usuário e o bot. É possível armazenar valores em uma variável de contexto através dos conteúdos entrada de usuário e HTTP, além das ações de requisição HTTP, execução de script, definição de variáveis e processamento de comandos.

Para recuperar o valor de uma variável de contexto, basta utilizar, em qualquer ponto do fluxo da conversa, o seguinte padrão:

{{context.**nomeVariavel**}}

ou apenas

{{**nomeVariavel**}}

Onde:

**nomeVariavel** representa o nome da variável de contexto desejada.

## Variáveis de Usuário

Todo usuário que conversa com algum bot construído no BLiP possui uma conta (Contact). Contact é uma estrutura que armazena atributos (informações) do usuário dependendo do canal (aplicativo de mensagens) que ele utiliza. Por exemplo: qualquer usuário do Facebook Messenger que entrar em contato com o seu bot já possuirá informações básicas e públicas, como nome e URL da foto do perfil definida em sua conta.

As variáveis de usuário permitem que seja possível utilizar qualquer informação definida na conta dos usuários de forma simples. Para saber todos os detalhes sobre como as informações de Contact do BLiP são armazenadas, verifique a extensão de diretório neste link (<https://docs.blip.ai/#directory).>

Para recuperar o valor de uma variável de usuário, basta utilizar, em qualquer ponto do fluxo da conversa, o seguinte padrão:

{{contact.**nomeVariavel**}}

Onde:

**nomeVariavel** representa o nome da variável de contato desejada.

Se você deseja enviar uma mensagem de saudação com o nome do usuário que está interagindo com o seu bot, utilize a variável {{contact\.name}} para isso. Por exemplo:

*“Olá {{contact\.name}}, boas vindas!”*

A tabela abaixo apresenta todas variáveis de contato disponíveis no BLiP e uma descrição sobre o que representam. Os valores e a disponibilidade dos dados depende do canal do usuário.

| Nome das Variáveis | Descrição                                                                   |
| ------------------ | --------------------------------------------------------------------------- |
| name               | O nome do contato                                                           |
| address            | O endereço do contato                                                       |
| city               | A cidade do contato.                                                        |
| email              | O e-mail do contato.                                                        |
| source             | O nome do canal do contato.                                                 |
| phoneNumber        | O número de telefone do contato.                                            |
| photoUri           | A URI da foto pública do contato.                                           |
| cellPhoneNumber    | O telefone celular do contato.                                              |
| gender             | O sexo do contato.                                                          |
| timezone           | O timezone do contato relativo ao GMT.                                      |
| culture            | A informação da cultura do usuário (no formato IETF).                       |
| extras             | Um JSON genérico para armazenar pares de strings (chave e valor).           |
| identity           | A identidade do contato no formato name@domain. **Propriedade obrigatória** |
| group              | Indica o nome do grupo ao qual o usuário pertence                           |

***Obs.: Alguns canais não fornecem nenhuma informação do contato além de seu identificador, definido pela variável {{contact.identity}}.**

## Variáveis de Configuração

As variáveis de configuração possibilitam armazenar valores de configuração de uso geral.

Imagine por exemplo que o fluxo de conversa realiza 10 ações de requisições HTTP para uma mesma API de endpoint <https://minhaapi.com.>

Nesse cenário, é possível criar, por exemplo, uma variável de configuração endpoint com o valor <https://minhaapi.com> e reaproveitar essa variável em todas as 10 ações do fluxo. Caso o endereço da sua API mude, basta alterar o valor da variável.

Para criar ou alterar o valor de qualquer variável de configuração, clique nas **configurações do Builder**, expanda a opção **Variáveis de configuração** e adicione o nome e o valor da variável (conforme imagem abaixo).

![Variáveis de Configuração](/img/builder/builder-visao-geral-variaveis-1.png)

Para recuperar o valor de uma variável de configuração, basta utilizar, em qualquer ponto do fluxo da conversa, o seguinte padrão:

{{config.**nomeVariavel**}}

Onde:

**nomeVariavel** representa o nome da variável de configuração desejada.

## Variáveis de sistema

As variáveis de sistema entregam muita flexibilidade para quem está desenvolvendo o bot. Através delas, é possível saber informações como valores de calendário (hora e data), a última entrada do usuário, além de identificadores únicos, números e strings randômicos.

Para recuperar o valor de uma variável de sistema, basta utilizar, em qualquer ponto do fluxo da conversa, um dos seguintes padrões:

{{**nomeVariavel**}}

Onde:

**nomeVariavel** representa o nome da variável de configuração desejada.

Se você deseja enviar um número aleatório para um cliente que está interagindo com o seu bot, utilize a variável {{random.integer}} para isso. Por exemplo:

*“Seu número aleatório é: {{random.integer}}!”*

A tabela abaixo apresenta todas as variáveis de sistema disponíveis no BLiP, além de uma descrição sobre o que representam.

| Nome da Variável | Descrição                                                                   |
| ---------------- | --------------------------------------------------------------------------- |
| calendar.datetime             | Data e hora atual GMT-0 (MM/dd/yy HH:mm:ss).                                                           |
| calendar.date          | Data atual GMT-0 (no formato yyyy-MM-dd).                                                       |
| calendar.day             | Valor que representa o dia no mês corrente.                                                        |
| calendar.month            | Valor que representa o mês corrente.                                                        |
| calendar.year           | Valor que representa o ano corrente.                                                 |
| calendar.time      | Hora atual GMT-0 (no formato HH:mm).                                            |
| calendar.hour         | Valor que representa a hora corrente.                                           |
| calendar.minute  | Valor que representa o minuto corrente.                                              |
| calendar.second           | Valor que representa o segundo corrente.                                                          |
| calendar.unixTime         | Data atual no formato unix timestamp                                     |
| calendar.unixTimeMilliseconds          | Data atual no formato unix timestamp (milisegundos).                       |
| calendar.dayOfWeek           | Valor que representa o dia da semana corrente (onde 0 é Domingo e 6 é Sábado).           |
| calendar.tomorrow.datetime         | Data de amanhã e hora atual GMT-0|
| calendar.tomorrow.date            | Data de amanhã GMT-0|
| calendar.tomorrow.day           | Valor que representa o dia de amanhã no mês corrente.           |
| calendar.tomorrow.month         | Valor que representa o mês da data de amanhã|
| calendar.tomorrow.year            | Valor que representa o ano da data de amanhã|
| calendar.tomorrow.time           | Hora atual na data de amanhã GMT-0.           |
| calendar.tomorrow.hour         | Valor que representa a hora corrente na data de amanhã|
| calendar.tomorrow.minute            | Valor que representa o minuto corrente na data de amanhã|
| calendar.tomorrow.second           | Valor que representa o o segundo corrente na data de amanhã.           |
| calendar.tomorrow.unixTimeMiliseconds         | Data de amanhã no formato unix timestamp (milisegundos)|
| calendar.tomorrow.unixTime            | Data de amanhã no formato unix timestamp|
| calendar.tomorrow.dayOfWeek           | Valor que representa o dia da semana da data de amanhã (Onde 0 é Domingo e 6 é).           |
| calendar.yesterday.datetime         | Data de ontem e hora atual GMT-0|
| calendar.yesterday.date            | Data de ontem GMT-0|
| calendar.yesterday.day         |Valor que repreenta o dia de ontem no mês corrente|
| calendar.yesterday.month            | Valor que representa o mês da data de ontem|
| calendar.yesterday.year         | Valor que representa o ano da data de ontem|
| calendar.yesterday.time            | Hora atual na data de ontem GMT-0|
| calendar.yesterday.hour         | Valor que representa a hora corrente na data de ontem|
| calendar.yesterday.minute            | Valor que representa o minuto corrente na data de ontem|
| calendar.yesterday.second         |Valor que representa o segundo corrente na data de ontem|
| calendar.yesterday.umixTime            | Data de ontem no formato unix timestamp|
| calendar.yesterday.unixTimeMiliseconds         | Data de ontem no formato unix timestamp (milisegundos)|
| calendar.yesterday.dayOfWeek            | Valor que representa o dia da semana da data de ontem (onde 0 é Domingo e 6 é sábado)|
| input.content         | Conteúdo da mensagem enviado pelo usuário|
| input.entity.?.id            | Identificador da entidade reconhecida (onde ? deve ser trocado pelo nome da entidade)|
| input.entity.?.name        | Nome da entidade reconhecida (onde ? deve ser trocado pelo nome da entidade)|
| input.entity.?.value          | Valor da entidade reconhecida (onde ? deve ser trocado pelo nome da entidade)|
| input.entity.?.name        | Nome da entidade reconhecida (onde ? deve ser trocado pelo nome da entidade)|
| input\.intent.id          | Identificador da intenção reconehcida|
| input\.intent.name          | Nome da intenção reconehcida|
| input\.intent.score          | Confiabilidade atrelada à intenção reconehcida|
| input\.intent.answer          | Uma das respostas atreladas à intenção reconehcida|
| input.length          | Quantidade de conteúdos existentes na mensagem enviada pelo usuário|
| input.type          | Tipo da mensagem enviado pelo usuário|
| random.guid          | Identificador alfa numérico único|
| random.string          | Conjunto de caracteres (string) aleatório|
| random.integer          | Número inteiro aleatório|
| `calendar.plus/minus 12345  (milisseconds seconds minutes hours days weeks months years dayOfWeek)` | Funções disponíveis para manipulação de datas
| state\.id | Id do bloco corrente no fluxo |
| state\.name | Nome do bloco corrente no fluxo |
**Observação: As variáveis de sistema são apenas de leitura**
