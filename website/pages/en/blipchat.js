const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = { 
  "title":"BLiP Chat",
  "subtitle":"Melhore o seu relacionamento com o cliente por meio do BLiP Chat!",
  "img":"/img/illustrations/blipchat-logo.svg",
  "from":"BLiP Help Center >",
  "session": "Canais ",
  "session_url": "/channels",
  "here":"BLiP Chat",
  "intro":"Assim como o Facebook Messenger, Telegram e outras aplicações de mensagens, o BLiP também possui o seu próprio canal: o BLiP Chat. Ele é mais uma das várias interfaces possíveis para que usuários consigam conversar com o seu bot.",
  "cards":[  
    {
      "title": "Visão geral do canal",
      "type": "text",
      "url": "/docs/channels/blip-chat/o-que-e-blip-chat",
      "abstract": "Entenda o que é o canal, qual seu objetivo e por que foi criado e obtenha informações importantes para que você consiga utilizá-lo da melhor maneira possível.",
      "text": "Ver mais!"
    },
    {
      "title": "Customizações disponíveis no BLiP Chat",
      "type": "text",
      "url": "/docs/channels/blip-chat/customizacoes-disponiveis-blip-chat",
      "abstract": "Veja como customizar a interface do chat, deixando ele com a cara do seu negócio.",
      "text": "Ver mais!"
    },
    {
      "title": "Tipos de conteúdo suportados",
      "type": "text",
      "url": "/docs/channels/blip-chat/tipos-conteudo-chat",
      "abstract": "Descubra aqui quais são os tipos de conteúdo que você consegue enviar através do BLiP e entenda como eles se comportam no canal.",
      "text": "Ver mais!"
    },
    {
      "title": "Como adicionar BLiP Chat em um site",
      "type": "text",
      "url": "/docs/channels/blip-chat/adicionar-bot-site-blip-chat",
      "abstract": "Descubra como integrar seu bot a uma página da web, permitindo a interação com clientes diretamente de seu site.",
      "text": "Ver mais!"
    },
    {
      "title": "Permitir envio de arquivos no BLiP Chat",
      "type": "text",
      "url": "/docs/channels/blip-chat/permitir-envio-de-arquivos-blip-chat",
      "abstract": "Aprenda como habilitar a funcionalidade que permite que seus clientes enviem arquivos diretamente no seu  BLiP Chat.",
      "text": "Ver mais!"
    },
    {
      "title": "Acessando outros recursos",
      "type": "text",
      "url": "https://docs.blip.ai/",
      "abstract": "Acesse conteúdo e funcionalidades nativas do canal, através da sua API e documentação oficial.",
      "text": "Ir para documentação!"
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


class BlipChat extends React.Component{
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
                  <p className="intro">{data.intro}</p>
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

BlipChat.title = 'BLiP Chat';
module.exports = BlipChat; 