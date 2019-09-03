const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = {
  "title": "Builder",
  "subtitle": "Construa conversas de forma rápida, flexível e sem necessariamente utilizar código",
  "img": "/img/illustrations/ilustracao-categorias.svg",
  "from": "BLiP Help Center >",
  "session": "Áreas do BLiP",
  "session_url": "/blipareas",
  "here": "Builder",
  "intro": "A plataforma BLiP possibilita a construção de bots via código (SDK ou API) e também de forma visual através do Builder. Para entender todos os detalhes de como funciona a ferramenta de construção de fluxos do BLiP veja os artigos abaixo.",
  "cards": [
    {
      "title": "Visão geral do Builder",
      "type": "video",
      "url": "/docs/builder/visao-geral-do-builder",
      "abstract": "Veja, neste vídeo, como o Builder, pode ajudar na construção de bons chatbots de forma rápida e simples.",
      "text": "Ver mais!"
    },
    {
      "title": "O que são blocos de controle (Início e Exceção)",
      "type": "text",
      "url": "/docs/builder/o-que-sao-blocos-de-controle",
      "abstract": "Sabe aqueles bloquinhos de cor preta ⬛ no Builder? Saiba o que eles representam neste artigo!",
      "text": "Ver mais!"
    },
    {
      "title": "O que é um bloco de contéudo",
      "type": "text",
      "url": "/docs/builder/o-que-e-um-bloco-de-conteudo",
      "abstract": "Saiba todos os detalhes associados aos blocos de conteúdo do Builder. Sim, aqueles blocos de cor branca ⬜ utilizados para construir a conversa 😉",
      "text": "Ver mais!"
    },
    {
      "title": "O que é um bloco de atendimento",
      "type": "text",
      "url": "/docs/builder/o-que-e-um-bloco-de-atendimento",
      "abstract": "Um bloco de atendimento representa o estado em que um usuário deixa de ser atendido pelo bot e passa a ser atendido por um atendente humano.",
      "text": "Ver mais!"
    },
    {
      "title": "Visão geral dos tipos de conteúdo",
      "type": "text",
      "url": "/docs/builder/visao-geral-dos-tipos-de-conteudo",
      "abstract": "Se você precisa enviar mensagens para os usuários do seu bot, leia este artigo. PS: Todos os bots precisam enviar mensagens kkkk!",
      "text": "Ver mais!"
    },
    {
      "title": "Visão geral das variáveis",
      "type": "text",
      "url": "/docs/builder/visao-geral-variaveis",
      "abstract": "Durante a construção da sua aplicação no Builder, pode ser necessário armazenar valores em {{variáveis}}. Aprenda como utilizá-las neste artigo.",
      "text": "Ver mais!"
    },
    {
      "title": "Visão geral das condições de saída",
      "type": "text",
      "url": "/docs/builder/visao-geral-das-condicoes-de-saida",
      "abstract": "As condições de saída permitem que os usuários mudem de estado (bloco) durante a conversa com um bot. Este artigo explica o que é esse processo e como realizá-lo.",
      "text": "Ver mais!"
    },
    {
      "title": "Visão geral das ações",
      "type": "text",
      "url": "/docs/builder/visao-geral-das-acoes",
      "abstract": "Além de enviar e receber mensagens, um bot criado no Builder precisará realizar diversas outras atividades. Essas atividades são chamadas e ações e estão descritas neste artigo.",
      "text": "Ver mais!"
    },
    {
      "title": "Como utilizar a ferramenta de debug do Builder",
      "type": "text",
      "url": "/docs/builder/como-utilizar-debug-builder",
      "abstract": "Para facilitar o processo de descoberta de erros no fluxo do Builder a plataforma disponibiliza uma ferramenta de Debug. Esse artigo detalha como utilizá-la.",
      "text": "Ver mais!"
    },
    {
      "title": "Definindo ações globais no Builder",
      "type": "text",
      "url": "/docs/builder/definindo-acoes-globais",
      "abstract": "Você já sabe como utilizar ações no Builder? Então está na hora de saber utilizar também as ações globais.",
      "text": "Ver mais!"
    },
    {
      "title": "Criando ações condicionais",
      "type": "text",
      "url": "/docs/builder/criando-acoes-condicionais",
      "abstract": "Combine os conceitos de ações e condição de saída para utilizar ações condicionais. Clique neste link para ver um passo a passo.",
      "text": "Ver mais!"
    },
    {
      "title": "Importando o fluxo de um bot no Builder",
      "type": "text",
      "url": "/docs/builder/importando-o-fluxo-de-um-bot-no-builder",
      "abstract": "Você sabia que é possível compartilhar um bot criado no Builder? Sim, crie seu bot, exporte o fluxo e compartilhe com outros usuários.",
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


class Builder extends React.Component {
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

Builder.title = 'Builder';
module.exports = Builder; 