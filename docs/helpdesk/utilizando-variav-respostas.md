---
id: utilizando-variav-respostas
title: Utilizando variáveis nas respostas prontas do BLiP Desk
sidebar_label: Utilizando variáveis nas respostas prontas do BLiP Desk
---

Durante a criação de uma resposta pronta - mensagens pré-cadastradas para facilitar o trabalho dos atendentes no BLiP Desk, é possível utilizar variáveis para dar mais pessoalidade aos conteúdos.

É possível utilizar variáveis relacionadas ao <u>contato que está sendo atendido</u> e ao <u>atendente que está realizando o atendimento</u> no BLiP Desk.

As variáveis do contato que podem ser utilizadas estão dispostas no quadro abaixo:

| Nome da Variável  | Descrição   |
|---|---|
| contact<span>.</span>name  | O nome do contato.   |
| contact<span>.</span>address  | O endereço do contato.  |
| contact<span>.</span>city  | A cidade do contato.  |
| contact<span>.</span>email  | O email do contato.  |
| contact<span>.</span>source  | O nome do canal do contato.  |
| contact<span>.</span>phoneNumber  | O número de telefone do contato.  |
| contact<span>.</span>photoUri  | A URI da foto pública do contato.  |
| contact<span>.</span>cellPhoneNumber  | O número de celular do contato.  |
| contact<span>.</span>gender  | O gênero do contato.  |
| contact<span>.</span>timezone  | O timezone do contato relativo ao GMT.  |
| contact<span>.</span>culture  | A informação da cultura do contato (no formato IETF).  |
| contact<span>.</span>extras  | Um JSON genérico para armazenar pares de strings (chaves e valor).  |
| contact<span>.</span>identity  | A identidade do contato no formato name@domain.  |
| contact<span>.</span>group  | Indica o nome do grupo ao qual o usuário pertence.  |
*Obs.: Alguns canais não fornecem nenhuma informação do contato além de seu identificador, definido pela variável {{contact.identity}}. **Tenha certeza de que seu bot já coletou todas as informações que você deseja utilizar**.

Já as variáveis do atendente, que podem ser utilizadas,  estão dispostas no quadro abaixo:

| Nome da Variável  | Descrição   |
|---|---|
| agent<span>.</span>fullName  | O nome do agente.   |
| agent<span>.</span>email  | O email do agente.   |
| agent<span>.</span>phoneNumber  | O telefone do agente.   |
| agent<span>.</span>identity  | A identidade do agente no formato name@domain.   |
***Obs.: Tenha certeza de que o atendente já preencheu (no portal do BLiP) todas as informações relacionadas a sua conta antes de utilizar essas variáveis.**

## Criando uma resposta pronta com variáveis de contato e atendente

Acesse o módulo de Atendimento do seu bot e crie uma resposta pronta. Neste exemplo criaremos uma resposta do tipo texto, mas você pode criar respostas com qualquer tipo de conteúdo suportado pelo canal que seu bot está sendo utilizado.

![Módulo de atendimento](/img/helpdesk/desk-utilizando-variav-respostas-1.png)<br><br>

Antes de cadastrar uma resposta é necessário criar uma categoria. Para isso clique no botão **Criar Categoria** e defina um nome para a mesma. Crie agora uma resposta pronta definindo um título e o conteúdo.

![Criar categoria](/img/helpdesk/desk-utilizando-variav-respostas-2.png)
![Nomear categoria](/img/helpdesk/desk-utilizando-variav-respostas-3.png)<br><br>

Neste exemplo, a resposta pronta criada refere-se a um mensagem padrão para saudação dos usuários que pedem atendimento no bot.

A partir de agora o atendente já pode utilizar esta resposta dentro do BLiP Desk, conforme exibido na imagem abaixo:

![Utilizando resposta pronta dentro do BLiP Desk](/img/helpdesk/desk-utilizando-variav-respostas-4.png)<br><br>

Repare que o BLiP altera o valor das variáveis antes de realizar o envio da menssagem. Na imagem abaixo temos um exemplo de como o conteúdo chega no cliente final.

![Exemplo uso mensagem pronta BLiP Desk](/img/helpdesk/desk-utilizando-variav-respostas-5.png)
