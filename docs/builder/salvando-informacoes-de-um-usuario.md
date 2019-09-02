---
id: salvando-informacoes-de-um-usuario
title: Salvando informações de um usuário
sidebar_label: Salvando informações de um usuário
---

Uma das ações disponíveis em todos os blocos de conteúdo do BLiP é a ação de **Definir Contato**. Através dela é possível salvar informações, adiquiridas ao longo do fluxo de conversa, na **variável de contato** de um usuário. Todas as informações salvas na variável de contato de um usuário podem ser visualizadas em outros módulos do portal (por exemplo *Usuários*, *histórico*, *Desk*) e reaproveitadas ao longo do fluxo da conversa do seu bot.

Imagine por exemplo, que seu bot solicita ao usuário informações como **nome**, **email** e **telefone**. Para que esses dados estejam disponíveis em todo o portal, utilize a ação de definir contato, seguindos os passos abaixo:

1. Escolha um bloco, onde as variáveis que você deseja utilizar já existam, e crie uma ação de Definir Contato.

![Criando ação Definir Contato](/img/builder/builder-salvando-informacoes-de-um-usuario-1.png)

2. Insira os dados nos campos correspondentes. Atualmente, é possível definir os valores:

* **Nome**.
* **Email**.
* **Cidade**.
* **Telefone** (fixo ou móvel).
* **Gênero**.
* **Extras** - Propriedade genérica onde é possível adicionar qualquer propriedade customizada ao contexto do bot. (Exemplo: CPF, IdentificadorExterno e etc...).

![Inserindo os dados nos campos correspondentes](/img/builder/builder-salvando-informacoes-de-um-usuario-2.png)

3. Faça um teste com algum usuário, garantindo que a ação definida no passo anterior seja executada.

4. Abra o módulo de **Usuários**, acesse algum contato e verifique se as informações foram armazenadas corretamente. As mesmas informações estarão disponíveis também no Builder através das variáveis de contato (exemplo: {{contact.name}}, {{contact.phoneNumber}} e etc...).

![Informações do contato](/img/builder/builder-salvando-informacoes-de-um-usuario-3.png)
