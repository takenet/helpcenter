---
id: publicando-canal-whatsapp-container-proprio
title: Configurando um container próprio no canal WhatsApp
sidebar_label: Como configurar um container próprio (WhatsApp Business API Client) do WhatsApp Business API no BLiP.
---

**IMPORTANTE:** *Este artigo é destinado **EXCLUSIVAMENTE** às empresas que já possuem um container do WhatsApp previamente configurado (através de outro Solution Provider) e desejam utilizar o BLiP.*

Se você já possui um container do WhatsApp configurado e gostaria de utilizar o BLiP para construir, gerir e evoluir o contato inteligente da sua empresa siga os passos descritos abaixo.

### Pré-requisitos

Antes de começar, garanta que sua empresa possui todas as informações abaixo:

* [Container do WhatsApp Business API](https://developers.facebook.com/docs/whatsapp/getting-started#setup) configurado e rodando;
* Número do contato no WhatsApp (**Ex. +553133496201**)
* Hostname do container - WhatsApp Business API Client (**Ex. yourcompany-wa\.msging\.net**)
* Porta do container (**Ex. 443**)
* Usuário do container (**Ex. admin**)
* Senha do container (**Ex. 123456**)
* Certificado VNAME do número do contato no WhatsApp (**Ex. CmEKHQiW9d6G2fWzAxIGZW50On**)
* WhatsApp Business Account Id da sua empresa.

### 1. Configurando o container (WhatsApp Business API Client)

De posse de todas as informações anteriores, acesse o seu container em um browser através do endereço do container (utilizando o protocolo https). Exemplo: **https:yourcompany-wa.msging.net**. Acesse a opção **Application Settings** e defina as configurações conforme listado abaixo:

* Webhooks URL

Esta é a configuração que define qual URL deverá ser utilizada pelo container para enviar as mensagens recebidas pela sua empresa. Por isso, você deverá configurar a URL do BLiP para recebimento de mensagens do WhatsApp. 

> https://wa.gw.msging.net/IDENTIFICADOR-BOT

Onde IDENTIFICADOR-BOT deverá ser substituido pelo identificador único do seu bot. Para encontrar o identificador de um bot vá até a tela HOME do mesmo.

* Media

Marque todas as opções na seção **Media**

* Messages

Marque todas as opções na seção **Messages**

![Imagem que exemplifica as configurações necessárias no Container](/img/channels/whatsapp/wa-business-api)<br>

### 2. Configurando o seu bot no BLiP

Na segunda etapa do processo é necessário realizar a configuração das informações do seu container no BLiP. Para isso siga os passos abaixo:

* Acesse o portal do BLiP, selecione seu bot e vá até a tela de configurações avançadas. Caso não saiba como acessar a tela de configurações avançadas [clique aqui](/docs/management/configuracoes-avancadas-bot/).

* Utilizando sempre o domínio `postmaster@wa.gw.msging.net`, adicione todas as chaves de configuração, conforme demonstrado na imagem abaixo.

- **AccountExternalId** - Identificador do seu bot. Mesma informação utilizada na URL de Webhook no passo anterior.
- **ContryCode** - Código do país do número utilizado no WhatsApp. Ex. 55 para o Brasil.
- **CurrentState** - Insira o valor `profile`
- **HasPincode** - Caso seu número possua um código de PinCode adicione `True`, caso contrário adicione `False`
- **Method** - Adicione o método de ativação utilizado em seu número: `voice` para ativação por voz e `sms` para ativação por SMS
- **Password** - Password do container
- **PhoneNumber** - Número associado ao seu container
- **SendMessageStatus** - Insira o valor `true`
- **UserName** - Usuário do container
- **ValidPhone** - Insira o valor `True`
- **VNameCertificate** - Certificado associado ao seu número do WhatsApp
- **WebAppHostName** - Hostname do container
- **WebAppPort** - Insira o valor `443`
- **WhatsAppBusinessAccountId** - WhatsApp Business Account Id da sua empresa

![Imagem que demonstra um exemplo de configurações de um container do WhatsApp no BLiP](/img/channels/whatsapp/advanced-settings-blip-wa)<br>

Após realizada todas as configurações no BLiP, garanta que seu bot está corretamente configurado e envie uma mensagem de teste através do WhatsApp para o número da sua empresa. Caso o processo de configuração tenha sido realizado com sucesso o bot responderá a mensagem conforme configurado.
