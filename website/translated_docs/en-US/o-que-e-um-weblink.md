---
id: o-que-e-um-weblink
title: What is Weblink?
sidebar_label: What is Weblink?
---

O tipo de conteúdo **weblink** permite que o bot envie para o cliente um link de qualquer página pública na internet. Esse tipo de conteúdo é muito útil para facilitar o acesso dos usuários, de forma simples, às informações disponíveis em sites e blogs.

A imagem abaixo, apresenta um exemplo do Weblink no canal BLiP Chat. <br><br> ![Exemplo de conteudo weblink](/img/builder/builder-o-que-e-um-weblink-1.png)

<br><br> Para criar um weblink é preciso definir 4 propriedades:

**Url**: Link da página que será exibida **(obrigatório)**. O link **DEVE** estar acessível através do protocolo HTTPS *(páginas HTTP estarão acessíveis apenas com o target Blank)*. **Title**: Título que será exibido no card de weblink **(obrigatório)** **Description**: Descrição do link que será exibido no card **(opcional)**. **Target**: Modo em que o link será aberto no momento em que o usuário clicar no card **(obrigatório)**.

Exsitem 4 tipos possíveis de target:

| Tipo            | Descrição                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Blank**       | Link é aberto fora do contexto da conversa.                                                                           |
| **Self**        | Link é aberto substituindo o contexto atual da conversa (toda a janela é substituída). **Suportado em alguns canais** |
| **SelfCompact** | Link é aberto no mesmo contexto da conversa ocupando 30% da tela. **Suportado em alguns canais**.                     |
| **SelfTall**    | Link é aberto no mesmo context da conversa ocupando 70% da tela. **Suportado em alguns canais**.                      |

<br><br>Nos canais que suportam weblinks com os targets Self, SelfCompact e SelfTall, é possível utilizar esse conteúdo para gerar conteúdos customizados para cada bot.

Imagine que seu bot precise solicitar uma data para o cliente. Neste caso, nâo existe um tipo de conteúdo, nativo, capaz de entregar uma boa experiência ao usuário. Para solucionar esse problema é possível criar uma página web, que possua um elemento específico para datas - um datepicker, por exemplo, e utilizá-la através de um weblink.

Nestes casos, além de exibir a página web é possível também enviar informações coletadas na página para dentro da conversa. Para isso, é necessário adicionar bibliotecas específicas do canal (também chamadas de extensões) dentro da página web criada.

Para entender como criar um elemento web através de um weblink, [clique aqui](https://help.blip.ai/hc/pt-br/articles/360015427252-Criando-um-elemento-web-atrav%C3%A9s-de-um-weblink-no-BLiP-Chat?).

## Enviando um Weblink com uma URL dinâmica
Em alguns cenários específicos pode ser necessário enviar um Weblink levando em consideração uma URL gerada dinamicamente no fluxo do bot. Imagine, por exemplo, que a URL desejada esteja armazenada em uma variável de nome: **_url_**.

Neste caso, é necessário utilizar o tipo de conteúdo dinâmico. Veja o passo a passo abaixo:

1. Adicione um conteúdo do tipo **Conteúdo Dinâmico**.

![Tipo de conteúdo dinamico](/img/builder/builder-o-que-e-um-weblink-2.png)

2. Escolha o MIME type **application/vnd.lime.web-link+json**.

![MME type para weblink](/img/builder/builder-o-que-e-um-weblink-3.png)

3. Preencha o Source do conteúdo dinâmico com o JSON abaixo. *Obs.: Lembre-se de alterar a propriedade uri com o valor da variável desejada.*

```json
{
   "uri": "{{url}}",
   "target": "blank",
   "text": "Here is a documentation weblink"
}
```

![Source do conteúdo dinamico com JSON](/img/builder/builder-o-que-e-um-weblink-4.png)
