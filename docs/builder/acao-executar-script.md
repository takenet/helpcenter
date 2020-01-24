---
id: acao-executar-script
title: Ação: Executar script
sidebar_label: Ação: Executar script
---

A ação de executar um script permite maior flexibidade e dinamismo na hora de criar um fluxo de conversa. Através dela é possível criar lógicas, tratar variávies e valores, construir conteúdos dinâmicos e muitas outras opções.

![Selecionando a ação Executar Script](/img/builder/acao-executar-script-1.png)

## Definindo variáveis de entrada

É possível passar variáveis como parâmetros de entrada para o script. Elas podem ser as de sistema, pré-definidas, ou as criadas por você. As variáveis serão tratadas no script **na mesma ordem** em que forem passadas na Ação. 

Para isso, é preciso selecionar (ou digitar) todas as variáveis desejadas no campo correspondente, conforme mostra a imagem:

![Definindo variaveis de entrada](/img/builder/acao-executar-script-2.png)

## Criando um script Javascript

O BLiP permite a criação de um script Javascript *ES5*, com a possibilidade de até **1000 operações** por script. Ele terá a seguinte estrutura: 

```javascript
function run(inputVariable1, inputVariable2) {
    return "Hello BLiP"; 
}
```
A função **run** é a que será executada como principal. Os parâmetros *inputVariableX* são as variáveis definidas como variáveis de entradas e o *return* é o que será enviado para a variável definida como retorno.

#### Observação: 

* Todas as variáveis de entrada devem ser passadas como parâmetros da função;
* *Objetos* recebidos como parâmetro devem ser transformados em um objeto *JSON*. *Ex.: JSON.parse(inputVariable1)*;
* *Objetos* retornados devem ser transformados em *string*. Ex.: JSON.stringify(inputVariable1);

## Salvando o retorno

Após a execução do script, pode ser interessante salvar o retorno em alguma variável, para que seja usada no seu fluxo conversacional. Para isso, basta definir um nome para a variável, como no exemplo abaixo:

![Definindo variaveis de retorno](/img/builder/acao-executar-script-4.png)