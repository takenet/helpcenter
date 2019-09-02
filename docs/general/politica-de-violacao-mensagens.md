---
id: politica-de-violacao-mensagens
title: Política de violação de mensagens ativas do BLiP
sidebar_label: Política de violação de mensagens ativas do BLiP
---
Visando dar uma boa experiência aos usuários, alguns canais de mensageria, como Facebook Messenger e WhatsApp por exemplo, impõem regras rígidas no envio de mensagens. Todas as regras definidas por cada canal são divulgadas através de documentos chamados de **Políticas de Privacidade**. O não cumprimento dessas regras pode acarretar em punições (por parte dos canais) que vão desde uma simples advertência até a suspensão do bot.

Em resumo, essas políticas dizem que empresas e desenvolvedores que usam esses canais para construção de bots, têm até 24 horas para responder a uma mensagem enviada por um usuário. O limite de 24 horas será reiniciado sempre que um usuário enviar uma mensagem ao bot. Essa regra é comumente conhecida como **Janela de Mensagem de 24 horas**. Pensando em facilitar o processo de gestão dos bots, o BLiP criou dois conceitos de mensagens: as <u>Mensagens de Resposta</u> e <u>Mensagens Ativas</u>.

## Mensagens de Respostas
São as mensagens enviadas pelo bot, em até 24 horas, após o recebimento de uma mensagem do cliente. Todas as mensagens definidas nos blocos de conteúdo do Builder são mensagens de resposta.

## Mensagens ativas

São as mensagens enviadas pelo bot, depois de 24 horas, após o recebimento de uma mensagem do cliente. Mensagens ativas podem ser tarifadas e devem ser enviadas seguindo algumas regras específicas por canal.

### Mensagens ativas no WhatsApp
Devem ser enviadas através de Messages Templates (ou modelos de mensagens) previamente aprovados pelo WhatsApp (Mensagens ativas no WhatsApp possuem tarifação).

### Mensagens ativas no Facebook Messenger
Devem ser enviadas através da Ferramenta Agendador (agendamento de mensagens) do módulo de Growth, ou através da API HTTP do do BLiP. Por padrão, o Agendador já adiciona os parâmetros especiais que identificam uma mensagem ativa, conforme solicitado pelo Facebook.

## Alerta de violação da Política de mensagens ativas do BLiP
Para reduzir as chances de que um bot seja punido por violar as políticas de mensagens ativas, o BLiP envia um email de alerta para o criador do bot informando que a política foi violada. Esse é apenas um alerta para que você fique atento e não cometa o erro novamente.

É muito comum violar a política de mensagens ativas em bots que possuem atendimento humano. Nesses casos, se um ticket de atendimento ficar em aberto por mais de 24 horas e o atendente enviar alguma mensagem para o cliente, uma mensagem de resposta será enviada após o tempo limite, acarretando assim na violação da política.<br><br><br>

*[1] [Veja todos os detalhes da política de privacidade do Messenger](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview)*  
*[2] [Veja todos os detalhes da política de privacidade do WhatsApp](https://developers.facebook.com/docs/whatsapp/guidelines)*