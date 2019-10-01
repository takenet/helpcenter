const React = require('react');
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
                            <p className="title">Seja usuário beta!</p>
                            <p className="subtitle">Utilize novas funcionalidades do BLiP antes de serem implementadas</p>
                                <input type="email"
                                    id="emailForm"
                                    name="emailForm"
                                    className="form-input-email-page"
                                    placeholder="Digite o seu e-mail">
                                </input>
                                <button id="Bsubmit" disabled={true} className="button-beta-page">Quero ser beta!</button>
                        </div>
                        <div className="illustration-beta">
                            <img src="/img/illustrations/Beta-1.svg" className="beta-img"></img>
                        </div>
                    </div>

                    <div className="beta-contents">
                        <p className="title">Porque ser um usuário beta?</p>
                        <div className="content">
                            <p className="text">As novas funcionalidades do BLiP são disponibilizadas de forma controlada, para grupos de usuários específicos.
                            Esse processo ajuda a equipe que desenvolve a plataforma a validar algumas hipóteses e
                            coletar feedbacks, antes mesmo da funcionalidade estar disponível para todos os clientes.
                            </p>

                            <p className="text">Os usuários beta tem acesso as funcionalidades que <b>ainda estão em fase de avaliação</b>. Essa é uma excelente
                            oportunidade para usuários <i>early adopters</i> que gostam de se aventurar e testar tudo o que há de mais novo no mundo de bots.
                            </p>


                            <p className="text">
                                <b>O programa BLiP Beta não é indicado para contas de usuários que possuem bots em produção</b>.
                                Caso esse seja o seu caso, crie um conta de testes e utilize-a como Beta.
                            </p>
                        </div>

                        <p className="title">Como dar feedback sobre novas funcionalidades?</p>
                        <div className="content">
                            <p className="text">O processo de feedbacks para as funcionalidades disponibilizadas para os <b>usuários Beta</b> acontece através
                             de contatos por email e também através do <a href="https://ideas.blip.ai" target="blank">BLiP Ideas</a> - portal de sugestões de novas funcionalidades da plataforma.</p>

                            <p className="text">Outra forma de ajudar é reportar qualquer suspeita de problema através do <a href="https://forum.blip.ai" target="blank">Fórum do BLiP</a>.
                            Neste caso, abra um ticket no fórum, relatando o problema encontrado</p>
                        </div>

                        <p className="title">Ajude-nos a evoluir!</p>
                        <div className="content">
                            <p className="text">Os usuários beta tem um papel fundamental no processo de construção da plataforma.
                            Através dos testes, avaliações e feedbacks, eles ajudam a equipe do BLiP no lançamento de funcionalidades cada vez mais aderentes ao
                            problemas das empresas no momento de construir uma aplicação conversacional.</p>

                            <p className="text">Para se tornar um usuário beta insira seu email na seção superior desta página e clique no botão <b>Quero ser beta!</b>.
                            <b></b></p>
                        </div>

                    </div>
                </div>

                <div id="myModal" className="modal-beta">
                    <div className="modal-beta-content">
                        <div className="modal-beta-header">
                            <BlipIcon name="checkball-outline" className="bp-fs-1 bp-fill-white"></BlipIcon>
                            <p className="modal-beta-title">Parabéns, você agora é um beta!</p>
                        </div>
                        <div className="modal-beta-body">
                            <p className="modal-beta-text">Em alguns instantes você vai receber um e-mail com mais informações</p>
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
module.exports = Beta;