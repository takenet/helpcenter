const React = require('react');

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
      <use xlinkHref={`${defs}#${this.props.name}`}/>
    </svg>
    );
  }
}

class Beta extends React.Component{
    render(){
        return (
            <div>
                <div className="be-beta">
                    <div className="formulario-beta">
                    <p className="title">Seja usuário beta!</p>
                    <p className="subtitle">Utilize novas funcionalidades do BLiP antes de serem implementadas</p>
                        <form>
                            <input type="email" 
                                id="email" 
                                name="email" 
                                className="form-input-email-page" 
                                placeholder="Digite o seu e-mail"> 
                            </input>
                            <input type="submit"  className="button-beta-page" value="Quero ser beta"></input>
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
        );
    }
}
Beta.title = 'BLiP Beta';
module.exports = Beta;