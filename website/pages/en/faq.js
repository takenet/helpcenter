const React = require('react');

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
              <p className="subtitle">Perguntas frequentes</p>
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
            <p className="from"><a className="link-from" href="/resources">Recursos</a> ></p>
            <p className="here">FAQ</p>
          </div>
          <div className="info">
            <p className="intro">Esta página contém algumas das principais dúvidas e perguntas frequentes dos usuários da plataforma. As dúvidas estão organizadas em categorias, de acordo com o assunto abordado.</p>
            <p className="intro">Caso suas dúvidas não sejam respondidas aqui, acesse o <a href="https://forum.blip.ai">Fórum do BLiP</a> e abra um ticket 😉.</p>
          </div>

          {/* Cards */}
          <div className="cards-faq">

            <div className="card-faq">
              <div className="title-faq">
                <p className="title">BLiP </p>
              </div>
              <div className="faq-links">
                <a href="/docs/introduction/visao-geral-da-plataforma/" className="faq-links-link">Como funciona a plataforma?</a>
                <a href="http://blip.ai/precos" className="faq-links-link">O BLiP é gratuito? </a>
                <a href="/docs/analytics/descricao-metricas-blip" className="faq-links-link">O que significa a sigla MAU?</a>
                <a href="/blipareas" className="faq-links-link">Quais os principais módulos do BLiP? </a>
                <a href="https://take.net/fale-conosco/" className="faq-links-link">Como contratar um plano Busines/Enterprise? </a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title">WhatsApp</p>
              </div>
              <div className="faq-links">
                <a href="/docs/channels/whatsapp/visao-geral-do-whatsapp/" className="faq-links-link">Como utilizar o WhatsApp com o BLiP? </a>
                <a href="/docs/channels/whatsapp/funcionalidades-do-whatsapp/" className="faq-links-link">O que posso fazer no canal WhatsApp? </a>
                <a href="/docs/channels/whatsapp/arquitetura-do-whatsapp/" className="faq-links-link">Quais conteúdos são suportados por este canal?</a>
                <a href="/docs/channels/whatsapp/arquitetura-do-whatsapp/#tipos-de-mensagem" className="faq-links-link">Preciso pagar para enviar mensagens no WhatsApp? </a>
                <a href="/docs/channels/whatsapp/arquitetura-do-whatsapp/#tipos-de-mensagem" className="faq-links-link">O que é a <b>janela de 24 horas</b> do WhatsApp? </a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title">Plano FREE</p>
              </div>
              <div className="faq-links">
                <a href="http://blip.ai/precos/" className="faq-links-link">Quais as limitações do plano FREE? </a>
                <a href="http://blip.ai/precos/" className="faq-links-link">Existe limitação de nº de mensagens ou de bots? </a>
                <a href="https://docs.blip.ai/#throughputs" className="faq-links-link">Qual o throughput do plano FREE?</a>
                <a href="http://blip.ai/precos/" className="faq-links-link">Qual a SLA para usuários gratuitos? </a>
                <a href="http://blip.ai/precos/" className="faq-links-link">Posso utilizar o WhatsApp no plano FREE? </a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title"> Integrações</p>
              </div>
              <div className="faq-links">
                <a href="#" className="faq-links-link">Posso integrar o BLiP ao meu sistema? </a>
                <a href="/integrations" className="faq-links-link">Quais integrações disponíveis no BLiP? </a>
                <a href="#" className="faq-links-link">O BLiP possui API?</a>
                <a href="#" className="faq-links-link">Posso enviar os dados do BLiP para outros sistemas? </a>
                <a href="https://take.net/fale-conosco/" className="faq-links-link">Como ser usuário Enterprise? </a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title">Canais</p>
              </div>
              <div className="faq-links">
                <a href="/channels" className="faq-links-link">Quais os canais de suportados pelo BLiP? </a>
                <a href="/docs/channels/whatsapp/publicando-bot-no-whatsapp/" className="faq-links-link">Como habilitar o canal WhatsApp? </a>
                <a href="/channels" className="faq-links-link">Qual conteúdos são suportados pelos canais?</a>
                <a href="#" className="faq-links-link">Posso criar meu próprio canal? </a>
                <a href="/docs/channels/blip-chat/adicionar-bot-site-blip-chat/" className="faq-links-link">Posso adicionar um bot no meu site (ou app)? </a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title"> Segurança LGPD/GDPR</p>
              </div>
              <div className="faq-links">
                <a href="/security" className="faq-links-link">O BLiP possui alguma certificação de segurança? </a>
                <a href="/security" className="faq-links-link">O BLiP está em conformidade com a LGPD? </a>
                <a href="/security" className="faq-links-link">Qual o processo de criptografia dos dados no BLiP?</a>
                <a href="/security" className="faq-links-link">O BLiP possui um plano de continuidade de negócio? </a>
                <a href="/security" className="faq-links-link">Qual o procedimento de desastre recovery do BLiP? </a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title">Recursos</p>
              </div>
              <div className="faq-links">
                <a href="https://docs.blip.ai" className="faq-links-link">Qual o link para a API Reference (docs)? </a>
                <a href="/changelog" className="faq-links-link">Como acompanhar os últimos lançamentos do BLiP? </a>
                <a href="https://github.com/takenet" className="faq-links-link">Posso contribuir com a plataforma?</a>
                <a href="https://status.blip.ai/" className="faq-links-link">Acho que o BLiP caiu 😬, como ver o status? </a>
                <a href="https://github.com/takenet" className="faq-links-link">Gosto de código, tem algum exemplo ai? </a>
              </div>
            </div>

            <div className="card-faq">
              <div className="title-faq">
                <p className="title"> Comunidade</p>
              </div>
              <div className="faq-links">
                <a href="/beta" className="faq-links-link">Como testar as novidades em primeira mão? </a>
                <a href="https://ideas.blip.ai/" className="faq-links-link">Quero sugerir uma funcionalidade, posso? </a>
                <a href="/community" className="faq-links-link">Qual o próximo evento sobre o BLiP?</a>
                <a href="https://forum.blip.ai" className="faq-links-link">Onde cadastro dúvidas e perguntas? </a>
                <a href="https://www.facebook.com/groups/BLiP.Community" className="faq-links-link">Como me conectar com outros BLiPPers? </a>
              </div>
            </div>


            <div className="card-faq">
              <div className="title-faq">
                <p className="title">Soluções</p>
              </div>
              <div className="faq-links">
                <a href="/blipareas" className="faq-links-link">O que posso resolver com o BLiP? </a>
                <a href="/docs/helpdesk/blipdesk/visao-geral-desk/" className="faq-links-link">Da pra fazer atendimento humano? </a>
                <a href="#" className="faq-links-link">Preciso vender mais, o BLiP ajuda?</a>
                <a href="/channels" className="faq-links-link">Da pra usar o BLiP como um broker multicanal? </a>
                <a href="/docs/router/hierarquia-bots-subbots/" className="faq-links-link">Como orquestrar diferentes iniciativas de bots na minha empresa? </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Faq.title = 'FAQ';
module.exports = Faq; 