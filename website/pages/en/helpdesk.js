const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = {
  "title": "Atendimento Humano",
  "subtitle": "Melhore o seu relacionamento com clientes através do atendimento humano!",
  "img": "/img/illustrations/ilustracao-categorias.svg",
  "from": "BLiP Help Center >",
  "session": "Áreas do BLiP",
  "session_url": "/blipareas",
  "here": "Atendimento Humano",
  "intro": "Veja como um ser humano tem um papel essencial na entrega da melhor experiência  possível durante um atendimento. Combine a automação e escalabilidade dos seus bots à capacidade única de um ser humano na resolução de tarefas específicas e complexas.",
  "cards": [
    {
      "title": "Visão geral do BLiP Desk",
      "type": "text",
      "url": "/docs/helpdesk/blipdesk/visao-geral-desk",
      "abstract": "BLiP Desk? Quem é, onde vive, como se alimenta 🤔? Neste artigo você aprenderá o que é, pra quê serve e quais são os principais relacionados a ferramenta de atendimento humano do BLiP",
      "text": "Ver mais!"
    },
    {
      "title": "Como ativar o BLiP Desk como um canal de atendimento",
      "type": "text",
      "url": "/docs/helpdesk/blipdesk/como-ativar-blip-desk-canal",
      "abstract": "Veja neste artigo como ativar o BLiP Desk como a ferramenta de atendimento humano em seu contato inteligente.",
      "text": "Ver mais!"
    },
    {
      "title": "Como realizar um atendimento através do BLiP Desk",
      "type": "text",
      "url": "/docs/helpdesk/blipdesk/como-realizar-um-atendimento-atraves-do-blip-desk",
      "abstract": "Saiba todos os passos necessários para realizar seu primeiro atendimento humano através do BLiP Desk",
      "text": "Ver mais!"
    },
    {
      "title": "Utilizando variáveis nas respostas prontas do BLiP Desk",
      "type": "text",
      "url": "/docs/helpdesk/blipdesk/utilizando-variav-respostas",
      "abstract": "Melhore a performance das equipes de atendimento definindo respostas prontas de forma customizada!",
      "text": "Ver mais!"
    },
    {
      "title": "Gerenciando equipes de atendimento no BLiP Desk",
      "type": "text",
      "url": "/docs/helpdesk/blipdesk/gerenciamento-equipes",
      "abstract": "Defina equipes e organize os atendentes de forma rápida e simples.",
      "text": "Ver mais!"
    },
    {
      "title": "Como definir regras de atendimento no BLiP Desk",
      "type": "text",
      "url": "/docs/helpdesk/blipdesk/como-definir-regras-atendimento",
      "abstract": "Algumas empresas possuem diferentes equipes de atendimentos para tratar diferentes assuntos. Use as regras de atendimento para definir qual equipe realizará quais atendimentos.",
      "text": "Ver mais!"
    },
    {
      "title": "Habilitando o uso de emoji para o Desk",
      "type": "text",
      "url": "/docs/helpdesk/blipdesk/habilitando-uso-emoji-desk",
      "abstract": "❤️😍😊🤔😜⚽🏆🎫🎖️",
      "text": "Ver mais!"
    },
    {
      "title": "Descrição das métricas do BLiP Desk",
      "type": "text",
      "url": "/docs/helpdesk/blipdesk/descricao-metricas-desk",
      "abstract": "O módulo de atendimento do BLiP exibe métricas em tempo real e por período. Este artigo explica o conceito associado a cada uma dessas métricas",
      "text": "Ver mais!"
    },
    {
      "title": "Como filtrar um ticket por ID?",
      "type": "text",
      "url": "/docs/helpdesk/blipdesk/como-filtrar-ticket-id",
      "abstract": "Precisa dar uma espiada em algum atendimento específico? Basta filtrar o ticket por ID. Saiba como neste artigo.",
      "text": "Ver mais!"
    },
    {
      "title": "Como configurar alertas de inatividade dos clientes no BLiP Desk",
      "type": "text",
      "url": "/docs/helpdesk/blipdesk/configurar-alertas-inatividade-clientes-blip-desk",
      "abstract": "Melhore a experiência dos atendentes que trabalham no BLiP Desk através de alertas de inatividade dos clientes.",
      "text": "Ver mais!"
    },
    {
      "title": "Definindo alerta para tempo de resposta de um atendente no BLiP Desk",
      "type": "text",
      "url": "/docs/helpdesk/blipdesk/definindo-alerta-tempo-resposta-atendente",
      "abstract": "Para reduzir o tempo de espera dos usuários atendidos por algum ser humano no Desk, ative um alerta de tempo de resposta para os atendentes.",
      "text": "Ver mais!"
    },
    {
      "title": "Como utilizar a ferramenta Live Agent do SalesForce para atendimento humano",
      "type": "text",
      "url": "/docs/helpdesk/liveagent/utilizar-live-agent-salesForce-atendimento-humano",
      "abstract": "Já utiliza a ferramenta LiveAgent (by SalesForce) para realizar os atendimentos? Veja como configurá-la como uma ferramenta de atendimento humano no BLiP.",
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


class Desk extends React.Component {
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

Desk.title = 'Utilizando o BLiP Desk';
module.exports = Desk; 