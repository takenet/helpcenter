---
id: como-verificar-atendentes-equipe
title: Como verificar atendentes disponíveis por equipe
sidebar_label: Como verificar atendentes disponíveis por equipe
---

Como já apresentado, uma **regra de atendimento** define como seu bot **direciona os atendimentos humanos entre as equipes cadastradas**. De forma complementar, pode ocorrer situações onde a equipe desejada de direcionamento n**ão tenha atendentes disponíveis(online)**. Dessa forma, com objetivo de **evitar tais situações**, é necessário realizar uma **verificação de atendentes disponíveis por equipe** seguindo estrutura de regras de atendimento.

## Estruturando bot de atendimento

### 1. Crie o bot de atendimento

Iniciaremos a estruturação do bot a partir do template de atendimento, conforme imagem abaixo.

![Seleção do template de atendimento humano](/img/helpdesk/como-verificar-atendentes-equipe-1.png)<br>

### 2. Adicione atendentes nas equipes

Para este exemplo, iremos [**adicionar 2 atendentes**](/docs/helpdesk/blipdesk/gerenciamento-equipes), sendo as equipes dos atendentes respectivamente:

* Equipe1, Default;
* Equipe2.

### 3. Defina as regras de atendimento

É necessário [definir regras de atendimento](/docs/helpdesk/blipdesk/como-definir-regras-atendimento) para o direcionamento do contato para as equipes desejadas. Neste exemplo **utilizaremos a fonte de dados** `Extras do contato`, **operador** `Contém` e **valor esperado** conforme o `nome da equipe` para todos os casos, sempre considerando [as boas práticas ao definir regras de atendimento](/docs/helpdesk/blipdesk/boas-praticas-regras-atendimento).

![Regras de atendimento do exemplo](/img/helpdesk/como-verificar-atendentes-equipe-2.png)<br>

## Adaptando template de atendimento para verificar atendentes disponíveis por equipe

Por padrão, temos o seguinte fluxo do template de atendimento a ser alterado:

![Fluxo do template de atendimento](/img/helpdesk/como-verificar-atendentes-equipe-3.png)<br>

Dado o fluxo do template de atendimento, é necessário **realizar algumas alterações** para funcionalidade do exemplo, veja o fluxo resultante abaixo.

![Estrutura do fluxo do exemplo](/img/helpdesk/como-verificar-atendentes-equipe-4.png)<br>

Como percebido, **adicionamos o bloco** de `Direcionamento conforme regras de atendimento`, neste bloco, como o nome já diz, direcionaremos o contato conforme regras de atendimento, veja mais detalhes deste bloco abaixo.

![Conteúdo do bloco de direcionamento conforme regras de atendimento](/img/helpdesk/como-verificar-atendentes-equipe-5.png)<br>

Por fim, para **cada equipe** do nosso exemplo (duas), **criamos um bloco** que contém a mesma estrutura do bloco `3.0 - Verifica Disponibilidade Atendentes` do template de atendimento, e **alteramos o script** `HANDLECHECKREQUEST` de cada um dos blocos. 

![Estrutura do fluxo do exemplo](/img/helpdesk/como-verificar-atendentes-equipe-6.png)<br>

Abaixo é apresentado **o novo script que foi alterado** em cada bloco, para cada bloco é necessário alterar a variável `team`, mudando seu valor para o **nome da equipe a ser verificada**.

```javascript
function run(result) {
    result = JSON.parse(result)
    let hasAttendant = false;
    
    // Altere o valor da variável para o nome da equipe verificada
    let team = 'Equipe1';

    if(result.resource && result.resource.total >= 1){
        hasAttendant  = result.resource.items.some(function(attendant){
            return (attendant.status === 'Online' && attendant.teams.includes(team));
        });
    }
    return hasAttendant;
}
```

Em resumo, essas alterações são suficientes para verificar a disponibilidade de atendentes por equipe.

Quer testar ou importar essa solução para seu bot? 

[Clique aqui para utilizar o template gerado nesse artigo](/template?Id=Atendimento_humano_equipes)
