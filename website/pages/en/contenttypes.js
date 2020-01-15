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


class Template extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="templates-page">

                {/* Topo */}
                <div>
                    <div className="pages-top-templates">
                        <div className="main-templates">
                            <p className="title-templates">Tipos de conteúdos por canal</p>
                            <p className="subtitle-templates">Veja os tipos de conteúdos suportados nos diferentes canais integrados ao BLiP</p>
                        </div>
                        <div className="image-templates">
                            <img className="img-content" src="/img/illustrations/ilustracao-categorias.svg" />
                        </div>
                    </div>
                </div>

                {/* Conteudo */}
                <div className="pages-content-templates">
                    <div className="navigation">
                        <p className="from">BLiP Help Center ></p>
                        <p className="from"><a className="link-from" href="/resources">Recursos</a> ></p>
                        <p className="here">Tipos de conteúdos por canal</p>
                    </div>
                    <div>
                        <p className="caption" >Clique nos ícones de check da tabela e veja como cada um dos tipos de conteúdo é suportado em cada canal.</p>
                    </div>
                    <iframe src="https://heuristic-mccarthy-9b86f6.netlify.com/" className="iframe-channel-table" />
                </div>
            </div>
        );
    }
}

Template.title = 'Tipos de conteúdos';
module.exports = Template; 