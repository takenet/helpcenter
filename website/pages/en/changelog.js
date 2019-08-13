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


class Changelog extends React.Component{
    render(){
        return(
           
            <div>

            {/* Topo */}
              <div>
                <div className="pages-top">
                  <div className="main">
                    <p className="uptitle">Atual v3.0</p>
                    <p className="title">Versões</p>
                    <p className="subtitle">Tudo sobre as versões e changelogs do BLiP</p>
                  </div>
                  <div className="image">
                    <img className="img-changelog" src="/img/illustrations/Versionamento.svg" />
                  </div>
                </div>
              </div>

              {/* Conteudo */}
              <div className="pages-content">
                <div className="navigation">
                  <p className="from">BLiP Help Center ></p>
                  <p className="here">Versionamento</p>
                </div>
                <div className="info">
                  <p className="intro">Um histórico de versões completo do Help Center basta clicar na versão que deseja acessar. 
                      Documentação para versões recentes também pode ser encontrada abaixo.</p>
                </div>

                    <div className="content-changelog">
                      
                      <div className="changelog-card">
                        <div className="changelog-card-date">
                          <p className="version-date">Ago 16, 2019</p>
                        </div>

                        <div className="changelog-card-info">
                          <div className="changelog-title">
                            <p className="version-title">Título da atualização</p>
                            <p className="span-changelog">Novo!</p>
                          </div>

                          <div className="info-content">
                          <p className="info-content-text">Transforme o seu lifestyle. Bora pra action. Se você não vê a oportunidade, ela passa. 
                          Se você não tá no jogo do longo prazo, então seu futuro é estar fora do jogo. 
                          Genialidade é fruto de muito hardwork. Trabalho é aprendizado, tudo é um só, onelife. 
                          Você nunca vai estar pronto então comece agora. Se você não vê a oportunidade, ela passa.</p>
                          <a href="#" className="info-content-link">Saiba mais!</a>
                          </div>
                        </div>
                      </div>
                      <hr></hr>

                      <div className="changelog-card">
                        <div className="changelog-card-date">
                          <p className="version-date">Jul 20, 2019</p>
                        </div>

                        <div className="changelog-card-info">
                          <div className="changelog-title">
                            <p className="version-title">Título da atualização</p>
                          </div>

                          <div className="info-content">
                          <p className="info-content-text">Você tá realmente obcecado pelos seus sonhos? 
                            O inconformismo é o combustível da alta performance. 
                            É você quem decide se o seu dia vai ser incrível ou não. A vida acontece de você e não pra você. 
                            Ninguém lembra do médio, foque no excelente. A vida acontece de você e não pra você. 
                            Não adianta ter conhecimento se você não tem action. Busque o next level.</p>
                          <a href="#" className="info-content-link">Saiba mais!</a>
                          </div>
                        </div>
                      </div>

                    </div>

                
              </div>
          </div>
        );
    }
}

Changelog.title = 'Changelogs';
module.exports = Changelog; 