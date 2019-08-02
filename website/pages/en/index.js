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
  constructor(props){
    super(props);

    this.state = {
      email: ""
    }

    this.handleChange = this.handleChange.bind(this);
    
  } 

  handleChange(event) {
    event.prevent
    this.setState({email: event.target.value});
  }

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

   
    const RecentAndAccessed = () => (
      <div className="flexbox-recent-accessed">
        
        {/* -------------------------DESKTOP VERSION------------------------- */}
        
        <div className="recent-accessed-desktop">

          <div className="flexbox-recent-accessed-lists">
            
            <div className="div-recent-accessed-list">
              
              <h2 className="h2-recent-accessed">Mais recentes</h2>
              
              <ul className="ul-recent-accessed">

                <li className="li-recent-accessed">
                  <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                  <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                    Facilitando a criação de seu chatbot através das extensões
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed">
                  <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                  <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                    Conceitos básicos para utilizar NLP e IA em chatbots
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed">
                  <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                  <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                    O que é o BLiP Chat?
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed"> 
                  <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                  <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
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
                  <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                  <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                    Facilitando a criação de seu chatbot através das extensões
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed">
                  <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                  <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                    Conceitos básicos para utilizar NLP e IA em chatbots
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed">
                  <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                  <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                    O que é o BLiP Chat?
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
                <li className="li-recent-accessed">
                  <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                  <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                    O que é o Workplace?
                  </a>
                </li>
                <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

              </ul>
            
            </div>
          
          </div>

          <div className="div-see-more">
            
            <button className="bp-btn bp-btn--bot btn--recent-accessed">Veja outros artigos!</button>
            <hr className="bp-divider-h bp-divider--see-more"></hr>
          
          </div>

        </div>

        {/* -------------------------MOBILE VERSION------------------------- */}

        <div className="recent-accessed-mobile">

          <div className="div-recent-accessed-list">
            
            <div className= "btn-title-recent-accessed">
              <h2 className="h2-recent-accessed">Artigos mais <strong>recentes</strong></h2>
              <BlipIcon name="arrow-ball-down-outline" className="bp-fs-4 bp-fill-bot"></BlipIcon>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
            </div>
            
            <ul className="ul-recent-accessed">

              <li className="li-recent-accessed">
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  Facilitando a criação de seu chatbot através das extensões
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
              <li className="li-recent-accessed">
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  Conceitos básicos para utilizar NLP e IA em chatbots
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
              <li className="li-recent-accessed">
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  O que é o BLiP Chat?
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
              <li className="li-recent-accessed"> 
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  O que é o Workplace?
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

            </ul>
          
          </div>
          
          <div className="div-recent-accessed-list">
            
            <div className="btn-title-recent-accessed">
              <h2 className="h2-recent-accessed">Artigos mais <strong>acessados</strong></h2>
              <BlipIcon name="arrow-ball-down-outline" className="bp-fs-4 bp-fill-bot"></BlipIcon>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
            </div>
            
            <ul className="ul-recent-accessed">

              <li className="li-recent-accessed">
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  Facilitando a criação de seu chatbot através das extensões
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
              <li className="li-recent-accessed">
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  Conceitos básicos para utilizar NLP e IA em chatbots
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
              <li className="li-recent-accessed">
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  O que é o BLiP Chat?
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>
              <li className="li-recent-accessed">
                <BlipIcon name="txt-file" className="bp-fs-4 bp-fill-bot"></BlipIcon>
                <a className="a-recent-accessed" href="/docs/concepts/ai/ai-conceitos-basicos-nlp-e-ai" target = "_blank">
                  O que é o Workplace?
                </a>
              </li>
              <hr className="bp-divider-h bp-divider--recent-accessed"></hr>

            </ul>
          
          </div>
        
        <div className="div-see-more">
          
          <button className="bp-btn bp-btn--bot btn--recent-accessed">Veja outros artigos!</button>
        
        </div>

        </div>
      
      </div>
    );

    const ForumAndIdeas = () => (
      <div className="div-forum-ideas">

        <h2 className="h2-forum-ideas">Tire dúvidas e faça sugestões!</h2>
        <p className="p-forum-ideas">O BLiP está em constante melhoria e adoramos quando nossos usuários nos ajudam a melhorar!</p>

        <div className="flexbox-forum-ideas">

          <a className="a-forum-ideas" href= 'https://forum.blip.ai/' target = "_blank">
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

          <a className="a-forum-ideas" href= 'https://ideas.blip.ai/' target = "_blank">
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
              <p className="titles">Primeiros acessos</p>
              <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
                <input id="check1-aprendaMais" className="hidden-checkbox" type="checkbox" />
                <div className="hidden-content">
                <ul className="ul-aprenda-mais">
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Primeiro link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Segundo link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Terceiro link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quarto link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quinto link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Sexto link </a></li>
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
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Primeiro link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Segundo link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Terceiro link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quarto link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quinto link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Sexto link </a></li>
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
                    <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Primeiro link </a></li>
                    <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Segundo link </a></li>
                    <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Terceiro link </a></li>
                    <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quarto link </a></li>
                    <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quinto link </a></li>
                    <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Sexto link </a></li>
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
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Primeiro link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Segundo link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Terceiro link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quarto link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quinto link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Sexto link </a></li>
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
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Primeiro link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Segundo link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Terceiro link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quarto link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quinto link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Sexto link </a></li>
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
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Primeiro link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Segundo link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Terceiro link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quarto link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quinto link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Sexto link </a></li>
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
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Primeiro link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Segundo link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Terceiro link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quarto link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quinto link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Sexto link </a></li>
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
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Primeiro link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Segundo link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Terceiro link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quarto link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Quinto link </a></li>
                  <li className="li-aprenda-mais"><a className="a-aprenda-mais" href="#">Sexto link </a></li>
              </ul>
                </div>
                <hr className="bp-divider-h--articles"></hr>   
          </label>
          
          
          </div>
    </div>
    );

  //area do beta
  // class FormBeta extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {email: 'bruno'};

  //     console.log(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }
    
  //     handleChange(event) {
  //       console.log(event);
  //       this.setState({email: event.target.value});
  //     }

  //     handleSubmit(event) {
  //       event.prevent();
  //       alert('Um email foi enviado: ' + this.state.email);
        
  //     }

  //     render () {
  //       return (
  //       <div className="div-beta-main">
         
  //         <div className="info">
  //           <div className="title">
  //             <p> Torne-se um usuário beta! </p>
  //           </div>
  //           <div className="text">
  //             <p> Ao se tornar um usuário beta você será um dos primeiros a testar as novas feautres que serão lançadas</p>
  //           </div>
  //         </div>

  //         <div className="div-form-beta">
  //         <form className="form-beta">
  //           <label htmlFor="email" className="label-beta">{this.state.email}</label>
  //             <br></br>
  //             <input type="email" 
  //             id="email" 
  //             name="email" 
  //             className="form-input-email" 
  //             placeholder="Digite o seu e-mail" 
  //             value={this.state.email}
  //             onChange={this.handleChange}></input>
  //             <input type="submit" onClick={this.handleSubmit} className="button-beta" value="Assinar"></input>
  //           </form>
  //         </div>

  //       </div>

  //       );
  //     };
  //   };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <AprendaMais />
          <ForumAndIdeas />
          <RecentAndAccessed />
          {/* <FormBeta /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
