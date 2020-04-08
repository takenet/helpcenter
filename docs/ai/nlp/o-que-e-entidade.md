---
id: o-que-e-entidade
title: O que é uma entidade?
sidebar_label: O que é uma entidade?
---

Além [das intenções](/docs/ai/nlp/o-que-e-intencao/), um modelo de NLP pode conter diferentes entidades.

Entidades podem ser entendidas como **pedaços do texto que completam o sentido de intenções**.

Em geral, as entidades são substantivos, adjetivos, coisas, produtos e serviços que fazem parte do contexto do negócio do cliente. Além disso, podem ser também números, datas, valores monetários, porcentagens, pessoas, e localizações.

Elas servem para especificar melhor o assunto da intenção. A estrutura da entidade é um pouco diferente, pois cada uma delas possui nome, valores e sinônimos. O uso de entidades não é obrigatório, mas ajuda a diminuir o número de intenções necessárias e, principalmente, possíveis confusões do seu modelo de NLP, pois serão menos intenções parecidas que o seu modelo terá que aprender.

Imagine um exemplo de reserva em um hotel.

> "quero reservar um quarto individual na sexta-feira."  

Neste caso, uma opção muito válida seria a modelagem da intenção de nome **reservar quarto** com exemplos gerais de variações de como um usuário poderia solicitar uma reserva. Caso seja necessário diferenciar a reserva de acordo com o tipo da habitação e data poderíamos ter as entidades **tipo de quarto** e **dia da semana**, conforme demonstrado na imagem abaixo:

![Imagem com exemplo de criação de uma entidade](/img/ai/nlp/entities-sample.png)<br/>

Entidades também podem ser chamadas de **variáveis das intenções**, uma vez que elas representam objetos dentro das mesmas.

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"/>