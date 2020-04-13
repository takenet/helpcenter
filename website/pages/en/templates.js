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
                            <p className="title-templates">Templates de chatbot</p>
                            <p className="subtitle-templates">Templates criados pela comunidade para facilitar a criação e implementação de chatbots em sua empresa!</p>
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
                        <p className="here">Templates de chatbot</p>
                    </div>
                    <div className="info-templates">
                        <p className="intro-templates">Os templates de chatbot auxiliam os usuários a criar mais facilmente os fluxos de conversa,
                      eles servem para agilizar o processo de criação dos bots no BLiP.</p>
                    </div>

                    <div className="banner-templates-section">
                        <img className="banner-img" src="/img/illustrations/banner_templates.png"></img>
                        <div className="banner-content">
                            <p className="banner-text">Quer ver o seu template aqui também? <b>Mande pra gente!</b></p>
                            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSexU2elo1NSjnrsh8Et8f4MRG2X-3RSLa-Yrbq0gGqNCert1g/viewform?usp=sf_link"><button className="banner-button">Enviar template</button></a>
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
                                <div className="card-footer">
                                    <div className="rw-ui-container" data-title="Petshop - Agendamento"></div>
                                    <a href="/template?Id=Petshop_agendamento"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/programacao-evento.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Entretenimento</button>
                                <p className="title-card-templates">Programação de Evento</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" data-title="Programação de Evento"></div>
                                    <a href="/template?Id=Programacao_evento"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/concessionaria-carros.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Varejo</button>
                                <p className="title-card-templates">Concessionária de Carros</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" data-title="Concessionária de Carros"></div>
                                    <a href="/template?Id=Concessionaria_carros"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/imobiliaria.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Serviços</button>
                                <p className="title-card-templates">Imobiliária</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" data-title="Imobiliária"></div>
                                    <a href="/template?Id=Imobiliaria"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/loja-impressora.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Varejo</button>
                                <p className="title-card-templates">Loja de Impressoras</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" data-title="Loja de Impressoras"></div>
                                    <a href="/template?Id=Loja_impressora"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/prospeccao-clientes.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Marketing</button>
                                <p className="title-card-templates">Geração de Leads</p>
                                <p className="creator-card-templates">criado por Paulo Abreu</p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" data-title="Geração de Leads"></div>
                                    <a href="/template?Id=Geracao_leads"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/seguradora-carros.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Serviços</button>
                                <p className="title-card-templates">Seguradora de Carros</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" data-title="Seguradora de Carros"></div>
                                    <a href="/template?Id=Seguradora_carros"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/busca-cep.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Serviços</button>
                                <p className="title-card-templates">Identificador de Endereço por CEP</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" data-title="Identificador de Endereço por CEP"></div>
                                    <a href="/template?Id=Busca_cep"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/previsao-tempo.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Serviços</button>
                                <p className="title-card-templates">Condição e Previsão do Tempo</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" data-title="Condição e Previsão do Tempo"></div>
                                    <a href="/template?Id=Previsao_tempo"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/faq-loja-virtual.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Serviços</button>
                                <p className="title-card-templates">FAQ - Loja Virtual</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" data-title="FAQ - Loja Virtual"></div>
                                    <a href="/template?Id=Faq_loja_virtual"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>


                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/hoteis.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Serviços</button>
                                <p className="title-card-templates">Rede de Hotéis</p>
                                <p className="creator-card-templates">criado por <a href="https://forum.blip.ai/u/thaynara_oliveira" target="_blank">Thaynara Oliveira</a></p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" data-title="Rede de Hotéis"></div>
                                    <a href="/template?Id=Rede_hoteis"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/clinicas.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Serviços</button>
                                <p className="title-card-templates">Clínica de Saúde</p>
                                <p className="creator-card-templates">criado por <a href="https://forum.blip.ai/u/thaynara_oliveira" target="_blank">Thaynara Oliveira</a></p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" data-title="Clínica de Saúde"></div>
                                    <a href="/template?Id=Clinicas"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/atendimento-humano-equipes.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Serviços</button>
                                <p className="title-card-templates">Atendimento Humano para Equipes</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" data-title="Atendimento Humano para Equipes"></div>
                                    <a href="/template?Id=Atendimento_humano_equipes"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>

                        <div className="card-templates">
                            <img className="thumb-card-templates" src="/img/illustrations/thumbs-templates/atendimento-humano-horarios.jpg"></img>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Serviços</button>
                                <p className="title-card-templates">Atendimento Humano - Horários</p>
                                <p className="creator-card-templates">criado por BLiP</p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" data-title="Atendimento Humano - Horários"></div>
                                    <a href="/template?Id=Atendimento_humano_horarios"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>


                    </div>



                </div>
                <ScriptRating></ScriptRating>
            </div>
        );
    }
}

class ScriptRating extends React.Component {
    render() {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `
        (function(d, t, e, m){
    
        // Async Rating-Widget initialization.
        window.RW_Async_Init = function(){
                    
            RW.init({
            huid: "455562",
            uid: "885b63212d353553845c2fd806312995",
            source: "website",
            options: {
                "boost": {
                    "rate": 4
                },
                "lng": "pt",
                "size": "tiny",
                "style": "flat_yellow",
                "isDummy": false
            } 
        });
            RW.render();
        };
            // Append Rating-Widget JavaScript library.
        var rw, s = d.getElementsByTagName(e)[0], id = "rw-js",
            l = d.location, ck = "Y" + t.getFullYear() + 
            "M" + t.getMonth() + "D" + t.getDate(), p = l.protocol,
            f = ((l.search.indexOf("DBG=") > -1) ? "" : ".min"),
            a = ("https:" == p ? "secure." + m + "js/" : "js." + m);
        if (d.getElementById(id)) return;              
        rw = d.createElement(e);
        rw.id = id; rw.async = true; rw.type = "text/javascript";
        rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
        s.parentNode.insertBefore(rw, s);
        }(document, new Date(), "script", "rating-widget.com/"));
        `
                }}
            />
        );
    }
}

Template.title = 'Templates de Chatbots';
module.exports = Template; 