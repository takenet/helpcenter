---
id: publicando-bot-google-rcs
title: Como publicar seu Chatbot no Google RCS
sidebar_label: Como publicar seu Chatbot no Google RCS
---

O passo-a-passo da publicação do agente da marca no Google RCS deve ser realizada em conjunto com o seu CSM da TakeBlip. Algumas permissões são concedidas apenas à Google de parceiros credenciados, o que impossibilita a publicação do contato inteligente por conta própria.

> **ATENÇÃO:** O uso do Google RCS está restrito a algumas empresas. Siga os passos descritos neste artigo apenas se sua empresa possui acesso a este canal. Caso tenha interesse em utilizar o canal Google RCS entre em contato enviando um email para community@take.net.

Antes de iniciar o processo de publicação de um contato inteligente no canal Google RCS, verifique todos os pré-requisitos necessários.

## Configurando o seu contato inteligente no BLiP

Após configurado um número de teste, obter uma chave de acesso e as informações do agente ao Google através da Take Blip é preciso configurar seu contato inteligente (bot) no BLiP.

Acesse seu bot no BLiP, e vá para a tela de configurações avançadas. Caso não saiba como acessar as configurações avançadas do seu bot, [clique aqui](docs/en/management/configuracoes-avancadas-bot/).

Utilizando sempre o domínio `postmaster@googlercs.gw.msging.net`, adicione as chaves de configuração do RCS alterando os valores com os seus dados, conforme demonstrado na tabela abaixo.

| Domínio                            | Chave                 | Valor           |
| ---------------------------------- | --------------------- | --------------- |
| postmaster@googlercs.gw.msging.net | AccountExternalId     | CHAVE-ALEATORIA |
| postmaster@googlercs.gw.msging.net | RcsClientToken        | CLIENT-TOKEN    |
| postmaster@googlercs.gw.msging.net | ServiceCredentialJson | CREDENTIAL-JSON |

#
- **AccountExternalId** - Chave aleatória utilizada para identificar seu bot. Essa é a mesma informação utilizada na URL de PubSub durante a configuração do agente pela Take Blip.
- **RcsClientToken** - Token obtido durante a criação da chave do RCS.
- **ServiceCredentialJson** - Conteúdo do arquivo JSON obtido durante a criação da chave do RCS.

Após realizada todas as configurações anteriores, clique no botão **Verify**. Esta é a última etapa de configuração. Caso todos os passos tenham sido executados com sucesso, basta testar o funcionamento da sua aplicação.

**7.** Para testar o funcionamento do bot, acesse o aplicativo **Mensagens**, através do número de teste habilitado, e envie uma mensagem para o seu agente.


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>
