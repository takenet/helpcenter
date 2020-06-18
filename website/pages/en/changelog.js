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


class Changelog extends React.Component {
  render() {
    return (

      <div>
        {/* Topo */}
        <div>
          <div className="pages-top-category">
            <div className="main-category">
              <p className="title-category">Changelog</p>
              <p className="subtitle-category">Fique por dentro de todas as atualizações do BLiP</p>
            </div>
            <div className="image-category">
              <img className="img" src='/img/illustrations/Versionamento.svg' />
            </div>
          </div>
        </div>

        {/* Conteudo */}
        <div className="pages-content-changelog">
          <div className="navigation">
            <p className="from">BLiP Help Center ></p>
            <p className="from"><a className="link-from" href="https://status.blip.ai/">Status</a> > </p>
            <p className="here">Changelog</p>
          </div>
          <div className="info-changelog">
            <div className="banner">
              <img href="/" src="/img/banners/Banner-Changelog.svg"></img>
            </div>
            <p className="title">Atualizações Recentes</p>
            <p className="intro">Nossa página de changelog permite que você esteja sempre inteirado de
              todas as melhorias implementadas na plataforma como também consiga acompanhar a evolução da plataforma.</p>
          </div>

          <div className="content-changelog">

            <div className="toolbar">

              <div className="identifiers">
                <div className="identifier">
                  <div className="blip-icon blip-icon--blip">
                    <BlipIcon name="true" className="bp-fs-3 bp-fill-white"></BlipIcon>
                  </div>
                  <p className="text">
                    Atualizações </p>
                </div>

                <div className="identifier">
                  <div className="blip-icon blip-icon--watermelon">
                    <BlipIcon name="bug" className="bp-fs-1 bp-fill-white"></BlipIcon>
                  </div>
                  <p className="text">
                    Correção de bugs </p>
                </div>

                <div className="identifier">
                  <div className="blip-icon blip-icon--cheetos">
                      <BlipIcon id="star" name="star" className="bp-fs-4 bp-fill-white"></BlipIcon>
                  </div>
                  <p className="text">
                    Novidades </p>
                </div>
              </div>

              <div className="filter">
                <p className="label"> Filtrar por</p>
                <select name="filter-options" id="filter-select" className="filter-select">
                  <option value="volvo">Mais recentes</option>
                  <option value="saab">Atualizações</option>
                  <option value="opel">Correção de bugs</option>
                  <option value="audi">Novidades</option>
                </select>
              </div>

            </div>

            <div className="releases">

              <div className="release" id="news">
                <div className="content">
                  <p className="title">Título da Atualização</p>
                  <p className="date">18 de junho de 2020</p>
                  <p className="text"> Estamos utilizando esse espaço apenas para marcação de texto. 
                    Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout, 
                    você pude utilizar links para outras partes do help center. Ver detalhes</p>
                </div>
              </div>

              <div className="release" id="atts">
                <div className="content">
                  <p className="title">Título da Atualização 2</p>
                  <p className="date">15 de junho de 2020</p>
                  <p className="text"> Estamos utilizando esse espaço apenas para marcação de texto. 
                    Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout, 
                    você pude utilizar links para outras partes do help center. Ver detalhes</p>
                </div>
              </div>

              <div className="release" id="bug">
                <div className="content">
                  <p className="title">Título da Atualização</p>
                  <p className="date">18 de junho de 2020</p>
                  <p className="text"> Estamos utilizando esse espaço apenas para marcação de texto. 
                    Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout, 
                    você pude utilizar links para outras partes do help center. Ver detalhes</p>
                </div>
              </div>

              <div className="release" id="news">
                <div className="content">
                  <p className="title">Título da Atualização</p>
                  <p className="date">18 de junho de 2020</p>
                  <p className="text"> Estamos utilizando esse espaço apenas para marcação de texto. 
                    Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout, 
                    você pude utilizar links para outras partes do help center. Ver detalhes</p>
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