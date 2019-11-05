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


class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>

                {/* Topo */}
                <div>
                    <div className="pages-top-details">
                        <div className="main-details">
                            <div className="categories-details"></div>
                            <p className="title-details"> </p>
                            <p className="creator-template"> </p>
                            <p className="subtitle-details"> </p>
                            <div className="buttons-details">
                                <a id="download" href="#"
                                    download target="blank"><button className="button-details-download">
                                        <div className="button-content-download">
                                            <BlipIcon name="download" className="icon-button-download"></BlipIcon>
                                            <p className="text-button-download">Download</p>
                                        </div>
                                    </button></a>

                                <button className="button-details-see">
                                    <div className="button-content-see">
                                        <BlipIcon name="open-eye" className="icon-button-see"></BlipIcon>
                                        <p className="text-button-see">Visualizar</p>
                                    </div>
                                </button>

                            </div>

                        </div>

                        <div className="slideshow-container">
                            <div className="carousel">

                            </div>

                            <div className="dots">

                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal bot */}
                <div id="modalBot" className="modalBot">
                    <div className="modal-content-bot">
                        <span className="closeBot">&times;</span>
                        <div className="iframe-bot" id="iframe"></div>
                    </div>
                </div>


                {/* Conteudo */}
                <div className="page-content-details">

                    <div className="tabs-area">
                        <div className="tab">
                            <button id="TabDetails" className="tablinks-active">Detalhes</button>
                            <button id="TabInstall" className="tablinks">Instalação</button>
                            <button id="TabSupport" className="tablinks">Suporte</button>
                        </div>


                        <div id="Details" className="tabcontent">
                        
                        </div>

                        <div id="Install" className="tabcontent">

                        </div>

                        <div id="Support" className="tabcontent">

                        </div>
                    </div>

                    <div className="func-table">
                        <p className="content-title">Funcionalidades</p>
                        <table className="table-func">
                            <tbody>

                            </tbody>
                        </table>
                    </div>

                </div>
               
                <ScriptDynamically></ScriptDynamically>
                <ScriptCarousel></ScriptCarousel>
                <ScriptTabs></ScriptTabs>
                <ScriptModalBot></ScriptModalBot>

            </div>
        );
    }
}

class ScriptCarousel extends React.Component {
    render() {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    var init = true;
                    var slideIndex = 1;
                    var dots = document.getElementsByClassName("dot");
                    
                    showSlides(slideIndex);

                    for (var j = 0; j < dots.length; j++){
                       dots[j].addEventListener('click',
                            function(){
                                showSlides(parseInt(this.id));
                            }, false);
                    }
       
                    function showSlides(n) {
                        var i;
                        var slides = document.getElementsByClassName("mySlides");
                        slideIndex = n;
                                            
                        for (i = 0; i < slides.length; i++) {
                            slides[i].getElementsByTagName('img')[0].className = "img-disabled";
                            
                        }
                            
                        for (i = 0; i < dots.length; i++) {
                            dots[i].className = dots[i].className.replace(" active", "");
                        }
                        if (init == true){
                            slides[slideIndex-1].getElementsByTagName('img')[0].className = "img-inactive";
                            slides[slideIndex].getElementsByTagName('img')[0].className = "img-active";
                            slides[slideIndex+1].getElementsByTagName('img')[0].className = "img-inactive";
                            dots[slideIndex].className += " active";
                            init = false;
                            
                        }
                        else if (init != true){
                            dots[slideIndex].className += " active";
                            slides[slideIndex].getElementsByTagName('img')[0].className = "img-active";
                           
                            if (slides[slideIndex-1]){
                                slides[slideIndex-1].getElementsByTagName('img')[0].className = "img-inactive";
                            }
                            if (slides[slideIndex+1]){
                                slides[slideIndex+1].getElementsByTagName('img')[0].className = "img-inactive";
                            }
                           
                        }
                    }                 

                `
                }}
            />
        );
    }
}

class ScriptTabs extends React.Component {
    render() {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    var tabDetails = document.getElementById("TabDetails");
                    tabDetails.disabled = true;
                    document.getElementById("Details").style.display = "block";
                    var tabInstall = document.getElementById("TabInstall");
                    var tabSupport = document.getElementById("TabSupport");

                    tabDetails.onclick = function() {
                        var i, tabcontent, tablinks;
                        tabcontent = document.getElementsByClassName("tabcontent");
                        for (i = 0; i < tabcontent.length; i++) {
                            tabcontent[i].style.display = "none";
                        }

                        tablinks = document.getElementsByClassName("tablinks");
                        for (i = 0; i < tablinks.length; i++) {
                            tablinks[i].className = tablinks[i].className.replace(" active", "");
                        }

                        document.getElementById("Details").style.display = "block";
                        tabDetails.className += "-active";
                        tabDetails.disabled = true;
                        tabInstall.disabled = false;
                        tabInstall.className = "tablinks";
                        tabSupport.disabled = false;
                        tabSupport.className = "tablinks";
                    }

                    tabInstall.onclick = function() {
                        var i, tabcontent, tablinks;
                        tabcontent = document.getElementsByClassName("tabcontent");
                        for (i = 0; i < tabcontent.length; i++) {
                            tabcontent[i].style.display = "none";
                        }

                        tablinks = document.getElementsByClassName("tablinks");
                        for (i = 0; i < tablinks.length; i++) {
                            tablinks[i].className = tablinks[i].className.replace(" active", "");
                        }

                        document.getElementById("Install").style.display = "block";
                        tabInstall.className += "-active";
                        tabInstall.disabled = true;
                        tabDetails.disabled = false;
                        tabDetails.className = "tablinks";
                        tabSupport.disabled = false;
                        tabSupport.className = "tablinks";
                    }

                    tabSupport.onclick = function() {
                        var i, tabcontent, tablinks;
                        tabcontent = document.getElementsByClassName("tabcontent");
                        for (i = 0; i < tabcontent.length; i++) {
                            tabcontent[i].style.display = "none";
                        }

                        tablinks = document.getElementsByClassName("tablinks");
                        for (i = 0; i < tablinks.length; i++) {
                            tablinks[i].className = tablinks[i].className.replace(" active", "");
                        }

                        document.getElementById("Support").style.display = "block";
                        tabSupport.className += "-active";
                        tabSupport.disabled = true;
                        tabDetails.disabled = false;
                        tabDetails.className = "tablinks";
                        tabInstall.disabled = false;
                        tabInstall.className = "tablinks";
                    }

                `
                }}
            />
        );
    }
}

