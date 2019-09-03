/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

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
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    return (
      <div>
        <div className="div-rectangle-main">
          <img className="main-logo" src="img/logo.svg" />
          <h1 className="main-title"> Estamos aqui para te ajudar!</h1>
          <div className="main-subtitle">
            Antes de começar a explorar, que tal escolher uma área de conhecimento?
              <p className="main-subsubtitle">Os níveis de conhecimento servem para melhor filtrar os conteúdos que podem auxiliar a tirar suas dúvidas =)</p>
          </div>
        </div>
        <div className="flexbox-container">
          <a href="/introduction" className="nonClickable"><div className="card-home-main" id="card1">
            <div className="card-img">
              <div className="section-icon-circle-card section-icon-circle-card--bot">
                <img src="img/illustrations/Estrela-1.svg" />
              </div>
            </div>
            <div className="card-info">
              <div className="card-title">
                <p>Introdução à plataforma</p>
              </div>
              <p className="card-text">Começou a usar o BLiP agora? Preparamos este conteúdo exclusivamente para ajudar nos seus primeiros passos.</p>
              <div className="card-icon">
                <BlipIcon name="arrow-ball-down-solid" className="bp-fs-2 bp-fill-bot"></BlipIcon>
              </div>
              <a href="/docs/introduction/visao-geral-da-plataforma" className="card-button">Começar aqui</a>
              <p className="card-text-mobile">Começou a usar o BLiP agora? Preparamos este conteúdo exclusivamente para ajudar nos seus primeiros passos.</p>
            </div>
          </div></a>

          <a href="/exploring" className="nonClickable"><div className="card-home-main" id="card2">
            <div className="card-img">
              <div className="section-icon-circle-card section-icon-circle-card--watermelon">
                <img src="img/illustrations/Estrela-2.svg" />
              </div>
            </div>
            <div className="card-info">
              <div className="card-title">
                <p>Explorando a plataforma</p>
              </div>
              <div className="card-icon">
                <BlipIcon name="arrow-ball-down-solid" className="bp-fs-2 bp-fill-bot"></BlipIcon>
              </div>
              <p className="card-text">Para pessoas que conhecem o BLiP ou já estão familiarizadas com o universo de contatos inteligentes.</p>
              <a href="/blipareas" className="card-button">Começar aqui</a>
              <p className="card-text-mobile">Para pessoas que conhecem o BLiP ou já estão familiarizadas com o universo de contatos inteligentes.</p>
            </div>
          </div></a>

          <a href="/dominating" className="nonClickable"><div className="card-home-main" id="card3">
            <div className="card-img">
              <div className="section-icon-circle-card section-icon-circle-card--warning">
                <img src="img/illustrations/Estrela-3.svg" />
              </div>
            </div>
            <div className="card-info">
              <div className="card-title">
                <p>Dominando o BLiP</p>
              </div>
              <div className="card-icon">
                <BlipIcon name="arrow-ball-down-solid" className="bp-fs-2 bp-fill-bot"></BlipIcon>
              </div>
              <p className="card-text">Para usuários do BLiP e que tem domínio de programação e buscam utilizar todo o potencial da plataforma!</p>
              <a target="blank" href="https://docs.blip.ai" className="card-button">Começar aqui</a>
              <p className="card-text-mobile">Para usuários do BLiP e que tem domínio de programação e buscam utilizar todo o potencial da plataforma!</p>
            </div>
          </div></a>

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

              <h2 className="h2-recent-accessed">Mais recentes</h2>

              <ul className="ul-recent-accessed">

                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    Facilitando a criação de seu chatbot através das extensões
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    Conceitos básicos para utilizar NLP e IA em chatbots
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    O que é o BLiP Chat?
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    O que é o Workplace?
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

              </ul>

            </div>

            <div className="div-recent-accessed-list">

              <h2 className="h2-recent-accessed">Mais acessados</h2>

              <ul className="ul-recent-accessed">

                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    Facilitando a criação de seu chatbot através das extensões
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    Conceitos básicos para utilizar NLP e IA em chatbots
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    O que é o BLiP Chat?
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed">
                  <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                    <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                    O que é o Workplace?
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

              </ul>

            </div>

          </div>

          <div className="div-see-more">

            <a role="button" href="/articles" className="bp-btn bp-btn--bot btn--recent-accessed" >Veja outros artigos!</a>
            <hr className="bp-divider-h bp-divider--see-more"></hr>

          </div>

        </div>

        {/* -------------------------MOBILE VERSION------------------------- */}

        <div className="recent-accessed-mobile">

          <div className="div-recent-accessed-list">

            <label htmlFor="check1-recent-accessed">

              <div className="btn-title-recent-accessed">
                <h2 className="h2-recent-accessed">Artigos mais <strong>recentes</strong></h2>
                <BlipIcon name="arrow-ball-down-outline" className="bp-fs-4 bp-fill-bot"></BlipIcon>
              </div>

              <input id="check1-recent-accessed" className="hidden-checkbox" type="checkbox" />

              <div className="hidden-content">
                <ul className="ul-recent-accessed">
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      Facilitando a criação de seu chatbot através das extensões
                    </a>
                  </li>
                  <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      Conceitos básicos para utilizar NLP e IA em chatbots
                    </a>
                  </li>
                  <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      O que é o BLiP Chat?
                    </a>
                  </li>
                  <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      O que é o Workplace?
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
                <h2 className="h2-recent-accessed">Artigos mais <strong>acessados</strong></h2>
                <BlipIcon name="arrow-ball-down-outline" className="bp-fs-4 bp-fill-bot"></BlipIcon>
              </div>

              <input id="check2-recent-accessed" className="hidden-checkbox" type="checkbox" />

              <div className="hidden-content">
                <ul className="ul-recent-accessed">
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      Facilitando a criação de seu chatbot através das extensões
                    </a>
                  </li>
                  <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      Conceitos básicos para utilizar NLP e IA em chatbots
                    </a>
                  </li>
                  <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      O que é o BLiP Chat?
                    </a>
                  </li>
                  <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                  <li className="li-recent-accessed">
                    <a className="a-recent-accessed bp-fill-bot bp-fill-suit--hover" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target="_blank">
                      <BlipIcon name="txt-file" className="bp-fs-4"></BlipIcon>
                      O que é o Workplace?
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

            </label>

          </div>

          <div className="div-see-more">
            <a role="button" href="/articles" className="bp-btn bp-btn--bot btn--recent-accessed">
              Veja outros artigos!
          </a>
          </div>

        </div>

      </div>
    );

    const ForumAndIdeas = () => (
      <div className="div-forum-ideas">

        <h2 className="h2-forum-ideas">Tire dúvidas e faça sugestões!</h2>
        <p className="p-forum-ideas">O BLiP está em constante melhoria e adoramos quando nossos usuários nos ajudam a melhorar!</p>

        <div className="flexbox-forum-ideas">

          <a className="a-forum-ideas" href='https://forum.blip.ai/' target="_blank">
            <div className="flexbox-forum-ideas-card">
              <div className="section-icon-circle-forum-ideas-card section-icon-circle-forum-ideas-card--sea">
                <BlipIcon name="forum" className="bp-fs-1 bp-fill-sea"></BlipIcon>
              </div>
              <div className="section-card">
                <h3 className="h3-forum-ideas-card">Fórum</h3>
                <p className="p-forum-ideas-card">Não encontrou o que procurava aqui no nosso help center? Abra um ticket no fórum para que outros usuários possam te ajudar!</p>
              </div>
            </div>
          </a>

          <a className="a-forum-ideas" href='https://ideas.blip.ai/' target="_blank">
            <div className="flexbox-forum-ideas-card">
              <div className="section-icon-circle-forum-ideas-card section-icon-circle-forum-ideas-card--doritos">
                <BlipIcon name="blip-ideas" className="bp-fs-1 bp-fill-doritos"></BlipIcon>
              </div>
              <div className="section-card">
                <h3 className="h3-forum-ideas-card">BLiP Ideas</h3>
                <p className="p-forum-ideas-card">Alguma ideia para melhorar a plataforma? Crie uma sugestão no BLiP Ideas! As ideias mais votadas são analisadas e podem se tornar novas features.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );

    const AprendaMais = () => (
      <div className="div-aprenda-main">
        <p className="title"> Aprenda mais sobre o universo dos contatos inteligentes </p>
        <p className="subtitle"> Todas as informações que você precisa para saber para utilizar o BLiP como um expert estão em nas categorias abaixo: </p>
        <div className="articles">

          <label htmlFor="check1-aprendaMais" className="cards">
            <p className="titles">Primeiro acesso</p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check1-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://account.blip.ai/register">Criar uma conta</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://portal.blip.ai">Portal</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="docs/introduction/visao-geral-da-plataforma">Visão geral da plataforma</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="docs/introduction/como-criar-um-bot-com-builder">Como criar um bot com o Builder</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="docs/builder/visao-geral-do-builder">Visão geral do Builder</a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>

          <label htmlFor="check2-aprendaMais" className="cards">
            <p className="titles">Canais</p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check2-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
              <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/whatsapp">WhatsApp </a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/businesschat">Apple Business Chat</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/messenger">Messenger </a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/blipchat">BLiP Chat </a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/googleassistant">Google Assistant</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/channels">Ver todos</a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>

          <label htmlFor="check3-aprendaMais" className="cards">
            <p className="titles">Integrações</p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check3-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/botanalytics">Botanalytics</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/chatbase">Chatbase</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/dashbot">Dashbot</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/ai">DialogFlow</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/integrations">Ver todos</a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>

          <label htmlFor="check4-aprendaMais" className="cards">
            <p className="titles">Recursos</p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check4-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://docs.blip.ai">API Reference</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/changelog">Changelogs</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/faq">Faq</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://github.com/takenet">Github</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://status.blip.ai">Status</a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>

          <label htmlFor="check5-aprendaMais" className="cards">
            <p className="titles">Explore o BLiP</p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check5-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/helpdesk">Atendimento Humano</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/builder">Builder</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/channels">Canais</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/ai">Inteligência Artificial</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/analytics">Métricas e Analytics</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/growth">Retenção e Engajamento</a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>

          <label htmlFor="check6-aprendaMais" className="cards">
            <p className="titles">Cursos </p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check6-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="http://learn.take.net/courses/criando-chatbots-com-a-plataforma-blip">Criando chatbots com a plataforma BLiP</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://botcamp.blip.ai">BLiP Botcamp</a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>

          <label htmlFor="check7-aprendaMais" className="cards">
            <p className="titles">Comunidade</p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check7-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/beta">BLiP Beta</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://ideas.blip.ai">BLiP Ideas </a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://meetup.blip.ai">Eventos</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" target="blank" href="https://forum.blip.ai">Fórum</a></li>
              </ul>
            </div>
            <hr className="bp-divider-h--articles"></hr>
          </label>


          <label htmlFor="check8-aprendaMais" className="cards">
            <p className="titles">Políticas </p>
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
            <input id="check8-aprendaMais" className="hidden-checkbox" type="checkbox" />
            <div className="hidden-content">
              <ul className="ul-aprenda-mais">
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/">DPA</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/">Governança de Dados</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/">Legal</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/">Políticas de Cookies</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/">Políticas de Privacidade</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/">Programa de Privacidade e Proteção de Dados</a></li>
                <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="/">Termos de Uso</a></li>
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
                <p className="title"> Torne-se um usuário beta! </p>
                <p className="text"> Ao se tornar um usuário beta você será um dos primeiros a testar as novas feautres que serão lançadas</p>
            </div>

            <div className="div-form-beta">
              <form id="form-beta" name="form-beta">
                <input type="email"
                  id="emailForm"
                  name="emailForm"
                  required
                  className="form-input-email"
                  placeholder="Digite o seu e-mail">
                </input>
                <button id="Bsubmit" disabled className="button-beta">Quero ser beta!</button>
              </form>
            </div>

            <div id="myModal" className="modal-beta">
                    <div className="modal-beta-content">
                        <div className="modal-beta-header">
                            <BlipIcon name="checkball-outline" className="bp-fs-1 bp-fill-white"></BlipIcon>
                            <p className="modal-beta-title">Parabéns, você agora é um beta!</p>
                        </div>
                        <div className="modal-beta-body">
                            <p className="modal-beta-text">Em alguns instantes você vai receber um e-mail com mais informações</p>
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
                            var btn = document.getElementById("Bsubmit"),
                            emailF =  btn.form.emailForm.value;
                            var modal = document.getElementById("myModal");
                            var span = document.getElementsByClassName("close-beta")[0];
                            var eForm = btn.form.emailForm;
                
            
                            btn.onclick = function() {
                            var data = JSON.stringify({
                                "Email": btn.form.emailForm.value
                              });
                              
                              var xhr = new XMLHttpRequest();
                              xhr.withCredentials = true;
                              
                              xhr.addEventListener("readystatechange", function () {
                                if (this.readyState === 4) {
                                }
                              });
                              xhr.open("POST", "https://helpcenter-api.azurewebsites.net/api/betauser");
                              xhr.setRequestHeader("Content-Type", "application/json");
                              xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                              xhr.send(data);
                              modal.style.display = "block";
                              event.preventDefault();
     
                            }
    
                            span.onclick = function() {
                                modal.style.display = "none";
                            }
    
                        document.getElementById("emailForm").addEventListener("keyup", function() {
                            var nameInput = document.getElementById('emailForm').value;
                            if (nameInput != "") {
                                document.getElementById('Bsubmit').removeAttribute("disabled");
                            } else {
                                document.getElementById('Bsumit').setAttribute("disabled", null);
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
