const React = require('react');
const request = require("request");


//BLiP Icon for SVGs
const defs = '/img/defs.svg';
class Faq extends React.Component {
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
                                    id="email"
                                    name="email"

                                    className="form-input-email-page"
                                    placeholder="Digite o seu e-mail">
                                </input>
                                <button id="Bsubmit" className="button-beta-page" >Quero ser beta!</button>
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
                    var e = document.getElementById("email");
                    var data = {
	                            "Email": "bruno_camarda@hotmail.com"
                                }
                    var json = JSON.parse(data);

                    btn.onclick = function() {
                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", "localhost:3000");
                        xhr.setRequestHeader("Content-Type", "application/json");
                        xhr.send(json);
 
                    }
                `
                    }}
                />
        );
    }
}

Beta.title = 'BLiP Beta';
module.exports = Beta;