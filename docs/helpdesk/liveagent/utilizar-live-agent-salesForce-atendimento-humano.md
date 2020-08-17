---
id: utilizar-live-agent-salesForce-atendimento-humano
title: Configurando o atendimento via chat no Salesforce
sidebar_label: Configurando o atendimento via chat no Salesforce
---

O Salesforce é composto por vários aplicativos, que podem ou não ser habilitados pelo dono da conta. Alguns exemplos de aplicativos:

![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-01.png)

Um desses aplicativos habilita a funcionalidade de chat, ele se chama Chat (Live Agent) e está disponível nas edições: ([Link da documentação](https://help.salesforce.com/articleView?id=live_agent_enable.htm&amp;type=5))

- Performance Editions e na Developer Edition nas organizações criadas após junho de 2012
- Essentials, Unlimited e Enterprise com Service Cloud ou Sales Cloud.

Para identificar qual a edição do Salesforce clique [aqui](https://help.salesforce.com/articleView?id=000334996&amp;type=1&amp;mode=1) e acesse a documentação oficial.

Uma vez verificada a questão da edição do Salesforce e a disponibilidade do atendimento via chat pode-se partir para a configuração da funcionalidade.

Existem algumas formas de se configurar o atendimento via Chat no Salesforce, neste documento vamos tratar apenas da que utiliza o fluxo de configuração guiada.

## Via Fluxo de configuração guiada (**[**Guided Setup Flow**](https://help.salesforce.com/articleView?id=live_agent_lightning_experience_setup_flow.htm&amp;type=5)**)

**1**. Com o Salesforce aberto clique na engrenagem de configuração ![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-02a.png) no canto superior direito da tela e selecione Configuração de serviço (Service Setup).

> Obs: caso a conta seja recente, o ícone de engrenagem pode não ser exibido. Após validar a conta em seu e-mail, atualize a página do Salesforce

**2**. Agora clique em Visualizar tudo (View all)<br> ![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-02.png)<br>

**3**. Procure e escolha a opção Chat com clientes (Chat with Customers)<br> ![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-03.png)<br>

**4**. Avance pelo assistente de configuração<br> ![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-04.png)<br>

**5**. Informe o nome da fila, nomeie o grupo e selecione as pessoas.<br> ![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-05.png)<br>

**6**. Ajuste a carga de trabalho conforme as orientações <br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-06.png)<br>

**7**. Informe os sites, caso não existam, apenas preencha como na imagem<br> ![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-07.png)<br>

**8**. Selecione um tipo de objeto no Salesforce para vincular o chat<br> ![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-08.png)<br>

**9**. Apenas avance nessa etapa, para o nosso exemplo não será necessário<br> ![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-09.png)<br>

**10**. Aguarde a conclusão do assistente de configuração <br> ![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-10.png)<br>

**11**. O assistente oferece um script para incorporação do chat em algum site.<br> ![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-11.png)<br>

**12**. Por fim, conclua o processo <br> ![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-12.png)<br>

**13**. Para acessar o chat clique no menu de aplicativos e acesse Console de serviços, conforme o tipo de chat escolhido (passo 8) essa opção pode ser outra. <br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-14.png)<br>

**14**. No canto inferior esquerdo da página altere o status do atendente para Available <br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-15.png)<br>

15. Crie uma habilidade do Chat Agent

    **a**. Clique na engrenagem e em seguida em Configuração (Setup) <br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-16.png)  
    
    **b**. Insira Habilidades na busca rápida e clique em Habilidades (Skills).  
    
    **c**. Clique em Novo (New).  
    
    **d**. Na seção Informações básicas (Basic Information), insira esses detalhes.  
    1. **Nome**: Suporte online
    2. **Nome do desenvolvedor**: Web\_Support
    
    **e**. Na seção Atribuir perfis (Assign Profiles), adicione
    1. Personalizado: Perfil de suporte (Custom: Support Profile)
    2. Usuário padrão (Standard User)
    3. Administrador do sistema (System Administrator).
  
    **f**. Clique em Salvar (Save).

