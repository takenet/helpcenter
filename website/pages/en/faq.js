const React = require('react');
const translate = require('../../server/translate.js').translate;
const CompLibrary = require('../../core/CompLibrary.js');

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


class Faq extends React.Component {
  render() {
    return (

      <div>

        {/* Topo */}
        <div>
          <div className="pages-top">
            <div className="main">
              <p className="title">FAQ</p>
              <p className="subtitle"><translate>Perguntas frequentes</translate></p>
            </div>
            <div className="image">
              <img className="img-faq" src="/img/illustrations/Ilustracao-FAQ.svg" />
            </div>
          </div>
        </div>

        {/* Conteudo */}
        <div className="pages-content">
          <div className="navigation">
            <p className="from">BLiP Help Center ></p>
            <p className="from"><a className="link-from" href="/resources"><translate>Recursos</translate></a> ></p>
            <p className="here">FAQ</p>
          </div>
          <div className="info">
            <p className="intro"><translate>Esta página contém algumas das principais dúvidas e perguntas frequentes dos usuários da plataforma. As dúvidas estão organizadas em categorias, de acordo com o assunto abordado.</translate></p>
            <p className="intro"><translate>Caso suas dúvidas não sejam respondidas aqui, acesse o <a href="https://forum.blip.ai">Fórum do BLiP</a> e abra um ticket 😉.</translate></p>
          </div>

          {/* Cards */}
          <div className="cards-faq">

            <div className="card-faq">
              <div className="title-faq">
                <p className="title">BLiP </p>
              </div>
              <div className="faq-links">
                <a href="/docs/introduction/visao-geral-da-plataforma/" className="faq-links-link"><translate>Como funciona a plataforma?</translate></a>
                <a href="http://blip.ai/precos" className="faq-links-link"><translate>O BLiP é gratuito?</translate></a>
                <a href="/docs/analytics/descricao-metricas-blip" className="faq-links-link"><translate>O que significa a sigla MAU?</translate></a>
                <a href="/blipareas" className="faq-links-link"><translate>Quais os principais módulos do BLiP? </translate></a>
                <a href="https://take.net/fale-conosco/" className="faq-links-link"><translate>Como contratar um plano Busines/Enterprise?</translate> </a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title">WhatsApp</p>
              </div>
              <div className="faq-links">
                <a href="/docs/channels/whatsapp/visao-geral-do-whatsapp/" className="faq-links-link"><translate>Como utilizar o WhatsApp com o BLiP?</translate> </a>
                <a href="/docs/channels/whatsapp/funcionalidades-do-whatsapp/" className="faq-links-link"><translate>O que posso fazer no canal WhatsApp?</translate> </a>
                <a href="/docs/channels/whatsapp/arquitetura-do-whatsapp/" className="faq-links-link"><translate>Quais conteúdos são suportados por este canal?</translate></a>
                <a href="/docs/channels/whatsapp/arquitetura-do-whatsapp/#tipos-de-mensagem" className="faq-links-link"><translate>Preciso pagar para enviar mensagens no WhatsApp?</translate> </a>
                <a href="/docs/channels/whatsapp/arquitetura-do-whatsapp/#tipos-de-mensagem" className="faq-links-link"><translate>O que é a janela de 24 horas do WhatsApp?</translate> </a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title"><translate>Plano FREE</translate></p>
              </div>
              <div className="faq-links">
                <a href="http://blip.ai/precos/" className="faq-links-link"><translate>Quais as limitações do plano FREE? </translate></a>
                <a href="http://blip.ai/precos/" className="faq-links-link"><translate>Existe limitação de nº de mensagens ou de bots?</translate> </a>
                <a href="https://docs.blip.ai/#throughputs" className="faq-links-link"><translate>Qual o throughput do plano FREE?</translate></a>
                <a href="http://blip.ai/precos/" className="faq-links-link"><translate>Qual a SLA para usuários gratuitos?</translate></a>
                <a href="http://blip.ai/precos/" className="faq-links-link"><translate>Posso utilizar o WhatsApp no plano FREE?</translate></a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title"> <translate>Integrações</translate></p>
              </div>
              <div className="faq-links">
                <a href="#" className="faq-links-link"><translate>Posso integrar o BLiP ao meu sistema?</translate> </a>
                <a href="/integrations" className="faq-links-link"><translate>Quais integrações disponíveis no BLiP?</translate> </a>
                <a href="#" className="faq-links-link"><translate>O BLiP possui API?</translate></a>
                <a href="#" className="faq-links-link"><translate>Posso enviar os dados do BLiP para outros sistemas?</translate> </a>
                <a href="https://take.net/fale-conosco/" className="faq-links-link"><translate>Como ser usuário Enterprise? </translate></a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title"><translate>Canais</translate></p>
              </div>
              <div className="faq-links">
                <a href="/channels" className="faq-links-link"><translate>Quais os canais de suportados pelo BLiP?</translate> </a>
                <a href="/docs/channels/whatsapp/publicando-bot-no-whatsapp/" className="faq-links-link"><translate>Como habilitar o canal WhatsApp?</translate> </a>
                <a href="/channels" className="faq-links-link"><translate>Qual conteúdos são suportados pelos canais?</translate></a>
                <a href="#" className="faq-links-link"><translate>Posso criar meu próprio canal?</translate> </a>
                <a href="/docs/channels/blip-chat/adicionar-bot-site-blip-chat/" className="faq-links-link"><translate>Posso adicionar um bot no meu site (ou app)?</translate> </a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title"> <translate>Segurança LGPD/GDPR</translate></p>
              </div>
              <div className="faq-links">
                <a href="/security" className="faq-links-link"><translate>O BLiP possui alguma certificação de segurança?</translate> </a>
                <a href="/security" className="faq-links-link"><translate>O BLiP está em conformidade com a LGPD?</translate> </a>
                <a href="/security" className="faq-links-link"><translate>Qual o processo de criptografia dos dados no BLiP?</translate></a>
                <a href="/security" className="faq-links-link"><translate>O BLiP possui um plano de continuidade de negócio? </translate></a>
                <a href="/security" className="faq-links-link"><translate>Qual o procedimento de desastre recovery do BLiP?</translate> </a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title"><translate>Recursos</translate></p>
              </div>
              <div className="faq-links">
                <a href="https://docs.blip.ai" className="faq-links-link"><translate>Qual o link para a API Reference (docs)?</translate> </a>
                <a href="/changelog" className="faq-links-link"><translate>Como acompanhar os últimos lançamentos do BLiP?</translate> </a>
                <a href="https://github.com/takenet" className="faq-links-link"><translate>Posso contribuir com a plataforma?</translate></a>
                <a href="https://status.blip.ai/" className="faq-links-link"><translate>Acho que o BLiP caiu 😬, como ver o status?</translate> </a>
                <a href="https://github.com/takenet" className="faq-links-link"><translate>Gosto de código, tem algum exemplo ai?</translate> </a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title"> <translate>Comunidade</translate></p>
              </div>
              <div className="faq-links">
                <a href="/beta" className="faq-links-link"><translate>Como testar as novidades em primeira mão?</translate> </a>
                <a href="https://ideas.blip.ai/" className="faq-links-link"><translate>Quero sugerir uma funcionalidade, posso?</translate> </a>
                <a href="/community" className="faq-links-link"><translate>Qual o próximo evento sobre o BLiP?</translate></a>
                <a href="https://forum.blip.ai" className="faq-links-link"><translate>Onde cadastro dúvidas e perguntas?</translate> </a>
                <a href="https://www.facebook.com/groups/BLiP.Community" className="faq-links-link"><translate>Como me conectar com outros BLiPPers?</translate> </a>
              </div>
            </div>


            <div className="card-faq">
              <div className="title-faq">
                <p className="title"><translate>Soluções</translate></p>
              </div>
              <div className="faq-links">
                <a href="/blipareas" className="faq-links-link"><translate>O que posso resolver com o BLiP?</translate> </a>
                <a href="/docs/helpdesk/blipdesk/visao-geral-desk/" className="faq-links-link"><translate>Da pra fazer atendimento humano?</translate> </a>
                <a href="#" className="faq-links-link"><translate>Preciso vender mais, o BLiP ajuda?</translate></a>
                <a href="/channels" className="faq-links-link"><translate>Da pra usar o BLiP como um broker multicanal?</translate> </a>
                <a href="/docs/router/hierarquia-bots-subbots/" className="faq-links-link"><translate>Como orquestrar diferentes iniciativas de bots na minha empresa?</translate> </a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title"> BLiP Chat Widget</p>
              </div>
              <div className="faq-links">
                <a href="/docs/channels/blip-chat/adicionar-bot-site-blip-chat/" className="faq-links-link"><translate>Como colocar o BLiP Chat em meu site?</translate> </a>
                <a href="/docs/channels/blip-chat/como-adicionar-bot-em-app-android-utilizando-blip/" className="faq-links-link"><translate>Preciso de um chat em um app Android, como fazer?</translate> </a>
                <a href="/docs/channels/blip-chat/funcionalidades-blip-chat-widget" className="faq-links-link"><translate>Consigo ligar o contato logado do site no meu chat?</translate></a>
                <a href="/docs/channels/blip-chat/como-adicionar-bot-em-app-ios-utilizando-blip/" className="faq-links-link"><translate>Como colocar o chat em um app iOS? </translate></a>
                <a href="/docs/channels/blip-chat/customizando-o-blip-chat-widget-com-css/" className="faq-links-link"><translate>É possível customizar o chat no meu site? </translate></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

Faq.title = 'FAQ';


Faq.defaultProps = {
  language: 'pt-BR',
};

module.exports = Faq; 