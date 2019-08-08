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
                    var e = document.getElementById("email").value;

                    btn.onclick = function() {
                        var data = "email=%5B%22bruno_camarda%40hotmail.com%22%5D";

                        var xhr = new XMLHttpRequest();
                        xhr.withCredentials = true;

                        xhr.addEventListener("readystatechange", function () {
                        if (this.readyState === 4) {
                            console.log(this.responseText);
                        }
                        });

                        xhr.open("POST", "https://gw.msging.net/httpreceiver/fd3c240f-c602-406d-b081-f347a68c72eb");
                        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                        xhr.setRequestHeader("Accept", "*/*");
                        xhr.setRequestHeader("Cache-Control", "no-cache");
                        xhr.setRequestHeader("Postman-Token", "d506b711-c132-4478-a39f-2aa11c91058c,247ed191-f663-46aa-b52b-b02dbdc61035");
                        xhr.setRequestHeader("cache-control", "no-cache");
                        xhr.setRequestHeader("Access-Control-Allow-Headers", "*");

                        xhr.send(data);
                        alert("ok");
                    }
                `
                    }}
                />
        );
    }
}

Beta.title = 'BLiP Beta';
module.exports = Beta;