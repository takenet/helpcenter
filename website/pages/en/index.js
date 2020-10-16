/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const translate = require('../../server/translate.js').translate;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;


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


class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { url, baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    return (
      <div>
        <div className="div-rectangle-main">
          <img className="main-logo" src="/img/logo.png" />
          <h1 className="main-title"><translate>Estamos aqui para te ajudar!</translate> </h1>
          <div className="main-subtitle">
            <translate>Antes de começar a explorar, que tal escolher uma área de conhecimento?</translate>
            <p className="main-subsubtitle"><translate>Os níveis de conhecimento servem para melhor filtrar os conteúdos que podem auxiliar a tirar suas dúvidas =)</translate></p>
          </div>
        </div>
        <div className="flexbox-container">
          <a href="/docs/introduction/visao-geral-da-plataforma" className="nonClickable"><div className="card-home-main" id="card1">
            <div className="card-img">
              <div className="section-icon-circle-card section-icon-circle-card--bot">
                <img src={url + "/img/illustrations/Estrela-1.svg"} />
              </div>
            </div>
            <div className="card-info">
              <div className="card-title">
                <p><translate>Introdução à plataforma</translate></p>
              </div>
              <p className="card-text"><translate>Começou a usar o BLiP agora? Preparamos este conteúdo para ajudar nos seus primeiros passos.</translate></p>
              <div className="card-icon">
                <BlipIcon name="arrow-ball-down-solid" className="bp-fs-2 bp-fill-bot"></BlipIcon>
              </div>
              <a href="/docs/introduction/visao-geral-da-plataforma" className="card-button">Começar aqui</a>
              <p className="card-text-mobile"><translate>Começou a usar o BLiP agora? Preparamos este conteúdo exclusivamente para ajudar nos seus primeiros passos.</translate></p>
            </div>
          </div></a>

          <a href="/blipareas" className="nonClickable"><div className="card-home-main" id="card2">
            <div className="card-img">
              <div className="section-icon-circle-card section-icon-circle-card--watermelon">
                <img src={url + "/img/illustrations/Estrela-2.svg"} />
              </div>
            </div>
            <div className="card-info">
              <div className="card-title">
                <p><translate>Explorando a plataforma</translate></p>
              </div>
              <div className="card-icon">
                <BlipIcon name="arrow-ball-down-solid" className="bp-fs-2 bp-fill-bot"></BlipIcon>
              </div>
              <p className="card-text"><translate>Para pessoas que conhecem o BLiP ou já estão familiarizadas com o universo de contatos inteligentes.</translate></p>
              <a href="/blipareas" className="card-button"><translate>Começar aqui</translate></a>
              <p className="card-text-mobile"><translate>Para pessoas que conhecem o BLiP ou já estão familiarizadas com o universo de contatos inteligentes.</translate></p>
            </div>
          </div></a>

