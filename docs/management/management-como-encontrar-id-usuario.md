---
id: management-como-encontrar-id-usuario
title: Como encontrar o identificador de um usuário
sidebar_label: Como encontrar o identificador de um usuário
---

Em alguns momentos, durante a construção de um bot, pode ser necessário realizar alguma operação que leva em consideração o identificador dos usuários que já tenham conversado com sua aplicação.

É possível encontrar o identificador de um usuário de várias formas:

* Através da API do BLiP ([clique aqui para saber como](https://docs.blip.ai/#get-contacts-with-paging));
* Utilizando a variável {{contact.identity}} do Builder ([clique aqui para saber mais](https://help.blip.ai/hc/pt-br/articles/360000697731--Builder-Vis%C3%A3o-geral-das-vari%C3%A1veis));
* Através do módulo de **Contatos** no portal do BLiP

Para acessar o identificador de um usuário através do portal acesse o seu bot, escolha o módulo **Contatos** e clique no usuário desejado. Você perceberá que o identificador do usuário aparecerá no final da URL no seu navegador, conforme imagem abaixo:

![Id do usuário na URL do navegador](/img/practice/contacts/contacts-como-encontrar-id-usuario-1.png)

Todo o texto localizado após a rota **.../users/** representa o identificador do usuário em questão. Neste exemplo o usuário Rafael Pacheco possui o identificador **\`1419130854872447@messenger<span>.</span>gw.msging.net\`**.

Para saber mais sobre como o identificador de um usuário é formado [clique aqui](https://docs.blip.ai/#addressing).
