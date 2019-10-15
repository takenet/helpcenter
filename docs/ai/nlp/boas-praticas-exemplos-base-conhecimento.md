---
id: boas-praticas-exemplos-base-conhecimento
title: Boas Práticas para criação de exemplos em bases de conhecimento
sidebar_label: Boas Práticas para criação de exemplos em bases de conhecimento
---

Ao criar sua base de conhecimento será necessário criar um conjunto de intenções e, opcionalmente, um conjunto de entidades. Para saber mais sobre eles, acesse os artigos:

* [O que é intenção?](o-que-e-intencao)
* [O que é uma entidade?](o-que-e-entidade)

Neste artigo serão apresentadas boas práticas e dicas de como criar seu conjunto de intenções da melhor maneira possível.

## Recomendações

1. Escrever os exemplos na forma de perguntas.

2. Utilizar a gramática mais correta possível.

3. Evitar exemplos muito curtos, com apenas uma ou duas palavras.

4. Garantir que os exemplos sejam respondidos pelo conteúdo proposto.

5. Garantir que os exemplos de uma mesma intenção tenham o mesmo sentido semântico (falem da mesma coisa).

6. Garantir que os exemplos de uma mesma intenção tenham variações relevantes na redação.

7. Evitar ao máximo variações simples na redação (colocar ou não um artigo na frase).

8. Procurar criar nomes de intenções que façam sentido e estejam relacionadas aos exemplos.

	* Passo a Passo (sugestão) para dar nomes para intenções:

		* Ler os exemplos cadastrados, buscando entender a ideia principal

		* Explicar essa ideia em uma frase

		* Cortar em 30 caracteres:

			* **OU** cortar nos primeiros 30 caracteres.

			* **OU** resumir a frase em 3 palavras (até 30 caracteres na soma).

		* Usar o resultado dessa análise como novo nome da intenção.

 1. Ter pelo menos 10 exemplos para cada intenção.

2. Balancear a quantidade de exemplos em cada intenção.

	* Intenções com muito mais exemplos que as outras podem:

		* Ser mais reconhecidas que as outras.

		* Não atingir níveis mínimos de confiança.

	 * Intenções com muito menos exemplos que as outras podem:

		* Ter comportamento inesperado.

		* Nunca ser reconhecidas nas variações.

## Dicas

1. Sempre ir do conteúdo para o exemplo, não o contrário.

1. Usar o conteúdo como fonte para geração de novos exemplos.

1. Quando a base for muito grande, focar nos assuntos críticos e mais relevantes. Quantos menos exemplos para avaliar, melhor.

1. Foco em um trabalho constante e incremental (fazer aos poucos, mas constantemente)

1. Testar variações dos exemplos (o texto exato do exemplo sempre é reconhecido pelo provedor)

## Exceções

1. Algumas expressões podem ser colocadas na base de conhecimento mesmo que não sejam perguntas (afirmações, por exemplo).

1. Caso o vocabulário do cliente seja peculiar, não se faz necessário realizar a "correção ortográfica".

1. Caso a intenção seja sobre um assunto muito específico, identificado por uma simples palavra ou expressão, ela pode ser adicionada como exemplo no modelo.

1. A regra do número de exemplos não deve ser “gravada em pedra”. O ideal é buscar um equilíbrio, evitando ao máximo que existam intenções com poucos exemplos.