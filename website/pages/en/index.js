/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');


const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
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
      <use xlinkHref={`${defs}#${this.props.name}`}/>
    </svg>
    );
  }
}


class HomeSplash extends React.Component { 
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <div>
        <div className="div-rectangle-main">
          <img className="main-logo" src="img/logo.svg"/>
            <h1 className="main-title"> Estamos aqui para te ajudar!</h1>
            <div className="main-subtitle">
              Antes de começar a explorar, que tal escolher uma área de conhecimento?
              <p className="main-subsubtitle">Os níveis de conhecimento servem para melhor filtrar os conteúdos que podem auxiliar a tirar suas dúvidas =)</p>
            </div>
        </div>
            <div className="flexbox-container">
              <a href="#" className="nonClickable"><div className="card-home-main" id="card1">
                <div className="card-img">
                <div className="section-icon-circle-card section-icon-circle-card--bot">
                    <img src="img/illustrations/Estrela-1.svg"/>
                </div>
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <p>Introdução à plataforma</p>
                  </div>
                  <p className="card-text">Área para usuários com pouca intimidade sobre contatos inteligentes e criação de chatbots.</p>
                  <div className="card-icon">
                    <BlipIcon name="arrow-ball-down-solid" className="bp-fs-1 bp-fill-bot"></BlipIcon> 
                  </div>
                  <a href="#" className="card-button">Começar aqui</a>
                  <p className="card-text-mobile">Para pessoas que tem pouca intimidade com o universo de contatos inteligentes e criação de chatbots.</p>
                </div>
              </div></a>

              
              <a href="#" className="nonClickable"><div className="card-home-main" id="card2">
                <div className="card-img">
                <div className="section-icon-circle-card section-icon-circle-card--watermelon">
                    <img src="img/illustrations/Estrela-2.svg"/>
                </div>
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <p>Explorando a plataforma</p>
                  </div>
                  <div className="card-icon">
                    <BlipIcon name="arrow-ball-down-solid" className="bp-fs-1 bp-fill-bot"></BlipIcon> 
                  </div>
                  <p className="card-text">Área para usuários com pouca intimidade sobre contatos inteligentes e criação de chatbots.</p>
                  <a href="#" className="card-button">Começar aqui</a>
                  <p className="card-text-mobile">Para pessoas que conhecem o BLiP ou já estão familiarizadas com o universo de contatos inteligentes.</p>
                </div>
              </div></a>
              
              <a href="#" className="nonClickable"><div className="card-home-main" id="card3">
                <div className="card-img">
                  <div className="section-icon-circle-card section-icon-circle-card--warning">
                    <img src="img/illustrations/Estrela-3.svg"/>
                  </div>
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <p>Dominando a plataforma</p>
                  </div>
                  <div className="card-icon">
                    <BlipIcon name="arrow-ball-down-solid" className="bp-fs-1 bp-fill-bot"></BlipIcon> 
                  </div>
                  <p className="card-text">Área para usuários com pouca intimidade sobre contatos inteligentes e criação de chatbots.</p>
                  <a href="#" className="card-button">Começar aqui</a>
                  <p className="card-text-mobile">Para usuários do BLiP e que tem domínio de programação e buscam utilizar todo o potencial da plataforma!</p>
                </div>
              </div></a>
            
            </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

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

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const RecentAndAccessed = () => (
      <div className="flexbox-recent-accessed">
        
        <div className="flexbox-recent-accessed-lists">
          
          <div className="div-recent-accessed-list">
            
            <h2 className="h2-recent-accessed">Mais recentes</h2>
            
            <ul className= "ul-recent-accessed">

              <li>
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  Facilitando a criação de seu chatbot através das extensões
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
              <li>
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  Conceitos básicos para utilizar NLP e IA em chatbots
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
              <li>
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  O que é o BLiP Chat?
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
              <li>
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  O que é o Workplace?
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

            </ul>
          
          </div>
          
          <div className="div-recent-accessed-list">
            
            <h2 className="h2-recent-accessed">Mais acessados</h2>

            <ul className="ul-recent-accessed">

              <li>
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  Facilitando a criação de seu chatbot através das extensões
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
              <li>
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  Conceitos básicos para utilizar NLP e IA em chatbots
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
              <li>
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  O que é o BLiP Chat?
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
              <li>
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  O que é o Workplace?
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

            </ul>
          
          </div>
        
        </div>

        <div className="div-see-more">
          
        </div>
      
      </div>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const ForumAndIdeas = () => (
      <div className="div-forum-ideas">

        <h2 className="div-forum-ideas-title">Tire dúvidas e faça sugestões!</h2>
        <p className="div-forum-ideas-text">O BLiP está em constante melhoria e adoramos quando nossos usuários nos ajudam a melhorar!</p>

        <a href= 'https://forum.blip.ai/' target = "_blank">
          <div className="div-forum-ideas-forum-card">
            <div className="section-icon-circle-forum-ideas-card section-icon-circle-forum-ideas-card--sea">
              <BlipIcon name="forum" className="bp-fs-1 bp-fill-sea"></BlipIcon>
            </div>
            <div>
              <h3 className="div-forum-ideas-card-title">Fórum</h3>
              <p className="div-forum-ideas-card-text">Não encontrou o que procurava aqui no nosso help center? Sendo assim você pode abrir um chamado para outros usuários ou nosso setor de suporte ajudar a tirar suas dúvidas!</p>
            </div>
          </div>
        </a>

        <a href= 'https://ideas.blip.ai/' target = "_blank">
          <div className="div-forum-ideas-ideas-card">
            <div className="section-icon-circle-forum-ideas-card section-icon-circle-forum-ideas-card--doritos">
              <BlipIcon name="blip-ideas" className="bp-fs-1 bp-fill-doritos"></BlipIcon>
            </div>
            <div>
              <h3 className="div-forum-ideas-card-title">BLiP Ideas</h3>
              <p className="div-forum-ideas-card-text">Alguma ideia para melhorarmos a plataforma? Conta para gente! As ideias mais votadas são analisadas e podem se tornar uma de nossas features.</p>
            </div>
          </div>
        </a>

      </div>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      //area do beta
      return (
        <div className="div-beta-main">
         
          <div className="info">
            <div className="title">
              <p> Torne-se um usuário beta! </p>
            </div>
            <div className="text">
              <p> Ao se tornar um usuário beta você será um dos primeiros a testar as novas feautres que serão lançadas</p>
            </div>
          </div>

          <div className="div-form-beta">
          <form className="form-beta">
            <label htmlFor="email" className="label-beta">E-mail</label>
              <br></br>
              <input type="email" id="email" name="email"   required className="form-input-email" placeholder="Digite o seu e-mail"></input>
              <input type="button" className="button-beta" onClick={() => console.log('Hello world!')} value="Assinar"></input>
            </form>
          </div>

        </div>

      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <ForumAndIdeas />
          <RecentAndAccessed />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
