---
id: acao-registro-evento
title: Ação: Registro de eventos
sidebar_label: Ação: Registro de eventos
---

A ação **Registro de eventos** permite que eventos importantes ocorridos dentro de um bot sejam registrados para análise futura. É através dessa ação que o Builder consegue gerar informações que, posteriormente, serão utilizadas pelo módulo de análise do BLiP. Na prática, apenas eventos gerados por essa ação podem ser utilizados durante a **criação de relatórios que utilizem como fonte os eventos customizados**.

![Imagem detalhada da ação Registro de Evento](/img/analytics/blip-analytics/event-details.png)

## O que é um evento?

Um evento representa algo ocorrido dentro do bot independentemente de sua origem, ou seja, os eventos podem representar interações dos usuários ou até mesmo atividades realizadas pelo bot. Alguns exemplos de eventos:

* Número de mensagens contendo a palavra ajuda
* Quantidade de requisições HTTP realizadas pelo bot
* Quantidade de usuários que interagiram com o bot em um determinado canal
* Número de imagens recebidas pelo bot
* Quantas vezes uma determinada funcionalidade do bot foi solicitada
* Número de vezes que uma determinada intenção foi reconhecida

### Anatomia dos eventos

Todo evento possui os seguintes componentes:

* Categria (obrigatório) - Nome para agrupamento dos eventos
* Ação (obrigatório) - Nome para um tipo de evento agrupado por uma categoria
* Rótulo (opcional) - Descrição adicional para o evento gerado
* Valor (opcional) - Número que carrega um valor adicional as informações sobre um evento
* Extras (opcional - acessível apenas pela API do BLiP) - Informações adicionais importantes para o evento. Cada informação extra é composta por uma chave e um valor. Exemplo: evento gerado para um usuário do **plano premium** pode possuir uma informação extra onde a chave é **Plano** e o valor é **Premium**

Imagine, por exemplo, que exista a necessidade de analisar o número de imagens recebidas por um bot. Uma forma de organizar eventos para essa análise seria:

**Categoria**: "Conteúdos"  
**Action**: "Imagem"  

Ou seja, o agrupamento dos eventos é dado pela categoria **Conteúdos** e o tipo de conteúdo imagem é definido através da ação **Imagem**. Seguindo a mesma lógica, para analisar a quantida de mensagens de textos recebidas basta utilizar:

**Categoria**: "Conteúdos"  
**Action**: "Texto"  

Da mesma forma, para representar a quantidade de requisições HTTP realizadas pelo bot para um enpoint específico de uma API, uma configuração possível de eventos seria:

**Categoria**: "RequisicaoHTTP"  
**Action**: "/products"  
**Rótulo**: "requisições HTTP para busca de produtos"  
**Valor**: 1  

*Onde o valor 1 indica por exemplo o ID do produto buscado na API.*

## Criando um evento através da ação Registro de eventos

Analise o fluxo do seu bot e defina qual bloco corresponde ao momento em que se deseja gerar um evento. Nesse bloco, crie uma ação (entrada ou saída) do tipo **Registro de Eventos** e preenchas as informações relacionadas ao evento que deseja analisar. Veja na imagem abaixo, um exemplo para o registro de eventos que representam a quantidade de vezes que a *funcionalidades* **atendimento humano** foi solicitada.

![Imagem detalhada da ação Registro de Evento](/img/analytics/blip-analytics/event-sample.png)

## Registrando e analisando eventos programaticamente

Além de registrar os eventos através da ação do Builder é possível realizar o mesmo processo, programaticamente, através da API do BLiP. Para mais detalhes acesse a documentação do BLiP [clicando aqui](https://docs.blip.ai/#event-analysis).



