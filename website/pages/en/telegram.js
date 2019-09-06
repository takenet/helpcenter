const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = { 
  "title":"Telegram no BLiP",
  "subtitle":"Melhore o seu relacionamento com o cliente por meio do Telegram!",
  "img":"/img/illustrations/Telegram-logo.svg",
  "from":"BLiP Help Center >",
  "session": "Canais",
  "session_url": "/channels",
  "here":"Telegram no BLiP",
  "intro": `O Telegram é um aplicativo de mensagens feito em nuvem com o objetivo de promover rapidez e segurança. Este canal está disponível para smartphones, tablets, computadores e aplicação Web. Além de enviar mensagens de texto, também permite a troca de arquivos de diferentes tipos.

  Esta categoria apresenta vários artigos sobre a integração entre o BLiP e o canal Telegram. Nestes artigos você aprenderá como funciona este canal, quais seus principais benefícios e como criar sua primeira experiência integrando o seu contato inteligente à Telegram Bot API.
  
  Caso nunca tenha trabalhado com este canal, clique no primeiro link abaixo.`,

  "cards": [
    {
      "title": "Visão geral do canal",
      "type": "text",
      "url": "/docs/channels/telegram/visao-geral-do-telegram",
      "abstract": "Entenda o que é o canal, qual seu objetivo e por que foi criado e obtenha informações importantes para que você consiga utilizá-lo da melhor maneira possível.",
      "text": "Ver mais!"
    },
    {
      "title": "Arquitetura do canal no BLiP",
      "type": "text",
      "url": "/docs/channels/telegram/arquitetura-do-telegram",
      "abstract": "Obtenha informações sobre a arquitetura do canal e como a sua integração com o BLiP funciona.",
      "text": "Ver mais!"
    },
    {
      "title": "Tipos de conteúdo suportados",
      "type": "text",
      "url": "/docs/channels/telegram/tipos-conteudo-telegram",
      "abstract": "Descubra aqui quais são os tipos de conteúdo que você consegue enviar através do BLiP e entenda como eles se comportam no canal.",
      "text": "Ver mais!"
    },
    {
      "title": "Como publicar seu Chatbot",
      "type": "text",
      "url": "/docs/channels/telegram/publicando-bot-no-telegram",
      "abstract": "Veja um passo-a-passo e aprenda como publicar o seu bot no canal.",
      "text": "Ver mais!"
    },
    {
      "title": "Como interagir com os usuários",
      "type": "text",
      "url": "/docs/channels/telegram/como-interagir-telegram",
      "abstract": "Encontre todas as maneiras oferecidas pelo canal para que os usuários consigam iniciar e manter uma conversa com seu bot.",
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
      <use xlinkHref={`${defs}#${this.props.name}`}/>
    </svg>
    );
  }
}


class Telegram extends React.Component{
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
                  <p className="intro">O Telegram é um aplicativo de mensagens feito em nuvem com o objetivo de promover rapidez e segurança. 
                    Este canal está disponível para smartphones, tablets, computadores e aplicação Web. 
                    Além de enviar mensagens de texto, também permite a troca de arquivos de diferentes tipos.</p>
                  <p className="intro">Esta categoria apresenta vários artigos sobre a integração entre o BLiP e o canal Telegram. 
                    Nestes artigos você aprenderá como funciona este canal, quais seus principais benefícios e como criar sua primeira 
                    experiência integrando o seu contato inteligente à Telegram Bot API.</p>
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

Telegram.title = 'Telegram no BLiP';
module.exports = Telegram; 