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


class Plugins extends React.Component {
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
                            <p className="title-templates">Plugins para o BLiP</p>
                            <p className="subtitle-templates">Plugins para auxiliar na construção e evolução do seu chatbot!</p>
                        </div>
                        <div className="image-plugin">
                            <img className="img" src="/img/illustrations/plugin-help-center.svg" />
                        </div>
                    </div>
                </div>

                {/* Conteudo */}
                <div className="pages-content-templates">
                    <div className="navigation">
                        <p className="from">BLiP Help Center ></p>
                        <p className="from"><a className="link-from" href="/resources">Recursos</a> ></p>
                        <p className="here">Plugins para o BLiP</p>
                    </div>
                    <div className="info-templates">
                        <p className="intro-templates">Plugins possibilitam a evolução do BLiP de forma colaborativa facilitando a criação de novas funcionalidades por outras pessoas ou empresas</p>
                    </div>

                    <div className="banner-templates-section">
                        <img className="banner-img" src="/img/illustrations/banner_templates.png"></img>
                        <div className="banner-content">
                            <p className="banner-text">Quer ter o seu plugin disponível por aqui? <b>Mande pra gente!</b></p>
                            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSexU2elo1NSjnrsh8Et8f4MRG2X-3RSLa-Yrbq0gGqNCert1g/viewform?usp=sf_link"><button className="banner-button">Enviar plugin</button></a>
                        </div>
                    </div>



                    {/* Cards */}
                    <div className="cards-templates">
                        <div className="card-templates">
                            <div className="thumb-card-templates">
                                <img className="thumb-image" src="/img/illustrations/thumbs-plugins/Transmission-1.svg"></img>
                            </div>
                            <div className="text-card-templates">
                                <button className="category-card-templates">Broadcast</button>
                                <p className="title-card-templates">Gerenciamento de Broadcast</p>
                                <p className="abstract-card-plugin">Crie e gerencie listas de distribuição e contatos</p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" name="broadcast2" data-title="Plugin - Broadcast"></div>
                                    <a href="/plugin?Id=broadcast"><div className="seeMore-card-templates">
                                        <p className="text-seeMore">Ver detalhes</p>
                                        <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                                    </div></a>
                                </div>
                            </div>
                        </div>

                        <div className="card-templates">
                            <div className="thumb-card-templates">
                                <img className="thumb-image" src="/img/illustrations/WhatsApp-logo.svg"></img>
                            </div>
                            <div className="text-card-templates">
                                <button className="category-card-templates">WhatsApp</button>
                                <p className="title-card-templates">Envio de mensagens ativas</p>
                                <p className="abstract-card-plugin">Gerencie seus messages templates e suas listas de distribuição</p>
                                <div className="card-footer">
                                    <div className="rw-ui-container" name="whatsapp-broadcast" data-title="Plugin - WhatsApp Brodcast"></div>
                                    <a href="/template?Id=Petshop_agendamento"><div className="seeMore-card-templates">
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
        
        console.log(this);
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
                "readOnly": true,
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

Plugins.title = 'Plugins';
module.exports = Plugins; 