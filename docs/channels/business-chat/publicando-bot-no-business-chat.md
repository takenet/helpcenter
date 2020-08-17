---
id: publicando-bot-no-business-chat
title: Como publicar seu Chatbot no Business Chat
title: Como publicar seu Chatbot no Business Chat
---

Para publicar seu bot no Apple Business Chat é preciso primeiro se [registrar no serviço](https://register.apple.com/business-chat) e criar uma conta da empresa. Após isso, faça *login* no seu [Registro do Apple Business](https://register.apple.com/business-chat).

1. Faça *login* com seu Apple Id.
2. Selecione sua **Conta do Business Chat**.

![](/img/channels/business-chat/publicando-bot-no-business-chat-1.png)<br>

3. Clique no botão **Add new**, no topo da página.

![](/img/channels/business-chat/publicando-bot-no-business-chat-2.png)<br>

4. Na próxima página, clique em **Get Started**.

![](/img/channels/business-chat/publicando-bot-no-business-chat-3.png)<br>

5. Aceite todos os **Termos e Condições**. Uma das condições é ler os **Tutoriais de Introdução: [Getting Started with Business Chat](https://register.apple.com/resources/business-chat/BC-GettingStarted.pdf), [Introduction](https://developer.apple.com/design/human-interface-guidelines/business-chat/overview/introduction/), [Business Chat Policies and Best Practices](https://register.apple.com/resources/business-chat/BC-Policies_and_Best_Practices.pdf)** e é bem importante fazê-lo.

![](/img/channels/business-chat/publicando-bot-no-business-chat-4.png)<br>

6. Clique em **Next**.

![](/img/channels/business-chat/publicando-bot-no-business-chat-5.png)<br>

7. Na aba **Account Applicant**, preencha todas as informações e clique em **Next**.

![](/img/channels/business-chat/publicando-bot-no-business-chat-6.png)<br>

8. Na seção seguinte selecione o tipo de conta. Se for uma **Conta de Teste**, clique em **Advanced** e selecione a opção **Internal Text Account**.

![](/img/channels/business-chat/publicando-bot-no-business-chat-7.png)<br>

9. Na seção **Account Contacts** defina o seu **Technical Contact**.

![](/img/channels/business-chat/publicando-bot-no-business-chat-8.png)<br>

10.  Escolha o BLiP como **Messaging Service Provider Platform**.

![](/img/channels/business-chat/publicando-bot-no-business-chat-9.png)<br>

11.  Se você escolheu uma **Internal Test Account**, você vai precisar informar os **Apple IDs** dos dispositivos que serão usados nos testes.

![](/img/channels/business-chat/publicando-bot-no-business-chat-10.png)<br>

12. Verique as informações registradas e envie para que a **Apple revise e aprove**.

![](/img/channels/business-chat/publicando-bot-no-business-chat-11.png)<br>

13. A aprovação costuma ser rápida (dentro de 5 minutos). Você pode verificar o status no final da página.

![](/img/channels/business-chat/publicando-bot-no-business-chat-12.png)<br>


## Criando e configurando o bot no BLiP para o Business Chat 

1. Crie um bot ou utilize um já existente. Vá em **Configurações > Configurações Avançadas**

![](/img/channels/business-chat/publicando-bot-no-business-chat-13.png)<br>

2. Clique no botão **Continuar** para prosseguir.

![](/img/channels/business-chat/publicando-bot-no-business-chat-14.png)<br>

3. Acesse sua conta no **Registro do Business Chat** e clique em **Test your Messaging Service Provider Connection**.

![](/img/channels/business-chat/publicando-bot-no-business-chat-15.png)<br>

4. Copie o **Business Chat Account ID**. 

> Caso você queira, clique no botão **Connect** para conectar ao BLiP **automaticamente** e pule os passos **5, 6 e 7**.

![](/img/channels/business-chat/publicando-bot-no-business-chat-16.png)<br>

5. De volta às configurações avançadas do BLiP, clique em **Adicionar** para criar uma nova configuração avançada.

![](/img/channels/business-chat/publicando-bot-no-business-chat-17.png)<br>

6. Preencha os espaços em branco com os valores:  
    * **Domínio:** postmaster@businesschat.gw.msging.net   
    * **Chave:** AccountExternalId   
    * **Valor:** seu *Business Chat Account ID*

![](/img/channels/business-chat/publicando-bot-no-business-chat-18.png)<br>

7. Salve a configuração.

8. Depois de todas as configurações feitas, garanta que você tenha publicado o seu fluxo. 


9.  Para testar o seu chatbot, acesse a URL **[https://bcrw.apple.com/urn:biz:{businessid}](https://bcrw.apple.com/urn:biz:)** no seu disposito Apple.

> Substitua {businessid} pelo seu **Business Chat Account ID**


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>