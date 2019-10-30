const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = {
  "title": "Políticas de segurança",
  "subtitle": "Segurança e privacidade são premissas para o desenvolvimento do BLiP",
  "img": "/img/illustrations/ilustracao-sessao.svg",
  "from": "BLiP Help Center >",
  "here": "Áreas do BLiP",
  "intro": "Nesta página estão organizados os principais conteúdos relacionados às Políticas de Segurança e comprometimentos legais da plataforma BLiP com seus clientes e parceiros. Para questões legais gerais, dúvidas sobre privacidade e proteção de dados, por favor, entre em contato conosco através do e-mail legal@blip.ai.",
  "cards": [
   /*  {
      "title": "Acordo de Processamento de Dados (DPA)",
      "url": "/",
      "icon": "integration-solid",
      "color": "watermelon",
      "abstract": "TBD",
      "text": "Aprenda mais!"
    },
    {
      "title": "Governança de Dados",
      "url": "/",
      "icon": "folder-solid",
      "color": "bluejeans",
      "abstract": "TBD",
      "text": "Aprenda mais!"
    },
    {
      "title": "Legal",
      "url": "/",
      "icon": "txt-file",
      "color": "blip",
      "abstract": "TBD",
      "text": "Aprenda mais!"
    }, */
    {
      "title": "Política de Cookies",
      "url": "/docs/security/cookies",
      "icon": "cookie",
      "color": "attention",
      "abstract": "O BLiP utiliza cookies para armazenamento de dados com algumas finalidades. Para saber mais acesse nossa Política de Uso de Cookies.",
      "text": "Aprenda mais!"
    },
     
    {
      "title": "Políticas de Privacidade",
      "url": "/docs/security/privacy",
      "icon": "lock-outline", 
      "color": "success",
      "abstract": "Entendemos‌ quão grande é a confiança de nossos usuários e clientes ao compartilhar conosco seus dados, portanto, nossa Política de Privacidade busca descrever de forma clara e objetiva o tratamento dos dados realizados durante a utilização da plataforma BLiP.",
      "text": "Aprenda mais!"
    },
    /* {
      "title": "Políticas de Propriedade Intelectual",
      "url": "/",
      "icon": "user-none", 
      "color": "suit",
      "abstract": "TBD",
      "text": "Aprenda mais!"
    },
    {
      "title": "Programa de Privacidade e Proteção de Dados",
      "url": "/",
      "icon": "data-security", 
      "color": "sea",
      "abstract": "TBD",
      "text": "Aprenda mais!"
    }, */
    {
        "title": "Termos de Uso",
        "url": "/docs/security/terms",
        "icon": "attention-outline", 
        "color": "refresh",
        "abstract": "É muito importante saber os Termos de Uso de qualquer serviço utilizado. Clique neste link para entender no detalhe o Termo de Uso da plataforma BLiP.",
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


class Security extends React.Component {
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

Security.title = 'Políticas de Segurança';
module.exports = Security; 