---
id: como-enviar-messages-templates-via-builder
title: Como enviar notificações WhatsApp via Builder
sidebar_label: Como enviar notificações WhatsApp via Builder
---

Através do BLiP, é possível criar aplicações para o canal WhatsApp capazes **não só de responder às mensagens recebidas**, mas também de **enviar mensagens (notificações) para o cliente de forma ativa**.

Qualquer mensagem enviada pelo bot, após um período de 24 horas em relação à última mensagem enviada pelo cliente é considerada uma notificação. Para saber mais sobre as diferenças entre uma mensagem normal e uma notificação [clique aqui](https://help.blip.ai/docs/general/politica-de-violacao-mensagens/#mensagens-de-respostas). Notificações no WhatsApp estão sempre associadas a um Modelo de Mensagem (*Message Template*), previamente aprovado pelo próprio WhatsApp. 

Para enviar uma notificação (mensagem ativa) é necessário garantir que os pré-requisitos abaixo já foram satisfeitos:

1. [Ter um bot previamente publicado no canal WhatsApp](/docs/channels/whatsapp/publicando-bot-no-whatsapp) (*disponível apenas para clientes Business e Enterprise*)
2. [Ter um Message Template criado e aprovado pelo WhatsApp](/docs/channels/whatsapp/como-criar-aprovar-message-template)<br />
Depois de criar e aprovar seu Message Template você terá acesso a dois valores **NAMESPACE** e **ELEMENT_NAME**. Esses valores identificam seu Message Template e serão necessários durante o processo.
3. Possuir saldo disponível em sua conta para o disparo de notificações no WhatsApp (*consulte a equipe de suporte do seu plano para analisar o saldo disponível em sua conta*)

### Enviando uma notificação

Para enviar uma notificação, acesse a aba de **Growth** na funcionalidade de **agendamento de mensagem**, conforme imagem abaixo.

![Selecionando opção Growth](/img/channels/whatsapp/como-enviar-messages-templates-via-builder-1.png)

### Preenchendo o conteúdo do broadcast 

A funcionalidade apresentada, permitirá o envio de diversos conteúdos, neste caso o tipo de conteúdo utilizado para o envio de message template é o **conteúdo dinâmico**, sendo assim selecione-o assim como apresentado na imagem abaixo. 

![Criando o conteúdo do Broadcast](/img/channels/whatsapp/como-enviar-messages-templates-via-builder-2.png)

Neste tipo de conteúdo, preencha os dois campos apresentados. Assim sendo, selecione o valor *application/json* para o campo **tipo** e para o campo **conteúdo** preencha conforme código abaixo adaptando de acordo com seu message template.

```json
 {
    "type": "hsm",
    "hsm": {
      "namespace": "{NAMESPACE}",
      "element_name": "{ELEMENT_NAME}",
      "fallback_lg": "pt",
      "fallback_lc": "BR",
      "localizable_params": [
        {
          "default": "BLiPPer"
        }
      ]
    }
 }
```


Substitua as variáveis **{NAMESPACE}** e **{ELEMENT_NAME}** em conformidade com os valores correspondentes do message template a ser enviado e, do mesmo modo, adicione ou remova objetos no array **localizable_params**.

Para ilustrar, suponhamos que seu message template contém 3 placeholders, sendo o primeiro placeholder o nome do contato, o segundo a data atual e, por último, um conteúdo que deseja preencher livremente. Para cada placeholders deve existir um objeto correspondente interno ao array **localizable_params**, os objetos serão apresentados respectivamente. Observe o código solução abaixo:

```json
{
    "type": "hsm",
    "hsm": {
      "namespace": "{NAMESPACE}",
      "element_name": "{ELEMENT_NAME}",
      "fallback_lg": "pt",
      "fallback_lc": "BR",
      "localizable_params": [
        {
          "default": "${contact.name}"
        },
        {
          "default": "${calendar.date}"
        },
        {
          "default": "Meu preenchimento livre"
        }
      ]
    }
 }

```

![Preenchendo conteúdo com message template](/img/channels/whatsapp/como-enviar-messages-templates-via-builder-3.png)

### Definindo sua audiência

Finalizando este primeiro processo, selecione a lista de envio no qual será encaminhado o message template em questão.

![Definindo sua audiência](/img/channels/whatsapp/como-enviar-messages-templates-via-builder-4.png)

### Enviando ou agendando o broadcast 

Por fim, selecione o tipo de mensagem e envie ou agende a mensagem, conforme necessidade.

![Enviando de conteúdo com message template](/img/channels/whatsapp/como-enviar-messages-templates-via-builder-5.png)


