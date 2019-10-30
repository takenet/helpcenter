const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = {
    "title": "Comunidade",
    "subtitle": "Fale com a gente, nos dê ideias e nos ajude a crescer!",
    "img": "/img/illustrations/ilustracao-sessao.svg",
    "from": "BLiP Help Center >",
    "here": "Comunidade",
    "intro": "No BLiP suas ideias são ouvidas e podem entrar em nosso backlog, nossa comunidade também serve de suporte para tirar dúvidas que você possa possuir sobre a plataforma.",
    "cards": [
        {
            "title": "BLiP Beta",
            "url": "/beta",
            "icon": "test-bot",
            "color": "success",
            "abstract": "Teste as novidades do BLiP antes delas serem implementadas para todos os usuários.",
            "text": "Aprenda mais!",
            "class": "seeMore-session-small"
        },
        {
            "title": "BLiP Ideas",
            "url": "https://ideas.blip.ai/",
            "icon": "blip-ideas",
            "color": "attention",
            "abstract": "Nos ajude a melhorar a plataforma! As ideias mais votadas, depois de analisadas, podem entrar em nosso backlog.",
            "text": "Aprenda mais!",
            "class": "seeMore-session"
        },
        {
            "title": "Eventos",
            "url": "http://meetup.blip.ai/",
            "icon": "localization-outline",
            "color": "watermelon",
            "abstract": "Fique por dentro dos eventos que estamos palestrando ou realizando.",
            "text": "Aprenda mais!",
            "class": "seeMore-session-small"
        },
        {
            "title": "Fórum",
            "url": "https://forum.blip.ai/",
            "icon": "forum",
            "color": "blip",
            "abstract": "Não encontrou o que procurava em nosso help center? Participe do nosso fórum.",
            "text": "Aprenda mais!",
            "class": "seeMore-session-small"
        },
        {
          "title": "Comunidade no Facebook",
          "url": "http://community.blip.ai/",
          "icon": "like-outline",
          "color": "refresh",
          "abstract": "Conecte-se com outros usuários do BLiP em nossa comunidade do Facebook.",
          "text": "Aprenda mais!",
          "class": "seeMore-session-small"
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


class Community extends React.Component {
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
                    <div className={c.class}>
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
          "/templates": "/img/banners/Banner-Modelos.png",
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

Community.title = 'Comunidade';
module.exports = Community; 