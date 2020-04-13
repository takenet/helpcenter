---
id: arquitetura-skype
title: Arquitetura do Skype
sidebar_label: Arquitetura do Skype
---

Para seu cliente se conectar com seu contato inteligente através do Skype, as mensagens que ele envia são recebidas e processadas pela arquitetura de servidores do Skype e da Microsoft, onde há um serviço chamado Bot Framework, que é um componente do Serviço de Bot do Azure. O Bot Framework é responsável por gerenciar as mensagens enviadas e recebidas entre você e seu cliente, com base no protocolo HTTP.

Após passar por essa arquitetura, as mensagens do seu cliente são enviadas para os servidores do BLiP, processadas e recebidas pelo seu bot. Essa lógica arquitetural é aplicada tanto na ida quanto na volta, para ambas as partes.

![](/img/channels/skype/arquitetura-skype-1.png)<br>

Para entender melhor sobre o Bot Framework Service e sua arquitetura, [acesse a documentação oficial](https://docs.microsoft.com/pt-br/azure/bot-service/bot-builder-basics?view=azure-bot-service-4.0&tabs=csharp).

\* **Observação:** Todos os usuários do BLiP podem integrar seu chatbot ao Skype.


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>