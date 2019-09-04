const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = { 
  "title":"Infobip",
  "subtitle":"Melhore o relacionamento com o seu cliente através do infobip!",
  "img":"/img/illustrations/infobip-logo.svg",
  "from":"BLiP Help Center >",
  "session": "Canais",
  "session_url": "/channels",
  "here":"Infobip",
  "cards": [
    {
      "title": "Visão geral do canal",
      "type": "text",
      "url": "/docs/channels/infobip/visao-geral-infobip",
      "abstract": "Entenda o que é o canal, qual seu objetivo e por que foi criado e obtenha informações importantes para que você consiga utilizá-lo da melhor maneira possível.",
      "text": "Ver mais!"
    },
    {
      "title": "Arquitetura do canal no BLiP",
      "type": "text",
      "url": "/docs/channels/infobip/arquitetura-infobip",
      "abstract": "Obtenha informações sobre a arquitetura do canal e como a sua integração com o BLiP funciona.",
      "text": "Ver mais!"
    },
    {
      "title": "Funcionalidades do canal",
      "type": "text",
      "url": "/docs/channels/infobip/funcionalidades-infobip",
      "abstract": "Veja tudo o que o canal pode oferecer para que seu bot consiga proporcionar uma ótima experiência conversacional.",
      "text": "Ver mais!"
    },
    {
      "title": "Tipos de conteúdo suportados",
      "type": "text",
      "url": "/docs/channels/infobip/tipos-conteudo-infobip",
      "abstract": "Descubra aqui quais são os tipos de conteúdo que você consegue enviar através do BLiP e entenda como eles se comportam no canal.",
      "text": "Ver mais!"
    },
    {
      "title": "Como publicar seu Chatbot",
      "type": "text",
      "url": "#",
      "abstract": "Veja um passo-a-passo e aprenda como publicar o seu bot no canal.",
      "text": "Ver mais!"
    },
    {
      "title": "Como interagir com os usuários",
      "type": "text",
      "url": "#",
      "abstract": "Encontre todas as maneiras oferecidas pelo canal para que os usuários consigam iniciar e manter uma conversa com seu bot.",
      "text": "Ver mais!"
    },
    {
      "title": "Acessando outros recursos",
      "type": "text",
      "url": "#",
      "abstract": "Veja como acessar conteúdo e funcionalidades nativas do canal, através da sua API e documentação oficial.",
      "text": "Ver mais!"
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
      <use xlinkHref={`${defs}#${this.props.name}`}/>
    </svg>
    );
  }
}


class Infobip extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
        return(
           
            <div>

            {/* Topo */}
              <div>
                <div className="pages-top">
                  <div className="main">
                    <p className="title">{data.title}</p>
                    <p className="subtitle">{data.subtitle}</p>
                  </div>
                  <div className="image">
                    <img className="img-channel" src={data.img} />
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
                  <p className="intro">A Infobip é uma plataforma global de comunicação corporativa. 
                    Com os pilares de alta performance, confiabilidade, cobertura e trabalho em equipe. 
                    Recebe mais de 200 milhões de transações diárias, possui 6 data centers globais, 
                    impulsiona seus serviços através de mais de 400 conexões em 190 países.</p>
                  <p className="intro">Esta categoria apresenta diferentes artigos sobre a integração do BLiP com o infobip. 
                    Nestes artigos você aprenderá como funciona este canal, quais seus principais benefícios e como criar sua 
                    primeira experiência integrando o seu contato inteligente ao infobip.</p>
                  <p className="intro">Caso nunca tenha trabalhado com este canal, clique no primeiro link abaixo.</p>
                </div>


                {/* Cards */}
                <div className="cards">
                  {data.cards.map((c, index) => ( 
                  <a href={c.url} className="card" key={index}>
                   
                      { c.type === "video" ? 
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

Infobip.title = 'Infobip';
module.exports = Infobip; 