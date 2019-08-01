/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
// const { Cardx } = require ('./card.js');
const CompLibrary = require('../../core/CompLibrary.js');


const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

// const { makeStyles } = require('@material-ui/core/styles');
// const clsx = require('clsx');
// const Card = require('@material-ui/core/Card');
// const CardHeader = require ('@material-ui/core/CardHeader');
// const CardMedia =  require('@material-ui/core/CardMedia');
// const CardContent = require ('@material-ui/core/CardContent');
// const CardActions =  require('@material-ui/core/CardActions');
// const Collapse =  require('@material-ui/core/Collapse');
// const Avatar = require('@material-ui/core/Avatar');
// const IconButton = require ('@material-ui/core/IconButton');
// const Typography = require ('@material-ui/core/Typography');
// const { red } = require ('@material-ui/core/colors');
// // const FavoriteIcon = require ('@material-ui/icons/Favorite');
// // const ShareIcon = require ('@material-ui/icons/Share');
// // const ExpandMoreIcon = require ('@material-ui/icons/ExpandMore');
// // const MoreVertIcon = require ('@material-ui/icons/MoreVert');

// class Cardx extends React.Component{
// render(){
// const useStyles = makeStyles(theme => ({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   function handleExpandClick() {
//     setExpanded(!expanded);
//   }
  
