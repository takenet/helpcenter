---
id: exemplos-regras-atendimento
title: Exemplos práticos de regras de atendimento
sidebar_label: Exemplos práticos de regras de atendimento
---

As regras de atendimento são normas e condições que indicam critérios e maneiras de direcionar os contatos para para as equipes de atendimentos corretas. Devemos **utilizar as regras de atendimento sempre que desejamos direcionar um contato para um equipe de atendimento humano**.

Este artigo traz alguns exemplos de uso desta funcionalidade no dia-a-dia dos fluxos de atendimento humano.

Antes de começar, acesse e leia os artigos abaixo, para uma melhor compreensão e abstração dos exemplos.

* [Gerenciando equipes de Atendimento](/docs/en/helpdesk/blipdesk/gerenciamento-equipes)

* [Como definir regras de atendimento](/docs/en/helpdesk/blipdesk/como-definir-regras-atendimento)

* [Boas práticas para uso das regras de atendimento](/docs/en/helpdesk/blipdesk/boas-praticas-regras-atendimento)

## Equipes para cidades diferentes

Imagine uma empresa de eventos que possui filiais em diversas cidades do Brasil. Ela precisa que os **clientes recebam atendimento especializado e diferenciado, baseado na cidade em que ele está** ou que gostaria de criar um evento. Suponha que para este caso, durante o fluxo conversacional, o usuário indica a cidade para a qual ele gostaria de receber atendimento. Esse dado foi salvo nas informações do contato, utilizando o campo **Extras** de nome `Cidade`. [Clique aqui](https://help.blip.ai/docs/en/builder/salvando-informacoes-de-um-usuario/) para saber mais sobre como salvar dados nos contatos.

![Contato com dados preenchidos](/img/helpdesk/exemplos-regras-atendimento-01.png)

As regras serão definidas da seguinte maneira:

| Fonte | Condição | Valor | Equipe esperada |
|:-:|-|-|-|
| **contact.extras.Cidade** | É igual/Contém | Belo Horizonte | BH |
| **contact.extras.Cidade** | É igual/Contém | São Paulo | SP |
| **contact.extras.Cidade** | É igual/Contém | Rio de Janeiro | RJ |

Se a informação contida no campo `Cidade`, for igual ou contiver alguma das três cidades (Belo Horizonte, São Paulo ou Rio de Janeiro), o usuário será direcionado para a equipe correspondente àquela cidade.

No portal do BLiP, as regras ficariam assim:

![Exemplo de regra criada](/img/helpdesk/exemplos-regras-atendimento-02.png)

## Equipes para assuntos diferentes

Imagine uma grande empresa de varejo que utiliza o seu canal de atendimento para dar suporte a clientes em toda a sua jornada. Durante a criação do fluxo conversacional foram identificados os seguintes assuntos passíveis de atendimento humano: **Reclamações**, **Dúvidas**, **Informações sobre pedido**, **Sugestões e Feedbacks** e **Cancelamento**.

Para este cenário será levada em consideração a fonte **Mensagem**, que é a **última mensagem enviada pelo usuário antes de entrar em atendimento humano**. Para isso a empresa criou uma espécie de menu com números indicativos e texto, para facilitar a escolha do usuário.

![Menu de opções WhatsApp](/img/helpdesk/exemplos-regras-atendimento-03.png)

Dessa maneira, as regras podem ser definidas da seguinte forma:

| Assunto | Fonte | Condição | Valor | Equipe esperada |
|-|:-:|-|-|-|
| Reclamações | **Mensagem** | Contém | 1, Reclamações, reclamar | Reclamações |
| Dúvidas | **Mensagem** | Contém | 2, Dúvidas, Ajuda | Dúvidas |
| Informações sobre pedido | **Mensagem** | Contém | 3, Pedido, informações | Informações |
| Sugestões e Feedbacks | **Mensagem** | Contém | 4, Sugestões, melhoria, feedback | Feedbacks |
| Cancelamento | **Mensagem** | Contém | 5, Cancelar, cancelamento | Cancelamento |

Se a **última mensagem** enviada pelo usuário contiver o número do assunto (ou o assunto, por precaução), ele será direcionado para a equipe correspondente ao assunto.

No portal do BLiP, a regra se parecerá com isso:

![Exemplo de regra criada](/img/helpdesk/exemplos-regras-atendimento-04.png)

## Equipes para tipos de usuários diferentes

Imagine que uma instituição de ensino deseja ter um contato inteligente para dar suporte a seus alunos, professores e também interagir e tirar dúvidas de pessoas interessadas nos cursos oferecidos. Neste fluxo conversacional a instituição identifica no início da interação quem é e quem não é aluno matriculado ou professor através de autenticação. Essa informação fica salva no contato, mais especificamente no campo **extras** de nome `Tipo`. [Clique aqui](https://help.blip.ai/docs/en/builder/salvando-informacoes-de-um-usuario/) para saber mais sobre como salvar dados nos contatos.

![Contato com dados preenchidos](/img/helpdesk/exemplos-regras-atendimento-05.png)

As regras serão definidas da seguinte maneira:

| Fonte | Condição | Valor | Equipe esperada |
|:-:|-|-|-|
| **contact.extras.Tipo** | É igual/Contém | Aluno | Alunos |
| **contact.extras.Tipo** | É igual/Contém | Professor | Professores |
| **contact.extras.Tipo** | É igual/Contém | Outro | Default |

Se a informação contida no campo `Tipo`, for igual ou contiver algum dos tipos conhecidos (Aluno e Professor), o usuário será direcionado para a equipe correspondente. Caso ele seja um interessado, o tipo será dado como **Outro** e ele será direcionado para a equipe `Default`.

No portal do BLiP, as regras ficariam assim:

![Exemplo de regra criada](/img/helpdesk/exemplos-regras-atendimento-06.png)

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>