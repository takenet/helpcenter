const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const data = {
  "title": "Evoluindo seu contato através de IA",
  "subtitle": "Utilize os provedores de Inteligência artificial para melhorar seu contato inteligente",
  "img": "/img/illustrations/ilustracao-categorias.svg",
  "from": "BLiP Help Center >",
  "session": "Áreas do BLiP",
  "session_url": "/blipareas",
  "here": "Evoluindo seu contato inteligente através de IA",
  "intro": "Nesta seção você vai aprender como evoluir um chatbot utilizando ferramentas de Inteligência Artificial, como NLP - Natural Language Processing (Processamento de Linguagem Natural). Veja como esses algoritmos podem otimizar o reconhecimento dos assuntos abordados no contato de uma organização.",
  "cards": [
    {
      "title": "Conceitos básicos para utilizar NLP e IA em chatbots",
      "type": "video",
      "url": "/docs/ai/nlp/conceitos-basicos-nlp-e-ai",
      "abstract": "Aprenda neste vídeo os conceitos básicos necessários para utilizar qualquer algoritmo de NLP.",
      "text": "Ver mais!"
    },
    {
      "title": "Importância de IA e NLP para chatbots",
      "type": "video",
      "url": "/docs/ai/nlp/importancia-de-ia-nlp-chatbots",
      "abstract": "O vídeo abaixo destaca a importância de se utilizar algoritmos de NLP na construção de bons chatbots",
      "text": "Ver mais!"
    },
    {
      "title": "O que é intenção?",
      "type": "video",
      "url": "/docs/ai/nlp/o-que-e-intencao",
      "abstract": "Veja neste artigo o que é uma intenção e exemplos de como utilizá-las.",
      "text": "Ver mais!"
    },
    {
      "title": "O que é uma entidade?",
      "type": "text",
      "url": "/docs/ai/nlp/o-que-e-entidade",
      "abstract": "Veja neste artigo o que é uma entidade e quando você deve utilizá-las.",
      "text": "Ver mais!"
    },
    {
      "title": "Boas Práticas para criação de exemplos em bases de conhecimento",
      "type": "text",
      "url": "/docs/ai/nlp/boas-praticas-exemplos-base-conhecimento",
      "abstract": "Veja neste artigo o que é uma entidade e quando você deve utilizá-las.",
      "text": "Ver mais!"
    },
    {
      "title": "Como configurar o DialogFlow como um provedor de Inteligência Artificial",
      "type": "text",
      "url": "/docs/ai/nlp/como-configurar-dialogflow",
      "abstract": "Já escolheu qual o melhor provedor para o seu bot? Caso seja o Dialogflow, veja neste artigo como configurá-lo.",
      "text": "Ver mais!"
    },
    {
      "title": "Como configurar o Watson Assistant como um provedor de Inteligência Artificial",
      "type": "text",
      "url": "/docs/ai/nlp/como-configurar-watson",
      "abstract": "Já escolheu seu provedor de NLP? Esse artigo ensina como configurar o Watson Assistant.",
      "text": "Ver mais!"
    },
    {
      "title": "Como criar uma intenção",
      "type": "text",
      "url": "/docs/ai/nlp/como-criar-uma-intencao",
      "abstract": "Já sabe o que é uma intenção? Então agora é hora de criá-la no BLiP. Leia este artigo e veja como!",
      "text": "Ver mais!"
    },
    {
      "title": "Como criar uma entidade",
      "type": "text",
      "url": "/docs/ai/nlp/como-criar-uma-entidade",
      "abstract": "Veja nesse artigo como é simples adicionar entidades ao seu modelo de NLP",
      "text": "Ver mais!"
    },
    {
      "title": "Treinando e publicando seu modelo de inteligência artificial",
      "type": "text",
      "url": "/docs/ai/nlp/treinando-publicando-modelo-de-ia",
      "abstract": "Depois de definidas a(s) intenções e entidades é necessário treinar e publicar seu modelo.",
      "text": "Ver mais!"
    },
    {
      "title": "Como testar seu modelo de NLP",
      "type": "text",
      "url": "/docs/ai/nlp/como-testar-modelo-nlp",
      "abstract": "Depois de criar, treinar e publicar, teste seu modelo e veja se o mesmo funciona corretamente.",
      "text": "Ver mais!"
    },
    {
      "title": "Boas práticas para criar um bom modelo de NLP",
      "type": "video",
      "url": "/docs/ai/nlp/boas-praticas-para-criar-um-bom-modelo-nlp",
      "abstract": "Veja neste vídeo algumas dicas de como criar um bom modelo de NLP",
      "text": "Ver mais!"
    },
    {
      "title": "Importar modelo de NLP (intenções e entidades) pré-existente no BLiP",
      "type": "text",
      "url": "/docs/ai/nlp/importar-modelo-de-intencoes-e-entidades-pre-existente-no-blip",
      "abstract": "Veja neste artigo como importar (ou exportar) um modelo de NLP existente no BLiP",
      "text": "Ver mais!"
    },
    {
      "title": "Como aprimorar meu modelo de inteligência artificial",
      "type": "text",
      "url": "/docs/ai/nlp/como-aprimorar-meu-modelo-de-inteligencia-artificial",
      "abstract": "Depois de configurar um provedor, criar, treinar, testar e publicar um modelo, é hora de aprimorá-lo 😃🏆",
      "text": "Ver mais!"
    },
    {
      "title": "Utilizando arquivos de teste para análise do modelo de IA",
      "type": "text",
      "url": "/docs/ai/nlp/utilizando-arquivos-teste-analise-modelo-ia",
      "abstract": "Aprenda a criar e utilizar arquivos de teste para a análise do seu modelo NLP",
      "text": "Ver mais!"
    }
    
  ]
};
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


class Ai extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

        {/* Topo */}
        <div>
          <div className="pages-top-category">
            <div className="main-category">
              <p className="title-category">{data.title}</p>
              <p className="subtitle-category">{data.subtitle}</p>
            </div>
            <div className="image-category">
              <img className="img" src={data.img} />
            </div>
          </div>
        </div>

        {/* Conteudo */}
        <div className="pages-content">
          <div className="navigation">
            <p className="from">{data.from}</p>
            <p className="from"><a className="link-from" href={data.session_url}>{data.session}</a> ></p>
            <p className="here">{data.here}</p>
          </div>
          <div className="info">
            <p className="intro">{data.intro}</p>
          </div>


          {/* Cards */}
          <div className="cards">
            {data.cards.map((c, index) => (
              <a href={c.url} className="card" key={index}>

                {c.type === "video" ?
                  <div className="title-with-icon">
                    <BlipIcon name="tutorials" className="bp-fs-3 bp-fill-watermelon"></BlipIcon>
                    <p className="title-video">{c.title}</p>
                  </div>
                  :
                  <div className="title-with-icon">
                    <BlipIcon name="txt-file" className="bp-fs-3 bp-fill-sea"></BlipIcon>
                    <p className="title">{c.title}</p>
                  </div>
                }

                <p className="abstract">{c.abstract}</p>
                <div className="seeMore">
                  <p className="text">{c.text}</p>
                  <BlipIcon name="arrow-ball-right-solid" className="bp-fs-4-articles bp-fill-bot"></BlipIcon>
                </div>
              </a>
            ))}

          </div>
        </div>
      </div>
    );
  }
}

Ai.title = 'Evoluindo seu contato inteligente através de IA';
module.exports = Ai; 