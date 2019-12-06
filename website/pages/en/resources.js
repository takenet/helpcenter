const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = {
    "title": "Recursos",
    "subtitle": "Documentações e atualizações",
    "img": "/img/illustrations/ilustracao-sessao.svg",
    "from": "BLiP Help Center >",
    "here": "Recursos",
    "intro": "Tenha acesso as últimas atualizações, documentação e dúvidas frequentes.",
    "cards": [
        {
            "title": "API Reference",
            "url": "https://docs.blip.ai/",
            "icon": "jason-file",
            "color": "bluejeans",
            "abstract": "Encontre detalhes técnicos de forma objetiva, com foco em desenvolvedores, para melhor utilizar a API disponibilizada pelo BLiP.",
            "text": "Aprenda mais!",
            "class": "seeMore-session-small"
        },
        // {
        //     "title": "Changelogs",
        //     "url": "/changelog",
        //     "icon": "restore",
        //     "color": "blip",
        //     "abstract": "Fique por dentro de todas as atualizações e melhorias feitas no BLiP!",
        //     "text": "Veja as novidades!",
        //     "class": "seeMore-session-small"
        // },
        {
            "title": "FAQ",
            "url": "/faq",
            "icon": "faq-outline",
            "color": "attention",
            "abstract": "Veja as perguntas frequentes e tire suas dúvidas rapidamente.",
            "text": "Aprenda mais!",
            "class": "seeMore-session-small"
        },
        {
            "title": "Github",
            "url": "https://github.com/takenet",
            "icon": "git-hub-logo",
            "color": "watermelon",
            "abstract": "Contribua para o crescimento e melhoria do código do BLiP. Veja os principais repositórios em nosso Github.",
            "text": "Contribue!",
            "class": "seeMore-session-small"
        },
        {
          "title": "Templates de bots",
          "url": "/templates",
          "icon": "robot",
          "color": "sea",
          "abstract": "Faça o download gratuito de modelos de fluxos conversacionais e os implemente em sua conta do BLiP",
          "text": "Veja mais!",
          "class": "seeMore-session-small"
      },
      {
        "title": "Tipos de conteúdos",
        "url": "/contenttypes",
        "icon": "talk",
        "color": "refresh",
        "abstract": "Veja os tipos de conteúdos suportados nos diferentes tipos de canais integrados ao BLiP",
        "text": "Veja mais!",
        "class": "seeMore-session-small"
    },
      //   {
      //     "title": "Status",
      //     "url": "https://status.blip.ai",
      //     "icon": "status",
      //     "color": "suit",
      //     "abstract": "Avalie em tempo real a disponibilidade de todos os serviços da plataforma através da página de status",
      //     "text": "Acompanhe!",
      //     "class": "seeMore-session-small"
      // }
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


class Resources extends React.Component {
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

Resources.title = 'Recursos';
module.exports = Resources; 