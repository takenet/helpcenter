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
                            <p className="title-templates">Modelos de chatbot</p>
                            <p className="subtitle-templates">Modelos criados pela comunidade para facilitar a criação e implementação de chatbots em sua empresa!</p>
                        </div>
                        <div className="image-templates">
                            <img className="img" src="/img/illustrations/ilustracao-templates.svg" />
                        </div>
                    </div>
                </div>

                {/* Conteudo */}
                <div className="pages-content-templates">
                    <div className="navigation">
                        <p className="from">BLiP Help Center ></p>
                        <p className="from"><a className="link-from" href="/resources">Recursos</a> ></p>
                        <p className="here">Modelos de chatbot</p>
                    </div>
                    <div className="info-templates">
                        <p className="intro-templates">Os modelos de chatbot auxiliam os usuários a criar mais facilmente os fluxos de conversa,
                      eles servem para agilizar o processo de criação dos bots no BLiP.</p>
                    </div>

                    <div className="banner-templates-section">
                        <img className="banner-img" src="/img/illustrations/banner_templates.png"></img>
                        <div className="banner-content">
                            <p className="banner-text">Quer ver o seu modelo aqui também? <b>Mande pra gente!</b></p>
                            <button disabled={true} className="banner-button">Enviar modelo</button>
                        </div>
                    </div>



                    {/* Cards */}
                    <div className="cards-templates">
                        <div className="card-templates">
                            <div className="thumb-card-templates">
                                <img className="thumb-image" src="/img/illustrations/thumbs-templates/petshop-agendamento.jpg"></img>
                            </div>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Serviços</button>
                                <p className="title-card-templates">Petshop - Agendamento</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <a href="/template?Id=Petshop_agendamento"><div className="seeMore-card-templates">
                                    <p className="text-seeMore">Ver detalhes</p>
                                    <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                </div></a>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/programacao-evento.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Entretenimento</button>
                                <p className="title-card-templates">Programação de Evento</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <a href="/template?Id=Programacao_evento"><div className="seeMore-card-templates">
                                    <p className="text-seeMore">Ver detalhes</p>
                                    <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                </div></a>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/concessionaria-carros.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Varejo</button>
                                <p className="title-card-templates">Concessionária de Carros</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <a href="/template?Id=Concessionaria_carros"><div className="seeMore-card-templates">
                                    <p className="text-seeMore">Ver detalhes</p>
                                    <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                </div></a>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/imobiliaria.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Serviços</button>
                                <p className="title-card-templates">Imobiliária</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <a href="/template?Id=Imobiliaria"><div className="seeMore-card-templates">
                                    <p className="text-seeMore">Ver detalhes</p>
                                    <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                </div></a>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/loja-impressora.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Varejo</button>
                                <p className="title-card-templates">Loja de Impressoras</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <a href="/template?Id=Loja_impressora"><div className="seeMore-card-templates">
                                    <p className="text-seeMore">Ver detalhes</p>
                                    <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                </div></a>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/prospeccao-clientes.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Marketing</button>
                                <p className="title-card-templates">Geração de Leads</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <a href="/template?Id=Geracao_leads"><div className="seeMore-card-templates">
                                    <p className="text-seeMore">Ver detalhes</p>
                                    <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                </div></a>
                            </div>
                        </div>


                    </div>



                </div>
            </div>
        );
    }
}

Template.title = 'Modelos de Chatbots';
module.exports = Template; 