//   return (
//     <Card className={classes.card}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         className={classes.media}
//         image="/static/images/cards/paella.jpg"
//         title="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//             minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//             heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//             browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//             and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
//             pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//             without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//             medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//             again without stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don’t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }
// }
// }
// module.exports = Cardx;

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

        <h2 className="div-forum-ideas-title">Tire dúvidas e faça sugestões!</h2>
        <p className="div-forum-ideas-text">O BLiP está em constante melhoria e adoramos quando nossos usuários nos ajudam a melhorar!</p>

        <a href= 'https://forum.blip.ai/' target = "_blank">
          <div className="div-forum-ideas-forum-card">
            <div className="section-icon-circle-forum-ideas-card section-icon-circle-forum-ideas-card--sea">
              <BlipIcon name="forum" className="bp-fs-1 bp-fill-sea"></BlipIcon>
            </div>
            <div>
              <h3 className="div-forum-ideas-card-title">Fórum</h3>
              <p className="div-forum-ideas-card-text">Não encontrou o que procurava aqui no nosso help center? Abra um ticket no fórum para que outros usuários possam te ajudar!</p>
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
              <p className="div-forum-ideas-card-text">Alguma ideia para melhorar a plataforma? Crie uma sugestão no BLiP Ideas! As ideias mais votadas são analisadas e podem se tornar novas features.</p>
            </div>
          </div>
        </a>

      </div>
    );

    const AprendaMais = () => (
      <div className="div-aprenda-main">
        <p className="title"> Aprenda mais sobre o universo dos contatos inteligentes </p>
        <p className="subtitle"> Todas as informações que você precisa para saber para utilizar o BLiP como um expert estão em nas categorias abaixo: </p>
          <div className="articles">
          
          <div className="cards">
          <label htmlFor="check1" className="titles">Primeiros acessos
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
          </label>
          <input className="hidden-checkbox" id="check1" type="checkbox"></input>
          <div className="hidden-content">
              <ul>
                <li><a href="#">Primeiro link </a></li>
                <li><a href="#">Segundo link </a></li>
                <li><a href="#">Terceiro link </a></li>
                <li><a href="#">Quarto link </a></li>
                <li><a href="#">Quinto link </a></li>
                <li><a href="#">Sexto link </a></li>
              </ul>
          </div>
          <hr className="bp-divider-h--articles"></hr>
          </div>
             
          <div className="cards">
          <label htmlFor="check2" className="titles">Canais
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
          </label>
          <input className="hidden-checkbox" id="check2" type="checkbox"></input>
          <div className="hidden-content">
              <ul>
                <li><a href="#">Primeiro link </a></li>
                <li><a href="#">Segundo link </a></li>
                <li><a href="#">Terceiro link </a></li>
                <li><a href="#">Quarto link </a></li>
                <li><a href="#">Quinto link </a></li>
                <li><a href="#">Sexto link </a></li>
              </ul>
          </div>
          <hr className="bp-divider-h--articles"></hr>
          </div>

          <div className="cards">
          <label htmlFor="check3" className="titles">Integrações
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
          </label>
          <input className="hidden-checkbox" id="check3" type="checkbox"></input>
          <div className="hidden-content">
              <ul>
                <li><a href="#">Primeiro link </a></li>
                <li><a href="#">Segundo link </a></li>
                <li><a href="#">Terceiro link </a></li>
                <li><a href="#">Quarto link </a></li>
                <li><a href="#">Quinto link </a></li>
                <li><a href="#">Sexto link </a></li>
              </ul>
          </div>
          <hr className="bp-divider-h--articles"></hr>
          </div>

          <div className="cards">
          <label htmlFor="check4" className="titles">Recursos
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
          </label>
          <input className="hidden-checkbox" id="check4" type="checkbox"></input>
          <div className="hidden-content">
              <ul>
                <li><a href="#">Primeiro link </a></li>
                <li><a href="#">Segundo link </a></li>
                <li><a href="#">Terceiro link </a></li>
                <li><a href="#">Quarto link </a></li>
                <li><a href="#">Quinto link </a></li>
                <li><a href="#">Sexto link </a></li>
              </ul>
          </div>
          <hr className="bp-divider-h--articles"></hr>
          </div>

          <div className="cards">
          <label htmlFor="check5" className="titles">Explore o BLiP
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
          </label>
          <input className="hidden-checkbox" id="check5" type="checkbox"></input>
          <div className="hidden-content">
              <ul>
                <li><a href="#">Primeiro link </a></li>
                <li><a href="#">Segundo link </a></li>
                <li><a href="#">Terceiro link </a></li>
                <li><a href="#">Quarto link </a></li>
                <li><a href="#">Quinto link </a></li>
                <li><a href="#">Sexto link </a></li>
              </ul>
          </div>
          <hr className="bp-divider-h--articles"></hr>
          </div>

          <div className="cards">
          <label htmlFor="check6" className="titles">Cursos
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
          </label>
          <input className="hidden-checkbox" id="check6" type="checkbox"></input>
          <div className="hidden-content">
              <ul>
                <li><a href="#">Primeiro link </a></li>
                <li><a href="#">Segundo link </a></li>
                <li><a href="#">Terceiro link </a></li>
                <li><a href="#">Quarto link </a></li>
                <li><a href="#">Quinto link </a></li>
                <li><a href="#">Sexto link </a></li>
              </ul>
          </div>
          <hr className="bp-divider-h--articles"></hr>
          </div>

          <div className="cards">
          <label htmlFor="check7" className="titles">Comunidade
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
          </label>
          <input className="hidden-checkbox" id="check7" type="checkbox"></input>
          <div className="hidden-content">
              <ul>
                <li><a href="#">Primeiro link </a></li>
                <li><a href="#">Segundo link </a></li>
                <li><a href="#">Terceiro link </a></li>
                <li><a href="#">Quarto link </a></li>
                <li><a href="#">Quinto link </a></li>
                <li><a href="#">Sexto link </a></li>
              </ul>
          </div>
          <hr className="bp-divider-h--articles"></hr>
          </div>

          <div className="cards">
          <label htmlFor="check8" className="titles">Políticas
            <BlipIcon name="arrow-ball-down-outline" className="bp-fs-3-articles bp-fill-bot"></BlipIcon>
          </label>
          <input className="hidden-checkbox" id="check8" type="checkbox"></input>
          <div className="hidden-content">
              <ul>
                <li><a href="#">Primeiro link </a></li>
                <li><a href="#">Segundo link </a></li>
                <li><a href="#">Terceiro link </a></li>
                <li><a href="#">Quarto link </a></li>
                <li><a href="#">Quinto link </a></li>
                <li><a href="#">Sexto link </a></li>
              </ul>
          </div>
          <hr className="bp-divider-h--articles"></hr>
          </div> 
        
          </div>
      </div>
    );

  //area do beta
  class FormBeta extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email: 'bruno'};

      console.log(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
      handleChange(event) {
        console.log(event);
        this.setState({email: event.target.value});
      }

      handleSubmit(event) {
        event.prevent();
        alert('Um email foi enviado: ' + this.state.email);
        
      }

      render () {
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
            <label htmlFor="email" className="label-beta">{this.state.email}</label>
              <br></br>
              <input type="email" 
              id="email" 
              name="email" 
              className="form-input-email" 
              placeholder="Digite o seu e-mail" 
              value={this.state.email}
              onChange={this.handleChange}></input>
              <input type="submit" onClick={this.handleSubmit} className="button-beta" value="Assinar"></input>
            </form>
          </div>

        </div>

        );
      };
    };

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
