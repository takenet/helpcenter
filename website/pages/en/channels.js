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
  "intro": "O BLiP está conectado a vários canais de mensageria de forma nativa. Por isso, é possível disponibilizar sua aplicação em todos os canais que achar conveniente com poucos cliques. Para saber como publicar seu contato inteligente em uma das aplicações suportadas pelo BLiP escolha uma das opções abaixo.",
  "cards": [
    {
      "title": "Apple Business Chat iMessage",
      "icon": "/img/illustrations/business-chat-logo.svg",
      "url": "/businesschat",
      "abstract": "Fale com clientes utilizando o iMessage, app de mensagens oficial da Apple.",
      "text": "Aprenda mais!"
    },
    {
      "title": "BLiP Chat",
      "icon": "/img/illustrations/blipchat-logo.svg",
      "url": "/blipchat",
      "abstract": "Fale com seus clientes utilizando o BLiP Chat, o canal oficial do BLiP.",
      "text": "Aprenda mais!"
    },
    {
      "title": "Email",
      "icon": "/img/illustrations/mailgun-logo.svg",
      "url": "/email",
      "abstract": "Melhore o relacionamento com o seu cliente através do envio de e-mails!",
      "text": "Aprenda mais!"
    },
    {
      "title": "Google Assistant",
      "icon": "/img/illustrations/google-assistant-logo.svg",
      "url": "/googleassistant",
      "abstract": "Utilize o assistente virtual da Google para interagir com seus clientes.",
      "text": "Aprenda mais!"
    },
    {
      "title": "Google Business Messages",
      "icon": "/img/illustrations/google-rcs-logo.svg",
      "url": "/googlebm",
      "abstract": "Conecte-se com clientes através do aplicativo nativo de mensagens do Android.",
      "text": "Aprenda mais!"
    },
    /* {
      "title": "Infobip",
      "icon": "/img/illustrations/infobip-logo.svg",
      "url": "/infobip",
      "abstract": "Envie mensagens de SMS através do Infobip e conecte-se com seus clientes.",
      "text": "Aprenda mais!"
    }, */
    {
      "title": "Messenger",
      "icon": "/img/illustrations/messenger-logo.svg",
      "url": "/messenger",
      "abstract": "Fale com clientes utilizando o app de mensagens da maior rede social do mundo.",
      "text": "Aprenda mais!"
    },
    {
      "title": "Microsoft Teams",
      "icon": "/img/illustrations/microsoft-teams-logo.svg",
      "url": "/microsoftteams",
      "abstract": "Fale com seus colaboradores utilizando a plataforma unificada de comunicação e colaboração.",
      "text": "Aprenda mais!"
    },
    {
      "title": "Telegram",
      "icon": "/img/illustrations/telegram-logo.svg",
      "url": "/telegram",
      "abstract": "Publique seu bot no serviço de mensagens instantâneas baseado na nuvem.",
      "text": "Aprenda mais!"
    },
    {
      "title": "WhatsApp",
      "icon": "/img/illustrations/whatsapp-logo.svg",
      "url": "/whatsapp",
      "abstract": "Utilize o maior mensageiro do mundo para falar com seus clientes.",
      "text": "Aprenda mais!"
    },
    {
      "title": "Workplace",
      "icon": "/img/illustrations/workplace-logo.svg",
      "url": "/workplace",
      "abstract": "Fale com seus colaboradores através da versão corporativa do Facebook.",
      "text": "Aprenda mais!"
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