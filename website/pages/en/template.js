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

                                <a id="prev" className="arrow-carousel">&#10094;</a>
                                <a id="next" className="arrow-carousel">&#10095;</a>
                            </div>
                            <div className="dots">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>


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
                            <h3>Install</h3>
                            <p>Details is the capital of France.</p>
                        </div>

                        <div id="Support" className="tabcontent">
                            <h3>Support</h3>
                            <p>Support is the capital of Japan.</p>
                        </div>
                    </div>

                    <div className="func-table">
                        <p className="content-title">Funcionalidades</p>
                        <table>
                            <tr className="tr-details">
                                <td className="td-details">Funcionalidade 1</td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">Funcionalidade 1</td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">Funcionalidade 1</td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">Funcionalidade 1</td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">Funcionalidade 1</td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">Funcionalidade 1</td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">Funcionalidade 1</td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">Funcionalidade 1</td>
                            </tr>
                            <tr className="tr-details">
                                <td className="td-details">Funcionalidade 1</td>
                            </tr>
                            <tr>
                                <td className="td-details">Funcionalidade 1</td>
                            </tr>
                        </table>
                    </div>


                </div>
                <ScriptCarousel></ScriptCarousel>
                <ScriptTabs></ScriptTabs>
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
                    var clickNext = 0;
                    var clickPrev = 0;
                    var slideIndex = 1;
                    var arrows = document.getElementsByClassName("arrow-carousel");
                    var dots = document.getElementsByClassName("dot");
                    showSlides(slideIndex);

                    arrows[0].onclick = function(){
                        clickPrev ++;
                        showSlides(slideIndex += -1);
                    }

                    arrows[1].onclick = function(){
                        clickNext ++;
                        showSlides(slideIndex += 1);
                    }
                   
                    function showSlides(n) {
                        var i;
                        var slides = document.getElementsByClassName("mySlides");
                        if (n >= slides.length) {
                            slideIndex = 0
                        }
                        if (n < 0){
                            slideIndex = slides.length-1;
                        }
                        
                        for (i = 0; i < slides.length; i++) {
                            if (! slides[i].getElementsByTagName('img')[0].className == "img-disabled")
                            slides[i].getElementsByTagName('img')[0].className = "img-inactive";
                        }
                        for (i = 0; i < dots.length; i++) {
                            dots[i].className = dots[i].className.replace(" active", "");
                        }
                        slides[slideIndex].getElementsByTagName('img')[0].className = "img-active";
                        dots[slideIndex].className += " active";
                        slides[slideIndex-1].getElementsByTagName('img')[0].className = "img-disabled";
                        slides[slideIndex+1].getElementsByTagName('img')[0].className = "img-inactive";
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
                    }

                `
                }}
            />
        );
    }
}

Detail.title = 'Template';
module.exports = Detail; 