const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = {
    "title": "Cursos",
    "subtitle": "Aprenda com a gente!",
    "img": "/img/illustrations/ilustracao-sessao.svg",
    "from": "BLiP Help Center >",
    "here": "Cursos",
    "intro": "Acesse nossos cursos e aprenda a utilizar o BLiP como um expert em criação de contatos inteligentes.",
    "cards": [
        {
            "title": "Curso Gratuito",
            "url": "http://learn.take.net/courses/criando-chatbots-com-a-plataforma-blip",
            "icon": "library",
            "color": "blip",
            "abstract": "Nosso curso gratuito te ajuda a entender mais sobre a plataforma e as melhores formas para desenvolver o seu contato inteligente.",
            "text": "Aprenda mais!",
            "class": "seeMore-session"
        },
        {
            "title": "Botcamp",
            "url": "http://botcamp.blip.ai/",
            "icon": "avatar-deafult",
            "color": "attention",
            "abstract": "Nós do BLiP oferecemos alguns cursos, com nossos profissionais experts em criação de contatos inteligentes, que te ajudarão a evoluir e utilizar a plataforma de forma plena.",
            "text": "Aprenda mais!",
            "class": "seeMore-session"
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


class Courses extends React.Component {
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

Courses.title = 'Cursos';
module.exports = Courses; 