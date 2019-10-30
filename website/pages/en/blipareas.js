const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = {
  "title": "Áreas do BLiP",
  "subtitle": "Conheça mais sobre cada um dos módulos do BLiP",
  "img": "/img/illustrations/ilustracao-sessao.svg",
  "from": "BLiP Help Center >",
  "here": "Áreas do BLiP",
  "intro": `O BLiP é uma plataforma que ajuda a melhorar a comunicação entre clientes e organizações através da construção, gestão e evolução de aplicações conversacionais. Por meio de integrações em diferentes APIs e canais de mensageria, o BLiP facilita o desenvolvimento do contato das empresas de forma inteligente e otimizado. 
  
  Para que seja possível entregar valor em cada uma das etapas do projeto de uma aplicação conversacional, são necessárias diversas ferramentas e integrações. Pensando nisso, o BLiP está organizado de forma modular. Selecione uma das áreas abaixo e veja como o BLiP pode te ajudar.`,
  "cards": [
    {
      "title": "Atendimento Humano",
      "url": "/helpdesk",
      "icon": "operator",
      "color": "sea",
      "abstract": "Veja como um ser humano tem um papel essencial na entrega da melhor experiência  possível durante um atendimento. Combine a automação e escalabilidade dos seus bots à capacidade única de um ser humano na resolução de tarefas específicas e complexas.",
      "text": "Aprenda mais!"
    },
    {
      "title": "Análise e Métricas",
      "url": "/analytics",
      "icon": "chart-line",
      "color": "watermelon",
      "abstract": "Analise os dados gerados em seu contato inteligente para entender o comportamento de seus clientes e definir metas para uma constante evolução.",
      "text": "Aprenda mais!"
    },
    {
      "title": "Builder",
      "url": "/builder",
      "icon": "robot",
      "color": "blip",
      "abstract": "A plataforma BLiP possibilita a construção de bots via código (SDK ou API) e também de forma visual através do Builder. Para entender todos os detalhes de como funciona a ferramenta de construção de fluxos do BLiP clique aqui.",
      "text": "Aprenda mais!"
    },
    {
      "title": "Canais",
      "url": "/channels",
      "icon": "sms-icon",
      "color": "attention",
      "abstract": "O BLiP está conectado a vários canais de mensageria de forma nativa. Disponibilize sua aplicação em todos os canais que achar conveniente com poucos cliques. Para descobrir como publicar seu contato inteligente em um dos canais suportados pelo BLiP clique aqui.",
      "text": "Aprenda mais!"
    },

    {
      "title": "Growth - Retenção e Engajamento",
      "url": "/growth",
      "icon": "publish-bot",
      "color": "refresh",
      "abstract": "Construa estratégias para reter e engajar seus usuários em diversos canais por meio de anúncios personalizados, ferramenta de agendamento e muito mais.",
      "text": "Aprenda mais!"
    },
    {
      "title": "Integrações",
      "url": "/integrations",
      "icon": "integration-solid",
      "color": "success",
      "abstract": "Além dos diversos canais de mensageria, o BLiP está conectado a dezenas de ferramentas interessantes para quem precisa construir um bot. Clique nesta opção para entender melhor quais são e como funcionam cada uma dessas integrações.",
      "text": "Aprenda mais!"
    },
    {
      "title": "Inteligência Artificial",
      "url": "/ai",
      "icon": "ia",
      "color": "suit",
      "abstract": "Aprenda como evoluir um chatbot utilizando ferramentas de Inteligência Artificial, como NLP - Natural Language Processing (Processamento de Linguagem Natural), para otimizar o reconhecimento dos assuntos abordados entre os seus clientes e o contato de uma organização.",
      "text": "Aprenda mais!"
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


class BlipAreas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

        {/* Topo */}
        <div>
          <div className="session-top">
            <div className="main-session">
              <p className="title-session">{data.title}</p>
              <p className="subtitle-session">{data.subtitle}</p>
            </div>
            <div className="image-session">
              <img className="img" src={data.img} />
            </div>
          </div>
        </div>

        {/* Conteudo */}
        <div className="session-content">
          <div className="navigation">
            <p className="from">{data.from}</p>
            <p className="here">{data.here}</p>
          </div>
          <div className="info">
            <p className="intro">{data.intro}</p>
          </div>


          {/* Cards */}
          <div className="cards-session">
            <div className="session-cards">
              {data.cards.map((c, index) => (
                <a href={c.url} className="card-session" key={index}>
                  <div className={`card-image-${c.color}`}>
                    <BlipIcon name={c.icon} className="bp-fs-1-session"></BlipIcon>
                    <img className="effects" src="/img/illustrations/efeitos-cards.svg" />
                  </div>

                  <div className="cards-session-content">
                    <div className="div-title-session">
                      <p className="title-session">{c.title}</p>
                    </div>

                    <p className="abstract-session">{c.abstract}</p>
                    <div className="seeMore-session">
                      <p className="text-session">{c.text}</p>
                      <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="banners-session">
              <a className="banner" id="1">
                <img className="imagem-banner" id="2"></img>
              </a>
              <ScriptBanners></ScriptBanners>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

class ScriptBanners extends React.Component {
  render() {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `
        const banners = {
          "https://forum.blip.ai/": "/img/banners/Banner-forum.jpg",
          "https://ideas.blip.ai/": "/img/banners/Banner-ideas.jpg",
          "/security": "/img/banners/Banner-politicas.jpg",
          "/beta": "/img/banners/Banner-beta.jpg",
          "http://community.blip.ai": "/img/banners/Banner-communityfb.jpg",
          "/templates": "/img/banners/Banner-Modelos.png"
        }
        const chaves = Object.keys(banners);
        var randomKey = chaves[parseInt(Math.random() * chaves.length)];
        document.getElementsByClassName("imagem-banner")[0].src = banners[randomKey];
        document.getElementsByClassName("banner")[0].href = randomKey;
        `
        }}
      />
    );
  }
}

BlipAreas.title = 'Áreas do BLiP';
module.exports = BlipAreas; 