---
id: arquitetura-do-whatsapp
title: Arquitetura do canal WhatsApp
sidebar_label: Arquitetura do canal WhatsApp
---

Diferente dos demais canais de mensageria, a arquitetura da solução WhatsApp Business API possui algumas particularidades. Para que seja possível receber e enviar mensagens, de forma segura, é necessário manter um serviço chamado **WhatsApp Business API Client** (também conhecido como **container**), continuamente conectado com a rede do WhatsApp.*


De forma bem simplificada, um container (**WhatsApp Business API Client**) emula o comportamento de um aplicativo WhatsApp para que seja possível criptografar e descriptografar as mensagens, além de armazenar as configurações associadas ao número da empresa e os arquivos de *medias* recebidos. Assim, para cada número oficial do WhatsApp é necessário possuir também um container.

O WhatsApp Business API Cliente é disponibilizado pelo próprio WhatsApp através de uma instância Docker, que possui uma série de pré requisitos para ser mantida e atualizada continuamente.*

Antes de continuar é preciso entender alguns conceitos associados a este canal. O entendimento desses conceitos é indispensável para a utilização completa do canal.

### WABA - WhatsApp Business Account (Conta da sua empresa criada BLiP no WhatsApp)

Como o próprio nome induz, a WABA - WhatsApp Business Account, será a conta oficial da sua empresa no WhatsApp Business API. Dentro de uma WABA é possível adicionar o(s) número(s) que serão ativados para a sua empresa.

### Número da sua empresa

Com a WABA criada e aprovada, o próximo passo para a ativação do WhatsApp Business API da sua empresa é a definição do nome e o número do contato no WhatsApp.

Toda WABA pode conter um ou mais números de WhatsApp. O número é o contato da sua empresa para o usuário final. O número de WhatsApp do BLiP, por exemplo, é +55 (31) 3349 6244, qualquer pessoa que possuir esse número na agenda do celular poderá entrar em contato com o bot do BLiP.

### Business Manager

Para que seja possível criar uma WABA, sua empresa deve possuir um perfil de negócios no Business Manager do Facebook. Para criar ou acessar o Business Manager da sua empresa acesse business.facebook.com.

Uma das informações necessárias para o processo de criação de uma WABA é o ID do Business Manager da sua empresa. Com esse número o BLiP poderá finalizar o processo de construção de uma WABA.

### Tipos de mensagem

O WhatsApp Business API possui dois tipos distintos de mensagens: **mensagens de resposta** (ou automáticas) e **notificações** (mensagens ativas ou Message Templates).

De forma geral, mensagem de resposta e notificações são conteúdos trafegados entre empresas e clientes. A diferença entre elas é o intervalo de tempo em relação à última interação feita pelo usuário com o bot (a empresa).

Caracteriza-se como mensagem de resposta qualquer conteúdo enviado do bot para o cliente em um intervalo inferior a 24 horas, levando em consideração a última mensagem enviada pelo cliente. Todas as mensagens de resposta são gratuitas.

A imagem abaixo representa o fluxo caracterizado como uma mensagem de resposta. A partir da última mensagem enviada do cliente para a empresa, inicia-se a contagem de 24 horas. Dentro deste período todas as mensagens enviadas da empresa para o cliente são consideradas **mensagens de resposta**.

​![Janela de 24 horas](/img/channels/whatsapp/arquitetura-do-whatsapp-1.png)<br>

Já as **notificações** para Whatsapp são <u>mensagens de texto</u> (markdown é suportado) enviadas da empresa para os usuários (clientes) em janelas superiores a 24 horas em relação à última entrada do usuário. Conforme demonstrado no fluxo da imagem abaixo, todas as notificações são cobradas.

Além disso, todas as notificações devem passar por um processo de validação manual feita pelo WhatsApp. Esse processo visa garantir que nenhuma mensagem promocional ou de SPAM será enviada para os clientes.

​![Envio de notificações whatsapp](/img/channels/whatsapp/arquitetura-do-whatsapp-2.png)<br>

### Níveis de verificação de um número

Diferente de uma conta tradicional do WhatsApp, todo número associado à uma WABA é reconhecido pelo WhatsApp como um **contato comercial**. Além disso, é possível ainda, em alguns casos, ser reconhecido como um **contato comercial verificado (oficial)**. A diferença está apenas no selo de verificado junto ao nome do contato, veja abaixo o exemplo de dois contatos (contato comercial e contato comercial verificado).

Apesar de não serem divulgados todos os critérios analisados para classificar uma conta como verificada (oficial), sabe-se que a notoriedade da marca detentora do contato é um fator preponderante para obter o tão desejado “selo verde”. O processo de verificação é realizado pelo próprio WhatsApp.

