---
id: router-criando-bot-com-3-subbots
title: Criando um bot router com 3 subbots
sidebar_label: Criando um bot router com 3 subbots
---

Para exemplificar como criar uma arquitetura de bot router e subbots no BLiP, implementaremos o exemplo discutido no artigo [Hierarquia (ou arquitetura) de bots e subbots](/docs/router/router-hierarquia-bots-subbots).

**IMPORTANTE: Este é um tutorial extenso, por favor leia cuidadosamente o artigo teórico anterior e certifique-se de que entendeu todos os conceitos e o exemplo antes de continuar. ;)**

## Passo 1: Criando um bot de exemplo da Filial Brasil

1.1 - Acesse o portal do BLiP e clique em **Criar chatbot**  
1.2 - Escolha a opção **Criar do zero**  
1.3 - Dê um nome para o seu bot (por exemplo Filial Brasil)  
1.4 - Acesse o módulo **Builder**  
1.5 - Clique em Configurações  
1.6 - No menu lateral direito, escolha a opção **Versões > Importar Fluxo**

![Importar fluxo BLiP](/img/practice/router/router-criando-bot-com-3-subbots-1.png)<br>

1.7 - Faça download e importe o arquivo [filialbrasil.json](https://drive.google.com/file/d/1wonj9CWN9S_LBMWXwCwThOcVgt4AObtx/view?usp=sharing)  
1.8 - Clique em Publicar fluxo para deixar o bot disponível

## Passo 2: Criando um bot de exemplo da Filial EUA

2.1 - Acesse o portal do BLiP e clique em **Criar chatbot**  
2.2 - Escolha a opção **Criar do zero**  
2.3 - Dê um nome para o seu bot (por exemplo Filial EUA)  
2.4 - Acesse o módulo **Builder**  
2.5 - Clique em Configurações  
2.6 - No menu lateral direito, escolha a opção **Versões > Importar Fluxo**  

![Importar fluxo BLiP 2](/img/practice/router/router-criando-bot-com-3-subbots-2.png)<br>

2.7 - Faça download e importe o arquivo [filialeua.json](https://drive.google.com/file/d/14zU2aWkudtFsSkjUvRRPqrhsWaN_mgWp/view?usp=sharing)  
2.8 - Clique em Publicar fluxo para deixar o bot disponível

## Passo 3: Criando o subbot principal

3.1 - Acesse o portal do BLiP e clique em **Criar chatbot**  
3.2 - Escolha a opção **Criar do zero**  
3.3 - Dê um nome para o seu bot (por exemplo BotPrincipal)  
3.4 - Acesse o módulo **Builder**  
3.5 - Clique em Configurações  
3.6 - No menu lateral direito, escolha a opção **Versões > Importar Fluxo**  

![Importa fluxo BLiP 3](/img/practice/router/router-criando-bot-com-3-subbots-3.png)<br>

3.7 - Faça download e importe o arquivo [botprincipal.json](https://drive.google.com/file/d/1XP2X0iVLd_1xG2egns5ShRingp4Ffmih/view?usp=sharing)  
3.8 - Clique em **Publicar fluxo** para deixar o bot disponível  

## Passo 4: Criando o bot router

4.1 - Acesse o portal do BLiP e clique no botão **Criar router**

![Botão criar router BLiP](/img/practice/router/router-criando-bot-com-3-subbots-4.png)<br>

4.2 - Dê um nome para o bot router (por exemplo Filial Irlanda).  
4.3 - Publique o bot nos canais desejados

![Publicando bot em canais](/img/practice/router/router-criando-bot-com-3-subbots-5.png)<br>

## Passo 5: Configurando os serviços no bot router

5.1 - Acesse o bot router no portal  
5.1 - Clique no módulo de **Serviços**  
5.2 - Adicione o bot principal **BotPrincipal** definindo um nome para o serviço (por exemplo BotPrincipal). Lembre-se de marcá-lo como o subbot principal.  

![Serviçoes](/img/practice/router/router-criando-bot-com-3-subbots-6.png)<br>

5.3 - Adicione o subbot **Filial Brasil** definindo um nome para o serviço (por exemplo FilialBrasil)  

![Confirmar adição de serviço](/img/practice/router/router-criando-bot-com-3-subbots-7.png)<br>

5.4 - Adicione o subbot **Filial EUA** definindo um nome para o serviço (por exemplo FilialEUA)  

![Confirmar adição de serviço](/img/practice/router/router-criando-bot-com-3-subbots-8.png)<br>

## Passo 6: Testando o bot router

6.1 - Acesse o bot router no portal  
6.2 - Clique no botão para testar seu bot  

![Testar bot router](/img/practice/router/router-criando-bot-com-3-subbots-9.png)<br>

6.3 - Envie uma mensagem e escolha em qual língua deseja falar. Você perceberá que um dos subbots responderá, de acordo com a escolha feita.  

![Testar bot router - informando a língua](/img/practice/router/router-criando-bot-com-3-subbots-10.png)<br>

## Passo 7: Entendendo o redirecionamento entre os bots

7.1 - Acesse o **BotPrincipal** e clique em Builder.  
7.2 - Dê um duplo clique no bloco **Boas Vindas**. Perceba que este é um bloco simples que envia uma pergunta ao usuário sobre qual sua língua de preferência. As condições de saída deste bloco também são bem simples e apenas verificam a escolha do usuário para enviá-lo a dois diferentes blocos: **Redireciona Filial Brasil** e **Redireciona Filial EUA**.  

![Condições de saída para router](/img/practice/router/router-criando-bot-com-3-subbots-11.png)<br>

7.3 - Dê um duplo clique nos blocos Redireciona Filial **Brasil** e **Redireciona Filial EUA**. Acesse a aba de ações destes blocos e perceba que eles utilizam uma ação de Redirecionamento para um dos dois serviços definidos no bot router.  

![Redirecionando para serviços](/img/practice/router/router-criando-bot-com-3-subbots-12.png)<br>

7.4 - Acesse os **subbots Filial Brasil** e **Filial EUA** e acesse o módulo Builder.  
7.5 - Perceba que os dois bots funcionam exatamente da mesma forma, a única diferença é que o conteúdo de um é o português enquanto que o conteúdo do outro é o inglês. Acesse o Filial Brasil, por exemplo e dê um duplo clique no bloco **Boas Vindas**. O conteúdo deste bloco informa ao cliente que o bot conversa em português e pergunta ao usuário se ele deseja voltar ao BotPrincipal. As condições de saída deste bloco também são bem simples e basicamente analisam a escolha do usuário. Caso ele clique em Sim o usuário é enviado para o bloco **Retornar ao bot principal**, caso ele clique em não o usuário volta para o bloco **Boas Vindas**.

![Mensagem para retornar ao bot principal](/img/practice/router/router-criando-bot-com-3-subbots-13.png)<br>

![Condição de saída para bot principal](/img/practice/router/router-criando-bot-com-3-subbots-14.png)<br>

7.6 - Acesse agora o bloco **Retornar ao bot principal** e clique na aba **Ações**. Perceba que a única ação deste bloco é um **Redirecionamento** para o serviço **BotPrincipal**.  

![Condição de redirecionamento para bot principal](/img/practice/router/router-criando-bot-com-3-subbots-14.png)<br>

7.7 - Analise os passos 7.5 e 7.6 para o bot Filial EUA.  

## Passo 8: Testando os subbots (eles devem ser testados de forma isolada)

Para testar ou alterar algo em um subbot faça os testes de forma localizada em cada bot.

8.1 - Acesso o bot que deseja testar/alterar  
8.1 - Faça as alterações/testes desejados

Caso tenha alguma dúvida utilize nosso fórum <http://forum.blip.ai>.
