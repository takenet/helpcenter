---
id: verificar-se-existe-atendente-disponível-no-builder
title: Verificar se existe atendente disponível no Builder
sidebar_label: Verificar se existe atendente disponível no Builder
---

Uma das funcionalidades mais interessantes do BLiP é permitir que um bot faça a transferência de um cliente para um atendente humano de forma transparente. Caso tenha dúvida em como utilizar essa funcionalidade em seu bot acesse os artigos: 

* [LevelUp 1 - BLiP Desk](/docs/general/level-up/level-up-1-blip-desk) 
* [Visão geral do BLiP Desk](/docs/helpdesk/blipdesk/visao-geral-desk) 
* [Como realizar um atendimento através do BLiP Desk](/docs/helpdesk/blipdesk/como-realizar-um-atendimento-atraves-do-blip-desk)

Apesar de ser simples enviar um cliente para atendimento humano, a experiência do usuário pode ficar muito comprometida caso não haja nenhum atendente disponível na ferramenta (como no BLiP Desk por exemplo), uma vez que o bot para de responder e todas as mensagens são direcionadas para o ser humano.

Pensando nisso, é extremamente importante analisar se existe algum atendente disponível na ferramenta de atendimento, antes de enviar qualquer usuário.

Para verificar se existe algum atendente disponível no Builder siga os passos abaixo:

1. Crie um bloco com o nome "Validação de atendentes". Esse bloco deve vir antes do bloco de **Atendimento Humano**.

2. No bloco criado no passo 1 adicione uma ação de entrada do tipo Requisição HTTP, seguindo os dados abaixo:

**Método da Requisição:** POST

**URL:** <https://msging.net/commands>

**Cabeçalhos:**

* **Content-Type:** `application/json`
* **Authorization:** `Key API-KEY-BOT`

**Body:**

```json
{
    "id": "{{random.guid}}",
    "to": "postmaster@desk.msging.net",
    "method": "get",
    "uri": "/attendants"
}
```

**Variável de status da resposta:** `status`

**Variável do corpo da resposta:** `result`

![Criando uma ação de requisição HTTP](/img/builder/builder-verificar-se-existe-atendente-disponível-no-builder-1.png)

![Criando a requisição HTTP](/img/builder/builder-verificar-se-existe-atendente-disponível-no-builder-2.png)

**Observação**: Caso não saiba onde encontrar a API-KEY do seu bot, veja esse artigo: [Como encontrar a API-KEY de um bot no BLiP](/docs/api-sdks/como-encontrar-a-api-key-do-meu-bot).

3. Adicione mais uma ação de entrada (após a ação de requisição HTTP criada no passo 2) do tipo Script JS, com o script abaixo:

**Variável de entrada para a função:** `result`

**Código fonte:**

```javascript
// Receive the variables as parameters
function run(result) {

    result = JSON.parse(result);
    let hasAttendant = false;
    
    if(result.resource && result.resource.total >= 1){
            hasAttendant = result.resource.items.some(function(attendant){
                return attendant.status === 'Online';
            });
    }

    return hasAttendant;
}
```

**Variável para o valor de retorno:** `hasAttendant`

![Adicionando ação de entrada](/img/builder/builder-verificar-se-existe-atendente-disponível-no-builder-3.png)

*Ao final do passo 3, as ações do bloco "Validação de atendentes" deve ficar como a imagem abaixo:*

![Ações de entrada criadas no bloco](/img/builder/builder-verificar-se-existe-atendente-disponível-no-builder-4.png)

4. Defina duas condições de saída no bloco criado no passo 1. Uma das condições (**hasAttendant = true**) será executada caso exista pelo menos 1 atendente disponível e a outra condição (**hasAttendant = false**) será executada caso não exista nenhum atendente disponível.

![Definindo ações de saída](/img/builder/builder-verificar-se-existe-atendente-disponível-no-builder-5.png)

Adicione o bloco de **Atendimento Humano** apenas na condição de saída que representa a disponibilidade de atendentes.


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>