16. Crie uma configuração do Chat Agent (determinam as configurações para sua equipe de suporte)
  
    **a**. Clique na engrenagem e em seguida em Configuração (Setup) <br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-16.png)
  
    **b**. Insira Chat na busca rápida e selecione Configurações do Chat Agent (Chat Agent Configurations).
  
    **c**. Clique em Novo (New).
  
    **d**.  Na seção Informações básicas (Basic Information), insira esses detalhes.
    1. **Nome da configuração do Chat Agent**: Configuração de suporte online
    2. **Nome do desenvolvedor**: Web\_Support\_Configuration
  
    **e**.  Na seção Atribuir perfis (Assign Profiles), adicione 
    1. Custom: Support Profile (Personalizado: Perfil de suporte)
    2. Usuário padrão (Standard User)
    3. Administrador do sistema (System Administrator).
    
    **f**.  Clique em Save (Salvar).

**17**. Após esses passos o chat está configurado e disponível para o uso.

## Configurando o acesso ao chat no portal do BLiP

1. Com a tela do BLiP aberta acesse o menu de atendimento <br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-17.png)<br><br>

2. Conecte o canal de atendimento com a opção do Salesforce, caso tenha algum outro canal habilitado primeiro desabilite para poder prosseguir com a opção Salesforce <br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-18.png)<br><br>

3. Em configurações básicas precisamos preencher os parâmetros para configurar o Chat (Live agent) <br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-19.png)<br><br>
  
     **a**. Chat endpoint hostname ([Clique aqui e acesse a documentação](https://developer.salesforce.com/docs/atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup_get_settings.htm#:~:text=The%20unique%20ID%20of%20your,a%20call%20to%20the%20liveagent.))
    1. Para pegar esse parâmetro do Salesforce clique na engrenagem e em seguida em Configuração (Setup).
    
    2. Na busca rápida digite &quot;Configurações de chat&quot; <br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-20.png)
    
    3. Copie a URL do Endpoint com o protocolo e cole no campo do BLiP <br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-21.png)
  
    **b**. Organization ID ([Clique aqui e acesse a documentação](https://developer.salesforce.com/docs/atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup_get_settings.htm#:~:text=The%20unique%20ID%20of%20your,a%20call%20to%20the%20liveagent.))
    1. Para pegar esse parâmetro do Salesforce clique na engrenagem e em seguida em Configuração (Setup).
    
    2. Na busca digite: &quot;Informações sobre a empresa&quot;(Company Information) <br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-22.png)

    1. Em detalhes da organização copie o valor do campo ID da organização na salesforce.com <br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-23.png)

    **c**. Deployment ID ([Clique aqui e acesse a documentação](https://developer.salesforce.com/docs/atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup_get_settings.htm#:~:text=The%20unique%20ID%20of%20your,a%20call%20to%20the%20liveagent.))
    1. Para pegar esse parâmetro do Salesforce clique na engrenagem e em seguida em Configuração (Setup).
    2. Na busca digite: &quot;Implantações&quot;(Deployments) <br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-24.png)
    3. Clique no nome da Implantação (não em editar)<br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-25.png)

    1. Copie o Deployment ID do script (código de implantação) apresentado no final da página <br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-26.png)
  
    **d**. Button ID (principal) ([Clique aqui e acesse a documentação](https://developer.salesforce.com/docs/atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup_get_settings.htm#:~:text=The%20unique%20ID%20of%20your,a%20call%20to%20the%20liveagent.))
    1. Para pegar esse parâmetro do Salesforce clique na engrenagem e em seguida em Configuração (Setup).
    
    2. Na busca digite: &quot;Botões de chat e convites&quot;(Chat Buttons &amp; Invitations)<br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-27.png)
    
    3. Clique no nome do Botão (não em editar)<br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-28.png)

    1. Copie o Button ID do script (Código do botão de chat) apresentado no final da página <br><br>![](/img/helpdesk/utilizar-live-agent-salesForce-atendimento-humano-29.png)

## Limitações conhecidas:

- Chat - Live Agent disponível nas edições
- Performance Editions e na Developer Edition nas organizações criadas após junho de 2012
- Essentials, Unlimited e Enterprise com Service Cloud ou Sales Cloud.
- Não foi identificado onde o atendente trabalharia no caso da versão Classic
- O atendimento é encerrado se o atendente fechar a janela do Salesforce

## Possíveis desdobramentos e evoluções desse material:
- Como criar mais filas (botões)
- Customizar envio de campos pelo portal
- Como realizar transferências
- Como configurar sem o auxílio do assistente (Fluxo de configuração guiada)
- Configurando um chat do tipo Sales
- Configurando um chat do tipo Contato


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>