          <a href="https://docs.blip.ai" className="nonClickable">
            <div className="card-home-main" id="card3">
              <div className="card-img">
                <div className="section-icon-circle-card section-icon-circle-card--warning">
                  <img src={url + "/img/illustrations/Estrela-3.svg"} />
                </div>
              </div>
              <div className="card-info">
                <div className="card-title">
                  <p><translate>Dominando o BLiP</translate></p>
                </div>
                <div className="card-icon">
                  <BlipIcon name="arrow-ball-down-solid" className="bp-fs-2 bp-fill-bot"></BlipIcon>
                </div>
                <p className="card-text"><translate>Para usuários do BLiP e que tem domínio de programação e buscam utilizar todo o potencial da plataforma!</translate></p>
                <a target="blank" href="https://docs.blip.ai" className="card-button"><translate>Começar aqui</translate></a>
                <p className="card-text-mobile"><translate>Para usuários do BLiP e que tem domínio de programação e buscam utilizar todo o potencial da plataforma!</translate></p>
              </div>
            </div>
          </a>

        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    event.prevent
    this.setState({ email: event.target.value });
  }

  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );


    const RecentAndAccessed = () => (
      <div className="flexbox-recent-accessed">

        {/* -------------------------DESKTOP VERSION------------------------- */}

        <div className="recent-accessed-desktop">

          <div className="flexbox-recent-accessed-lists">

            <div className="div-recent-accessed-list">

              <h2 className="h2-recent-accessed"><translate>Mais recentes</translate></h2>

              <ul className="ul-recent-accessed">

              <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/helpdesk/blipdesk/como-finalizar-tickets">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    <translate>Como finalizar tickets?</translate>
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/channels/whatsapp/como-salvar-numero-whatsapp" >
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    <translate>Como salvar o número do WhatsApp de um contato?</translate>
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/en/builder/criando-carrinho-compras/">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    Como criar um carrinho de compras usando o Builder
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/en/channels/whatsapp/qualidade-contato-whatsapp">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    Qualidade do contato no WhatsApp
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

              </ul>

            </div>

            <div className="div-recent-accessed-list">

              <h2 className="h2-recent-accessed"><translate>Mais acessados</translate></h2>

              <ul className="ul-recent-accessed">

                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/introduction/como-criar-um-bot-com-builder/">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    <translate>Como criar um bot com o Builder do BLiP</translate>
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/ai/nlp/como-configurar-dialogflow/">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    <translate>Como configurar o DialogFlow como um provedor de Inteligência Artificial</translate>
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/builder/visao-geral-do-builder/">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    <translate>Visão geral do Builder</translate>
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="docs/channels/whatsapp/enviar-notificacao-whatsapp-blip-api/">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    <translate>Enviar notificações WhatsApp via API do BLiP</translate>
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

              </ul>

            </div>

          </div>

          <div className="div-see-more">

            <a role="button" href="/docs/introduction/visao-geral-da-plataforma" className="bp-btn bp-btn--bot btn--recent-accessed" ><translate>Veja outros artigos!</translate></a>
            <hr className="bp-divider-h bp-divider--see-more"></hr>

          </div>

        </div>

        {/* -------------------------MOBILE VERSION------------------------- */}

        <div className="recent-accessed-mobile">

          <div className="div-recent-accessed-list">

            <label htmlFor="check1-recent-accessed">

              <div className="btn-title-recent-accessed">
                <h2 className="h2-recent-accessed"><translate>Artigos mais <strong>recentes</strong></translate></h2>
                <BlipIcon name="arrow-ball-down-outline" className="bp-fs-4 bp-fill-bot"></BlipIcon>
              </div>

              <input id="check1-recent-accessed" className="hidden-checkbox" type="checkbox" />

              <div className="hidden-content">
                <ul className="ul-recent-accessed">
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/helpdesk/customprovider/como-conectar-a-um-canal-de-atendimento-personalizado" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      <translate>Como conectar a um canal de atendimento personalizado</translate>
                    </a>
                  </li>
                  <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/channels/blip-chat/funcionalidades-blip-chat-widget" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      <translate>Funcionalidades do BLiP Chat Widget</translate>
                    </a>
                  </li>
                  <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/builder/visao-geral-das-acoes" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      <translate>Visão geral das ações</translate>
                    </a>
                  </li>
                  <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/channels/blip-chat/como-adicionar-bot-em-app-android-utilizando-blip" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      <translate>Como adicionar um bot em um aplicativo Android...</translate>
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

            </label>

          </div>

          <div className="div-recent-accessed-list">

            <label htmlFor="check2-recent-accessed">

              <div className="btn-title-recent-accessed">
                <h2 className="h2-recent-accessed"><translate>Artigos mais <strong>acessados</strong></translate></h2>
                <BlipIcon name="arrow-ball-down-outline" className="bp-fs-4 bp-fill-bot"></BlipIcon>
              </div>

              <input id="check2-recent-accessed" className="hidden-checkbox" type="checkbox" />

              <div className="hidden-content">
                <ul className="ul-recent-accessed">
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/introduction/como-criar-um-bot-com-builder/" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      <translate>Como criar um bot com o Builder do BLiP</translate>
                    </a>
                  </li>
                  <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/ai/nlp/como-configurar-dialogflow/" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      <translate> Como configurar o DialogFlow como um provedor de Inteligência Artificial</translate>
                    </a>
                  </li>
                  <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/builder/visao-geral-do-builder/" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      <translate>Visão geral do Builder</translate>
                    </a>
                  </li>
                  <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="docs/channels/whatsapp/enviar-notificacao-whatsapp-blip-api/" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      <translate>Enviar notificações WhatsApp via API do BLiP</translate>
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

            </label>

          </div>

          <div className="div-see-more">
            <a role="button" href="/articles" className="bp-btn bp-btn--bot btn--recent-accessed">
              <translate>Veja outros artigos!</translate>
            </a>
          </div>

        </div>

      </div>
    );

    const ForumAndIdeas = () => (
      <div className="div-forum-ideas">

        <h2 className="h2-forum-ideas"><translate>Tire dúvidas e faça sugestões!</translate></h2>
        <p className="p-forum-ideas"><translate>O BLiP está em constante melhoria e adoramos quando nossos usuários nos ajudam a melhorar!</translate></p>

        <div className="flexbox-forum-ideas">

          <a className="a-forum-ideas" href='https://forum.blip.ai/' target="_blank">
            <div className="flexbox-forum-ideas-card">
              <div className="section-icon-circle-forum-ideas-card section-icon-circle-forum-ideas-card--sea">
                <BlipIcon name="forum" className="bp-fs-1 bp-fill-sea"></BlipIcon>
              </div>
              <div className="section-card">
                <h3 className="h3-forum-ideas-card"><translate>Fórum</translate></h3>
                <p className="p-forum-ideas-card"><translate>Não encontrou o que procurava aqui no nosso help center? Abra um tópico no fórum para que outros usuários possam te ajudar!</translate></p>
              </div>
            </div>
          </a>

          <a className="a-forum-ideas" href='https://ideas.blip.ai/' target="_blank">
            <div className="flexbox-forum-ideas-card">
              <div className="section-icon-circle-forum-ideas-card section-icon-circle-forum-ideas-card--doritos">
                <BlipIcon name="blip-ideas" className="bp-fs-1 bp-fill-doritos"></BlipIcon>
              </div>
              <div className="section-card">
                <h3 className="h3-forum-ideas-card"><translate>BLiP Ideas</translate></h3>
                <p className="p-forum-ideas-card"><translate>Alguma ideia para melhorar a plataforma? Crie uma sugestão no BLiP Ideas! As ideias mais votadas são analisadas e podem se tornar novas features.</translate></p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );

    const AprendaMais = () => (
      <div className="div-aprenda-main">
        <p className="title"> <translate>Aprenda mais sobre o universo dos contatos inteligentes</translate> </p>
        <p className="subtitle"> <translate>Todas as informações que você precisa para saber para utilizar o BLiP como um expert estão em nas categorias abaixo: </translate></p>
        <div className="articles">

          <label htmlFor="check1-aprendaMais" className="cards">
            <p className="titles"><translate>Primeiro acesso</translate></p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check1-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://account.blip.ai/register"><translate>Criar uma conta</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://portal.blip.ai"><translate>Portal</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="docs/introduction/visao-geral-da-plataforma"><translate>Visão geral da plataforma</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="docs/introduction/como-criar-um-bot-com-builder"><translate>Como criar um bot com o Builder</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="docs/builder/visao-geral-do-builder"><translate>Visão geral do Builder</translate></a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>

          <label htmlFor="check2-aprendaMais" className="cards">
            <p className="titles"><translate>Canais</translate></p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check2-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/whatsapp"><translate>WhatsApp</translate> </a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/businesschat"><translate>Apple Business Chat</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/messenger"><translate>Messenger</translate> </a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/blipchat"><translate>BLiP Chat</translate> </a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/googleassistant"><translate>Google Assistant</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/channels"><translate>Ver todos</translate></a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>

          <label htmlFor="check3-aprendaMais" className="cards">
            <p className="titles"><translate>Integrações</translate></p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check3-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/botanalytics"><translate>Botanalytics</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/chatbase"><translate>Chatbase</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/dashbot"><translate>Dashbot</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/ai"><translate>DialogFlow</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/integrations"><translate>Ver todos</translate></a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>

          <label htmlFor="check4-aprendaMais" className="cards">
            <p className="titles"><translate>Recursos</translate></p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check4-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://docs.blip.ai"><translate>API Reference</translate></a></li>
                {/* <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/changelog">Changelogs</a></li> */}
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/faq">Faq</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://github.com/takenet"><translate>Github</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/templates"><translate>Templates de chatbot</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/contenttypes"><translate>Tipos de conteúdos por canal</translate></a></li>

                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://status.blip.ai"><translate>Status</translate></a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>

          <label htmlFor="check5-aprendaMais" className="cards">
            <p className="titles"><translate>Explore o BLiP</translate></p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check5-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/helpdesk"><translate>Atendimento Humano</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/builder"><translate>Builder</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/channels"><translate>Canais</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/ai"><translate>Inteligência Artificial</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/analytics"><translate>Métricas e Analytics</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/growth"><translate>Retenção e Engajamento</translate></a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>

          <label htmlFor="check6-aprendaMais" className="cards">
            <p className="titles"><translate>Cursos</translate> </p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check6-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="http://learn.take.net/courses/criando-chatbots-com-a-plataforma-blip"><translate>Criando chatbots com a plataforma BLiP</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://botcamp.blip.ai"><translate>BLiP Botcamp</translate></a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>

          <label htmlFor="check7-aprendaMais" className="cards">
            <p className="titles"><translate>Comunidade</translate></p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check7-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/beta"><translate>BLiP Beta</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://ideas.blip.ai">BLiP Ideas </a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://meetup.blip.ai"><translate>Eventos</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://forum.blip.ai"><translate>Fórum</translate></a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>


          <label htmlFor="check8-aprendaMais" className="cards">
            <p className="titles"><translate>Políticas</translate> </p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check8-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                {/* <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/">DPA</a></li> */}
                {/* <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/">Governança de Dados</a></li> */}
                {/* <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/">Legal</a></li> */}
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/docs/security/cookies"><translate>Políticas de Cookies</translate></a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/docs/security/privacy"><translate>Políticas de Privacidade</translate></a></li>
                {/* <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/">Programa de Privacidade e Proteção de Dados</a></li> */}
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/docs/security/terms"><translate>Termos de Uso</translate></a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>

        </div>
      </div>
    );


    class FormBeta extends React.Component {

      render() {
        return (
          <div className="div-beta-main">

            <div className="info">
              <p className="title"> <translate>Torne-se um usuário beta!</translate> </p>
              <p className="text"> <translate>Ao se tornar um usuário beta você será um dos primeiros a testar as novas features que serão lançadas</translate></p>
            </div>

            <div className="div-form-beta">
              <div id="form-beta" name="form-beta">
                <input type="email"
                  id="emailForm"
                  name="emailForm"
                  required
                  className="form-input-email"
                  placeholder="Digite o seu e-mail">
                </input>
                <button id="Bsubmit" disabled={true} className="button-beta"><translate>Quero ser beta!</translate></button>
              </div>
            </div>

            <div id="myModal" className="modal-beta">
              <div className="modal-beta-content">
                <div className="modal-beta-header">
                  <BlipIcon name="checkball-outline" className="bp-fs-1 bp-fill-white"></BlipIcon>
                  <p className="modal-beta-title"><translate>Parabéns, você agora é um beta!</translate></p>
                </div>
                <div className="modal-beta-body">
                  <p className="modal-beta-text"><translate>Em alguns instantes você vai receber um e-mail com mais informações</translate></p>
                  <button className="close-beta" > Ok</button>
                </div>
              </div>
            </div>

            <ScriptForm />

          </div>

        );
      };
    };

    class ScriptForm extends React.Component {
      render() {
        return (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        var btn = document.getElementById("Bsubmit");
                        emailF =  document.getElementById("emailForm");
                        var modal = document.getElementById("myModal");
                        var span = document.getElementsByClassName("close-beta")[0];
        
                        btn.onclick = function() {
                        var data = JSON.stringify({
                            "Email": emailF.value
                        });
                           axios.post('https://helpcenter-api.azurewebsites.net/api/betauser', {
                                "Email": emailF.value
                            }, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin' : '*',
                                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                                'X-Requested-With': 'XMLHttpRequest'
                            }
                            })
                            .then(function (response) {
                                modal.style.display = "block";
                            });
                            
                        };

                        span.onclick = function() {
                            modal.style.display = "none";
                        }; 
                        

                    document.getElementById("emailForm").addEventListener("keyup", function() {
                        var nameInput = document.getElementById('emailForm').value;
                        if (nameInput != "") {
                            document.getElementById('Bsubmit').removeAttribute("disabled");
                        } else {
                            document.getElementById('Bsubmit').setAttribute("disabled", null);
                        }
                    });

                `
            }}
          />
        );
      }
    }

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <AprendaMais />
          <ForumAndIdeas />
          <RecentAndAccessed />
          <FormBeta />
        </div>
      </div>
    );
  }
}

module.exports = Index;



Index.defaultProps = {
  language: 'pt-BR',
};
