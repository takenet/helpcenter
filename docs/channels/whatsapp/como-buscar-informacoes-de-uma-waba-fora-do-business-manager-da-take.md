---
id: como-buscar-informacoes-de-uma-waba-fora-do-business-manager-da-take
title: Como buscar informações de uma WABA fora do Business Manager da Take
sidebar_label: Como buscar informações de uma WABA fora do Business Manager da Take
---

Se a sua [WABA](https://help.blip.ai/docs/en/channels/whatsapp/arquitetura-do-whatsapp/) (WhatsApp Business Account) está fora do Business Manager da Take aprenda como configurá-la no BLiP e ter acesso a funcionalidades como [modelos de mensagens](https://help.blip.ai/docs/en/channels/whatsapp/como-criar-aprovar-message-template/#criando-um-message-template-no-blip) para [notificações](https://help.blip.ai/docs/en/channels/whatsapp/enviar-notificacao-whatsapp-blip-api/), bem como consultar informações do número e da WABA.

## 1. Pré-requisitos

Antes de começar, tenha em mãos as informações necessárias para a configuração da sua waba. São elas:

- Business System User Access Token
- WhatsApp Business Account Id

Todas as informações anteriores, necessárias para configuração da sua waba, você encontra na página do Facebook Business Manager da sua empresa. 

Um aviso, apenas administradores do Business Manager terão acesso a esses dados.

## 2. Configurações do chatbot

De posse das informações necessárias, acesse o portal do BLiP, escolha o chatbot que está integrado ao WhatsApp e clique na aba configurações. Saiba mais como publicar um chatbot no WhatsApp [aqui](https://help.blip.ai/docs/en/channels/whatsapp/publicando-bot-no-whatsapp/).

​![Imagem que demonstra como acessar as configurações do bot](/img/channels/whatsapp/acessar-configuracoes-bot.png)<br>

## 3. Configurações avançadas do chatbot

Logo após entrar na aba de configurações do chatbot vá até o fim da página e clique em:

> “Clique aqui para acessar as configurações avançadas”

​![Imagem que demonstra como entrar nas configurações avançadas do bot](/img/channels/whatsapp/acessar-configuracoes-avancadas-bot.png)<br>

Ao clicar para acessar as configurações avançadas do chatbot abrirá na tela um pop-up perguntando se tem certeza que deseja continuar. Clique em “continuar”.

​![Imagem que demonstra como demonstra o pop-up de aviso da configuração avançada do bot](/img/channels/whatsapp/modal-configuracoes-avancadas-bot.png)<br>

**Obs.: Tenha em mente que alterações nas configurações avançadas do chatbot podem deixá-lo indisponível. Por isso tenha certeza de que os dados que quer alterar sejam exatamente os dados da sua waba.**

## 4. Business System User Access Token

Já na página de configurações avançadas do seu chatbot, clique no botão “adicionar” no canto superior direito da tela para inserir o número do Business System User Access Token da sua empresa.

​![Imagem que demonstra como adicionar o Access Token](/img/channels/whatsapp/adicionar-configuracao-avancada.png)<br>

Logo em seguida será exibido três campos: domínio, chave e valor. Você deve entrar com as seguintes informações:

- Domínio: postmaster@wa.gw.msging.net
- Chave: BusinessSystemUserAccessToken
- O campo de valor deve ser preenchido com o número da Business System User Access Token da sua empresa.

![Imagem que demonstra o Access Token adicionado](/img/channels/whatsapp/configuracoes-avancadas-adicionadas.png)<br>

Após preencher todos os campos tecle enter para salvar suas informações. 

**Atenção: Verifique se o seu bot já possui um número de Business System User Access Token antes de inserir esses dados. Caso o seu bot já tenha esse dado configurado você pode alterá-lo. Encontre-o na lista de configurações e clique no botão de editar (o ícone de cinza lápis ao lado) e insira o Business System User Access Token da sua empresa.**

## 5. WhatsApp Business Account Id

Essa é a última etapa do processo, você deve alterar o número da WhatsApp Business Account Id para o número da sua empresa.

A informação da WABA Id é a última da lista, encontre-a e clique no botão de editar que é o ícone cinza de lápis ao lado. Veja a imagem abaixo:

![Imagem que demonstra a localização do WABA Id](/img/channels/whatsapp/waba-id-editar.png)<br>

![Imagem que demonstra como editar o WABA Id](/img/channels/whatsapp/waba-id-editado.png)<br>

Após inserir a WABA Id da sua empresa tecle enter para salvar.

Pronto, a sua WABA já está configurada no BLiP. Para testar se tudo está funcionando corretamente, verifique se os modelos de mensagens criados na sua WABA são listados no BLiP na tela de message templates.
