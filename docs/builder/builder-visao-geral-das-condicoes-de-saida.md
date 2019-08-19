---
id: builder-visao-geral-das-condicoes-de-saida
title: [Builder] Visão geral das condições de saída
sidebar_label: [Builder] Visão geral das condições de saída
---
Para que seja possível condicionar a mudança de estado de um usuário, o Builder disponibiliza condições de saída. Uma condição de saída é composta de **uma ou mais regras e o identificador do bloco de destino**, caso a condição seja alcançada.

O bloco de destino pode ser qualquer um dos blocos existentes no fluxo da conversa do bot. Cada regra é formada por até quatro estruturas: **fonte de dados, operador, nome de uma variável e um valor esperado**.

![Condicoes de saida](/img/concepts/builder/builder-visao-geral-das-condicoes-de-saida-1.png)

Quando a fonte de dados do tipo **Variável** é selecionada, é necessário também adicionar o nome da variável que será analisada na condição.

**Fonte de Dados**

Uma condição pode utilizar até quatro diferentes fontes de dados para criar uma regra. São elas: entrada do usuário, valor de uma variável, intenção ou entidade extraídos a partir da última entrada do usuário.

**Operador**

Existem diferentes tipos de operadores para uma regra. A tabela abaixo apresenta todos os operadores e suas respectivas definições:

| Nome do operador  | Descrição                                                            |
| ----------------- | -------------------------------------------------------------------- |
| **Existe**        | Verifica se na fonte de dados existe algum valor, seja ele qual for. |
| **Igual a**       | Verifica se a fonte de dados é exatamente igual ao valor experado    |
| **Diferente de** | Verifica se a fonte de dados é diferente do valor esperado.
| **Contém**  | Verifica se a fonte de dados contém o valor esperado.
| **Começa com** | Verifica se a fonte de dados começa com o valor esperado.
| **Termina com** | Verifica se a fonte de dados termina com o valor esperado.
| **Maior que** | Verifica se a fonte de dados é maior que o valor esperado.
| **Menor que** | Verifica se a fonte de dados é menor que o valor esperado.
| **Maior que ou igual a** | Verifica se a fonte de dados é maior ou igual ao valor esperado.
| **Menor que ou igual a** | Verifica se a fonte de dados é menor ou igual ao valor esperado.
| **Parecido com** | Verifica se a fonte de dados é parecida com o valor esperado. (Utilizando a função **Levenshtein**)
| **Corresponde a regex** | Verifica se a fonte de dados corresponde ao padrão regex definido no valor esperado.

**Valor Esperado**

O valor esperado na fonte de dados. Este valor pode ser texto, número ou até mesmo o padrão de um regex.

**Exemplo 1**: Imagine que, durante uma pergunta qualquer, um bot precise alterar o estado do usuário de acordo com a sua resposta. Os valores esperados de resposta são ‘sim’ ou ‘não’.

Nessa situação, o bloco que possui a pergunta terá duas condições de saída:

`Condição 1`

**Fonte de dados**: Entrada do usuário
**Operador**: Igual a
**Valores**: sim
**Bloco de destino**: 1 - Estado Sim

`Condição 2`

**Fonte de dados**: Entrada do usuário
**Operador**: Igual a
**Valores**: não
**Bloco de destino**: 2 - Estado Não

Para visualizar melhor, confira a imagem a seguir:

![Exemplo condições de saída](/img/concepts/builder/builder-visao-geral-das-condicoes-de-saida-2.png)

**Exemplo 2**: Imagine que, durante uma pergunta qualquer, um bot precise alterar o estado do usuário de acordo com uma de suas variáveis de contexto. Considere que a variável {{plan}} representa o plano do usuário, foi setada em algum estado anterior e pode assumir os valores ‘free’ ou ‘premium’.

Nessa situação, o bloco que possui a pergunta terá duas condições de saída:

`Condição 1`

**Fonte de dados**: Valor da variável
**Nome da variável**: plan
**Operador**: Igual a
**Valores**: free
**Bloco de destino**: 1 - Estado Free

`Condição 2`

**Fonte de dados**: Valor da variável
**Nome da variável**: plan
**Operador**: Igual a
**Valores**: premium
**Bloco de destino**: 2 - Estado Premium

Para visualizar melhor, confira a imagem a seguir:

![Exemplo 2 condições de saída](/img/concepts/builder/builder-visao-geral-das-condicoes-de-saida-3.png)

**Observações:**

* Uma condição de saída é composta por uma ou mais regras. Todas as regras de uma condição devem ser verdadeiras para que o bloco de alvo correspondente seja ativado.
* As condições de saída de um bloco do Builder **são processadas sequencialmente, até que uma condição verdadeira seja alcançada**. Ou seja, é preciso cadastrar as condições ordenadas a partir das mais específicas até a mais genérica.
* Por padrão, todo bloco possui uma condição de saída padrão (Fallback) pré-configurado. Apesar de ser possível alterar a saída padrão de qualquer bloco, não é possível removê-la.
