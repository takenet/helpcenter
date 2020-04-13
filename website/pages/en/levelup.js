const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = {
  "title": "LevelUp",
  "subtitle": "Evolua junto com o BLiP",
  "img": "/img/illustrations/Ilustracao-categorias.svg",
  "from": "BLiP Help Center >",
  "session": "Cursos",
  "session_url": "/courses",
  "here": "LevelUp",
  "intro": "Entenda mais detalhadamente como funcionam as muitas funcionalidades do BLiP e como elas melhoram as interações dos usuários com o seu chatbot.",
  "cards": [


    {
      "title": "LevelUp 0 - Lançamento oficial do BLiP",
      "icon": "/img/illustrations/level-up.svg",
      "url": "/docs/general/level-up/level-up-0-lancamento-oficial-do-blip/",
      "abstract": "Depois de muitas entrevistas, pesquisas, protótipos, códigos e testes, a nova versão do BLiP está oficialmente no ar 👏",
      "text": "Aprenda mais!"
    },
    {
      "title": "LevelUp 1 - BLiP Desk",
      "icon": "/img/illustrations/level-up.svg",
      "url": "docs/general/level-up/level-up-1-blip-desk/",
      "abstract": "O BLiP Desk - a ferramenta de atendimento humano do BLiP. O seu lançamento marcou o primeiro LevelUp da plataforma em 2018.",
      "text": "Aprenda mais!"
    },
    {
      "title": "LevelUp 2 - BLiP Chat",
      "icon": "/img/illustrations/level-up.svg",
      "url": "/docs/general/level-up/level-up-2-blip-chat/",
      "abstract": "O BLiP Chat é o canal do BLiP e permite que qualquer pessoa disponibilize um bot através de um link, embarcado em um site ou em aplicativos móveis (Android ou iOS).",
      "text": "Aprenda mais!"
    },
    {
      "title": "LevelUp 3 - Checklist de IA",
      "icon": "/img/illustrations/level-up.svg",
      "url": "/docs/general/level-up/level-up-3-checklist-de-ia/",
      "abstract": "O checklist de IA é um guideline (lista de sugestões) para melhorar a performance de modelos de IA.",
      "text": "Aprenda mais!"
    },
    {
      "title": "LevelUp 4 - BLiP Desk 2.0",
      "icon": "/img/illustrations/level-up.svg",
      "url": "/docs/general/level-up/level-up-4-blip-desk-2",
      "abstract": "As novas funcionalidades lançadas para o BLiP Desk.",
      "text": "Aprenda mais!"
    },
    {
      "title": "LevelUp 5 - WhatsApp",
      "icon": "/img/illustrations/level-up.svg",
      "url": "/docs/general/level-up/level-up-5-whatsapp/",
      "abstract": "Finalmente, o WhatsApp Business API foi oficialmente lançado e já está integrado no BLiP.",
      "text": "Aprenda mais!"
    },
    {
      "title": "LevelUp 6 - Templates, tags e biblioteca de variáveis",
      "icon": "/img/illustrations/level-up.svg",
      "url": "/docs/general/level-up/level-up-6-templates-tags-e-biblioteca-de-variaveis/",
      "abstract": "Novas funcionalidades para o Builder, além do primeiro passo necessário para disponibilizar templates de bots.",
      "text": "Aprenda mais!"
    },
    {
      "title": "LevelUp 7 - Dialogflow",
      "icon": "/img/illustrations/level-up.svg",
      "url": "/docs/general/level-up/level-up-7-dialogflow/",
      "abstract": "Nova integração com o Dialogflow, uma ferramenta gratuita* para processamento de linguagem natural do Google.",
      "text": "Aprenda mais!"
    },
    {
      "title": "Veja outros LevelUp",
      "icon": "/img/illustrations/level-up.svg",
      "url": "/docs/general/level-up/level-up-8-blip-growth/",
      "abstract": "Continue subindo de nível junto com o BLiP",
      "text": "Veja mais!"
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


class LevelUp extends React.Component {
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
                  <img src={c.icon} className={c.text !== 'Veja mais!' ? "icon-category blip-color-icon" : "icon-category see-more-color-icon"}></img>
                  <p className={c.text !== 'Veja mais!' ? "title-category" : "title-category see-more-text"}>{c.title}</p>
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

LevelUp.title = 'LevelUp';
module.exports = LevelUp; 