Na prática, não existe nenhum problema. Independentemente da classificação dada pelo WhatsApp — seja ela **“contato comercial”** ou **“contato comercial oficial”** — o parceiro poderá usufruir de todas as funcionalidades oferecidas pela API do WhatsApp.

Para saber mais sobre o processo de verificação de um número [clique aqui](https://take.net/blog/chatbots/verificacao-de-contas-no-whatsapp-requisitos/).

### Entendendo os conceitos de Opt-In

Antes de uma empresa começar a enviar qualquer notificação para seus clientes, no WhatsApp, é preciso entender muito bem o conceito de Opt-In (*optar pelo recebimento de mensagens*). Para enviar uma notificação no WhatsApp é preciso, inicialmente, garantir que o destinatário tenha aceitado, previamente, receber mensagens através deste canal.

O procedimento de solicitação dessa permissão pode ser realizado por qualquer canal que a empresa use para se comunicar com seus clientes, como websites, app, email, SMS, contratos e etc. Entretanto, a mensagem de opt-in precisa, necessariamente, ser clara e objetiva, garantindo que o usuário está ciente que receberá mensagens em seu número através do WhatsApp.

Caso a empresa opte por solicitar permissão do usuário através de uma interface web, algumas regras devem ser observadas. O usuário deve ser solicitado a optar por um **elemento visual** (caixa de seleção ou similar) exibido ao lado do nome e do logotipo do WhatsApp. O usuário deve ter controle sobre qual número é usado por meio de ação explícita (por exemplo, edição). Além disso, o idioma deve ser mostrado ao lado dos elementos da interface do usuário para explicar claramente quais informações serão recebidas e fazer referência específica a essas informações enviadas como mensagens no WhatsApp. Veja um exemplo na imagem abaixo.

![Opt-in whatsapp](/img/channels/whatsapp/arquitetura-do-whatsapp-3.png)<br>

Caso a empresa opte por solicitar permissão do usuário através de uma interface conversacional, será necessário deixar claro o tipo de informação que será enviado para um determinado número do WhatsApp. Veja um exemplo de texto de opt-in válido.

“Deseja receber alertas relacionados a sua conta, pelo WhatsApp, no número 553199999999?”

### Qualidade do número

Visando manter a qualidade do canal, o WhatsApp avalia, diariamente, a qualidade de todos os números utilizados no produto WhatsApp Business API. Essa informação é apresentada através de um indicador chamado **“Quality Rating”** que pode ser visualizado dentro do Business Manager.

A classificação de qualidade de um número é apresentada em 3 diferentes valores: Verde, Amarelo e Vermelho, representando um nível de qualidade Alto, Médio e Baixo, respectivamente.

Apesar de não divulgar as regras utilizadas para avaliar a qualidade dos números, o WhatsApp possui um guia de boas práticas para ajudar todas as empresas

* Garanta que as mensagens enviadas pelo seu contato seguem a [política de negócios do WhatsApp](https://www.whatsapp.com/legal/business-policy/?fbclid=IwAR2ZeLQV5x2myO8Udcw-pvoFqGnQR-eymyaxQ3RsVlzcoELTSDgufVGYXh8).
* Envie mensagens apenas para os usuários que optaram por receber mensagens da sua empresa.
* Garanta que as mensagens estão personalizadas e extremamente úteis para os seus usuários.
* Fique atento a frequência de mensagens enviadas pela sua empresa. Evite enviar muitas mensagens, para um mesmo usuário, em um dia.

### Limite de mensagens

Diferente dos canais tradicionais, o WhatsApp possui um limite no número de usuários que sua empresa pode interagir, através de notificações, em um dia. Isso inclui novas conversas e conversas existentes com os usuários. O limite de mensagens **NÃO limita o número de mensagens** que sua empresa pode enviar, **apenas o número de usuários** que você está tentando enviar.

A medida que o número de usuários impactados por uma empresa aumenta seus limites também aumentam. Diariamente, esses limites são revistos pelo WhatsApp.

* Camada 1: permite que sua empresa envie mensagens para clientes únicos de 1K em um período contínuo de 24 horas.
* Camada 2: permite que sua empresa envie mensagens para 10 milhões de clientes únicos em um período contínuo de 24 horas.
* Camada 3: permite que sua empresa envie mensagens para clientes únicos de 100K em um período contínuo de 24 horas.


*\* Todos os usuários dos planos Business e Enterprise do BLiP já possuem um container e não precisam se preocupar com a criação/gestão do mesmo.*


<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>