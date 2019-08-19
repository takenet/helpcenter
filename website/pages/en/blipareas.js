const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = {
  "title": "Áreas do BLiP",
  "subtitle": "Conheça mais sobre o BLiP",
  "img": "/img/illustrations/ilustracao-sessao.svg",
  "from": "BLiP Help Center >",
  "here": "Áreas do BLiP",
  "intro": "Com a abertura da API oficial do WhatsApp (início de Agosto de 2018), tornou-se possível utilizar este canal para melhorar a comunicação entre clientes e empresas. Uma das soluções possíveis, neste cenário, é utilizar o BLiP para organizar e escalar o atendimento humano de uma empresa.",
  "cards": [
    {
      "title": "Atendimento Humano",
      "url": "/ai",
      "icon": "operator",
      "abstract": "Construa algo que seja top. O inconformismo é o combustível da alta performance. Walk the f*ing talk. Desafie-se. É você quem decide se o seu dia vai ser incrível ou não.",
      "text": "aprenda mais!"
    },
    {
      "title": "Análise e Métricas",
      "url": "/analytics",
      "icon": "chart-line",
      "abstract": "Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
      "text": "ver mais!"
    },
    {
      "title": "Builder",
      "url": "/builder",
      "icon": "robot",
      "abstract": "Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
      "text": "ver mais!"
    },
    {
      "title": "Canais",
      "url": "/channels",
      "icon": "sms-icon",
      "abstract": "Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
      "text": "ver mais!"
    },
     
    {
      "title": "Growth",
      "url": "/growth",
      "icon": "publish-bot", 
      "abstract": "Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
      "text": "ver mais!"
    },
    {
      "title": "Integrações",
      "url": "/integrations",
      "icon": "integration-solid", 
      "abstract": "Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
      "text": "ver mais!"
    },
    {
      "title": "Inteligência Artificial",
      "url": "/ai",
      "icon": "ia", 
      "abstract": "Se você já criou algum chatbot, provavelmente já precisou de várias ferramentas auxiliares. Agendar o envio de alguma mensagem, salvar...",
      "text": "ver mais!"
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
            {data.cards.map((c, index) => (
              <a href={c.url} className="card" key={index}>
                <div className="card-image">
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
                    <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-white"></BlipIcon>
                  </div>
                </div>
              </a>
            ))}

          </div>
        </div>
      </div>
    );
  }
}

BlipAreas.title = 'Áreas do BLiP';
module.exports = BlipAreas; 