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
    "hc/pt-br/categories/360000064412": "/docs/introduction/visao-geral-da-plataforma",
    "hc/pt-br/categories/360000024012": "/docs/introduction/visao-geral-da-plataforma",
    "hc/pt-br/categories/360000064372": "/docs/introduction/visao-geral-da-plataforma",
    "hc/pt-br/articles/360001204332": "/docs/ai/nlp/conceitos-basicos-nlp-e-ai",
    "hc/pt-br/articles/360001220551": "/docs/ai/nlp/importancia-de-ia-nlp-chatbots",
    "hc/pt-br/articles/360000662551": "/docs/ai/nlp/o-que-e-intencao",
    "hc/pt-br/articles/360000662451": "/docs/ai/nlp/o-que-e-entidade",
    "hc/pt-br/articles/360001206092": "/docs/ai/nlp/boas-praticas-para-criar-um-bom-modelo-nlp",
    "hc/pt-br/articles/360000661451": "/docs/api-sdks/facilitando-criacao-do-chatbot-atraves-extensoes",
    "hc/pt-br/articles/360000649332": "/docs/api-sdks/construcao-bot-atraves-api-sdk",
    "hc/pt-br/articles/360001919431": "/docs/channels/blip-chat/o-que-e-blip-chat",
    "hc/pt-br/articles/360000645292": "/docs/channels/blip-chat/tipos-de-autenticacao-chat",
    "hc/pt-br/articles/360001235352": "/docs/helpdesk/blipdesk/descricao-metricas-desk",
    "hc/pt-br/articles/360001214291": "/docs/helpdesk/blipdesk/visao-geral-desk",
    "hc/pt-br/articles/360000664031": "/docs/general/chatbots-e-a-importancia-contexto",
    "hc/pt-br/articles/360000697731": "/docs/builder/visao-geral-variaveis",
    "hc/pt-br/articles/360000697411": "/docs/builder/o-que-sao-blocos-de-controle",
    "hc/pt-br/articles/360000678432": "/docs/builder/o-que-e-um-bloco-de-conteudo",
    "hc/pt-br/articles/360000933252": "/docs/builder/visao-geral-dos-tipos-de-conteudo",
    "hc/pt-br/articles/360000945711": "/docs/builder/visao-geral-das-condicoes-de-saida",
    "hc/pt-br/articles/360000933312": "/docs/builder/visao-geral-das-acoes",
    "hc/pt-br/articles/360001981892": "/docs/builder/o-que-e-um-bloco-de-atendimento",
    "hc/pt-br/articles/360015349612": "/docs/builder/o-que-e-um-weblink",
    "hc/pt-br/articles/360013043851": "/docs/builder/o-que-sao-listas-de-distribuicao",
    "hc/pt-br/articles/360000661911": "/docs/channels/workplace/o-que-e-workplace",
    "hc/pt-br/articles/360021108332": "/docs/general/politica-de-violacao-mensagens",
    "hc/pt-br/articles/360000912352": "/docs/introduction/visao-geral-da-plataforma",
    "hc/pt-br/articles/360001094371": "/docs/introduction/como-criar-um-bot-com-builder",
    "hc/pt-br/articles/360000677132": "/docs/builder/visao-geral-do-builder",
    "hc/pt-br/articles/360000663411": "/docs/analytics/integracao-ferramentas-analytics",
    "hc/pt-br/articles/360021627631": "/docs/analytics/blip-analytics/entendendo-diferentes-tipos-msg",
    "hc/pt-br/articles/360000695391": "/docs/analytics/blip-analytics/descricao-metricas-blip",
    "hc/pt-br/articles/360000620372": "/docs/analytics/blip-analytics/o-que-sao-usuarios-unicos",
    "hc/pt-br/articles/360009004831": "/docs/router/hierarquia-bots-subbots",
    "hc/pt-br/articles/360000648512": "/docs/api-sdks/utilizando-textc-construir-conversa",
    "hc/pt-br/articles/360021505232": "/docs/general/central-notificacoes",
    "hc/pt-br/articles/360000251732": "/docs/general/level-up/level-up-0-lancamento-oficial-do-blip",
    "hc/pt-br/articles/360003901911": "/docs/general/level-up/level-up-1-blip-desk",
    "hc/pt-br/articles/360003876092": "/docs/general/level-up/level-up-2-blip-chat",
    "hc/pt-br/articles/360004134312": "/docs/general/level-up/level-up-3-checklist-de-ia",
    "hc/pt-br/articles/360015219331": "/docs/general/level-up/level-up-4-blip-desk-2",
    "hc/pt-br/articles/360015191371": "/docs/general/level-up/level-up-5-whatsapp",
    "hc/pt-br/articles/360018059512": "/docs/general/level-up/level-up-6-templates-tags-e-biblioteca-de-variaveis",
    "hc/pt-br/articles/360018567872": "/docs/general/level-up/level-up-7-dialogflow",
    "hc/pt-br/articles/360020873311": "/docs/general/level-up/level-up-8-blip-growth",
    "hc/pt-br/articles/360028454252": "/docs/general/level-up/level-up-9-marcos-de-2018",
    "hc/pt-br/articles/360028760411": "/docs/general/level-up/level-up-10-ferramenta-de-debug",
    "hc/pt-br/articles/360028760491": "/docs/general/level-up/level-up-11-comemoracao-de-um-ano-mais-caso-mundiale",
    "hc/pt-br/articles/360028454592": "/docs/general/level-up/level-up-12-botanalytics",
    "hc/pt-br/articles/360028760571": "/docs/general/level-up/level-up-13-blip-ideas",
    "hc/pt-br/articles/360004024012": "/docs/growth/obtendo-o-numero-de-usuarios-afetados-por-um-broadcast",
    "hc/pt-br/articles/360019263231": "/docs/ai/nlp/como-configurar-watson",
    "hc/pt-br/articles/360017477712": "/docs/ai/nlp/como-configurar-dialogflow",
    "hc/pt-br/articles/360004100571": "/docs/ai/nlp/como-exportar-base-conhecimento",
    "hc/pt-br/articles/360031480811": "/docs/ai/nlp/importar-modelo-de-intencoes-e-entidades-pre-existente-no-blip",
    "hc/pt-br/articles/360000646172": "/docs/ai/nlp/treinando-publicando-modelo-de-ia",
    "hc/pt-br/articles/360000646132": "/docs/ai/nlp/como-criar-uma-intencao",
    "hc/pt-br/articles/360000646072": "/docs/ai/nlp/como-criar-uma-entidade",
    "hc/pt-br/articles/360026219552": "/docs/ai/nlp/como-testar-modelo-nlp",
    "hc/pt-br/articles/360000662731": "/docs/ai/nlp/como-aprimorar-meu-modelo-de-inteligencia-artificial",
    "hc/pt-br/articles/360018079712": "/docs/analytics/chatbase/tratando-eventos-not-handled-sessionFlow-chatbase",
    "hc/pt-br/articles/360000662931": "/docs/introduction/visao-geral-da-plataforma",
    "hc/pt-br/articles/360008085571": "/docs/api-sdks/como-encontrar-a-api-key-do-meu-bot",
    "hc/pt-br/articles/360000648072": "/docs/api-sdks/criando-um-bot-para-receber-feeds-no-messenger",
    "hc/pt-br/articles/360000647992": "/docs/api-sdks/criando-um-bot-para-busca-de-imagens-no-bing",
    "hc/pt-br/articles/360000647952": "/docs/api-sdks/criando-um-chatbot-curriculo-usando-api-http",
    "hc/pt-br/articles/360000644452": "/docs/api-sdks/sdk-csharp-com-suporte-a-dotnet-core",
    "hc/pt-br/articles/360000660991": "/docs/api-sdks/sdk-csharp-criando-uma-lista-de-distribuicao-de-conteudo",
    "hc/pt-br/articles/360000643992": "/docs/api-sdks/sdk-csharp-armazenando-o-ultimo-acesso-de-um-usuario",
    "hc/pt-br/articles/360021373912": "/docs/channels/blip-chat/customizando-o-blip-chat-widget-com-css",
    "hc/pt-br/articles/360016655731": "/docs/channels/blip-chat/permitir-envio-de-arquivos-blip-chat",
    "hc/pt-br/articles/360006554572": "/docs/channels/blip-chat/adicionar-blip-chat-site-wordpress",
    "hc/pt-br/articles/360006516852": "/docs/channels/blip-chat/adicionar-blip-chat-site-wix",
    "hc/pt-br/articles/360002935391": "/docs/channels/blip-chat/adicionando-push-notification-blip-chat-android",
    "hc/pt-br/articles/360000662031": "/docs/channels/blip-chat/customizacoes-disponiveis-blip-chat",
    "hc/pt-br/articles/360000644612": "/docs/channels/blip-chat/adicionar-bot-site-blip-chat",
    "hc/pt-br/articles/360000647032": "/docs/channels/blip-chat/como-adicionar-bot-em-app-android-utilizando-blip",
    "hc/pt-br/articles/360001920291": "/docs/channels/blip-chat/como-adicionar-bot-em-app-ios-utilizando-blip",
    "hc/pt-br/articles/360023813371": "/docs/helpdesk/blipdesk/utilizando-variav-respostas",
    "hc/pt-br/articles/360026425852": "/docs/helpdesk/blipdesk/como-filtrar-ticket-id",
    "hc/pt-br/articles/360029264692": "/docs/helpdesk/blipdesk/habilitando-uso-emoji-desk",
    "hc/pt-br/articles/360029276712": "/docs/helpdesk/liveagent/utilizar-live-agent-salesForce-atendimento-humano",
    "hc/pt-br/articles/360029589311": "/docs/helpdesk/blipdesk/definindo-alerta-tempo-resposta-atendente",
    "hc/pt-br/articles/360029587311": "/docs/helpdesk/blipdesk/configurar-alertas-inatividade-clientes-blip-desk",
    "hc/pt-br/articles/360001197672": "/docs/helpdesk/blipdesk/como-realizar-um-atendimento-atraves-do-blip-desk",
    "hc/pt-br/articles/360001215891": "/docs/helpdesk/blipdesk/como-definir-regras-atendimento",
    "hc/pt-br/articles/360001197332": "/docs/helpdesk/blipdesk/gerenciamento-equipes",
    "hc/pt-br/articles/360001215251": "/docs/helpdesk/blipdesk/como-ativar-blip-desk-canal",
    "hc/pt-br/articles/360007448911": "/docs/builder/importando-o-fluxo-de-um-bot-no-builder",
    "hc/pt-br/articles/360015427252": "/docs/builder/criando-um-elemento-web-atraves-de-um-weblink-no-blip-chat",
    "hc/pt-br/articles/360008107331": "/docs/builder/verificar-se-existe-atendente-dispon%C3%ADvel-no-builder",
    "hc/pt-br/articles/360003980912": "/docs/builder/enviando-email-pelo-bot-atraves-do-builder",
    "hc/pt-br/articles/360000645052": "/docs/builder/proporcao-de-exibicao-de-imagens",
    "hc/pt-br/articles/360020718492": "/docs/builder/acao-processar-comando",
    "hc/pt-br/articles/360022985511": "/docs/builder/como-utilizar-debug-builder",
    "hc/pt-br/articles/360030893371": "/docs/builder/como-definir-um-tempo-limite-para-acoes-do-builder",
    "hc/pt-br/articles/360030557312": "/docs/builder/criando-acoes-condicionais",
    "hc/pt-br/articles/360030888831": "/docs/builder/definindo-acoes-globais",
    "hc/pt-br/articles/360030884931": "/docs/builder/expirando-sessao-usuarios-builder",
    "hc/pt-br/articles/360020287152": "/docs/builder/salvando-informacoes-de-um-usuario",
    "hc/pt-br/articles/360018345271": "/docs/introduction/visao-geral-da-plataforma",
    "hc/pt-br/articles/360017465132": "/docs/channels/whatsapp/enviar-notificacao-whatsapp-blip-api",
    "hc/pt-br/articles/360017464592": "/docs/channels/whatsapp/criando-solucao-atendimento-humano-whatsapp",
    "hc/pt-br/articles/360002964992": "/docs/channels/messenger/como-configurar-sua-propria-aplicacao-facebook",
    "hc/pt-br/articles/360000646332": "/docs/analytics/blip-analytics/criando-graficos-em-um-relatorio-customizado",
    "hc/pt-br/articles/360000644692": "/docs/channels/workplace/publicando-chatbot-no-workplace",
    "hc/pt-br/articles/360025264272": "/docs/management/como-encontrar-id-usuario",
    "hc/pt-br/articles/360000661491": "/docs/management/transcricao-conversas-contatos",
    "hc/pt-br/articles/360000663151": "/docs/management/como-marcar-contato-como-teste",
    "hc/pt-br/articles/360000661351": "/docs/management/configuracoes-avancadas-bot",
    "hc/pt-br/articles/360000661271": "/docs/management/gerenciando-permissoes-acesso-equipe",
    "hc/pt-br/articles/360018290172": "/docs/growth/criando-uma-campanha-de-anuncio-facebook-ads-para-o-seu-bot",
    "hc/pt-br/articles/360018325352": "/docs/growth/como-analisar-os-resultados-de-sua-campanha-de-anuncio-facebook-ads",
    "hc/pt-br/articles/360002965832": "/docs/analytics/chatbase/como-enviar-dados-chatbase",
    "hc/pt-br/articles/360000644092": "/docs/api-sdks/agendando-uma-mensagem-scheduler",
    "hc/pt-br/articles/360000661071": "/docs/api-sdks/texto-rotativo-spintax",
    "hc/pt-br/articles/360000661011": "/docs/api-sdks/event-track-sdk-csharp",
    "hc/pt-br/articles/360020500911": "/docs/analytics/webhook/enviando-dados-atraves-webhook",
    "hc/pt-br/articles/360020501031": "/docs/analytics/botanalytics/como-enviar-dados-botanalytics",
    "hc/pt-br/articles/360020239532": "/docs/analytics/dashbot/como-enviar-dados-dashbot",
    "hc/pt-br/articles/360008821172": "/docs/router/criando-bot-com-3-subbots",
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
