---
id: como-salvar-numero-whatsapp
title: Como salvar o número do WhatsApp de um contato
sidebar_label: Como salvar o número do WhatsApp de um contato
---

Obter e manter as informações atualizadas de seus contatos pode ser algo muito importante para qualquer negócio. O canal WhatsApp já [traz algumas informações por padrão](https://help.blip.ai/docs/en/channels/whatsapp/funcionalidades-do-whatsapp/#informac%C3%B5es-basicas-dos-usuarios) salvas nos contatos do bot: **Nome** e **Telefone**. No entanto, o número de telefone vem salvo em forma de `Identificador de Usuário`, o que pode causar algumas confusões.

![Exemplo de contato sem numero de telefone](/img/channels/whatsapp/como-salvar-numero-whatsapp-01.png)

Se você não quer ter que pedir o telefone para o seu contato através do fluxo conversacional, mas sim aproveitar da informação já enviada pelo canal, será necessário seguir alguns passos: **Criar um Script** e **Armazenar os dados no Contato**.

## Criando o Script

Este é um Script que irá receber o identificador do usuário e coletar apenas o número de telefone do usuário. Esse número será armazenado em uma variável chamada `Telefone`, que será posteriormente armazenada nas informações do contato.

Se antes de começar você preferir saber um pouco mais sobre o uso de scripts no Builder, [acesse este artigo](https://help.blip.ai/docs/en/builder/acao-executar-script/).

Para começar, criar um script (pode ser no primeiro bloco do bot) e colocar nas variáveis de entrada do Script a variável `contact.identity`, que é a variável que contém o identificador do usuário. Ela está no seguinte formato:

>############@wa.gw.msging.net

![Exemplo de variáveis de entrada](/img/channels/whatsapp/como-salvar-numero-whatsapp-02.png)

Em seguida, copie e cole, substituindo o script por este aqui abaixo:

```javascript
function run(identificador) {
    var telefoneUsuario = identificador.split("@")[0];
    return telefoneUsuario;
}
```

Perceba que o script recebe um `identificador` e retorna um `telefoneUsuario`.

Lembre-se de salvar de salvar o retorno em uma variável (`telefoneUsuario`, por exemplo), pois é com ela que iremos salvar o telefone nas informações do contato.

![Exemplo de salvamento de retorno script](/img/channels/whatsapp/como-salvar-numero-whatsapp-03.png)

## Armazenando o número no Contato

Agora, já com o número de telefone salvo na variável `telefoneUsuario` vinda do passo acima, vamos criar uma ação de **Definir Contato**. [Clique aqui](https://help.blip.ai/docs/en/builder/salvando-informacoes-de-um-usuario/) caso você precise saber mais detalhes sobre essa ação e suas configurações.

Abaixo da Ação de **Executar Script**, crie uma ação de Definir Contato.

![Exemplo de ordem de ações](/img/channels/whatsapp/como-salvar-numero-whatsapp-04.png)

Na ação, defina no campo **Telefone** o valor da variável `telefoneUsuario`, dentro das chaves (`{{telefoneUsuario}}`)

![Exemplo de definir contato](/img/channels/whatsapp/como-salvar-numero-whatsapp-05.png)

Ao final, teremos no contato, agora, o número de telefone do WhatsApp dele.

![Contato com telefone](/img/channels/whatsapp/como-salvar-numero-whatsapp-06.png)

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>