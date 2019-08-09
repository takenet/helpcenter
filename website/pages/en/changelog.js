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

                    <table className="table-changelog">
                        <tr className="table-changelog">
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                        </tr>
                        <tr className="table-changelog">
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                        </tr>
                        <tr className="table-changelog">
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                        </tr>
                        <tr className="table-changelog">
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                            <td><a href="#" className="version">BLiP v1.0</a></td>
                        </tr>
                    </table>

                
              </div>
          </div>
        );
    }
}

Changelog.title = 'Changelogs';
module.exports = Changelog; 