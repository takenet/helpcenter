---
id: boas-praticas-exemplos-base-conhecimento
title: Boas Práticas para criação de exemplos em bases de conhecimento
sidebar_label: Boas Práticas para criação de exemplos em bases de conhecimento
---

Com base em estudos do nosso time de IA, conhecimentos compartilhados e conversas com especialistas, sugerimos boas práticas para desenvolvimentos e exemplos em bases de conhecimentos sendo apresentadas em recomendações a seguir. Vale salientar que neste artigo vamos focar nas intenções, pelo formato de entidades deixaremos para discuti-las em outro artigo.

Ao criar sua base de conhecimento será necessário criar um conjunto de intenções e, opcionalmente, um conjunto de entidades, e vale a pena considerar conceitos de utilização e criação de arquivo de teste. Para saber mais sobre eles, acesse os artigos:
 
* [O que é intenção?](https://help.blip.ai/docs/ai/nlp/o-que-e-intencao/)
* [O que é uma entidade?](https://help.blip.ai/docs/ai/nlp/o-que-e-entidade/)
* [Utilizando arquivos de teste para análise do modelo de IA](https://help.blip.ai/docs/ai/nlp/utilizando-arquivos-teste-analise-modelo-ia/)


## Recomendações


- Recorrentemente usuários tendem a interagir com o bot fazendo perguntas, então escrever os exemplos na forma de perguntas seria uma boa prática recomendada.

- Utilizar a gramática mais correta possível.

- Evitar exemplos muito curtos, com apenas uma ou duas palavras.

- Garantir que os exemplos de uma mesma intenção tenham o mesmo sentido semântico (falem da mesma coisa).

- Garantir que os exemplos de uma mesma intenção tenham variações relevantes na redação.

- Evitar ao máximo variações simples na redação (colocar ou não um artigo na frase). (Ex.:Quero receber **o** extrato/Quero receber **um** extrato)

- Procurar criar nomes de intenções que façam sentido e estejam relacionados aos exemplos.

	- Sugestão de um passo a passo para dar nomes para intenções seria ler os exemplos cadastrados buscando entender a ideia principal, explicar essa ideia em uma frase. Cortar em 30 caracteres: **OU** cortar nos primeiros 30 caracteres, **OU** resumir a frase em 3 palavras (até 30 caracteres na soma). E por fim, usar o resultado desse procedimento como novo nome da intenção.

 - Também uma boa recomendação geral dos provedores de NLP é ter em média 10 exemplos para cada intenção, pois poucos exemplos dificultam o processo de generalização, sendo esse número apenas uma estimativa para ser usado como referência, mas o importante mesmo é o modelo estar em bom funcionamento.

- Balancear a quantidade de exemplos em cada intenção.

	- Intenções com muito mais exemplos que as outras podem:

		- Ser mais reconhecidas que as demais.

		- Podem ser incorretamente reconhecidas e não atingir níveis mínimos de confiança.

	 - Intenções com muito menos exemplos que as outras podem:

		- Ter comportamento inesperado. (Ex: Exemplos serem reconhecidos com confiabilidade muito baixa mesmo sendo claramente de determinada intenção, ou exemplos de determinada intenção sendo reconhecido como outro com confiabilidade alta)

		- Nunca ser reconhecidas nas variações.

## Dicas

Pensando na melhoria da qualidade do modelo disponibilizamos algumas dicas

- Sempre ir do conteúdo para o exemplo, não o contrário.

- Usar o conteúdo como fonte para geração de novos exemplos.

- Quando o insumo para gerar a base for muito grande, busque priorizar os assuntos críticos e mais relevantes. Quantos menos exemplos para avaliar, melhor.

- Garantir que os exemplos sejam respondidos pelo conteúdo proposto.

- O trabalho não é linear, por isso é importante ressaltar o foco em um trabalho constante e incremental (fazer aos poucos, mas constantemente)

- No momento de avaliar as variações sintáticas, testar variações dos exemplos (o texto exato do exemplo sempre é reconhecido pelo provedor)

## Exceções 

- Algumas expressões podem ser colocadas na base de conhecimento mesmo que não sejam perguntas (afirmações, por exemplo).

- Caso o vocabulário do cliente seja com gírias ou maneirismos atípicos de falar, não se faz necessário realizar a "correção ortográfica".

- Caso a intenção seja sobre um assunto muito específico, identificado por uma simples palavra ou expressão, ela pode ser adicionada como exemplo no modelo.

- A regra do número de exemplos não deve ser “gravada em pedra”. O ideal é buscar um equilíbrio, evitando ao máximo que existam intenções com poucos exemplos.

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>