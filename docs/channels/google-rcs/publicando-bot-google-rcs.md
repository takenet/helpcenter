---
id: publicando-bot-google-rcs
title: Como publicar seu Chatbot no Google RCS
sidebar_label: Como publicar seu Chatbot no Google RCS
---


O processo de publicação do seu bot no Business Messages começa com o preenchimento do seguinte formulário.
É de suma importância que seja feito o correto preenchimento das informações, pois elas serão utilizadas para criação do Agente da marca.

## Seção 1 - Google Business Messages

1 - Preencha o nome e o email do responsável pelo contato do bot na empresa. Esta pessoa será responsável pela liberação e posterior contato do Google para aprovação e publicação do bot no canal.

2 - Nome do agente. O nome que será exibido para o contato durante a interação no canal.

![Logo do agente](/img/channels/google-rcs/publicando-01.png)

3 - Url com logo que será exibido no agente. As seguintes especificações devem ser seguidas:
Distanciada igualmente a partir de todas as bordas;
As bordas devem ser cortadas dentro de um círculo bem espaçado. Link do template do círculo;
Resolução de 1024x1024px.

**Correto**:
![Logo do agente](/img/channels/google-rcs/publicando-02.png)
![Logo do agente](/img/channels/google-rcs/publicando-03.png)

---------------------------------

**Incorreto**:
![Logo do agente](/img/channels/google-rcs/publicando-04.png)
![Logo do agente](/img/channels/google-rcs/publicando-05.png)
 
4 - Mensagem de boas-vindas no canal. Será a mensagem enviada pelo canal assim que o usuário interagir com o botão de mensagem. 

> **Obs: A mensagem de boas-vindas aceita emojis e texto.**

![Logo do agente](/img/channels/google-rcs/publicando-06.png)

## Seção 2 - Botões de Boas Vindas

Junto com a mensagem de boas-vindas, é fornecido até 5 opções de se adicionar botões como possíveis respostas a uma primeira interação do usuário. Preencha esta seção caso deseje utilizar esta funcionalidade.

> **Obs**: Esta seção só será exibida caso seja selecionado sim para a opção de adicionar botões junto a mensagem de boas vindas na seção 1.

## Seção 3 - Configurações adicionais

1. Forneça a URL pública da política de privacidade da empresa.

2. A configuração inicial do agente da marca é feito a partir de um PLACE ID, que é uma identificação única de um local no Google.

3. Para descobrir o Place ID, acesse este [link](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder).

4. Na página que será aberta, insira o endereço ou localização que represente sua marca.

![Logo do agente](/img/channels/google-rcs/publicando-07.png)

5. Ao selecionar a localização, uma caixa com o Place ID será exibida abaixo do endereço. Informe o mesmo no formulário. 

> **Obs**: Caso existam várias localizações, selecione a que represente melhor as buscas e resultados dos usuários, neste instante só é permitido um único Place ID.

6. Informe o endereço fornecido para encontrar o Place ID fornecido no passo anterior.

## Seção 4 - Configurações de atendimento

A seção quatro trata das configurações do horário de atendimento via bot. Se esse for o caso. Selecione a opção que se adeque ao horário ou adicione uma nova.

> **Obs**: Esta seção só será exibida caso seja selecionada a opção sim para atendimento via bot na seção anterior.

Uma vez preenchido o formulário, nossa equipe vai proceder com o registro da marca e criação do agente no Business Messages. O prazo para retorno é de 2 semanas.

## Configurando o bot no BLiP para o Business Messages

1. Após criação do agente e retorno da nossa equipe, será encaminhado um e-mail contendo informações referentes ao agente e a marca, entre elas um **BrandID** e um **AgentID**.

2. Estes valores deverão ser inseridos nas configurações avançadas do bot. Para isso, crie um bot ou utilize um já existente. Vá em **Configurações** > **Configurações Avançadas**.

3. Clique no botão Continuar para prosseguir.<br><br>

    ![Logo do agente](/img/channels/google-rcs/publicando-08.png)

4. Clique em Adicionar para criar uma nova configuração avançada.<br><br>
    ![Logo do agente](/img/channels/google-rcs/publicando-08.png)

5. Preencha os espaços em branco com os valores:  
Domínio: **postmaster@businessmessages.gw.msging.net**  
Chave: **BrandId**  
Valor: **BrandId recebido no e-mail**  

6. Adicione uma segunda configuração com os seguintes valores:  
Domínio: **postmaster@businessmessages.gw.msging.net**  
Chave: **AgentId**  
Valor: **AgentId recebido no e-mail**  

As configurações devem se parecer com as da figura abaixo.<br><br>

![Logo do agente](/img/channels/google-rcs/publicando-10.png)

7. Feitas essas configurações o seu bot já está configurado para receber mensagens pelo canal.


## Como testar seu bot no canal

1. Para testar seu bot no canal, é necessário a utilização de um celular, seja Android ou IOS.

2. Primeiramente acesse este [endereço](http://business-messages-launcher.appspot.com) a partir do seu celular Android ou IOS.

![Logo do agente](/img/channels/google-rcs/publicando-11.png)

3. No e-mail, também serão encaminhados três links correspondentes aos pontos de entrada do canal. Os pontos de entrada representam os meios em que o usuário pode iniciar uma interação com o bot, podendo ser oriundo de uma busca orgânica, ou no Google Maps. Neste último caso, são disponibilizados os links para o acesso no Android. Sendo assim, eles representam um link único e possuem os seguintes nomes:
    * **SURFACE_ANDROID_WEB**
    * **SURFACE_ANDROID_MAPS**
    * **SURFACE_IOS_MAPS**

4. Copie e cole o link referente ao ponto de entrada selecionado na caixa do link aberto.

5. Uma janela com a conversa no canal se iniciará.

## Publicando seu bot em produção

1. Antes de publicar seu bot é importante ler os [termos de uso](https://developers.google.com/business-communications/support/aup/) e [regras de serviço](https://developers.google.com/business-communications/business-messages/support/tos) do Google para utilização do canal.

2. Para publicar seu bot, encaminhe um e-mail para business.communications@take.net, solicitando lançamento. 

3. Após encaminhar o e-mail, será feita solicitação de lançamento do seu bot no canal. Após receber e processar a solicitação, o Google encaminhará um email verificando a permissão de lançamento do seu bot no canal.

4. Verificado o email, será feito o lançamento em produção que pode levar até 72 horas.


## Publicando seu bot em várias localizações

Após o lançamento do bot no Business Messages, o Google faz a varredura e verificação de todos as localizações de sua marca, de acordo com o grupo e configurações da localização atual.

Para que seja feito o lançamento em várias localizações, é necessário que todas elas estejam reivindicadas e configuradas no mesmo grupo de localizações. É possível verificar essas configurações pelo próprio painel do google, neste [link](https://business.google.com/locations).

Uma vez configurada todas as localizações, encaminhe um e-mail para business.communications@take.net solicitando o lançamento nas outras localizações. Nossa equipe verificará a solicitação e disponibilidade.


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>