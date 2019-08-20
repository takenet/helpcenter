---
id: chatbase-como-enviar-dados-chatbase
title: Integração Chatbase - Como enviar dados de um bot para o Chatbase?
sidebar_label: Integração Chatbase - Como enviar dados de um bot para um Chatbase?
---

Para enviar as informações geradas pelo seu bot, automaticamente, para o chatbase é preciso informar ao BLiP o API-KEY do seu bot no Chatbase. Siga os passos abaixo para realizar a integração.

## 1 - Criando um bot no Chatbase

Caso já possua um bot no Chatbase, vá para a etapa **2 - Adicionando API-KEY do Chatbase no BLiP**.
Se você ainda não criou um bot no Chatbase siga os passos abaixo:

* [Acesse o Chatbase](https://chatbase.com/)
* Acesse/Crie sua conta

![Criando uma conta no Chatbase](/img/analytics/chatbase/chatbase-como-enviar-dados-chatbase-1.png)<br><br>

* Clique no botão **Add a bot**

![Adicionando um bot no Chatbase](/img/analytics/chatbase/chatbase-como-enviar-dados-chatbase-2.png)<br><br>

* Informe os dados necessários e clique em **Continuar**

![Dados necessários chatbase](/img/analytics/chatbase/chatbase-como-enviar-dados-chatbase-3.png)<br><br>

* Copie a API-KEY do seu bot, você precisará desta informação no passo 2.

![Dado API-KEY chatbase](/img/analytics/chatbase/chatbase-como-enviar-dados-chatbase-4.png)<br><br>

* Finalize o processo de criação

## 2 - Adicionando API-KEY do Chatbase no BLiP

De posse da API-KEY do Chatbase, vá até o portal do BLiP, selecione o seu bot e clique em Integrações (conforme imagem abaixo).

![Portal do BLiP](/img/analytics/chatbase/chatbase-como-enviar-dados-chatbase-5.png)<br><br>

Escolha a integração **Chatbase** e clique na aba **Configuração**. Preencha o campo API-KEY com a chave gerada pelo Chatbase na etapa anterior e clique em salvar. Depois disso clique na chave **Ativar** (no campo superior direito) para ativar a integração.

![Configurando chatbase no BLiP](/img/analytics/chatbase/chatbase-como-enviar-dados-chatbase-6.png)<br><br>

Volte ao Builder, clique em configurações e selecione a opção Tracking Automático. A partir de agora, todas as mensagens (enviadas e recebidas) serão enviadas para o chatbase automaticamente.

![Opção tracking Builder](/img/analytics/chatbase/chatbase-como-enviar-dados-chatbase-7.png)<br><br>

## 3 - Testando a integração

Todas as mensagens enviadas e recebidas pelo bot são enviadas automaticamente para o Chatbase. Entretanto o Chatbase tem um delay (tempo para processamento das requisições) que pode variar de alguns minutos até 6 horas.

**Assim, após realizada a integração e enviadas algumas mensagens, pode ser necessário esperar algumas horas até que os dados estejam disponíveis no dashboard do Chatbase.**

**Obs.: Para saber mais sobre como gerar o relatório SessionFlow corretamente no Chatbase [veja este artigo](https://help.blip.ai/hc/pt-br/articles/360018079712).**
