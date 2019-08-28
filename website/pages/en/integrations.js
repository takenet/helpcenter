const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = { 
  "title":"Integrações",
  "subtitle":"Conheça todas integrações que o BLiP oferece",
  "img":"/img/illustrations/Ilustracao-categorias.svg",
  "from":"BLiP Help Center >",
  "session": "Áreas do BLiP",
  "session_url": "/blipareas", 
  "here":"Integrações",
  "intro":"Com a abertura da API oficial do WhatsApp (início de Agosto de 2018), tornou-se possível utilizar este canal para melhorar a comunicação entre clientes e empresas. Uma das soluções possíveis, neste cenário, é utilizar o BLiP para organizar e escalar o atendimento humano de uma empresa.",
  "cards":[  
     {  
        "title":"Botanalytics",
        "icon": "/img/illustrations/botanalytics-logo.svg",
        "url": "/analytics", 
        "abstract":"Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
        "text":"Aprenda mais!"
     },
     {  
        "title":"Chatbase",
        "icon": "/img/illustrations/chatbase-logo.svg",
        "url": "/analytics", 
        "abstract":"Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
        "text":"Aprenda mais!"
     },
     {  
        "title":"Dashbot",
        "icon": "/img/illustrations/dashbot-logo.svg",
        "url": "/analytics", 
        "abstract":"Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
        "text":"Aprenda mais!"
     },
     {  
        "title":"DialogFlow",
        "icon": "/img/illustrations/dialogflow-logo.svg",
        "url": "/ai", 
        "abstract":"Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
        "text":"Aprenda mais!"
     },
     {  
        "title":"IBM Watson",
        "icon": "/img/illustrations/watson-logo.png",
        "url": "/ai", 
        "abstract":"Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
        "text":"Aprenda mais!"
     },
     {  
        "title":"Microsoft Luis",
        "icon": "/img/illustrations/luis-logo.svg",
        "url": "/ai", 
        "abstract":"Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
        "text":"Aprenda mais!"
     },
     {  
        "title":"RDStation",
        "icon": "/img/illustrations/rd-logo.svg",
        "url": "/analytics", 
        "abstract":"Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
        "text":"Aprenda mais!"
     },
     {  
        "title":"Webhook",
        "icon": "/img/illustrations/webhooks-logo.svg",
        "url": "/analytics", 
        "abstract":"Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
        "text":"Aprenda mais!"
     },
     {  
      "title":"Google Adlingo",
      "icon": "/img/illustrations/adlingo-logo.svg",
      "url": "#", 
      "abstract":"Conecte seu WhatsApp Business a nossa plataforma e melhore seu contato com seus clientes.",
      "text":"Aprenda mais!"
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


class Integrations extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
        return(
           
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
                        <img src={c.icon} className="icon-category"></img>
                        <p className="title-category">{c.title}</p>
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

Integrations.title = 'Integrações';
module.exports = Integrations; 