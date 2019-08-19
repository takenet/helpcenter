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
                            <form id="form-beta" name="form-beta">
                                <input type="email"
                                    id="emailForm"
                                    name="emailForm"
                                    required
                                    className="form-input-email-page"
                                    placeholder="Digite o seu e-mail">
                                </input>
                                <button id="Bsubmit" disabled className="button-beta-page">Quero ser beta!</button>
                            </form>
                        </div>
                        <div className="illustration-beta">
                            <img src="/img/illustrations/Beta-1.svg" className="beta-img"></img>
                        </div>
                    </div>

                    <div className="beta-contents">
                        <p className="title">Porque ser um usuário beta?</p>
                        <div className="content">
                            <p className="text">O usuário beta, lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Cras elementum purus eget magna iaculis condimentum sed a ipsum.
                                Ut tincidunt sed libero tempor suscipit. Quisque quis venenatis dolor.
                                Quisque ut magna suscipit, dapibus mauris id, iaculis dolor.
                                Nunc efficitur, turpis consequat feugiat interdum,
                                lacus dui facilisis velit, et ultricies dui velit ut libero.</p>

                            <p className="text">O usuário beta, lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras elementum purus eget magna iaculis condimentum sed a ipsum.
                            Ut tincidunt sed libero tempor suscipit. Quisque quis venenatis dolor.
                            Quisque ut magna suscipit, dapibus mauris id, iaculis dolor.
                            Nunc efficitur, turpis consequat feugiat interdum,
                            lacus dui facilisis velit, et ultricies dui velit ut libero.</p>
                        </div>

                        <p className="title">Como dar feedback sobre novas funcionalidades:</p>
                        <div className="content">
                            <p className="text">O usuário beta, lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Cras elementum purus eget magna iaculis condimentum sed a ipsum.
                                Ut tincidunt sed libero tempor suscipit. Quisque quis venenatis dolor.
                                Quisque ut magna suscipit, dapibus mauris id, iaculis dolor.
                                Nunc efficitur, turpis consequat feugiat interdum,
                                lacus dui facilisis velit, et ultricies dui velit ut libero.</p>

                            <p className="text">O usuário beta, lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras elementum purus eget magna iaculis condimentum sed a ipsum.
                            Ut tincidunt sed libero tempor suscipit. Quisque quis venenatis dolor.
                            Quisque ut magna suscipit, dapibus mauris id, iaculis dolor.
                            Nunc efficitur, turpis consequat feugiat interdum,
                            lacus dui facilisis velit, et ultricies dui velit ut libero.</p>
                        </div>

                        <p className="title">Ajude-nos a evoluir!</p>
                        <div className="content">
                            <p className="text">O usuário beta, lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Cras elementum purus eget magna iaculis condimentum sed a ipsum.
                                Ut tincidunt sed libero tempor suscipit. Quisque quis venenatis dolor.
                                Quisque ut magna suscipit, dapibus mauris id, iaculis dolor.
                                Nunc efficitur, turpis consequat feugiat interdum,
                                lacus dui facilisis velit, et ultricies dui velit ut libero.</p>

                            <p className="text">O usuário beta, lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras elementum purus eget magna iaculis condimentum sed a ipsum.
                            Ut tincidunt sed libero tempor suscipit. Quisque quis venenatis dolor.
                            Quisque ut magna suscipit, dapibus mauris id, iaculis dolor.
                            Nunc efficitur, turpis consequat feugiat interdum,
                            lacus dui facilisis velit, et ultricies dui velit ut libero.</p>
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
                        var btn = document.getElementById("Bsubmit"),
                        emailF =  btn.form.emailForm.value;
                        var modal = document.getElementById("myModal");
                        var span = document.getElementsByClassName("close-beta")[0];
                        var eForm = btn.form.emailForm;
            
        
                        btn.onclick = function() {
                        var data = JSON.stringify({
                            "Email": btn.form.emailForm.value
                          });
                          
                          var xhr = new XMLHttpRequest();
                          xhr.withCredentials = true;
                          
                          xhr.addEventListener("readystatechange", function () {
                            if (this.readyState === 4) {
                            }
                          });
                          xhr.open("POST", "https://helpcenter-api.azurewebsites.net/api/betauser");
                          xhr.setRequestHeader("Content-Type", "application/json");
                          xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                          xhr.send(data);
                          modal.style.display = "block";
                          event.preventDefault();
 
                        }

                        span.onclick = function() {
                            modal.style.display = "none";
                        }

                    document.getElementById("emailForm").addEventListener("keyup", function() {
                        var nameInput = document.getElementById('emailForm').value;
                        if (nameInput != "") {
                            document.getElementById('Bsubmit').removeAttribute("disabled");
                        } else {
                            document.getElementById('Bsumit').setAttribute("disabled", null);
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