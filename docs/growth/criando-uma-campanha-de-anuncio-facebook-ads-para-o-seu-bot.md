---
id: criando-uma-campanha-de-anuncio-facebook-ads-para-o-seu-bot
title: Criando uma campanha de anúncio (Facebook Ads) para o seu bot
sidebar_label: Criando uma campanha de anúncio (Facebook Ads) para o seu bot
---

O módulo *Growth* - do inglês crescimento, é o módulo da plataforma responsável por ajudar a aumentar, o número e o engajamento da base de usuários do seu bot. Através deste módulo, é possível buscar novos usuários ou chamar a atenção de usuários que não interagem com sua aplicação por algum tempo.

**Facebook Ads** é uma das ferramentas de *Growth* do BLiP*, responsável por gerenciar suas campanhas de anúncios do Facebook. A partir destas campanhas é possível buscar novos clientes para o seu bot, analisando não só os interesses de sua empresa como também o perfil dos usuários que já utilizam seu chatbot.

Os clientes impactados por sua campanha serão incentivados a clicarem em um botão que os leva para conversar diretamente com o bot, através do Facebook Messenger. Este processo é conhecido também como *Click to Messenger* - Clique para o Messenger. Para utilizar a ferramenta **Facebook Ads**, siga os passos abaixo:

## Pré-requisitos:

Antes de começar é preciso verificar se todos os pré-requisitos necessários para utilizar a ferramenta já foram atendidos, são eles:

1. Verifique se seu bot está publicado no canal Facebook Messenger
2. Verifique se você já tem uma conta de negócios no Facebook. Caso não tenha basta vincular sua conta do Facebook ao portal business [neste link](https://business.facebook.com/).
3. Adicione ao menos um método de pagamento em sua conta business do Facebook (cartão de crédito ou voucher de desconto, por exemplo).

## Criando sua primeira campanha:

Para criar sua primeira campanha de anúncio do Facebook siga os passos abaixo:

1. Acesse seu bot no portal do BLiP e escolha o módulo ***Growth*** clicando na opção mais módulos (representado pelo ícone de três pontos) no menu superior. Já no módulo ***Growth***, escolha a opção **Facebook Ads** no menu lateral esquerdo e clique no botão **Criar Campanha** (veja imagem abaixo).

![Criando sua primeira campanha](/img/growth/criando-uma-campanha-de-anuncio-facebook-ads-para-o-seu-bot-1.png)

2. Escolha o objetivo e dê um nome para sua campanha. Atualmente, apenas as campanhas para **Conquistar mais usuários** (através de clique para o Messenger) estão disponíveis.

![Escolhendo objetivo e nome para a campanha](/img/growth/criando-uma-campanha-de-anuncio-facebook-ads-para-o-seu-bot-2.png)

3. Defina a audiência da sua campanha de acordo com o seu objetivo. Esse é o momento de definir o que é essencial para você: volume de usuários **vs** qualidade da base.

![Definindo a audiência da campanha](/img/growth/criando-uma-campanha-de-anuncio-facebook-ads-para-o-seu-bot-3.png)

4. Agora, escolha qual será o orçamento da sua campanha. É possível definir um tempo de validade da campanha ou apenas o valor total do seu investimento.

![Escolhendo o orçamento da campanha](/img/growth/criando-uma-campanha-de-anuncio-facebook-ads-para-o-seu-bot-4.png)

5. Por fim, é necessário configurar o conteúdo do anúncio. Essa é a parte mais importante da sua campanha, afinal o que você definir nesta etapa será visualizado pelos clientes no Facebook.

![Configurando o conteúdo do anúncio](/img/growth/criando-uma-campanha-de-anuncio-facebook-ads-para-o-seu-bot-5.png)

Além de preencher a imagem e os dados do anúncio é possível analisar como ele aparecerá para os usuários tanto no *desktop* quando nos dispositivos móveis.

6. Após criada a campanha, o BLiP envia todas as informações para o Facebook. Você receberá uma notificação do Facebook, depois de alguns minutos, informando se seu anúncio foi aprovado ou não.

![Recebendo notificação do Facebook](/img/growth/criando-uma-campanha-de-anuncio-facebook-ads-para-o-seu-bot-6.png)

\* *Integração realizada em parceria com a **SugarAds**.*

## Iniciando uma conversa com o bot vindo de ADS
Quando o Messenger é aberto via ADS, uma mensagem do tipo *chatstate* é enviada ao bot, antes de qualquer outro *payload*. Ela tem como objetivo informar, via metadata:

* **messenger.source**: de onde o Messenger foi aberto, regularmente esse campo é igual a 'ADS';
* **messenger.type**: o tipo de interação com o Messenger, regularmente esse campo é igual a 'OPEN_THREAD';
* **messenger.ad_id**: o Id do AD;
* **messenger.ref**: a url do AD, caso ele seja externo ao Facebook.

Através da [execução do script](/docs/builder/acao-executar-script) abaixo, é possível extrair todos estes dados do metadata da mensagem, sendo necessário passar **input.message** como variável de entrada:

```javascript
    function run(message) {
        message = JSON.parse(message);
        if (message.type === 'application/vnd.lime.chatstate+json') {
            const metadata = message.metadata;
            const messengerMetadatas = { 
                'ref' : metadata['messenger.ref'],
                'source' : metadata['messenger.source'],
                'type' : metadata['messenger.type'],
                'adId' : metadata['messenger.ad_id'],
            };
            return JSON.stringify(messengerMetadatas);
        }
        return null;
    }
```

No entanto, caso você queria apenas ignorar o *chatstate* no início do fluxo do bot, é necessário apenas adicionar a condição de saída abaixo no bloco **'Início'**:

![](/img/growth/criando-uma-campanha-de-anuncio-facebook-ads-para-o-seu-bot-7.png)

Esta condição de saída fará um loop no bloco 'Início' caso a mensagem seja do tipo chatstate, esse loop terá apenas um iteração, porque apenas uma mensagem deste tipo é enviada no ínicio da conversa.
