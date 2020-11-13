---
id: como-enviar-notificacoes-respostas-prontas
title: Como enviar notificações através de respostas prontas do BLiP Desk
sidebar_label: Como enviar notificações através de respostas prontas do BLiP Desk
---

Antes de mais nada, qualquer mensagem enviada pelo bot, após um período de 24 horas em relação à última mensagem enviada pelo cliente é considerada uma notificação. Para saber mais sobre as diferenças entre uma mensagem normal e uma notificação [clique aqui](https://help.blip.ai/docs/general/politica-de-violacao-mensagens/#mensagens-de-respostas). É importante enfatizar que as notificações no WhatsApp estão sempre associadas a um Modelo de Mensagem (*Message Template*), previamente aprovado pelo próprio WhatsApp. 

Para realização desta tarefa de envio de message template através de respostas prontas é necessário garantir que os pré-requisitos abaixo já foram satisfeitos:

1. [Ter um bot previamente publicado no canal WhatsApp](/docs/channels/whatsapp/publicando-bot-no-whatsapp) (*disponível apenas para clientes Business e Enterprise*)
2. [Ter um Message Template criado e aprovado pelo WhatsApp](/docs/channels/whatsapp/como-criar-aprovar-message-template)<br />
Depois de criar e aprovar seu Message Template você terá acesso a dois valores **NAMESPACE** e **NAME**. Esses valores identificam seu Message Template e serão necessários durante o processo.
3. Possuir saldo disponível em sua conta para o disparo de notificações no WhatsApp (*consulte a equipe de suporte do seu plano para analisar o saldo disponível em sua conta*)

### Enviando resposta pronta


O primeiro passo para realizar esta tarefa, é necessário a criação da resposta pronta assim como já apresentando no artigo [Utilizando variáveis nas respostas prontas do BLiP Desk](/docs/helpdesk/blipdesk/utilizando-variav-respostas/#docsNav), similarmente, acesse a aba de **Atendimento** na funcionalidade de **respostas prontas** e clique no botão **criar categoria**, conforme imagem abaixo.

![Acessando aba de Atendimento na funcionalidade de respostas prontas](/img/channels/whatsapp/como-enviar-messages-template-respostas-prontas-1.png)<br />


Preencha o nome da categoria conforme deseja e clique no botão **adicionar resposta**, o tipo de conteúdo utilizado para envio do message template nesta funcionalidade é o **conteúdo dinâmico**.<br />


![Adicionando respostas com conteúdo dinâmico](/img/channels/whatsapp/como-enviar-messages-template-respostas-prontas-2.png)

### Preenchendo o conteúdo dinâmico
Neste tipo de conteúdo, preencha os três campos apresentados. Assim sendo, selecione o valor *application/json* para o campo **tipo** e para o campo **conteúdo** preencha conforme código abaixo adaptando de acordo com seu message template.

```json
 {
    "type": "template",
    "template": {
      "namespace": "{NAMESPACE}",
      "name": "{NAME}",
      "language": {
                "policy": "deterministic",
                "code": "pt_BR"
        },
      "localizable_params": [
        {
          "default": "BLiPPer"
        }
      ]
    }
 }
```


Substitua as variáveis **{NAMESPACE}** e **{NAME}** em conformidade com os valores correspondentes do message template a ser enviado e, do mesmo modo, adicione ou remova valores no campo **localizable_params**. 

Para ilustrar, suponhamos que seu message template contém 3 placeholders, sendo o primeiro placeholder o nome do contato, o segundo a data atual e, por último, um conteúdo que deseja preencher livremente. Para cada placeholders deve existir um objeto correspondente interno ao array **localizable_params**, os objetos serão apresentados respectivamente. Observe o código solução abaixo:

```json
{
    "type": "template",
    "template": {
      "namespace": "{NAMESPACE}",
      "name": "{NAME}",
      "language": {
                "policy": "deterministic",
                "code": "pt_BR"
      },
      "localizable_params": [
        {
          "default": "${contact.name}"
        },
        {f
          "default": "${calendar.date}"
        },
        {
          "default": "Meu preenchimento livre"
        }
      ]
    }
 }

```

![Preenchendo campos da resposta pronta](/img/channels/whatsapp/como-enviar-messages-template-respostas-prontas-3.png)

Por fim, satisfeitos os pré requisitos e etapas anteriores, o envio do message template através da funcionalidade de respostas prontas estará disponível no BLiP Desk, conforme imagem abaixo.

![Enviando message template através da resposta pronta](/img/channels/whatsapp/como-enviar-messages-template-respostas-prontas-4.png)


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>
