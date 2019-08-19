const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = {
  "title": "Canais",
  "subtitle": "Conheça todos os canais que o BLiP oferece",
  "img": "/img/illustrations/Ilustracao-categorias.svg",
  "from": "BLiP Help Center >",
  "session": "Áreas do BLiP",
  "session_url": "/blipareas", 
  "here": "Canais",
  "intro": "Com a abertura da API oficial do WhatsApp (início de Agosto de 2018), tornou-se possível utilizar este canal para melhorar a comunicação entre clientes e empresas. Uma das soluções possíveis, neste cenário, é utilizar o BLiP para organizar e escalar o atendimento humano de uma empresa.",
  "cards": [
    {
      "title": "Apple Business Chat iMessage",
      "icon": "/img/illustrations/business-chat-logo.svg",
      "url": "/businesschat",
      "abstract": "Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
      "text": "aprenda mais!"
    },
    {
      "title": "BLiP Chat",
      "icon": "/img/illustrations/blipchat-logo.svg",
      "url": "/blipchat",
      "abstract": "Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
      "text": "aprenda mais!"
    },
    {
      "title": "Email",
      "icon": "/img/illustrations/mailgun-logo.svg",
      "url": "/email",
      "abstract": "Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
      "text": "aprenda mais!"
    },
    {
      "title": "Google Assistant",
      "icon": "/img/illustrations/google-assistant-logo.svg",
      "url": "/googleassistant",
      "abstract": "Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
      "text": "aprenda mais!"
    },
    {
      "title": "Google RCS",
      "icon": "/img/illustrations/google-rcs-logo.svg",
      "url": "/googlercs",
      "abstract": "Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
      "text": "aprenda mais!"
    },
    {
      "title": "Infobip",
      "icon": "/img/illustrations/infobip-logo.svg",
      "url": "/infobip",
      "abstract": "Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
      "text": "aprenda mais!"
    },
    {
      "title": "Messenger",
      "icon": "/img/illustrations/messenger-logo.svg",
      "url": "/messenger",
      "abstract": "Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
      "text": "aprenda mais!"
    },
    {
      "title": "Skype",
      "icon": "/img/illustrations/skype-logo.svg",
      "url": "/skype",
      "abstract": "Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
      "text": "aprenda mais!"
    },
    {
      "title": "SMS",
      "icon": "/img/illustrations/sms-logo.svg",
      "url": "/sms",
      "abstract": "Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
      "text": "aprenda mais!"
    },
    {
      "title": "Telegram",
      "icon": "/img/illustrations/telegram-logo.svg",
      "url": "/telegram",
      "abstract": "Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
      "text": "aprenda mais!"
    },
    {
      "title": "WhastsApp",
      "icon": "/img/illustrations/whatsapp-logo.svg",
      "url": "/whatsapp",
      "abstract": "Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
      "text": "aprenda mais!"
    },
    {
      "title": "Workplace",
      "icon": "/img/illustrations/workplace-logo.svg",
      "url": "/workplace",
      "abstract": "Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
      "text": "aprenda mais!"
    },
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


class Channels extends React.Component {
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
        <div className="pages-content-category">
          <div className="navigation">
            <p className="from">{data.from}</p>
            <p className="from"><a className="link-from" href={data.session_url}>{data.session}</a> ></p>
            <p className="here">{data.here}</p>
          </div>
          <div className="info-category">
            <p className="intro-category">{data.intro}</p>
          </div>


          {/* Cards */}
          <div className="cards-category">
            {data.cards.map((c, index) => (
              <a href={c.url} className="card-category" key={index}>
                <div className="title-with-icon-category">
                  <img src={c.icon} className="icon-category"></img>
                  <p className="title-category">{c.title}</p>
                </div>

                <p className="abstract-category">{c.abstract}</p>
                <div className="seeMore-category">
                  <p className="text-category">{c.text}</p>
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

Channels.title = 'Canais';
module.exports = Channels; 