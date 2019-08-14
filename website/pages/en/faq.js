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
      <use xlinkHref={`${defs}#${this.props.name}`}/>
    </svg>
    );
  }
}


class Faq extends React.Component{
    render(){
        return(
           
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
                  <p className="intro">Um histórico de versões completo do Help Center basta clicar na versão que deseja acessar. 
                      Documentação para versões recentes também pode ser encontrada abaixo.</p>
                </div>


                {/* Cards */}
                <div className="cards-faq">
                  <div className="card-faq">
                        <div className="title-faq">
                            <p className="title"> Geral </p>
                        </div>
                        <div className="faq-links">
                            <a href="#" className="faq-links-link">O que é o Builder? </a>
                            <a href="#" className="faq-links-link">Como criar minha conta? </a>
                            <a href="#" className="faq-links-link">O que é contato inteligente?</a>
                            <a href="#" className="faq-links-link">Como ser usuário Business? </a>
                            <a href="#" className="faq-links-link">Como ser usuário Enterprise? </a>
                        </div>  
                  </div>
                
               
                  <div className="card-faq">
                        <div className="title-faq">
                            <p className="title"> Builder </p>
                        </div>
                        <div className="faq-links">
                            <a href="#" className="faq-links-link">O que é o Builder? </a>
                            <a href="#" className="faq-links-link">Como criar minha conta? </a>
                            <a href="#" className="faq-links-link">O que é contato inteligente?</a>
                            <a href="#" className="faq-links-link">Como ser usuário Business? </a>
                            <a href="#" className="faq-links-link">Como ser usuário Enterprise? </a>
                        </div>  
                  </div>

                
                  <div className="card-faq">
                        <div className="title-faq">
                            <p className="title"> Desk</p>
                        </div>
                        <div className="faq-links">
                            <a href="#" className="faq-links-link">O que é o Builder? </a>
                            <a href="#" className="faq-links-link">Como criar minha conta? </a>
                            <a href="#" className="faq-links-link">O que é contato inteligente?</a>
                            <a href="#" className="faq-links-link">Como ser usuário Business? </a>
                            <a href="#" className="faq-links-link">Como ser usuário Enterprise? </a>
                        </div> 
                  </div>

               
              
                  <div className="card-faq">
                        <div className="title-faq">
                            <p className="title">LGPD</p>
                        </div>
                        <div className="faq-links">
                            <a href="#" className="faq-links-link">O que é o Builder? </a>
                            <a href="#" className="faq-links-link">Como criar minha conta? </a>
                            <a href="#" className="faq-links-link">O que é contato inteligente?</a>
                            <a href="#" className="faq-links-link">Como ser usuário Business? </a>
                            <a href="#" className="faq-links-link">Como ser usuário Enterprise? </a>
                        </div>  
                  </div>

                
                  <div className="card-faq">
                        <div className="title-faq">
                            <p className="title"> Integrações</p>
                        </div>
                        <div className="faq-links">
                            <a href="#" className="faq-links-link">O que é o Builder? </a>
                            <a href="#" className="faq-links-link">Como criar minha conta? </a>
                            <a href="#" className="faq-links-link">O que é contato inteligente?</a>
                            <a href="#" className="faq-links-link">Como ser usuário Business? </a>
                            <a href="#" className="faq-links-link">Como ser usuário Enterprise? </a>
                        </div>  
                  </div>

        
                  <div className="card-faq">
                        <div className="title-faq">
                            <p className="title">WhatsApp</p>
                        </div>
                        <div className="faq-links">
                            <a href="#" className="faq-links-link">O que é o Builder? </a>
                            <a href="#" className="faq-links-link">Como criar minha conta? </a>
                            <a href="#" className="faq-links-link">O que é contato inteligente?</a>
                            <a href="#" className="faq-links-link">Como ser usuário Business? </a>
                            <a href="#" className="faq-links-link">Como ser usuário Enterprise? </a>
                        </div>  
                  </div>

                
                  <div className="card-faq">
                        <div className="title-faq">
                            <p className="title">BLiP Ideas</p>
                        </div>
                        <div className="faq-links">
                            <a href="#" className="faq-links-link">O que é o Builder? </a>
                            <a href="#" className="faq-links-link">Como criar minha conta? </a>
                            <a href="#" className="faq-links-link">O que é contato inteligente?</a>
                            <a href="#" className="faq-links-link">Como ser usuário Business? </a>
                            <a href="#" className="faq-links-link">Como ser usuário Enterprise? </a>
                        </div> 
                  </div>

                  <div className="card-faq">
                        <div className="title-faq">
                            <p className="title">Usuário Beta</p>
                        </div>
                        <div className="faq-links">
                            <a href="#" className="faq-links-link">O que é o Builder? </a>
                            <a href="#" className="faq-links-link">Como criar minha conta? </a>
                            <a href="#" className="faq-links-link">O que é contato inteligente?</a>
                            <a href="#" className="faq-links-link">Como ser usuário Business? </a>
                            <a href="#" className="faq-links-link">Como ser usuário Enterprise? </a>
                        </div> 
                  </div>
                  

                  <div className="card-faq">
                        <div className="title-faq">
                            <p className="title">Cerficação</p>
                        </div>
                        <div className="faq-links">
                            <a href="#" className="faq-links-link">O que é o Builder? </a>
                            <a href="#" className="faq-links-link">Como criar minha conta? </a>
                            <a href="#" className="faq-links-link">O que é contato inteligente?</a>
                            <a href="#" className="faq-links-link">Como ser usuário Business? </a>
                            <a href="#" className="faq-links-link">Como ser usuário Enterprise? </a>
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