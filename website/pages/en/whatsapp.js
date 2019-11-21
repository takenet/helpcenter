const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = { 
  "title":"WhatsApp no BLiP",
  "subtitle":"Melhore o relacionamento com o seu cliente através do Whatsapp!  ",
  "img":"/img/illustrations/whatsapp-logo.svg",
  "from":"BLiP Help Center >",
  "session": "Canais",
  "session_url": "/channels",
  "here":"WhatsApp no BLiP",
  "intro":"Com a abertura da API oficial do WhatsApp (início de Agosto de 2018), tornou-se possível utilizar este canal para melhorar a comunicação entre clientes e empresas. Uma das soluções possíveis, neste cenário, é utilizar o BLiP para organizar e escalar o atendimento humano de uma empresa.",
  "cards":[  
     {  
        "title":"Visão geral do canal",
        "type": "text",
        "url": "/docs/channels/whatsapp/visao-geral-do-whatsapp", 
        "abstract":"Entenda o que é o canal, qual seu objetivo e por que foi criado e obtenha informações importantes para que você consiga utilizá-lo da melhor maneira possível.",
        "text":"Ver mais!"
     },
     {  
        "title":"Arquitetura do canal no BLiP",
        "type": "text",
        "url": "/docs/channels/whatsapp/arquitetura-do-whatsapp",
        "abstract":"Obtenha informações sobre a arquitetura do canal e como a sua integração com o BLiP funciona.",
        "text":"Ver mais!"
     },
     {  
      "title":"Funcionalidades do canal",
      "type": "text",
      "url": "/docs/channels/whatsapp/funcionalidades-do-whatsapp",
      "abstract":"Veja tudo o que o canal pode oferecer para que seu bot consiga proporcionar uma ótima experiência conversacional.",
      "text":"Ver mais!"
    },
    /* {  
      "title":"Tipos de conteúdo suportados",
      "type": "text",
      "url": "#",
      "abstract":"Descubra aqui quais são os tipos de conteúdo que você consegue enviar através do BLiP e entenda como eles se comportam no canal.",
      "text":"Ver mais!"
    }, */
    {  
      "title":"Como publicar seu Chatbot no WhatsApp",
      "type": "text",
      "url": "/docs/channels/whatsapp/publicando-bot-no-whatsapp",
      "abstract":"Veja um passo-a-passo e aprenda como publicar o seu bot no canal.",
      "text":"Ver mais!"
   },
   {  
    "title":"Como interagir com os usuários",
    "type": "text",
    "url": "/docs/channels/whatsapp/como-interagir-whatsapp",
    "abstract":"Encontre todas as maneiras oferecidas pelo canal para que os usuários consigam iniciar e manter uma conversa com seu bot.",
    "text":"Ver mais!"
  }, 
  {
    "title":"Como criar e aprovar Message Templates",
    "type": "text",
    "url": "/docs/channels/whatsapp/como-criar-aprovar-message-template",
    "abstract":"Entenda todo o processo de criação, análise e aprovação dos Message Templates no WhatsApp",
    "text":"Ver mais!"
  },
  {  
    "title":"Enviando notificações no WhatsApp através da API do BLiP",
    "type": "text",
    "url": "/docs/channels/whatsapp/como-criar-aprovar-message-template",
    "abstract":"Veja todo o processo para enviar notificações no WhatsApp utilizando a API do BLiP",
    "text":"Ver mais!"
  },
  {  
    "title":"Veja outros artigos",
    "type": "video",
    "url": "/docs/channels/whatsapp/criando-solucao-atendimento-humano-whatsapp",
    "abstract":"Não encontrou o que procurava por aqui? Dê uma olhada nestes outros artigos",
    "text":"Ver mais!"
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


class WhatsApp extends React.Component{
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
                  <p className="intro">O aplicativo WhatsApp ajuda na conexão e no compartilhamento de informações entre mais de 1 bilhão de 
                    pessoas em todo o mundo. O WhatsApp Business API é a maneira segura, confiável e escalável para que as empresas possam se conectar, 
                    de forma efetiva, com seus clientes dentro deste canal.</p>

                  <p className="intro">Esta categoria apresenta vários artigos sobre a integração entre o BLiP e o canal WhatsApp Business API. 
                    Nestes artigos você aprenderá como funciona este canal, quais seus principais benefícios e como criar sua primeira experiência 
                    oficial de mensagens através do BLiP e da API oficial do WhatsApp.</p>

                  <p className="intro">Se você ainda não tem acesso à API e gostaria de utilizá-la em sua empresa, entre em contato conosco
                    <a href="https://take.net/fale-conosco/"> através do link.</a></p>

                  <p className="intro"><em>Caso nunca tenha trabalhado com este canal clique no primeiro link abaixo.</em></p>
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

WhatsApp.title = 'WhatsApp no BLiP';
module.exports = WhatsApp; 