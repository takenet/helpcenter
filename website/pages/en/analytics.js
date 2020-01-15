const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = {
  "title": "Métricas e Analytics",
  "subtitle": "Analise os dados gerados em seu contato inteligente para entender o comportamento de seus clientes e definir metas de evolução.",
  "img": "/img/illustrations/ilustracao-categorias.svg",
  "from": "BLiP Help Center >",
  "session": "Áreas do BLiP",
  "session_url": "/blipareas",
  "here": "Métricas e Analytics",
  "intro": "Entender o que acontece, em tempo real, dentro de um contato inteligente é uma tarefa vital para qualquer empresa. Quantas mensagens, para quantos usuários e quais os eventos ocorreram são exemplos de métricas que devem ser acompanhadas continuamente. Veja nos artigos abaixo, como o BLiP pode ajudar nessa tarefa.",
  "cards": [
    {
      "title": "Descrição das métricas geradas pelo BLiP",
      "type": "text",
      "url": "/docs/analytics/descricao-metricas-blip",
      "abstract": "Entenda o que significa todas as métricas geradas pelo BLiP",
      "text": "Ver mais!"
    },
    {
      "title": "Entendendo os diferentes tipos de mensagem do BLiP",
      "type": "text",
      "url": "/docs/analytics/entendendo-diferentes-tipos-msg",
      "abstract": "Você sabe o que significa cada uma das mensagens do BLiP? (Enviadas, Recebidas, Trafegadas, Ativas, Respostas... 😮)",
      "text": "Ver mais!"
    },
    {
      "title": "O que são usuários únicos do BLiP",
      "type": "text",
      "url": "/docs/analytics/o-que-sao-usuarios-unicos",
      "abstract": "Você sabe realmente o que é o conceito de usuários únicos? Não? Então se liga neste artigo, afinal é assim que você será tarifado💸",
      "text": "Ver mais!"
    },
    {
      "title": "Integração com ferramentas de analytics",
      "type": "text",
      "url": "/docs/analytics/integracao-ferramentas-analytics",
      "abstract": "Configure uma das ferramentas de analytics conectadas ao BLiP e visualize seus dados a partir de outros ângulos 💾🔍",
      "text": "Ver mais!"
    },
    {
      "title": "Criando gráficos em um relatório customizado",
      "type": "text",
      "url": "/docs/analytics/blip-analytics/criando-graficos-em-um-relatorio-customizado",
      "abstract": "Aprenda como construir relatórios customizados, dentro da plataforma de forma simples, e impressionar sua chefe. 😜",
      "text": "Ver mais!"
    },
    {
      "title": "Enviando dados do seu bot através de Webhooks",
      "type": "text",
      "url": "/docs/analytics/webhook/enviando-dados-atraves-webhook",
      "abstract": "Caso precise enviar os dados gerados pelo bot para qualquer ferramenta basta ativar o Webhook. Leia este artigo e saiba como.",
      "text": "Ver mais!"
    },
    {
      "title": "Integração BotAnalytics - Como enviar dados de um bot para o BotAnalytics?",
      "type": "text",
      "url": "/docs/analytics/botanalytics/como-enviar-dados-botanalytics",
      "abstract": "Envie os dados gerados pelo bot para a ferramenta BotAnalytics",
      "text": "Ver mais!"
    },
    {
      "title": "Integração Chatbase - Como enviar dados de um bot para o Chatbase?",
      "type": "text",
      "url": "/docs/analytics/chatbase/como-enviar-dados-chatbase",
      "abstract": "Envie os dados gerados pelo bot para a ferramenta Chatbase",
      "text": "Ver mais!"
    },
    {
      "title": "Tratando eventos not_Handled no relatório SessionFlow do Chatbase",
      "type": "text",
      "url": "/docs/analytics/chatbase/tratando-eventos-not-handled-sessionFlow-chatbase",
      "abstract": "Envie dados de falha para o Chatbase de forma customizada",
      "text": "Ver mais!"
    },    
    {
      "title": "Integração Dashbot - Como enviar dados de um bot para o Dashbot?",
      "type": "text",
      "url": "/docs/analytics/dashbot/como-enviar-dados-dashbot",
      "abstract": "Envie os dados gerados pelo bot para a ferramenta Dashbot",
      "text": "Ver mais!"
    }
  ]
};
//BLiP Icon for SVGs
const defs = '/img/defs.svg';
class BlipIcon extends React.Component {
  render() {
    const className = 'blip-icon' + (this.props.className ? (' ' + this.props.className) : '')
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      width="1em" height="1em"
    >
      <use xlinkHref={`${defs}#${this.props.name}`} />
    </svg>
    );
  }
}


class Analytics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

        {/* Topo */}
        <div>
          <div className="pages-top-category">
            <div className="main-category">
              <p className="title-category">{data.title}</p>
              <p className="subtitle-category">{data.subtitle}</p>
            </div>
            <div className="image-category">
              <img className="img" src={data.img} />
            </div>
          </div>
        </div>

        {/* Conteudo */}
        <div className="pages-content">
          <div className="navigation">
            <p className="from">{data.from}</p>
            <p className="from"><a className="link-from" href={data.session_url}>{data.session}</a> ></p>
            <p className="here">{data.here}</p>
          </div>
          <div className="info">
            <p className="intro">{data.intro}</p>
          </div>


          {/* Cards */}
          <div className="cards">
            {data.cards.map((c, index) => (
              <a href={c.url} className="card" key={index}>

                {c.type === "video" ?
                  <div className="title-with-icon">
                    <BlipIcon name="tutorials" className="bp-fs-3 bp-fill-watermelon"></BlipIcon>
                    <p className="title-video">{c.title}</p>
                  </div>
                  :
                  <div className="title-with-icon">
                    <BlipIcon name="txt-file" className="bp-fs-3 bp-fill-sea"></BlipIcon>
                    <p className="title">{c.title}</p>
                  </div>
                }

                <p className="abstract">{c.abstract}</p>
                <div className="seeMore">
                  <p className="text">{c.text}</p>
                  <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                </div>
              </a>
            ))}

          </div>
        </div>
      </div>
    );
  }
}

Analytics.title = 'Analytics';
module.exports = Analytics; 