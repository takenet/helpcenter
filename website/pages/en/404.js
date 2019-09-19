/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

/* Code to redirect old links to new links at Docusaurus
 * In order to know more about this workaround see
 * https://chillicream.com/blog/2018/11/07/docusaurus-docs-redirect
 * https://github.com/facebook/docusaurus/issues/248
 * 
 * TODO: Create a complete 404 page for links not present in the REDIRECT list 
 */

 class RedirectScript extends React.Component {
  render() {
      return (
          <script
              dangerouslySetInnerHTML={{
                  __html: `
function redirectURL(path) {
  console.log(path);
  const REDIRECT = {
    "hc/pt-br/categories/360000064412-Pr%C3%A1tica": "/docs/introduction/visao-geral-da-plataforma",
    "hc/pt-br/categories/360000024012-Geral": "/docs/introduction/visao-geral-da-plataforma",
    "hc/pt-br/categories/360000064372-Conceitos": "/docs/introduction/visao-geral-da-plataforma",
    "hc/pt-br/articles/360001204332-Conceitos-b%C3%A1sicos-para-utilizar-NLP-e-IA-em-chatbots": "/docs/ai/nlp/conceitos-basicos-nlp-e-ai",
    "hc/pt-br/articles/360001220551-Import%C3%A2ncia-de-IA-e-NLP-para-chatbots": "/docs/ai/nlp/importancia-de-ia-nlp-chatbots",
    "hc/pt-br/articles/360000662551-O-que-%C3%A9-inten%C3%A7%C3%A3o-": "/docs/ai/nlp/o-que-e-intencao",
    "hc/pt-br/articles/360000662451-O-que-%C3%A9-uma-entidade-": "/docs/ai/nlp/o-que-e-entidade",
    "hc/pt-br/articles/360001206092": "/docs/ai/nlp/boas-praticas-para-criar-um-bom-modelo-nlp",
    "hc/pt-br/articles/360000661451-Facilitando-a-cria%C3%A7%C3%A3o-de-seu-chatbot-atrav%C3%A9s-das-extens%C3%B5es": "/docs/api-sdks/facilitando-criacao-do-chatbot-atraves-extensoes",
    "hc/pt-br/articles/360000649332": "/docs/api-sdks/construcao-bot-atraves-api-sdk",
    "hc/pt-br/articles/360001919431-O-que-%C3%A9-o-BLiP-Chat-": "/docs/channels/blip-chat/o-que-e-blip-chat",
    "hc/pt-br/articles/360000645292-Tipos-de-autentica%C3%A7%C3%A3o-dos-usu%C3%A1rios-no-BLiP-Chat": "/docs/channels/blip-chat/tipos-de-autenticacao-chat",
    "hc/pt-br/articles/360001235352-Descri%C3%A7%C3%A3o-das-m%C3%A9tricas-do-BLiP-Desk": "/docs/helpdesk/blipdesk/descricao-metricas-desk",
    "hc/pt-br/articles/360001214291-Vis%C3%A3o-geral-do-BLiP-Desk": "/docs/helpdesk/blipdesk/visao-geral-desk",
    "hc/pt-br/articles/360000664031-Chatbots-e-a-import%C3%A2ncia-do-contexto": "/docs/general/chatbots-e-a-importancia-contexto",
    "hc/pt-br/articles/360000697731--Builder-Vis%C3%A3o-geral-das-vari%C3%A1veis": "/docs/builder/visao-geral-variaveis",
    "hc/pt-br/articles/360000697411--Builder-O-que-s%C3%A3o-blocos-de-controle-In%C3%ADcio-e-Exce%C3%A7%C3%A3o-": "/docs/builder/o-que-sao-blocos-de-controle",
    "hc/pt-br/articles/360000678432--Builder-O-que-%C3%A9-um-bloco-de-conte%C3%BAdo": "/docs/builder/o-que-e-um-bloco-de-conteudo",
    "hc/pt-br/articles/360000933252--Builder-Vis%C3%A3o-geral-dos-tipos-de-conte%C3%BAdo": "/docs/builder/visao-geral-dos-tipos-de-conteudo",
    "hc/pt-br/articles/360000945711--Builder-Vis%C3%A3o-geral-das-condi%C3%A7%C3%B5es-de-sa%C3%ADda": "/docs/builder/visao-geral-das-condicoes-de-saida",
    "hc/pt-br/articles/360000933312--Builder-Vis%C3%A3o-geral-das-a%C3%A7%C3%B5es": "/docs/builder/visao-geral-das-acoes",
    "hc/pt-br/articles/360001981892--Builder-O-que-%C3%A9-um-bloco-de-atendimento": "/docs/builder/o-que-e-um-bloco-de-atendimento",
    "hc/pt-br/articles/360015349612-O-que-%C3%A9-um-weblink-": "/docs/builder/o-que-e-um-weblink",
    "hc/pt-br/articles/360013043851-O-que-s%C3%A3o-listas-de-distribui%C3%A7%C3%A3o-": "/docs/builder/o-que-sao-listas-de-distribuicao",
    "hc/pt-br/articles/360000661911-O-que-%C3%A9-o-Workplace-": "/docs/channels/workplace/o-que-e-workplace",
    "hc/pt-br/articles/360021108332-Pol%C3%ADtica-de-viola%C3%A7%C3%A3o-de-mensagens-ativas-do-BLiP": "/docs/general/politica-de-violacao-mensagens",
    "hc/pt-br/articles/360000912352-Vis%C3%A3o-geral-da-plataforma": "/docs/introduction/visao-geral-da-plataforma",
    "hc/pt-br/articles/360001094371-Como-criar-um-bot-com-o-Builder-do-BLiP": "/docs/introduction/como-criar-um-bot-com-builder",
    "hc/pt-br/articles/360000677132-Vis%C3%A3o-geral-do-Builder": "/docs/builder/visao-geral-do-builder",
    "hc/pt-br/articles/360000663411-Integra%C3%A7%C3%A3o-com-ferramentas-de-analytics": "/docs/analytics/integracao-ferramentas-analytics",
    "hc/pt-br/articles/360021627631-Entendendo-os-diferentes-tipos-de-mensagem-do-BLiP": "/docs/analytics/blip-analytics/entendendo-diferentes-tipos-msg",
    "hc/pt-br/articles/360000695391-Descri%C3%A7%C3%A3o-das-m%C3%A9tricas-geradas-pelo-BLiP": "/docs/analytics/blip-analytics/descricao-metricas-blip",
    "hc/pt-br/articles/360000620372-O-que-s%C3%A3o-usu%C3%A1rios-%C3%BAnicos-do-BLiP": "/docs/analytics/blip-analytics/o-que-sao-usuarios-unicos",
    "hc/pt-br/articles/360009004831-Hierarquia-ou-arquitetura-de-bots-e-subbots": "/docs/router/hierarquia-bots-subbots",
    "hc/pt-br/articles/360000648512-Utilizando-o-Textc-para-construir-uma-conversa-contextual": "/docs/api-sdks/utilizando-textc-construir-conversa",
    "hc/pt-br/articles/360021505232-Central-de-notifica%C3%A7%C3%B5es": "/docs/general/central-notificacoes",
    "hc/pt-br/articles/360000251732-LevelUp-0-Lan%C3%A7amento-oficial-do-BLiP-": "/docs/general/level-up/level-up-0-lancamento-oficial-do-blip",
    "hc/pt-br/articles/360003901911-LevelUp-1-BLiP-Desk": "/docs/general/level-up/level-up-1-blip-desk",
    "hc/pt-br/articles/360003876092-LevelUp-2-BLiP-Chat": "/docs/general/level-up/level-up-2-blip-chat",
    "hc/pt-br/articles/360004134312-LevelUp-3-Checklist-de-IA": "/docs/general/level-up/level-up-3-checklist-de-ia",
    "hc/pt-br/articles/360015219331-LevelUp-4-BLiP-Desk-2-0": "/docs/general/level-up/level-up-4-blip-desk-2",
    "hc/pt-br/articles/360015191371-LevelUp-5-WhatsApp": "/docs/general/level-up/level-up-5-whatsapp",
    "hc/pt-br/articles/360018059512-LevelUp-6-Templates-tags-e-biblioteca-de-vari%C3%A1veis": "/docs/general/level-up/level-up-6-templates-tags-e-biblioteca-de-variaveis",
    "hc/pt-br/articles/360018567872-LevelUp-7-Dialogflow": "/docs/general/level-up/level-up-7-dialogflow",
    "hc/pt-br/articles/360020873311-LevelUp-8-BLiP-Growth": "/docs/general/level-up/level-up-8-blip-growth",
    "hc/pt-br/articles/360028454252-LevelUp-9-Marcos-de-2018": "/docs/general/level-up/level-up-9-marcos-de-2018",
    "hc/pt-br/articles/360028760411-LevelUp-10-Ferramenta-de-Debug": "/docs/general/level-up/level-up-10-ferramenta-de-debug",
    "hc/pt-br/articles/360028760491-LevelUp-11-Comemora%C3%A7%C3%A3o-de-1-ano-Case-Mundiale": "/docs/general/level-up/level-up-11-comemoracao-de-um-ano-mais-caso-mundiale",
    "hc/pt-br/articles/360028454592-LevelUp-12-BotAnalytics": "/docs/general/level-up/level-up-12-botanalytics",
    "hc/pt-br/articles/360028760571-LevelUp-13-BLiP-Ideas": "/docs/general/level-up/level-up-13-blip-ideas",
    "hc/pt-br/articles/360004024012-Obtendo-o-n%C3%BAmero-de-usu%C3%A1rios-afetados-por-um-broadcast-": "/docs/growth/obtendo-o-numero-de-usuarios-afetados-por-um-broadcast",
    "hc/pt-br/articles/360019263231-Como-configurar-o-Watson-Assistant-como-um-provedor-de-Intelig%C3%AAncia-Artificial": "/docs/ai/nlp/como-configurar-watson",
    "hc/pt-br/articles/360017477712-Como-configurar-o-DialogFlow-como-um-provedor-de-Intelig%C3%AAncia-Artificial": "/docs/ai/nlp/como-configurar-dialogflow",
    "hc/pt-br/articles/360004100571-Como-importar-exportar-uma-base-de-conhecimento": "/docs/ai/nlp/como-exportar-base-conhecimento",
    "hc/pt-br/articles/360031480811": "/docs/ai/nlp/importar-modelo-de-intencoes-e-entidades-pre-existente-no-blip",
    "hc/pt-br/articles/360000646172-Treinando-e-publicando-seu-modelo-de-intelig%C3%AAncia-artificial": "/docs/ai/nlp/treinando-publicando-modelo-de-ia",
    "hc/pt-br/articles/360000646132-Como-criar-uma-inten%C3%A7%C3%A3o": "/docs/ai/nlp/como-criar-uma-intencao",
    "hc/pt-br/articles/360000646072": "/docs/ai/nlp/como-criar-uma-entidade",
    "hc/pt-br/articles/360026219552": "/docs/ai/nlp/como-testar-modelo-nlp",
    "hc/pt-br/articles/360000662731": "/docs/ai/nlp/como-aprimorar-meu-modelo-de-inteligencia-artificial",
    "hc/pt-br/articles/360018079712-Tratando-eventos-not-Handled-no-relat%C3%B3rio-SessionFlow-do-Chatbase": "/docs/analytics/chatbase/tratando-eventos-not-handled-sessionFlow-chatbase",
    "hc/pt-br/articles/360000662931": "/docs/introduction/visao-geral-da-plataforma",
    "hc/pt-br/articles/360008085571-Como-encontrar-a-API-KEY-do-meu-bot-": "/docs/api-sdks/como-encontrar-a-api-key-do-meu-bot",
    "hc/pt-br/articles/360000648072--HTTP-Criando-um-bot-para-receber-feeds-no-Messenger": "/docs/api-sdks/criando-um-bot-para-receber-feeds-no-messenger",
    "hc/pt-br/articles/360000647992-Criando-um-bot-para-busca-de-imagens-no-BING": "/docs/api-sdks/criando-um-bot-para-busca-de-imagens-no-bing",
    "hc/pt-br/articles/360000647952-Criando-um-chatbot-curr%C3%ADculo-usando-API-HTTP": "/docs/api-sdks/criando-um-chatbot-curriculo-usando-api-http",
    "hc/pt-br/articles/360000644452-SDK-C-com-suporte-a-NET-Core": "/docs/api-sdks/sdk-csharp-com-suporte-a-dotnet-core",
    "hc/pt-br/articles/360000660991--SDK-C-Criando-uma-lista-de-distribui%C3%A7%C3%A3o-de-conte%C3%BAdo-": "/docs/api-sdks/sdk-csharp-criando-uma-lista-de-distribuicao-de-conteudo",
    "hc/pt-br/articles/360000643992--SDK-C-Armazenando-o-%C3%BAltimo-acesso-de-um-usu%C3%A1rio": "/docs/api-sdks/sdk-csharp-armazenando-o-ultimo-acesso-de-um-usuario",
    "hc/pt-br/articles/360021373912-Customizando-o-BLiP-Chat-Widget-atrav%C3%A9s-de-CSS": "/docs/channels/blip-chat/customizando-o-blip-chat-widget-com-css",
    "hc/pt-br/articles/360016655731-Permitir-envio-de-arquivos-no-BLiP-Chat": "/docs/channels/blip-chat/permitir-envio-de-arquivos-blip-chat",
    "hc/pt-br/articles/360006554572-Adicionar-o-BLiP-Chat-em-um-site-Wordpress": "/docs/channels/blip-chat/adicionar-blip-chat-site-wordpress",
    "hc/pt-br/articles/360006516852-Adicionar-o-BLiP-Chat-em-um-site-Wix": "/docs/channels/blip-chat/adicionar-blip-chat-site-wix",
    "hc/pt-br/articles/360002935391-Adicionando-push-notification-no-BLiP-Chat-Android": "/docs/channels/blip-chat/adicionando-push-notification-blip-chat-android",
    "hc/pt-br/articles/360000662031-Customiza%C3%A7%C3%B5es-dispon%C3%ADveis-no-BLiP-Chat": "/docs/channels/blip-chat/customizacoes-disponiveis-blip-chat",
    "hc/pt-br/articles/360000644612-Como-adicionar-um-bot-em-um-site-utilizando-o-BLiP-Chat-": "/docs/channels/blip-chat/adicionar-bot-site-blip-chat",
    "hc/pt-br/articles/360000647032": "/docs/channels/blip-chat/como-adicionar-bot-em-app-android-utilizando-blip",
    "hc/pt-br/articles/360001920291": "/docs/channels/blip-chat/como-adicionar-bot-em-app-ios-utilizando-blip",
    "hc/pt-br/articles/360023813371-Utilizando-vari%C3%A1veis-nas-respostas-prontas-do-BLiP-Desk": "/docs/helpdesk/blipdesk/utilizando-variav-respostas",
    "hc/pt-br/articles/360026425852": "/docs/helpdesk/blipdesk/como-filtrar-ticket-id",
    "hc/pt-br/articles/360029264692-Habilitando-o-uso-de-emoji-para-o-Desk": "/docs/helpdesk/blipdesk/habilitando-uso-emoji-desk",
    "hc/pt-br/articles/360029276712-Integra%C3%A7%C3%A3o-SalesForce-Live-Agent-Como-utilizar-a-ferramenta-Live-Agent-do-SalesForce-para-atendimento-humano-": "/docs/helpdesk/liveagent/utilizar-live-agent-salesForce-atendimento-humano",
    "hc/pt-br/articles/360029589311-Definindo-alerta-para-tempo-de-resposta-de-um-atendente-no-BLiP-Desk": "/docs/helpdesk/blipdesk/definindo-alerta-tempo-resposta-atendente",
    "hc/pt-br/articles/360029587311-Como-configurar-alertas-de-inatividade-dos-clientes-no-BLiP-Desk": "/docs/helpdesk/blipdesk/configurar-alertas-inatividade-clientes-blip-desk",
    "hc/pt-br/articles/360001197672-Como-realizar-um-atendimento-atrav%C3%A9s-do-BLiP-Desk": "/docs/helpdesk/blipdesk/como-realizar-um-atendimento-atraves-do-blip-desk",
    "hc/pt-br/articles/360001215891-Como-definir-regras-de-atendimento-no-BLiP-Desk": "/docs/helpdesk/blipdesk/como-definir-regras-atendimento",
    "hc/pt-br/articles/360001197332-Gerenciando-equipes-de-atendimento-no-BLiP-Desk": "/docs/helpdesk/blipdesk/gerenciamento-equipes",
    "hc/pt-br/articles/360001215251-Como-ativar-o-BLiP-Desk-como-um-canal-de-atendimento": "/docs/helpdesk/blipdesk/como-ativar-blip-desk-canal",
    "hc/pt-br/articles/360007448911-Importando-o-fluxo-de-um-bot-no-Builder": "/docs/builder/importando-o-fluxo-de-um-bot-no-builder",
    "hc/pt-br/articles/360015427252-Criando-um-elemento-web-atrav%C3%A9s-de-um-weblink-no-BLiP-Chat": "/docs/builder/criando-um-elemento-web-atraves-de-um-weblink-no-blip-chat",
    "hc/pt-br/articles/360008107331-Verificar-se-existe-atendente-dispon%C3%ADvel-no-Builder": "/docs/builder/verificar-se-existe-atendente-dispon%C3%ADvel-no-builder",
    "hc/pt-br/articles/360003980912-Enviando-email-pelo-bot-atrav%C3%A9s-do-Builder": "/docs/builder/enviando-email-pelo-bot-atraves-do-builder",
    "hc/pt-br/articles/360000645052-Propor%C3%A7%C3%A3o-de-exibi%C3%A7%C3%A3o-de-m%C3%ADdias-imagem-menu-carousel-": "/docs/builder/proporcao-de-exibicao-de-imagens",
    "hc/pt-br/articles/360020718492-Nova-a%C3%A7%C3%A3o-Processar-Comando": "/docs/builder/acao-processar-comando",
    "hc/pt-br/articles/360022985511-Como-utilizar-a-ferramenta-de-debug-do-Builder": "/docs/builder/como-utilizar-debug-builder",
    "hc/pt-br/articles/360030893371-Como-definir-um-tempo-limite-timeout-para-a%C3%A7%C3%B5es-do-Builder": "/docs/builder/como-definir-um-tempo-limite-para-acoes-do-builder",
    "hc/pt-br/articles/360030557312-Criando-a%C3%A7%C3%B5es-condicionais": "/docs/builder/criando-acoes-condicionais",
    "hc/pt-br/articles/360030888831-Definindo-a%C3%A7%C3%B5es-globais-no-Builder": "/docs/builder/definindo-acoes-globais",
    "hc/pt-br/articles/360030884931-Expirando-a-sess%C3%A3o-dos-usu%C3%A1rios-do-Builder": "/docs/builder/expirando-sessao-usuarios-builder",
    "hc/pt-br/articles/360020287152-Salvando-informa%C3%A7%C3%B5es-de-um-usu%C3%A1rio": "/docs/builder/salvando-informacoes-de-um-usuario",
    "hc/pt-br/articles/360018345271": "/docs/introduction/visao-geral-da-plataforma",
    "hc/pt-br/articles/360017465132-Enviar-nofitica%C3%A7%C3%B5es-WhatsApp-via-API-do-BLiP": "/docs/channels/whatsapp/enviar-notificacao-whatsapp-blip-api",
    "hc/pt-br/articles/360017464592-Criando-uma-solu%C3%A7%C3%A3o-de-atendimento-humano-no-WhatsApp": "/docs/channels/whatsapp/criando-solucao-atendimento-humano-whatsapp",
    "hc/pt-br/articles/360002964992-Como-configurar-seu-appId-do-Facebook-em-um-bot-no-BLiP": "/docs/channels/messenger/como-configurar-sua-propria-aplicacao-facebook",
    "hc/pt-br/articles/360000646332": "/docs/analytics/blip-analytics/criando-graficos-em-um-relatorio-customizado",
    "hc/pt-br/articles/360000644692-Publicando-seu-chatbot-no-Workplace": "/docs/channels/workplace/publicando-chatbot-no-workplace",
    "hc/pt-br/articles/360025264272": "/docs/management/como-encontrar-id-usuario",
    "hc/pt-br/articles/360000661491": "/docs/management/transcricao-conversas-contatos",
    "hc/pt-br/articles/360000663151-Como-marcar-um-contato-como-usu%C3%A1rios-de-teste": "/docs/management/como-marcar-contato-como-teste",
    "hc/pt-br/articles/360000661351-Configura%C3%A7%C3%B5es-avan%C3%A7adas-do-bot": "/docs/management/configuracoes-avancadas-bot",
    "hc/pt-br/articles/360000661271-Gerenciando-permiss%C3%B5es-de-acesso-de-um-bot": "/docs/management/gerenciando-permissoes-acesso-equipe",
    "hc/pt-br/articles/360018290172-Criando-uma-campanha-de-an%C3%BAncio-Facebook-Ads-para-o-seu-bot": "/docs/growth/criando-uma-campanha-de-anuncio-facebook-ads-para-o-seu-bot",
    "hc/pt-br/articles/360018325352-Como-analisar-os-resultados-de-sua-campanha-de-an%C3%BAncio-Facebook-Ads-": "/docs/growth/como-analisar-os-resultados-de-sua-campanha-de-anuncio-facebook-ads",
    "hc/pt-br/articles/360002965832-Integra%C3%A7%C3%A3o-Chatbase-Como-enviar-dados-de-um-bot-para-o-Chatbase-": "/docs/analytics/chatbase/como-enviar-dados-chatbase",
    "hc/pt-br/articles/360000644092-Agendando-uma-mensagem-com-a-extens%C3%A3o-scheduler": "/docs/api-sdks/agendando-uma-mensagem-scheduler",
    "hc/pt-br/articles/360000661071-Texto-rotativo-com-spintax": "/docs/api-sdks/texto-rotativo-spintax",
    "hc/pt-br/articles/360000661011--SDK-C-Track-de-usu%C3%A1rios-que-utilizaram-uma-determinada-funcionalidade": "/docs/api-sdks/event-track-sdk-csharp",
    "hc/pt-br/articles/360020500911": "/docs/analytics/webhook/enviando-dados-atraves-webhook",
    "hc/pt-br/articles/360020501031": "/docs/analytics/botanalytics/como-enviar-dados-botanalytics",
    "hc/pt-br/articles/360020239532": "/docs/analytics/dashbot/como-enviar-dados-dashbot",
    "hc/pt-br/articles/360008821172-Criando-um-bot-router-com-3-subbots": "/docs/router/criando-bot-com-3-subbots",
    "hc": "/",    
  };
  var OLD_PATH_LIST = Object.keys(REDIRECT);
  for (var i = 0; i < OLD_PATH_LIST.length; i++) {
      const OLD_PATH = OLD_PATH_LIST[i];
      const NEW_URL = REDIRECT[OLD_PATH];
      if (path.indexOf(OLD_PATH) !== -1) {
          return NEW_URL;
      }
  }
  return '/';
}
const newURL =
  typeof window !== "undefined" && typeof window.location !== "undefined"
      ? redirectURL(window.location.href)
      : undefined;
if(newURL){
  location.replace(window.location.origin + newURL);
}
`
              }}
          />
      );
  }
}


class Hc extends React.Component {
  render() {
    return (
      <RedirectScript />
    );
  }
}

module.exports = Hc;
