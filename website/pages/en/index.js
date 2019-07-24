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
              <div className="card-home-main">
                <div className="card-img">
                <div className="section-icon-circle-card section-icon-circle-card--bot">
                    <img src="img/illustrations/Estrela-1.svg"/>
                </div>
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <h3>Introdução à plataforma</h3>
                  </div>
                  <p className="card-text">Este nível é para pessoas que tem pouca intimidade com o universo de contatos inteligentes e criação de chatbots.</p>
                  <div className="card-icon">
                    <BlipIcon name="arrow-ball-down-solid" className="bp-fs-1 bp-fill-bot"></BlipIcon> 
                  </div>
                  <p className="card-text-mobile">Para pessoas que tem pouca intimidade com o universo de contatos inteligentes e criação de chatbots.</p>
                </div>
              </div>

              <div className="card-home-main">
                <div className="card-img">
                <div className="section-icon-circle-card section-icon-circle-card--watermelon">
                    <img src="img/illustrations/Estrela-2.svg"/>
                </div>
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <h3>Explorando a plataforma</h3>
                  </div>
                  <div className="card-icon">
                    <BlipIcon name="arrow-ball-down-solid" className="bp-fs-1 bp-fill-bot"></BlipIcon> 
                  </div>
                  <p className="card-text">Este nível é para pessoas que conhecem o BLiP ou já estão familiarizadas com o universo de contatos inteligentes.</p>
                  <p className="card-text-mobile">Para pessoas que tem pouca intimidade com o universo de contatos inteligentes e criação de chatbots.</p>
                </div>
              </div>
              <div className="card-home-main">
                <div className="card-img">
                  <div className="section-icon-circle-card section-icon-circle-card--warning">
                    <img src="img/illustrations/Estrela-3.svg"/>
                  </div>
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <h3>Dominando a plataforma</h3>
                  </div>
                  <div className="card-icon">
                    <BlipIcon name="arrow-ball-down-solid" className="bp-fs-1 bp-fill-bot"></BlipIcon> 
                  </div>
                  <p className="card-text">Este nível é para usuários do BLiP e que tem domínio de programação e buscam utilizar todo o potencial da plataforma!</p>
                  <p className="card-text-mobile">Para pessoas que tem pouca intimidade com o universo de contatos inteligentes e criação de chatbots.</p>
                </div>
              </div>
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

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
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
      //  <Block background="light">
      //   {[
      //     {
      //       content:
      //         'O BLiP está em constante melhoria e adoramos quando nossos usuários nos ajudam a melhorar!',
      //       image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
      //       imageAlign: 'right',
      //       title: 'Tire dúvidas e faça sugestões',
      //     },
      // </Block>]}
      //<img src="img/illustrations/person-1.svg"/>

      <div className="div-forum-ideas">

        <h2 className="div-forum-ideas-title">Tire dúvidas e faça sugestões!</h2>
        <p className="div-forum-ideas-text">O BLiP está em constante melhoria e adoramos quando nossos usuários nos ajudam a melhorar!</p>

        <div className="div-forum-ideas-forum-balloon">
          <div className="section-icon-circle section-icon-circle--sea">
            <BlipIcon name="forum" className="bp-fs-1 bp-fill-sea"></BlipIcon>
          </div>
          <div>
            <h3 className="div-forum-ideas-balloon-title">Fórum</h3>
            <p className="div-forum-ideas-balloon-text">Não encontrou o que procurava aqui no nosso help center? Sendo assim você pode abrir um chamado para outros usuários ou nosso setor de suporte ajudar a tirar suas dúvidas!</p>
          </div>
        </div>

        <div className="div-forum-ideas-ideas-balloon">
          <div className="section-icon-circle section-icon-circle--doritos">
            <BlipIcon name="blip-ideas" className="bp-fs-1 bp-fill-doritos"></BlipIcon>
          </div>
          <div>
            <h3 className="div-forum-ideas-balloon-title">BLiP Ideas</h3>
            <p className="div-forum-ideas-balloon-text">Alguma ideia para melhorarmos a plataforma? Conta para gente! As ideias mais votadas são analisadas e podem se tornar uma de nossas features</p>
          </div>
        </div>

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
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
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
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
