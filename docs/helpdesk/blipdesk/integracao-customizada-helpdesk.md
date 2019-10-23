---
id: integracao-customizada-helpdesk
title: Integração customizada - Ferramentas de HelpDesks
sidebar_label: Integração customizada - Ferramentas de HelpDesks
---

## Contexto 
Atualmente, o BLiP está conectado a 2 ferramentas de atendimento humano o BLiP Desk (ferramenta nativa da plataforma) e o LiveAgent da SalesForce.

Entretanto, qualquer pessoa pode construir integrações customizadas com outras ferramentas. Este documento explica os passos a serem seguidos para a realização desta tarefa.

*Obs.: Para simplificar o texto, entenda que **ferramenta de atendimento humano customizada (ou simplesmente, ferramenta customizada)**, refere-se sempre a ferramenta que se deseja integrar ao BLiP. Alguns exemplos deste tipo de ferramenta: Zendesk, Service Now, Intercom, Omnize e etc.*

## Pré-requisitos
A solução descrita neste documento parte do princípio que a empresa que deseja realizar a integração possui pelo menos 3 bots no BLiP.

* Bot Router (Contato inteligente da empresa) - Bot responsável por receber e enviar mensanges para os clientes; Para entender sobre a arquitetura de bots e subbots e como criar um bot router [veja esse artigo](/docs/router/hierarquia-bots-subbots/).<br>

* Subbot 1 (Bot Principal) - Subbot criado no Builder (ou via SDK/HTTP), responsável pela automatização da conversa. Este subbot é responsável também por definir o momento em que o cliente será atendido por um ser humano. Para saber como criar um subbot principal [veja esse artigo](/docs/router/criando-bot-com-3-subbots).<br>

* Subbot 2 (Bot Atendimento Humano) - Subbot criado via SDK (ou HTTP), responsável pela conexão entre o BLiP e a ferramenta de atendimento humano customizada. Para saber como criar um subbot via SDK (ou HTTP) [clique neste link](https://docs.blip.ai/#using-sdk-csharp).<br>

## Visão macro
Essa solução prevê que todos os clientes, ao iniciarem uma conversa com o bot router, serão enviados para o Subbot 1 (Bot Principal) para a realização de um atendimento automatizado. Caso seja necessário, em algum momento o Subbot 1 (Bot Principal) fará o redirecionamento de um dado cliente para o atendimento humano.

Após realizado o redirecionamento, o Subbot 2 (Bot Atendimento Humano) inicia o processo de envio (e recebimento) das mensagens para a **ferramenta de atendimento humano customizada**. Este processo consiste na conversão de objetos JSON no formato LIME (entendido pelo BLiP) para objetos no formato suportado pela **ferramenta customizada**.

O desenho abaixo apresenta a visão macro do funcionamento desta solução:

![Visao macro do funcionamento desta solução](/img/helpdesk/integracao-customizada-helpdesk-1.png)

## Solução

Uma vez entendido o que precisa ser feito vamos aos passos que devem ser seguidos para solucionar o problema.

1. Redirecionando o cliente do Subbot 1 (Bot Principal) para o Subbot 2 (Bot Atendimento Humano)
    a. No Subbot 1 (Bot principal), crie um bloco de conteúdo que representa o momento da conversa em que o usuário será enviado para atendimento humano. Na aba **Conteúdos** remova todos os conteúdos.<br>

    ![](/img/helpdesk/integracao-customizada-helpdesk-2.png)<br><br>
    b. Na aba **Ações** crie uma ação de entrada do tipo <u>Redirecionar a um Serviço</u> ​e insira o nome do serviço associado ao Subbot2 (Bot Atendimento Humano). Note que esse é o nome escolhido no momento da definição dos subbots que compõem o Bot Router.

    ![](/img/helpdesk/integracao-customizada-helpdesk-3.png)<br><br>

2. Enviando mensagens para a ferramenta de atendimento humano customizada.<br>

    a. Acesse o código construido para a execução do Subbot 2 e faça com que todas as mensagens recebidas sejam devidamente enviadas para a ferramenta customizada. Para mais detalhes e exemplos de como receber mensagens em um bot SDK (ou HTTP) acesse a [documentação do BLiP](https://docs.blip.ai/#2-receiving-a-message).

    **Observações**:
    * Utilize a propriedade **FROM** dos envelopes de mensagens recebidos para identificar o cliente que está solicitando atendimento humano.<br>
    * Lembre-se de armazenar o estado dos clientes que já estão em atendimento. Você provavelmente precisará mapear a identificação do cliente no BLiP com a identificação do cliente na ferramenta customizada.<br>
  
3. Recebendo mensagens da ferramenta de atendimento humano customizada e enviando de volta aos clientes<br>
    a. Cada ferramenta trabalha de uma forma específica. Verifique a  documentação da ferramenta que deseja realizar a integração e entenda qual o processo para receber as respostas enviadas pelo atendente durante um atendimento humano.<br>
    b. Uma vez recebida a mensagem é hora de colocá-la no padrão das mensagens aceitas pelo BLiP ([clique aqui](https://docs.blip.ai/#content-types) para analisar todos os tipos de conteúdos suportados) e enviá-las de volta aos clientes. Para saber mais detalhes e ver exemplos de como enviar mensagens em um bot SDK (ou HTTP) acesse a [documentação do BLiP](https://docs.blip.ai/#3-sending-a-message).

    **Observação**:
    * Utilize a propriedade **TO** dos envelopes de mensagens que serão enviados para identificar o cliente que receberá a resposta do atendente. Lembre-se que o identificador do cliente está na propriedade **FROM** das mensagens recebidas no **passo 2**.<br>

4. Finalizando o atendimento de um cliente.  
    a. Em algum momento o atendimento humano será finalizado pelo atendente. Nesse momento é responsabilidade do Subbot 2 (Bot Atendimento Humano) realizar o redirecionamento do cliente de volta para o Subbot 1 (Bot Principal). Cada ferramenta possui uma forma específica de sinalizar o fim de um atendimento.

    Quando receber a sinalização de que um atendimento foi finalizado será necessário enviar uma mensagem do tipo Redirect, definindo qual o serviço será responsável por tratar o cliente a partir daquele momento. Para mais informações e ver exemplos de como enviar o conteúdo Redirect [clique aqui](https://docs.blip.ai/#redirect).
