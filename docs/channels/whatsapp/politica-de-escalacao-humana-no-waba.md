---
id: politica-de-escalacao-humana-no-waba
title: Política de Escalação Humana no WhatsApp Business
sidebar_label: Política de Escalação Humana no WhatsApp Business
---

A necessidade de transbordo (direcionamento para um atendente humano) em atendimentos automatizados é parte da política do WhatsApp desde 2019 e sua inclusão será fiscalizada com mais rigor a partir do dia 30 de outubro de 2020. 

> **Aqueles que não estiverem de acordo com as diretrizes, terão a Classificação de Qualidade (Quality Rating) do seu número prejudicada, o que resultará na redução da quantidade de notificações e mensagens iniciadas pela empresa.**

## O que é

Com o intuito de promover boas experiências na interação entre pessoas e empresas na plataforma, a [Política do WhatsApp Business](https://www.whatsapp.com/legal/business-policy/?lang=pt_br) exige que seja fornecida pelo menos uma opção de “atendimento rápido, claro e direto com agentes humanos” no fluxo conversacional.

Para um contato de qualidade, a política instrui que a empresa:
	
"Mantenha um perfil do WhatsApp Business com informações de contato do suporte ao cliente, incluindo um ou mais dos seguintes dados: endereço de e-mail, endereço de website ou número de telefone. Mantenha todas as informações corretas e atualizadas. Você não deve se passar por outra empresa ou, de qualquer outra forma, enganar os clientes sobre a natureza de seus negócios."

A partir do dia 30 de outubro de 2020, o WhatsApp testará todos os fluxos e, se a opção de transbordo humano não for identificada, o indicador de qualidade (quality rating) do número será alterado para low, em vermelho. **Se após essa sinalização, a inconformidade com a política não for resolvida em sete dias, a quantidade de notificações e mensagens iniciadas pela empresa será restringida.**

​![Sinalização de indicador de qualidade](/img/channels/whatsapp/fiscalização-da-politica-de-escalação-humana-no-whatsapp-business.1.png)<br>

## O que fazer

O primeiro passo é garantir que todos os fluxos no WhatsApp tenham uma opção na qual seja possível falar diretamente com uma pessoa.

As opções são:
- redirecionamento para um agente humano
- um número de telefone válido
- um formulário de contato
- um email 
- redirecionamento para visita a loja física 

## Validações e indicações no fluxo

Para verificar se o fluxo está configurado da maneira correta dentro da plataforma, certifique-se de que haja uma validação de horário de atendimento para direcionamento para transbordo. 
Caso esteja no horário, o usuário será encaminhado para atendimento no Blip Desk. Caso esteja fora do horário de atendimento, o usuário deverá ser informado sobre isso, assim como o horário de atendimento disponível e também sobre outro canal de atendimento (por exemplo: e-mail, telefone da central, site, etc). 

​![Validações e indicações no fluxo](/img/channels/whatsapp/fiscalização-da-politica-de-escalação-humana-no-whatsapp-business.2.png)<br>

## Em caso de verificação incorreta

Se a opção de transbordo humano não for identificada e o número for penalizado incorretamente, abra um chamado no WABA para mostrá-lo.

Para abrir um chamado no [WABA](https://help.blip.ai/docs/en/channels/whatsapp/arquitetura-do-whatsapp/):

- Acesse https://business.facebook.com/
- Selecione o menu de ajuda
- Clique em “Entrar em contato com a equipe de suporte”

​![Abertura de chamado no WABA](/img/channels/whatsapp/fiscalização-da-politica-de-escalação-humana-no-whatsapp-business.3.png)<br>

Para saber mais detalhes sobre o canal WhatsApp, acesse a documentação oficial, clicando [neste link](https://developers.facebook.com/docs/whatsapp/overview).

## FAQ

#### A minha opção de transbordo pode redirecionar para um canal que autentica o usuário?

Não. Como o tester do Whatsapp não será um usuário da marca, ele poderá não conseguir finalizar o teste. 

#### Perguntas para captação de lead (nome, CPF, localização etc.) que ocorrem antes do transbordo, podem ser consideradas obstáculos para o atendimento?

O tester do Whatsapp não será um usuário da marca. Se você exige alguma informação para transferir o atendimento (evite CPF ou outros dados pessoais) e o usuário não fornecer, recomendamos que use uma mensagem de retorno informando outros canais de atendimento (email, telefone etc.).

#### Como eu posso saber se o motivo de sinalização do meu número é realmente esse?

O motivo da mudança na Classificação de Qualidade é exibido em detalhes no número sinalizado, na sua conta do WhatsApp Business. 

#### Posso redirecionar o usuário para uma fila de atendimento?

Recomendamos que o meio para que o usuário entre em contato seja imediato, ou com o menor tempo possível. Neste caso, filas em que o usuário poderá ficar horas e até mesmo desistir do atendimento, é importante oferecer também um outro meio de contato. 

#### Meu número foi penalizado. O que eu faço?

Se você verificou o seu fluxo e não está em conformidade com as diretrizes, implemente uma das opções de transbordo indicadas pelo WhatsApp e, assim que estiver disponível para os usuários, abra um chamado na sua conta do WhatsApp Business. Acesse https://business.facebook.com/, selecione o menu de ajuda e clique em “Entrar em contato com a equipe de suporte”.

#### Eu sei que existe uma opção de transbordo no meu fluxo, mas meu número foi penalizado mesmo assim. O que aconteceu e o que eu faço?

É provável que o WhatsApp não tenha identificado a opção de transbordo e o penalizou incorretamente. **Se você verificou o seu fluxo e está em conformidade com as diretrizes**, abra um chamado na sua conta do WhatsApp Business. Acesse https://business.facebook.com/, selecione o menu de ajuda e clique em “Entrar em contato com a equipe de suporte”.

#### Existe alguma indicação ou obrigatoriedade de qual ponto do fluxo ou momento que o cliente deve dar as opções de contato (transbordo) ou pode ser no ponto do fluxo que ele achar mais adequado?

A obrigatoriedade é de ter a opção clara e de fácil acesso ao usuário para escalar o atendimento para um humano. Exemplo: quando o usuário escrever, “falar com um humano”, o contato poderá entender e mostrar pra ele as informações necessárias. 

#### Atualmente o BOT direciona algumas opções para o Site, diretamente para a FAQ, perguntas frequentes, com finalização do atendimento neste canal. Há algum impacto?

Não há impacto. No entanto, isto não representa uma solução de transferência para humano. 

#### Algumas opções são direcionadas para o formulário de cadastro, sem possibilidade de transbordo para o humano. Esta situação se enquadra na opção “um formulário de contato”?

Sim. esta pode ser uma forma válida de fazer o contato direto com um humano, desde que o cadastro incida em um contato posterior com este usuário e que apenas dados que qualquer usuário possa fornecer sejam solicitados de forma obrigatória neste formulário.

#### No fluxo conversacional não tenho uma opção direta em menu para atendimento humano, ou seja, o transbordo ocorre se o usuário solicitar “falar com humano” ou se o BOT não compreender a mensagem do cliente. Alguma restrição?

Não há restrições. Mas é necessário que o usuário saiba de alguma maneira que esta opção existe. Do contrário, ele poderá não imaginar esta possibilidade durante a conversa com o Contato Inteligente. 

#### Opções com finalização no próprio Contato Inteligente, sem possibilidade de transbordo (Contato das Unidades) – Esta situação se enquadra na opção “redirecionamento para visita a loja física”?

Não. É importante deixar claro para o usuário que ele possui uma forma de contactar um humano. Finalizar o atendimento pelo Contato Inteligente não implica nisso.

#### Recebi o email sobre a Aplicação da Política de Escalação Humana do WhatsApp, mas não consigo verificar/adequar meu fluxo agora. Quanto tempo eu tenho?

Recomendamos que você verifique/adeque o seu fluxo o mais rápido possível. Dito isso, o WhatsApp iniciou a fiscalização com mais rigor no dia 30 de outubro de 2020 e, se identificada a inconformidade com a política, o número será sinalizado e, caso a classificação de qualidade não melhore nos próximos 7 dias, será imposto ao número um limite inferior de mensagens, como descrito na [documentação oficial do facebook](https://developers.facebook.com/docs/whatsapp/api/rate-limits).

#### Onde eu vejo a Classificação de Qualidade do meu número?

Você precisa acessar a sua conta do WhatsApp Business (https://business.facebook.com/), e selecionar Phone Numbers, no menu WhatsApp Manager. Nesse local você confere o status, a Classificação de Qualidade e o limite de mensagens do(s) seu(s) número(s).
