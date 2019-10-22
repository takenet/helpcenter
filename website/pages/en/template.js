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
                            <div className="categories-details">
                                <button className="category-details">Categoria</button>
                                <button className="subcategory-details">Categoria</button>
                                <button className="subcategory-details">Categoria</button>
                                <button className="subcategory-details">Categoria</button>
                                <button className="subcategory-details">Categoria</button>
                                <button className="subcategory-details">Categoria</button>
                                <button className="subcategory-details">Categoria</button>
                                <button className="subcategory-details">Categoria</button>
                                <button className="subcategory-details">Categoria</button>
                                <button className="subcategory-details">Categoria</button>

                            </div>
                            <p className="title-details">Título do template aqui blah blah blah blah blah</p>
                            <p className="creator-template">Criado por BLiP</p>
                            <p className="subtitle-details">Genialidade é fruto de muito hardwork. Você tá realmente obcecado pelos seus sonhos?
                                Construa algo que seja top. Viva em busca da masterização e do profissionalismo, every f*ing day.
                                O inconformismo é o combustível da alta performance. A vida acontece de você e não pra você. Walk the f*ing talk.</p>
                            <div className="buttons-details">
                                <a href="/img/illustrations/carousel-1.svg"
                                download="blipTest" target="blank"><button className="button-details-download">
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
                                <div className="mySlides fade">
                                    <img className="img-inactive" src="/img/illustrations/carousel-1.svg" ></img>
                                </div>

                                <div className="mySlides fade">
                                    <img className="img-active" src="/img/illustrations/carousel-2.svg" ></img>
                                </div>

                                <div className="mySlides fade">
                                    <img className="img-inactive" src="/img/illustrations/carousel-3.svg" ></img>
                                </div>

                                <div className="mySlides fade">
                                    <img className="img-disabled" src="/img/illustrations/carousel-1.svg" ></img>
                                </div>

                                <div className="mySlides fade">
                                    <img className="img-disabled" src="/img/illustrations/carousel-2.svg" ></img>
                                </div>

                            </div>
                            <div className="dots">
                                <span id="0" className="dot"></span>
                                <span id="1"className="dot"></span>
                                <span id="2"className="dot"></span>
                                <span id="3" className="dot"></span>
                                <span id="4" className="dot"></span>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Modal bot */}
                 <div id="modalBot" class="modalBot">
                        <div class="modal-content-bot">
                            <span class="closeBot">&times;</span>
                            <iframe className="iframe-bot" src="https://chat.blip.ai/?appKey=ZGVtb2JvdDQ6NzQxYjc5YzktMmNjYS00ZGRjLThlODQtZWIwYmRlODkyNmU3"></iframe>
                        </div>
                </div>    
                   

                {/* Conteudo */}
                <div className="page-content-details">

                    <div className="tabs-area">
                        <div className="tab">
                            <button id="TabDetails" className="tablinks-active">Detalhes</button>
                            <button id="TabInstall" className="tablinks">Como instalar?</button>
                            <button id="TabSupport" className="tablinks">Suporte</button>
                        </div>


                        <div id="Details" className="tabcontent">
                            <p className="content-title">Compatível com:</p>
                            <div className="compatible-channels">
                                <img className="compatible-channels-img" src="/img/illustrations/whatsapp-logo.svg"></img>
                                <img className="compatible-channels-img" src="/img/illustrations/workplace-logo.svg"></img>
                                <img className="compatible-channels-img" src="/img/illustrations/blipchat-logo.svg"></img>
                            </div>
                            <p className="content-text">Chatbot Agency is designed for chatbot agency to support your customers to build chatbots successfully.
                                This chatbot provides chatbot features, benefits, use cases to help your customers design a chatbot and apply chatbots to
                            boost sales to a higher level.</p>
                            <ul>
                                <li className="content-list-text">Collect the customer inquiries</li>
                                <li className="content-list-text">Work 24/7/365 and deliver leads into your inbox each day</li>
                                <li className="content-list-text">Provide chatbot information and use cases</li>
                                <li className="content-list-text">Help the customers build chatbot successfully</li>
                                <li className="content-list-text">Improve your business branding & engagement</li>
                            </ul>
                            <p className="content-text">Viva em busca da masterização e do profissionalismo, every f*ing day.
                                É você quem decide se o seu dia vai ser incrível ou não.  Você nunca vai estar pronto então comece agora.
                                Quebre padrões e atinja a alta performance em todas as áreas da sua vida. Pra chegar ao next level você precisa de
                                comprometimento e muito hardwork. Você tá realmente obcecado pelos seus sonhos?  Você tá realmente obcecado
                            pelos seus sonhos? Never f*ing give up. Você nunca vai estar pronto então comece agora.</p>
                        </div>

                        <div id="Install" className="tabcontent">
                            <p className="content-title">Como instalar?</p>
                            <p className="content-text"> Do mesmo modo, a valorização de fatores subjetivos nos obriga à análise das condições epistemológicas e cognitivas
                                exigidas. Por outro lado, o desafiador cenário globalizado cumpre um papel essencial na formulação das considerações
                                acima? Nada se pode dizer, pois sobre o que não se pode falar, deve-se calar. Assim mesmo, a estrutura atual da ideação
                                semântica exige a precisão e a definição dos prospectos condicionalizantes e necessários a todo juízo empírico.
                                Antes de mais nada, a inter-independência da objetivação e subjetivação auxilia a preparação e a composição das
                                posturas dos filósofos divergentes com relação às atribuições conceituais. Se a própria desterritorialização relativa
                                se projeta sobre a indeterminação contínua de distintas formas de fenômeno unificou os a priori sensíveis e
                                intelectuais numa determinação recíproca das novas teorias propostas.</p>

                            <p className="content-text">Finalmente, por trás dessa questão do sujeito e da realidade a consolidação das estruturas psico-lógicas assume importantes posições no
                                estabelecimento da natureza não-filosófica dos conceitos. Acima de tudo, o conceito de diáthesis e os princípios fundamentais de rhytmos e
                                arrythmiston permite um conhecimento geral de todo ser, sensível ou não sensível, da determinação do Ser enquanto Ser. Como Deleuze
                                eloquentemente mostrou, o início da atividade geral de formação de conceitos é condição necessária dos paradigmas filosóficos.
                                Um teórico da redundância negaria que a teoria de Fliess obstaculiza a apreciação da importância dos relacionamentos verticais
                                entre as hierarquias conceituais. Neste momento o leitor deve reconhecer que acabei de demolir as bases da metafísica de Heidegger,
                                pois o Übermensch de Nietzsche, ou seja, o Super-Homem, nos arrasta ao labirinto de sofismas obscuros do processo de comunicação
                                como um todo.</p>

                            <p className="content-text">No entanto, não podemos esquecer que o fenômeno da Internet obstaculiza a admissão de uma ontologia das ciências discursivas.
                                Poderia ser sugerido, entretanto, que a hegemonia do ambiente político resultou no abandono das relações entre o conteúdo proposicional
                                e o figurado. Segundo Heidegger, o plano de imanência pré-filosófico ainda não demonstrou convincentemente como vai participar na
                                mudança das múltiplas direções do ponto de transcendência do sentido enunciativo.</p>
                        </div>

                        <div id="Support" className="tabcontent">
                            <p className="content-title">Suporte</p>
                            <p className="content-text"> Do mesmo modo, a valorização de fatores subjetivos nos obriga à análise das condições epistemológicas e cognitivas
                                exigidas. Por outro lado, o desafiador cenário globalizado cumpre um papel essencial na formulação das considerações
                                acima? Nada se pode dizer, pois sobre o que não se pode falar, deve-se calar. Assim mesmo, a estrutura atual da ideação
                                semântica exige a precisão e a definição dos prospectos condicionalizantes e necessários a todo juízo empírico.
                                Antes de mais nada, a inter-independência da objetivação e subjetivação auxilia a preparação e a composição das
                                posturas dos filósofos divergentes com relação às atribuições conceituais. Se a própria desterritorialização relativa
                                se projeta sobre a indeterminação contínua de distintas formas de fenômeno unificou os a priori sensíveis e
                                intelectuais numa determinação recíproca das novas teorias propostas.</p>

                            <p className="content-text">Finalmente, por trás dessa questão do sujeito e da realidade a consolidação das estruturas psico-lógicas assume importantes posições no
                                estabelecimento da natureza não-filosófica dos conceitos. Acima de tudo, o conceito de diáthesis e os princípios fundamentais de rhytmos e
                                arrythmiston permite um conhecimento geral de todo ser, sensível ou não sensível, da determinação do Ser enquanto Ser. Como Deleuze
                                eloquentemente mostrou, o início da atividade geral de formação de conceitos é condição necessária dos paradigmas filosóficos.
                                Um teórico da redundância negaria que a teoria de Fliess obstaculiza a apreciação da importância dos relacionamentos verticais
                                entre as hierarquias conceituais. Neste momento o leitor deve reconhecer que acabei de demolir as bases da metafísica de Heidegger,
                                pois o Übermensch de Nietzsche, ou seja, o Super-Homem, nos arrasta ao labirinto de sofismas obscuros do processo de comunicação
                                como um todo.</p>

                            <p className="content-text">No entanto, não podemos esquecer que o fenômeno da Internet obstaculiza a admissão de uma ontologia das ciências discursivas.
                                Poderia ser sugerido, entretanto, que a hegemonia do ambiente político resultou no abandono das relações entre o conteúdo proposicional
                                e o figurado. Segundo Heidegger, o plano de imanência pré-filosófico ainda não demonstrou convincentemente como vai participar na
                                mudança das múltiplas direções do ponto de transcendência do sentido enunciativo.</p>
                        </div>
                    </div>

                    <div className="func-table">
                        <p className="content-title">Funcionalidades</p>
                        <table>
                            <tr className="tr-details">
                                <td className="td-details">
                                    <div className="td-details-content">
                                        <BlipIcon name="true" className="bp-fs-3-details"></BlipIcon>
                                        Funcionalidade 1
                                    </div>
                                </td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">
                                    <div className="td-details-content">
                                        <BlipIcon name="true" className="bp-fs-3-details"></BlipIcon>
                                        Funcionalidade 1
                                    </div>
                                </td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">
                                    <div className="td-details-content">
                                        <BlipIcon name="true" className="bp-fs-3-details"></BlipIcon>
                                        Funcionalidade 1
                                    </div>
                                </td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">
                                    <div className="td-details-content">
                                        <BlipIcon name="true" className="bp-fs-3-details"></BlipIcon>
                                        Funcionalidade 1
                                    </div>
                                </td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">
                                    <div className="td-details-content">
                                        <BlipIcon name="true" className="bp-fs-3-details"></BlipIcon>
                                        Funcionalidade 1
                                    </div>
                                </td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">
                                    <div className="td-details-content">
                                        <BlipIcon name="true" className="bp-fs-3-details"></BlipIcon>
                                        Funcionalidade 1
                                    </div>
                                </td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">
                                    <div className="td-details-content">
                                        <BlipIcon name="true" className="bp-fs-3-details"></BlipIcon>
                                        Funcionalidade 1
                                    </div>
                                </td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">
                                    <div className="td-details-content">
                                        <BlipIcon name="true" className="bp-fs-3-details"></BlipIcon>
                                        Funcionalidade 1
                                    </div>
                                </td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">
                                    <div className="td-details-content">
                                        <BlipIcon name="true" className="bp-fs-3-details"></BlipIcon>
                                        Funcionalidade 1
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="td-details">
                                    <div className="td-details-content">
                                        <BlipIcon name="true" className="bp-fs-3-details"></BlipIcon>
                                        Funcionalidade 1
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>


                </div>
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

Detail.title = 'Template';
module.exports = Detail; 