const React = require('react');
const translate = require('../../server/translate.js').translate;
const request = require("request");


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

class Beta extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ email: event.target.email });
        console.log(event);
    }

    handleSubmit(event) {
        console.log(event);
        event.preventDefault();
        this.setState({ email: 'baba' })
    }

    render() {
        return (
            <div>
                <div>
                    <div className="be-beta">
                        <div className="formulario-beta">
                            <p className="title"><translate>Seja usuário beta!</translate></p>
                            <p className="subtitle"><translate>Utilize novas funcionalidades do BLiP antes de serem implementadas</translate></p>
                                <input type="email"
                                    id="emailForm"
                                    name="emailForm"
                                    className="form-input-email-page"
                                    placeholder="Digite o seu e-mail">
                                </input>
                                <button id="Bsubmit" disabled={true} className="button-beta-page"><translate>Quero ser beta!</translate></button>
                        </div>
                        <div className="illustration-beta">
                            <img src="/img/illustrations/Beta-1.svg" className="beta-img"></img>
                        </div>
                    </div>

                    <div className="beta-contents">
                        <p className="title"><translate>Porque ser um usuário beta?</translate></p>
                        <div className="content">
                            <p className="text"><translate>As novas funcionalidades do BLiP são disponibilizadas de forma controlada, para grupos de usuários específicos.
                            Esse processo ajuda a equipe que desenvolve a plataforma a validar algumas hipóteses e
                            coletar feedbacks, antes mesmo da funcionalidade estar disponível para todos os clientes.</translate>
                            </p>

                            <p className="text"><translate>Os usuários beta tem acesso as funcionalidades que</translate> <b><translate>ainda estão em fase de avaliação</translate></b>. <translate>Essa é uma excelente
                            oportunidade para usuários</translate> <i>early adopters</i> <translate>que gostam de se aventurar e testar tudo o que há de mais novo no mundo de bots.</translate>
                            </p>


                            <p className="text">
                                <b><translate>O programa BLiP Beta não é indicado para contas de usuários que possuem bots em produção</translate></b>.
                                <translate> Caso esse seja o seu caso, crie um conta de testes e utilize-a como Beta.</translate>
                            </p>
                        </div>

                        <p className="title"><translate>Como dar feedback sobre novas funcionalidades?</translate></p>
                        <div className="content">
                            <p className="text"><translate>O processo de feedbacks para as funcionalidades disponibilizadas para os</translate> <b><translate>usuários Beta</translate></b> <translate>acontece através
                             de contatos por email e também através do</translate> <a href="https://ideas.blip.ai" target="blank">BLiP Ideas</a> - <translate>portal de sugestões de novas funcionalidades da plataforma.</translate></p>

                            <p className="text"><translate>Outra forma de ajudar é reportar qualquer suspeita de problema através do</translate> <a href="https://forum.blip.ai" target="blank"><translate>Fórum do BLiP</translate></a>.
                            <translate>Neste caso, abra um tópico no fórum, relatando o problema encontrado</translate></p>
                        </div>

                        <p className="title"><translate>Ajude-nos a evoluir!</translate></p>
                        <div className="content">
                            <p className="text"><translate>Os usuários beta tem um papel fundamental no processo de construção da plataforma.
                            Através dos testes, avaliações e feedbacks, eles ajudam a equipe do BLiP no lançamento de funcionalidades cada vez mais aderentes ao
                            problemas das empresas no momento de construir uma aplicação conversacional.</translate></p>

                            <p className="text"><translate>Para se tornar um usuário beta insira seu email na seção superior desta página e clique no botão</translate> <b><translate>Quero ser beta!</translate></b>.
                            <b></b></p>
                        </div>

                    </div>
                </div>

                <div id="myModal" className="modal-beta">
                    <div className="modal-beta-content">
                        <div className="modal-beta-header">
                            <BlipIcon name="checkball-outline" className="bp-fs-1 bp-fill-white"></BlipIcon>
                            <p className="modal-beta-title"><translate>Parabéns, você agora é um beta!</translate></p>
                        </div>
                        <div className="modal-beta-body">
                            <p className="modal-beta-text"><translate>Em alguns instantes você vai receber um e-mail com mais informações</translate></p>
                            <button className="close-beta" > Ok</button>
                        </div>
                    </div>
                </div>

                <ScriptForm />
            </div>
        );

    }
}

class ScriptForm extends React.Component {
    render() {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        var btn = document.getElementById("Bsubmit");
                        emailF =  document.getElementById("emailForm");
                        var modal = document.getElementById("myModal");
                        var span = document.getElementsByClassName("close-beta")[0];
        
                        btn.onclick = function() {
                        var data = JSON.stringify({
                            "Email": emailF.value
                        });
                           axios.post('https://helpcenter-api.azurewebsites.net/api/betauser', {
                                "Email": emailF.value
                            }, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin' : '*',
                                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                                'X-Requested-With': 'XMLHttpRequest'
                            }
                            })
                            .then(function (response) {
                                modal.style.display = "block";
                            });
                            
                        };

                        span.onclick = function() {
                            modal.style.display = "none";
                        }; 
                        

                    document.getElementById("emailForm").addEventListener("keyup", function() {
                        var nameInput = document.getElementById('emailForm').value;
                        if (nameInput != "") {
                            document.getElementById('Bsubmit').removeAttribute("disabled");
                        } else {
                            document.getElementById('Bsubmit').setAttribute("disabled", null);
                        }
                    });

                `
                }}
            />
        );
    }
}

Beta.title = 'BLiP Beta';


Beta.defaultProps = {
    language: 'pt-BR',
  };

module.exports = Beta;