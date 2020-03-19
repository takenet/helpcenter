---
id: boas-praticas-regras-atendimento
title: Boas práticas ao definir regras de atendimento
sidebar_label: Boas práticas ao definir regras de atendimento
---

Como já apresentados em outros artigos, devemos **utilizar as regras de atendimento sempre que desejamos direcionar um contato para um equipe de atendimento humano**. Em suma, as regras são normas que definem os critérios de direcionamento do contato, dessa forma uma vez definida **uma regra que não engloba todos os casos de direcionamento**, de certo, **haverá casos incorretos de encaminhamento**. 


Com objetivo de compreender como utilizar as regras de atendimento corretamente, este artigo aborda as melhores práticas ao definir regras de atendimento. Utilizaremos o exemplo abaixo para compreender cada tipo de regra e suas especificidades. 

![Exemplo de Fluxo](/img/helpdesk/boas-praticas-regras-atendimento-1.png)<br><br>

Só para ilustrar, utilizaremos as seguintes nomenclaturas para descrever a estrutura das regras de atendimento.

![Estrutura das regras](/img/helpdesk/boas-praticas-regras-atendimento-2.png)<br><br>

### Operador

Se tratando do operador, temos as seguintes opções: 

* Contém
* Não contém
* É igual
* Não é igual

**Evite utilizar os operadores `É igual` e `Não é igual`**, esse tipo de operador não abrange todo o escopo de respostas de um usuário, uma letra a mais ou a menos na entrada do usuário pode influenciar diretamente o fator de acerto da regra, portanto, **EVITE utilizar** sempre que possível. 

**Utilize os operadores `Contém` e `Não contém`**. Enquanto nas regras anteriores, uma letra a mais ou a menos influenciava diretamente o resultado, nestes operadores este problema é minimizado e engloba melhor as respostas de um usuário.

### Valor esperado

O valor esperado é o ponto mais critico de uma regra, visto que este é o ponto central de normativa. Observe as opções dadas ao usuário no exemplo inicial: 

1. São Paulo
2. New York
3. Vila Bela da Santíssima Trindade

Quando definir o valor, lembre-se sempre que **um usuário pode não digitar exatamente aquilo que você espera**. Portanto, **defina valores que englobam o máximo de entrada de usuário possível**, veja algumas opções previsíveis para direcionamento de São Paulo, utilizando do operador `Contém`:

1. `sao`
2. `são`
3. `paulo`
4. `sp`
5. `1`
6. `um`
7. `primeiro`

É importante pontuar que, **letras maiúsculas ou minusculas não alteram o resultado.** Diferentemente dos acentos.


### Fonte de dados

Conhecer cada especificidade da fonte de dados pode garantir o bom direcionamento do usuário para uma equipe de atendimento humano.

#### Mensagem 

A fonte de dados do tipo mensagem é a primeira opção visualizada das regras de atendimento, mas é de suma importância esclarecer que **este tipo de mensagem só contempla o VALOR DA ÚLTIMA MENSAGEM ENVIADA pelo usuário antes do bloco de atendimento**.
 Assim sendo, caso queira utilizar uma mensagem que não seja a última, salve esta mensagem no extras do contato e utilize a fonte de dados **Extras Contato**.

#### Nome Contato e Email Contato

As fontes nome e email do contato representam o valor armazenado nos seguintes dados de contato: 

* Nome Contato: `{{contact.name}}`
* Email Contato:`{{contact.email}}`
  
Logo, tais dados devem ser [definidos no contato](/docs/builder/salvando-informacoes-de-um-usuário) *a priori*.

#### Extras Contato

Similarmente ao Nome Contato e Email Contato, este tipo de fonte representam o valor armazenado nos extras do contato. Analogamente, tal dado deve ser [definido no contato](/docs/builder/salvando-informacoes-de-um-usuário) *a priori*.

