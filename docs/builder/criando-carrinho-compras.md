---
id: criando-carrinho-compras
title: Criando um carrinho de compras usando o Builder
sidebar_label: Criando um carrinho de compras usando o Builder
---

Pode ser muito útil praticar vendas diretamente pelo *chatbot*, como uma espécia de lojinha para alguns produtos. Para tornar a experiência mais prática possível, muito se tende a pensar na criação de uma espécie de carrinho de compras, próximo ao que já conhecemos das lojas de *e-commerce*.

Este artigo traz uma solução modelo, apresentando uma (das muitas) forma de se fazer utilizando o Builder. Fala adaptações conforme necessário.

Você pode testar e baixar o fluxo deste bot [clicando aqui](http://help.blip.ai/template?Id=Carrinho).

*Antes de começar, talvez seja importante revisitar alguns conceitos importantes:*

* [Visão geral das condições de saída](https://help.blip.ai/docs/en/builder/visao-geral-das-condicoes-de-saida/)
* [Ação: Executar Script](https://help.blip.ai/docs/en/builder/acao-executar-script/)

## 1. Preparando o fluxo

Para este exemplo vamos seguir com um exemplo de uma loja de que vende itens de *Vestuário*, *Perfumaria* e *Bombonière*. Enquanto ele estiver em uma seção da loja, só receberá itens daquele setor, mas terá a opção de voltar ao menu de opções.

Vamos seguir também com um fluxo do tipo *"Enquanto o usuário não informar que quer finalizar..."*, que significa que o usuário terá a oportunidade de ficar adicionando itens ao carrinho até que ele diga que quer parar.

A estrutura dos blocos é dada da seguinte maneira:

| Bloco | Descrição | Ação | Espera entrada do usuário? |
|:-:|:-:|-|-|
| **Início** | Bloco inicial que irá receber o usuário | Direciona para o bloco seguinte | ![](/img/builder/checkball.png) |
| **Boas-vindas** | Dá as boas-vindas ao usuário | Executa script para criar a variável do carrinho | ![](/img/builder/error.png) |
| **Menu de Opções** | Oferece opções para os setores | Direciona usuário para o setor respectivo | ![](/img/builder/checkball.png) |
| **Vestuário** | Oferece opções de produtos para o usuário | Coleta a opção do usuário e envia para o próximo bloco | ![](/img/builder/checkball.png) |
| **Perfumaria** | Oferece opções de produtos para o usuário | Coleta a opção do usuário e envia para o próximo bloco | ![](/img/builder/checkball.png) |
| **Bombonière** | Oferece opções de produtos para o usuário | Coleta a opção do usuário e envia para o próximo bloco | ![](/img/builder/checkball.png) |
| **Processa** | Bloco transparente ao usuário | Adiciona item ao carrinho e retorna usuário para o bloco anterior | ![](/img/builder/error.png) |
| **Finalizar** | Bloco que exibe total da compra e oferece opção de prosseguir ou não | Executa script para gerar o total da compra e direciona usuário para bloco de acordo com a resposta | ![](/img/builder/checkball.png) |

O modelo do fluxo fica como apresentado na imagem abaixo:

![](/img/builder/criando-carrinho-compras-1.png)

## 2. Criando o carrinho

No bloco **Boas-vindas**, iremos criar a estrutura lógica do carrinho de compras. Ele será um `JSON` que contém as informações: 

* **Id**: Identificador do usuário
* **Data**: Data da criação do carrinho
* **Total**: Valor total dos pedidos
* **Items**: Lista de itens pedidos.

Para isso, crie uma **Ação de Entrada de Executar Script**, adicione como variáveis de entrada as variáveis `calendar.date` e `contact.identity`, para representar a data no momento da execução e o ID do usuário, respectivamente. No corpo do script, a função conforme abaixo:

```javascript
function run(data, identity) {
    var cart = {
        "id": identity,
        "data": data,
        "total": '',
        "items": []
    };
    return cart;
} 
```

Não se esqueça de definir o retorno, com a opção de **Salvar retorno** na variável **cart**.

## 2. Apresentando as opções e coletando os dados

Para dar as opções de produtos para o usuário nos blocos **Vestuário, Perfumaria** e **Bombonière**, vamos utilizar o tipo de conteúdo **Carrossel**. Fique atento aos [tipos de conteúdo disponíveis em cada canal](https://help.blip.ai/contenttypes/), para adaptar de acordo com as suas necessidades.

![](/img/builder/criando-carrinho-compras-2.png)

Para tornar a experiência mais válida para o usuário, vamos utilizar um **Payload** na entrada do Carrossel, para que as informações sobre o produto sejam passadas sem que o usuário note. Ou seja, enquanto para o usuário a mensagem enviada é **Colocar no carrinho**, o bot irá receber o preço do produto, por exemplo.

![](/img/builder/criando-carrinho-compras-3.png)

Como o fluxo irá rodar enquanto o usuário não disser que quer finalizar, também foi adicionado um menu ao bloco, dando a opção **Finalizar**, que irá terminar a compra e processar os dados e **Voltar**, que volta o usuário para o menu de selecionar setor (Vestuário, Perfumaria ou Bombonière).

![](/img/builder/criando-carrinho-compras-4.png)

Assim, teremos **3 tipos de condições de saída**: Finalizar, Voltar e Algum produto.

![](/img/builder/criando-carrinho-compras-5.png)

## 3. Adicionando itens ao carrinho

Após selecionar um produto, o usuário é direcionado ao bloco **Processa**, que não apresenta nada ao usuário e nem espera entrada de usuário, ou seja, apenas realiza alguma ação invisível ao usuário e o direciona para outro bloco. Nele temos um script (ação de entrada) que irá adicionar cada um dos produtos à estrutura do carrinho.

Ele recebe como variáveis de entrada a variável `cart`, que representa o carrinho e `input.content`, que traz a resposta do usuário (neste caso, informações sobre um produto). Como retorno, salvamos na própria variável `cart`, sobrescrevendo ela com as novas informações. 

```javascript
function run(cart, input) {
    var cartN = JSON.parse(cart);
    cartN.items.push(input);
    return cartN;
}
```


## 4. Contabilizando o total

Quando o usuário selecionar a opção de **Finalizar** e for direcionado para o bloco homônimo, uma ação de entrada é executada com um script. Este script fica encarregado de pegar as informações até então salvas no carrinho e somar os preços, retorno o valor total da compra pra o usuário.

Este script recebe como variáveis de entrada a variável `cart` e tem como retorno salvo a variável `total`.

```javascript
function run(cart) {
  var total = 0;
  cart = JSON.parse(cart);
  cart.items.forEach(function(item) {
    total += parseFloat(item).toFixed(2);
  });
  return parseFloat(total);
}
```

Após a execução ele irá exibir para o usuário o total e perguntar se deseja prosseguir, conforme a imagem abaixo:

![](/img/builder/criando-carrinho-compras-6.png)

A partir daí pode ser enviado um email, o usuário pode ser direcionado para atendimento humano ou até mesmo ser gerado um boleto para cobrança.

------------------

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>