class ScriptModalBot extends React.Component {
    render() {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    var modalBot = document.getElementById("modalBot");
                    var btn = document.getElementsByClassName('button-details-see')[0];
                    var span = document.getElementsByClassName('closeBot')[0];
                    btn.onclick = function(){
                        modalBot.style.display = "block";
                    }

                    span.onclick = function() { 
                        modalBot.style.display = "none";
                    }

                    window.onclick = function(event) {
                        if (event.target == modalBot) {
                            modalBot.style.display = "none";
                        }
                    }

                `
                }}
            />
        );
    }
}

class ScriptDynamically extends React.Component {
    render() {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    const urlParams = new URLSearchParams(window.location.search);
                    const myParam = urlParams.get('Id');

                    var data = {
                    "templates": [
                        {
                        "id": "Petshop_agendamento",
                        "title": "Petshop - Agendamento",
                        "creator": "Criado por BLiP",
                        "subtitle": "Esse chatbot foi feito para ajudar Petshops a oferecerem seus serviços e uma maneira de agendá-los, integrando automaticamente com o Google Calendar.",
                        "categories": [
                            {
                            "category": "Serviços"
                            },
                            {
                            "subcategory": "Agendamento"
                            },
                            {
                            "subcategory": "Petshop"
                            }
                        ],
                        "download_uri": "/templates/petshop-agendamento/petShop_template.json",
                        "link_bot": "aGFwcHlwYXdzcGV0c2hvcGJydW5vOmRhMzYxM2NmLTJkMjUtNGM3ZS04MWUyLTM4NzM3NmE1OWM2MA==",
                        "images": [
                            {
                            "url": "/templates/petshop-agendamento/Exemplo01.png"
                            },
                            {
                            "url": "/templates/petshop-agendamento/Exemplo02.png"
                            },
                            {
                            "url": "/templates/petshop-agendamento/Exemplo03.png"
                            },
                            {
                            "url": "/templates/petshop-agendamento/Exemplo04.png"
                            }
                        ],
                        "tabs": {
                            "details": '<p class="content-title">Compatível com:</p> \\
                            <div class="compatible-channels"> \\
                                <img class="compatible-channels-img" src="/img/illustrations/messenger-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/workplace-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/blipchat-logo.svg"></img> \\
                            </div> \\
                            <p class="content-text">Esse chatbot foi feito para ajudar Petshops a oferecerem seus serviços e uma maneira de agendá-los, \\
                                integrando automaticamente com o Google Calendar.</p> \\
                            \\
                            <p class="content-title">O que pode ser feito?</p> \\
                            <ul> \\
                                <li class="content-list-text">Exibir seus serviços</li> \\
                                <li class="content-list-text">Prover informações sobre o Petshop</li> \\
                                <li class="content-list-text">Fornecer ao cliente opção de marcar um horário em sua agenda automaticamente,\\
                                    de acordo com seus horários livres.</li> \\
                                <li class="content-list-text">Coletar informações do cliente.</li> \\
                            </ul> \\
                                \\
                            <p class="content-title">Pré Requisitos</p> \\
                            <ul> \\
                                <li class="content-list-text">Uma conta do Google</li> \\
                                <li class="content-list-text">Uma agenda no Google Calendar</li> \\
                                <li class="content-list-text">Um projeto no Google Cloud Platform</li> \\
                                <li class="content-list-text">Dar permissão para que o bot acesse, edite e escreva em sua agenda.</li> \\
                            </ul>',  


                            "install": '<p class="content-title">Como instalar?</p>\\
                            <p class="content-text">Para começar a utilizar o bot, é preciso configurar sua conta no Google, \\
                                fazer a autenticação e informar para qual agenda os eventos serão enviados. </p> \\
                                \\
                                <ol> \\
                                    <li class="content-list-text">Baixe o fluxo do bot</li> \\
                                    <li class="content-list-text">Crie um novo bot e importe o fluxo para ele</li> \\
                                    <li class="content-list-text">Crie uma conta no Google</li> \\
                                    <li class="content-list-text">Nessa conta, crie um Agenda no <a href="https://calendar.google.com/">Google Calendar</a>, e pegue o seu ID \\
                                        <ul> \\
                                            <li>Acesse a agenda, clique em <b>Opções</b></li> \\
                                            <img src="/templates/petshop-agendamento/calendar_config.png"></img> \\
                                            <li>Procure pelo <b>Id da Agenda</b> e copie-o </li> \\
                                        </ul> \\
                                    </li> \\
                                    <li class="content-list-text" >No bot, crie uma variável de configuração chamada <b>calendarId</b> e coloque como valor o Id da Agenda que você acabou de copiar. </li>\\
                                    <li class="content-list-text">Crie um projeto no <a href="https://console.cloud.google.com/">Google Cloud Platform</a></li>\\
                                    <li class="content-list-text">Com o projeto criado, acesse a área <b>APIs e Serviços</b> e clique em <b>Credenciais</b>. </li>\\
                                    <img src="/templates/petshop-agendamento/credenciais.png"></img>\\
                                    <li class="content-list-text">Selecione "Criar credenciais" e crie uma <b>Chave de Api</b>. Copie o valor informado.</li>\\
                                    <li class="content-list-text">Crie uma variável de configuração chamada <b>apiKey</b> e coloque o valor copiado no passo 8.</li>\\
                                    <li class="content-list-text">Selecione "Criar credenciais" novamente, desta vez optando por criar um Id do cliente Oauth\\
                                        <ul>\\
                                            <li>Selecione <b>Aplicativo Web</b></li>\\
                                            <li>Informe um nome</li>\\
                                        </ul>\\
                                    <li class="content-list-text">Ao final, copie o <b>Id do cliente</b> e a <b>chave secreta do cliente</b></li>\\
                                    <li class="content-list-text">Entre no <a href="https://developers.google.com/oauthplayground/">OAuth 2.0 Playground</a></li>\\
                                    <li class="content-list-text">Procure por <b>Calendar API V3</b> na lista de APIs. \\
                                            Selecione todos os escopos disponíveis para ela e clique em <b>Authorize APIs</b>  \\
                                    </li>\\
                                    <li class="content-list-text">Será solicitado que você faça <i>login</i> e dê permissão.</li>\\
                                    <li class="content-list-text">Ainda no Playground, abra o menu de configurações e selecione a opção <b>Use your own OAuth credentials.</b> \\
                                        Nos campos correspondentes, informe o <b>Id do cliente</b> e a <b>chave secreta do cliente</b>.</li>\\
                                    <li class="content-list-text">Clique em <b>Exchange authorization code for tokens</b> para gerar os valores de <i>Refresh Token</i>.</li>\\
                                    <li class="content-list-text">Copie os valores de <b>Refresh Token</b> e <b>Access Token</b> e salve.</li>\\
                                    <li class="content-list-text">No seu bot, crie uma <b>Ação global de entrada</b> uma requisição HTTP.</li>\\
                                    <li class="content-list-text">Preencha as informações conforme abaixo:</li>\\
                                    <div style="background-color:#f6f8fa">\\
                                        <b>Método</b>: POST<br>\\
                                        <b>URL</b>: https://accounts.google.com/o/oauth2/token\\
                                    </div>\\
                                    <li class="content-list-text">O corpo da requisição deverá ser como a seguir, onde você deverá informar os valores salvos.</li>\\
                                    <div style="background-color:#f6f8fa">\\
                                        {<br>\\
                                            &nbsp;&nbsp;&nbsp;&nbsp;"client_secret": "YOUR_CLIENT_SECRET"<br> \\
                                            &nbsp;&nbsp;&nbsp;&nbsp;"grant_type": "refresh_token"<br>\\
                                            &nbsp;&nbsp;&nbsp;&nbsp;"refresh_token": "YOUR_REFRESH_TOKEN"<br>\\
                                            &nbsp;&nbsp;&nbsp;&nbsp;"client_id": "YOUR_CLIENT_ID"<br>\\
                                        }<br>\\
                                    </div>\\
                                    <li class="content-list-text">Crie uma variável de configuração chamada <b>timeOffset</b> e informe a diferença entre seu fuso-horário e UTC-0.\\
                                        <i>Para o horário de Brasília, informe <b>-3.</i></li>\\
                                    <li class="content-list-text">Crie duas variáveis de configuração:\\
                                        <ul>\\
                                            <li><b>openHour</b> informando a hora que seu petshop abre (apenas a hora, no formato HH)</li>\\
                                            <li><b>closeHour</b> informando a hora que seu petshop fecha.</li>\\
                                        </ul>\\
                                    <img src="/templates/petshop-agendamento/variaveis_config.png"></img>\\
                                </ol>',

                            "support": '<p class="content-title">Suporte</p> \\
                            <p class="content-text"> Este modelo de Chatbot é gratuito e tem como objetivo educacional, ajudar os usuários a compreenderem \\
                                e aprenderem sobre algumas funcionalidades do BLiP.</p>\\
                                \\
                            <p class="content-text"> A equipe do BLiP e da Take não prestam suporte a este modelo.</p>',
                        },
                        "table": [
                            {
                            "func": "✓ Integração: Google Calendar"
                            },
                            {
                            "func": "✓ Carrossel"
                            },
                            {
                            "func": "✓ Menu"
                            },
                            {
                            "func": "✓ Conteúdo Dinâmico"
                            },
                            {
                            "func": "✓ Ações Globais"
                            },
                            {
                            "func": "✓ Variáveis de Configuração"
                            },
                            {
                            "func": "✓ Atendimento Humano"
                            },
                            {
                            "func": "✓ Script Javascript"
                            }
                        ]
                        },
                        {
                        "id": "Programacao_evento",
                        "title": "Programação de Evento",
                        "creator": "Criado por BLiP",
                        "subtitle": "Esse chatbot foi feito para ajudar Comunidades e Empresas a divulgarem e oferecem suporte e informações sobre um determinado \\
                                evento em um bot preparado para funcionar com a maioria dos canais, incluindo o WhatsApp",
                        "categories": [
                            {
                            "category": "Entrenimento"
                            },
                            {
                            "subcategory": "Evento"
                            },
                            {
                            "subcategory": "Informativo"
                            }
                        ],
                        "download_uri": "/templates/programacao-evento/event_template.json",
                        "link_bot": "ZXZlbnRvdGVtcGxhdGVicnVubzo3ZjBiMTY1Ny0xYzVjLTRmMmQtYjkxYS05ZmJjNDE3ZjlmN2Q=",
                        "images": [
                            {
                            "url": "/templates/programacao-evento/Exemplo02.png"
                            },
                            {
                            "url": "/templates/programacao-evento/Exemplo03.png"
                            },
                            {
                            "url": "/templates/programacao-evento/Exemplo05.png"
                            },
                            {
                            "url": "/templates/programacao-evento/Exemplo04.png"
                            },
                            
                        ],
                        "tabs": {
                            "details": '<p class="content-title">Compatível com:</p> \\
                            <div class="compatible-channels"> \\
                                <img class="compatible-channels-img" src="/img/illustrations/whatsapp-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/workplace-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/messenger-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/telegram-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/blipchat-logo.svg"></img> \\
                            </div> \\
                            <p class="content-text">Esse chatbot foi feito para ajudar Comunidades e Empresas a divulgarem e oferecem suporte e informações \\
                                sobre um determinado evento\\
                                em um bot preparado para funcionar com a maioria dos canais, incluindo o WhatsApp\\
                            \\
                            <p class="content-title">O que pode ser feito?</p> \\
                            <ul> \\
                                <li class="content-list-text">Exibir seus contatos</li> \\
                                <li class="content-list-text">Atendimento humano</li> \\
                                <li class="content-list-text">Fornecer ao usuário informações sobre o evento</li> \\
                                <li class="content-list-text">Enviar imagens e documentos referentes ao evento.</li> \\
                            </ul>',  


                            "install": '<p class="content-title">Como instalar?</p>\\
                            <ul>\\
                                <li class="content-list-text">Baixe o fluxo do bot</li>\\
                                <li class="content-list-text">Crie um novo bot e importe o fluxo para ele.</li>\\
                            </ul>\\
                    <p class="content-text"><i>Obs.: Os blocos representados com o emoji ✅ são destinados exclusivamente ao canal WhatsApp.\\
                         Usuários que vem deste canal são automaticamente direcionados para esses blocos.',

                            "support": '<p class="content-title">Suporte</p> \\
                            <p class="content-text"> Este modelo de Chatbot é gratuito e tem como objetivo educacional, ajudar os usuários a compreenderem \\
                                e aprenderem sobre algumas funcionalidades do BLiP.</p>\\
                                \\
                            <p class="content-text"> A equipe do BLiP e da Take não prestam suporte a este modelo.</p>',
                        },
                        "table": [
                            {
                            "func": "✓ Multicanal"
                            },
                            {
                            "func": "✓ Carrossel"
                            },
                            {
                            "func": "✓ Menu"
                            },
                            {
                            "func": "✓ Imagens"
                            },
                            {
                            "func": "✓ Formatação de texto"
                            },
                            {
                            "func": "✓ Atendimento Humano"
                            },
                            {
                            "func": "✓ Emojis"
                            }
                        ]
                        },
                        {
                        "id": "Concessionaria_carros",
                        "title": "Concessionaria de carros",
                        "creator": "Criado por BLiP",
                        "subtitle": "Esse chatbot foi feito para ajudar Concessionárias de Carros a divulgarem e oferecem informações sobre seus produtos, \\
                            obter dados dos clientes e oferecer atendimento humano em um bot preparado para funcionar com a maioria dos canais\\
                             incluindo o WhatsApp.",
                        "categories": [
                            {
                            "category": "Varejo"
                            },
                            {
                            "subcategory": "Prospecção"
                            },
                            {
                            "subcategory": "Multicanal"
                            }
                        ],
                        "download_uri": "/templates/concessionaria-carros/concessionaria_template.json",
                        "link_bot": "Y29uY2Vzc2lvbnRlbXBsYXRlYnJ1bm86YmFhNmYzMjktMTMxMy00ZmUyLTlhNTktMjMyYTc1NGUyNTg1",
                        "images": [
                            {
                            "url": "/templates/concessionaria-carros/Exemplo01.png"
                            },
                            {
                            "url": "/templates/concessionaria-carros/Exemplo04.png"
                            },
                            {
                            "url": "/templates/concessionaria-carros/Exemplo02.png"
                            },
                            {
                            "url": "/templates/concessionaria-carros/Exemplo03.png"
                            },
                            
                            {
                            "url": "/templates/concessionaria-carros/Exemplo05.png"
                            },
                            
                        ],
                        "tabs": {
                            "details": '<p class="content-title">Compatível com:</p> \\
                            <div class="compatible-channels"> \\
                                <img class="compatible-channels-img" src="/img/illustrations/whatsapp-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/workplace-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/messenger-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/telegram-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/blipchat-logo.svg"></img> \\
                            </div> \\
                            <p class="content-text">Esse chatbot foi feito para ajudar Concessionárias de Carros a divulgarem e oferecem informações sobre seus produtos, \\
                                obter dados dos clientes e oferecer atendimento humano em um bot preparado para funcionar com a maioria dos canais, \\
                                incluindo o WhatsApp.\\
                            \\
                            <p class="content-title">O que pode ser feito?</p> \\
                            <ul> \\
                                <li class="content-list-text">Exibir seus produtos</li> \\
                                <li class="content-list-text">Prover informações sobre os produtos</li> \\
                                <li class="content-list-text">Salvar dados dos contatos</li> \\
                                <li class="content-list-text">Atendimento humano.</li> \\
                            </ul>',  


                            "install": '<p class="content-title">Como instalar?</p>\\
                            <ul>\\
                                <li class="content-list-text">Baixe o fluxo do bot</li>\\
                                <li class="content-list-text">Crie um novo bot e importe o fluxo para ele.</li>\\
                                <li class="content-list-text">Faça as modificações conforme sua necessidade.</li>\\
                            </ul>',

                            "support": '<p class="content-title">Suporte</p> \\
                            <p class="content-text"> Este modelo de Chatbot é gratuito e tem como objetivo educacional, ajudar os usuários a compreenderem \\
                                e aprenderem sobre algumas funcionalidades do BLiP.</p>\\
                                \\
                            <p class="content-text"> A equipe do BLiP e da Take não prestam suporte a este modelo.</p>',
                        },
                        "table": [
                            {
                            "func": "✓ Multicanal"
                            },
                            {
                            "func": "✓ Imagens"
                            },
                            {
                            "func": "✓ Formatação de texto"
                            },
                            {
                            "func": "✓ Atendimento Humano"
                            },
                            {
                            "func": "✓ Salvar contatos"
                            }
                        ]
                        },
                        {
                        "id": "Imobiliaria",
                        "title": "Imobiliária",
                        "creator": "Criado por BLiP",
                        "subtitle": "Esse chatbot foi feito para coletar informações sobre clientes que querem comprar ou alugar um imóvel e \\
                            transferí-los para um atendimento humano, em uma interface compatível com a maioria dos canais, incluindo o WhatsApp.",
                        "categories": [
                            {
                            "category": "Serviços"
                            },
                            {
                            "subcategory": "Prospecção"
                            },
                            {
                            "subcategory": "Multicanal"
                            }
                        ],
                        "download_uri": "/templates/imobiliaria/imobiliaria_template.json",
                        "link_bot": "aW1vYmlsaWFyaWF0ZW1wbGF0ZWJydW5vOjQ5NTgzYzMyLTFkMjYtNDc0My1hZjI3LWViNDg5YmFjNzEwZg==",
                        "images": [
                            {
                            "url": "/templates/imobiliaria/Exemplo02.png"
                            },
                            {
                            "url": "/templates/imobiliaria/Exemplo01.png"
                            },
                            {
                            "url": "/templates/imobiliaria/Exemplo03.png"
                            },
                            {
                            "url": "/templates/imobiliaria/Exemplo04.png"
                            },
                        ],
                        "tabs": {
                            "details": '<p class="content-title">Compatível com:</p> \\
                            <div class="compatible-channels"> \\
                                <img class="compatible-channels-img" src="/img/illustrations/whatsapp-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/workplace-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/messenger-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/telegram-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/blipchat-logo.svg"></img> \\
                            </div> \\
                            <p class="content-text">Esse chatbot foi feito para coletar informações sobre clientes que querem comprar ou alugar um imóvel e \\
                            transferí-los para um atendimento humano, em uma interface compatível com a maioria dos canais, incluindo o WhatsApp.\\
                            \\
                            <p class="content-title">O que pode ser feito?</p> \\
                            <ul> \\
                                <li class="content-list-text">Coletar informações do cliente</li> \\
                                <li class="content-list-text">Salvar dados dos contatos</li> \\
                                <li class="content-list-text">Atendimento humano.</li> \\
                                <li class="content-list-text">Definir horários de atendimento.</li> \\
                            </ul>',  


                            "install": '<p class="content-title">Como instalar?</p>\\
                            <ul>\\
                                <li class="content-list-text">Baixe o fluxo do bot</li>\\
                                <li class="content-list-text">Crie um novo bot e importe o fluxo para ele.</li>\\
                                <li class="content-list-text">Defina os horários de atendimento nas variáveis de configuração.</li>\\
                                <ul> \\
                                    <li class="content-list-text">Horário de início do atendimento: <b>startDate (ex.: 09:00)</b></li>\\
                                    <li class="content-list-text">Horário de término do atendimento: <b>endDate (ex.: 18:00)</b></li>\\
                                    <li class="content-list-text">Dias de atendimento: <b>workDays (ex.: 1,2,3,4,5)</b></li>\\
                                    <ul>\\
                                        <li class="content-list-text">Onde cada número representa um dia da semana</li>\\
                                        <li class="content-list-text">0 para Domingo, 1 para Segunda etc</li>\\
                                    </ul>\\
                                </ul>\\
                                <li class="content-list-text">O seu fuso-horário em relação ao UTC: <b>dateTimeOffset (ex.: -3)</b></li><br>\\
                                <img src="/templates/imobiliaria/variaveis-config.png"></img><br>\\
                                <li class="content-list-text">Conecte seu canal de atendimento humano (ex.: BLiP Desk)</li>\\
                                    <ul>\\
                                        <li class="content-list-text"><a href="https://help.blip.ai/docs/helpdesk/blipdesk/como-ativar-blip-desk-canal/">Como ativar o BLiP Desk como canal de atendimento</a></li>\\
                                    </ul>\\
                                \\
                            </ul>',

                            "support": '<p class="content-title">Suporte</p> \\
                            <p class="content-text"> Este modelo de Chatbot é gratuito e tem como objetivo educacional, ajudar os usuários a compreenderem \\
                                e aprenderem sobre algumas funcionalidades do BLiP.</p>\\
                                \\
                            <p class="content-text"> A equipe do BLiP e da Take não prestam suporte a este modelo.</p>',
                        },
                        "table": [
                            {
                            "func": "✓ Multicanal"
                            },
                            {
                            "func": "✓ Atendimento Humano"
                            },
                            {
                            "func": "✓ Horários de atendimento"
                            },
                            {
                            "func": "✓ Emojis"
                            },
                            {
                            "func": "✓ Salvar contatos"
                            }
                        ]
                        },
                        {
                        "id": "Loja_impressora",
                        "title": "Loja de Impressoras",
                        "creator": "Criado por BLiP",
                        "subtitle": "Esse chatbot foi feito para coletar informações sobre as necessidades de um cliente e baseado nelas, \\
                                        mostrar o produto que melhor se enquadra no seu perfil, \\
                            transferí-lo para um atendimento humano, em uma interface compatível com a maioria dos canais, incluindo o WhatsApp.",
                        "categories": [
                            {
                            "category": "Varejo"
                            },
                            {
                            "subcategory": "Prospecção"
                            },
                            {
                            "subcategory": "Multicanal"
                            }
                        ],
                        "download_uri": "/templates/loja-impressora/printer_template.json",
                        "link_bot": "bG9qYWRlaW1wcmVzc29yYXN0ZW1wbGF0ZTphNjZhMTE3Mi04ODhkLTQxOTQtYWZmNy04N2Q0NWZlYjA5OGY=",
                        "images": [
                            {
                            "url": "/templates/loja-impressora/Exemplo01.png"
                            },
                            {
                            "url": "/templates/loja-impressora/Exemplo02.png"
                            },
                            {
                            "url": "/templates/loja-impressora/Exemplo03.png"
                            },
                        ],
                        "tabs": {
                            "details": '<p class="content-title">Compatível com:</p> \\
                            <div class="compatible-channels"> \\
                                <img class="compatible-channels-img" src="/img/illustrations/whatsapp-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/workplace-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/messenger-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/telegram-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/blipchat-logo.svg"></img> \\
                            </div> \\
                            <p class="content-text">Esse chatbot foi feito para coletar informações sobre as necessidades de um cliente e baseado nelas, \\
                                        mostrar o produto que melhor se enquadra no seu perfil e \\
                            transferí-lo para um atendimento humano, em uma interface compatível com a maioria dos canais, incluindo o WhatsApp.\\
                            \\
                            <p class="content-title">O que pode ser feito?</p> \\
                            <ul> \\
                                <li class="content-list-text">Coletar informações do cliente</li> \\
                                <li class="content-list-text">Fazer perguntas e retornar um produto personalizado</li> \\
                                <li class="content-list-text">Atendimento humano.</li> \\
                            </ul>',  


                            "install": '<p class="content-title">Como instalar?</p>\\
                            <ul>\\
                                <li class="content-list-text">Baixe o fluxo do bot</li>\\
                                <li class="content-list-text">Crie um novo bot e importe o fluxo para ele.</li>\\
                                <li class="content-list-text">Altere as informações conforme a sua necessidade.</li>\\
                                <li class="content-list-text">Conecte-se a um canal de atendimento humano (Ex.: BLiP Desk)</li>\\
                                    <ul>\\
                                        <li class="content-list-text"><a href="https://help.blip.ai/docs/helpdesk/blipdesk/como-ativar-blip-desk-canal/">Como ativar o BLiP Desk como canal de atendimento></a></li>\\
                                \\
                            </ul>',

                            "support": '<p class="content-title">Suporte</p> \\
                            <p class="content-text"> Este modelo de Chatbot é gratuito e tem como objetivo educacional, ajudar os usuários a compreenderem \\
                                e aprenderem sobre algumas funcionalidades do BLiP.</p>\\
                                \\
                            <p class="content-text"> A equipe do BLiP e da Take não prestam suporte a este modelo.</p>',
                        },
                        "table": [
                            {
                            "func": "✓ Multicanal"
                            },
                            {
                            "func": "✓ Atendimento Humano"
                            },
                            {
                            "func": "✓ Imagens"
                            },
                            {
                            "func": "✓ Emojis"
                            }
                        ]
                        },
                        {
                        "id": "Geracao_leads",
                        "title": "Geração de Leads",
                        "creator": "Criado por BLiP",
                        "subtitle": "Esse chatbot foi feito para coletar informações sobre leads, como nome, telefone, email e nível de interesse, \\
                            e enviá-las para sua conta no Hubspot. Além disso, há a oportunidade de atendimento humano e uma interface \\
                            compatível com todos os canais.",
                        "categories": [
                            {
                            "category": "Marketing"
                            },
                            {
                            "subcategory": "Prospecção"
                            },
                            {
                            "subcategory": "Integrações"
                            }
                        ],
                        "download_uri": "/templates/geracao-leads/getLeads_template.json",
                        "link_bot": "cHJvc3BlY2Nhb2RlbGVhZHM6NjAxZmNhNzQtZWExZi00N2MzLTg2Y2QtYTFhOWNkZTM2M2Mx",
                        "images": [
                            {
                            "url": "/templates/geracao-leads/Exemplo01.png"
                            },
                            {
                            "url": "/templates/geracao-leads/Exemplo02.png"
                            },
                            {
                            "url": "/templates/geracao-leads/Exemplo03.png"
                            },
                        ],
                        "tabs": {
                            "details": '<p class="content-title">Compatível com:</p> \\
                            <div class="compatible-channels"> \\
                                <img class="compatible-channels-img" src="/img/illustrations/whatsapp-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/blipchat-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/messenger-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/workplace-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/telegram-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/skype-logo.svg"></img> \\
                            </div> \\
                            <p class="content-text">Esse chatbot foi feito para coletar informações sobre leads, como nome, telefone, email e nível de interesse, \\
                            e enviá-las para sua conta no Hubspot. Além disso, há a oportunidade de atendimento humano e uma interface \\
                            compatível com todos os canais.\\
                            \\
                            <p class="content-title">O que pode ser feito?</p> \\
                            <ul> \\
                                <li class="content-list-text">Exibir seus serviços</li> \\
                                <li class="content-list-text">Prospectar seus clientes</li> \\
                                <li class="content-list-text">Integração com o Hubspot</li> \\
                                <li class="content-list-text">Atendimento humano</li> \\
                            </ul>\\
                            \\
                            <p class="content-title">Pré requisitos:</p>\\
                            <ul>\\
                                <li class="content-list-text">Uma conta no <a href="https://www.hubspot.com/">Hubspot</a></li>\\
                                <li class="content-list-text">Uma API Key no Hubspot.</li>\\
                            </ul>',  

                            "install": '<p class="content-title">Como instalar?</p>\\
                            \\
                            <ul>\\
                                <li class="content-list-text">Baixe o fluxo do bot</li>\\
                                <li class="content-list-text">Crie um novo bot e importe o fluxo para ele.</li>\\
                                <li class="content-list-text">Acesse sua conta no <a href="https://www.hubspot.com/">Hubspot.</a></li>\\
                                <li class="content-list-text">Copie sua API Key</li>\\
                                <ul>\\
                                    <li class="content-list-text">Dentro no Hubspot, acesse <b>Configurações > Integrações > Chave de API</b> e copie (ou crie) a sua chave.</li>\\
                                </ul>\\
                                <li class="content-list-text">Insira sua API Key no seu bot, através da variável de configuração: <b>HApiKey</b></li>\\
                                <li class="content-list-text">Conecte-se a um canal de atendimento humano (Ex.: BLiP Desk)</li>\\
                                    <ul>\\
                                        <li class="content-list-text"><a href="https://help.blip.ai/docs/helpdesk/blipdesk/como-ativar-blip-desk-canal/">Como ativar o BLiP Desk como canal de atendimento</a></li>\\
                                    </ul>\\
                            </ul>',

                            "support": '<p class="content-title">Suporte</p> \\
                            <p class="content-text"> Este modelo de Chatbot é gratuito e tem como objetivo educacional, ajudar os usuários a compreenderem \\
                                e aprenderem sobre algumas funcionalidades do BLiP.</p>\\
                                \\
                            <p class="content-text"> A equipe do BLiP e da Take não prestam suporte a este modelo.</p>',
                        },
                        "table": [
                            {
                            "func": "✓ Integração: HubSpot"
                            },
                            {
                            "func": "✓ Multicanal"
                            },
                            {
                            "func": "✓ Requisições HTTP"
                            },
                            {
                            "func": "✓ Atendimento Humano"
                            },
                            {
                            "func": "✓ Emojis"
                            }
                        ]
                        }
                    ]
                    };
                    var template;
                    for(var k = 0; k < data.templates.length; k++){
                        if(data.templates[k].id == myParam){
                            template = data.templates[k];
                            break;
                        }
                    }

                    if (template){
                        var categories_details = document.getElementsByClassName('categories-details')[0];
                        
                        template.categories.forEach(function (category, index) {
                                if (Object.keys(category).toString() == "category"){
                                    var element = document.createElement("button");
                                    element.setAttribute("class", "category-details");
                                    element.innerHTML = Object.values(category).toString();
                                    categories_details.appendChild(element);
                                }else{
                                    var element = document.createElement("button");
                                    element.setAttribute("class", "subcategory-details");
                                    element.innerHTML = Object.values(category).toString();
                                    categories_details.appendChild(element);
                                }
                            });
                        
                        var title_details = document.getElementsByClassName('title-details')[0];
                        title_details.innerHTML = template.title.toString();

                        var creator = document.getElementsByClassName('creator-template')[0];
                        creator.innerHTML = template.creator.toString();

                        var subtitle = document.getElementsByClassName('subtitle-details')[0];
                        subtitle.innerHTML = template.subtitle.toString();

                        var download = document.getElementById('download');
                        download.href = template.download_uri.toString();

                        var linkBot = document.getElementsByClassName('iframe-bot')[0];
                        linkBot.src = template.link_bot.toString();

                        var carousel = document.getElementsByClassName("carousel")[0];
                        var dots = document.getElementsByClassName("dots")[0];
                        template.images.forEach(function(image, index) {
                            var div = document.createElement("div");
                            div.setAttribute("class", "mySlides fade");
                                
                                var img = document.createElement("img");
                                img.src = image.url.toString();
                            div.appendChild(img);
                            carousel.appendChild(div);

                            var dot = document.createElement("span");
                            dot.setAttribute("class", "dot");
                            dot.setAttribute("id", index);
                            dots.appendChild(dot);

                        });

                        var table = document.getElementsByTagName('table')[0];
                        table.setAttribute("class", "table-func");
                        template.table.forEach(function(row, index){
                            var tr = document.createElement("tr");
                            tr.setAttribute("class", "tr-details");
                                var td = document.createElement("td");
                                td.setAttribute("class", "td-details");
                                    var content = document.createElement("div");
                                    content.setAttribute("class", "td-details-content");
                                        var text = document.createTextNode(row.func.toString());
                                    content.appendChild(text);
                                td.appendChild(content);
                            tr.appendChild(td);
                        table.appendChild(tr);
                        });


                        var details = document.getElementById("Details");
                        details.innerHTML = template.tabs.details;
                            var a = document.createElement("a");
                            a.setAttribute("class", "docs-prev button");
                            Object.assign(a.style, {"margin-top": "87px", "margin-bottom": "80px", "text-align": "center", "height": "38px" ,"width": "30%", "min-width": "fit-content", "border-radius": "8px"});
                            a.href = "/templates";
                                var span = document.createElement("span");
                                span.setAttribute("class", "function-name-prevnext");
                                span.innerHTML = "< Ver todos os templates";
                                span.style.fontWeight = "bold";
                            a.appendChild(span);
                        details.appendChild(a);


                        var install = document.getElementById("Install");
                        install.innerHTML = template.tabs.install;
                        var b = document.createElement("a");
                            b.setAttribute("class", "docs-prev button");
                            Object.assign(b.style, {"margin-top": "87px", "margin-bottom": "80px", "text-align": "center", "height": "38px" ,"width": "30%", "min-width": "fit-content", "border-radius": "8px"});
                            b.href = "/templates";
                                var span = document.createElement("span");
                                span.setAttribute("class", "function-name-prevnext");
                                span.innerHTML = "< Ver todos os templates";
                                span.style.fontWeight = "bold";
                            b.appendChild(span);
                        install.appendChild(b);

                        var support = document.getElementById("Support");
                        support.innerHTML = template.tabs.support;
                        var c = document.createElement("a");
                            c.setAttribute("class", "docs-prev button");
                            Object.assign(c.style, {"margin-top": "87px", "margin-bottom": "80px", "text-align": "center", "height": "38px" ,"width": "30%", "min-width": "fit-content","border-radius": "8px"});
                            c.href = "/templates";
                                var span = document.createElement("span");
                                span.setAttribute("class", "function-name-prevnext");
                                span.innerHTML = "< Ver todos os templates";
                                span.style.fontWeight = "bold";
                            c.appendChild(span);
                        support.appendChild(c);
                    }
                    else{
                        alert("404: PÁGINA NÃO ENCONTRADA!"); 
                        window.location.href = "/templates";
                    }
                    
                    
                    new BlipChat()
                        .withAppKey(template.link_bot)
                        .withButton({"color":"#2CC3D5","icon":""})
                        .withTarget("iframe")
                        .build();
                    
                    
                `
                }}
            />
        );
    }
}

Detail.title = 'Template';
module.exports = Detail; 