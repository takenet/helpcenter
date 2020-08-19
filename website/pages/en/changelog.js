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


class Changelog extends React.Component {
  render() {
    return (

      <div>
        {/* Topo */}
        <div>
          <div className="pages-top-category">
            <div className="main-category">
              <p className="title-category">Changelog</p>
              <p className="subtitle-category">Fique por dentro de todas as atualizações do BLiP</p>
            </div>
            <div className="image-category">
              <img className="img" src='/img/illustrations/Versionamento.svg' />
            </div>
          </div>
        </div>

        {/* Conteudo */}
        <div className="pages-content-changelog" id="pages-content-changelog">
          <div className="navigation">
            <p className="from">BLiP Help Center ></p>
            <p className="from"><a className="link-from" href="https://status.blip.ai/">Status</a> > </p>
            <p className="here">Changelog</p>
          </div>
          <div className="info-changelog">
            <div className="banner">
              <img href="/" src="/img/banners/Banner-Changelog.svg"></img>
            </div>
            <p className="title">Atualizações Recentes</p>
            <p className="intro">Nossa página de changelog permite que você esteja sempre inteirado de
              todas as melhorias implementadas na plataforma como também consiga acompanhar a evolução da plataforma.</p>
          </div>

          <div className="content-changelog">

            <div className="toolbar">

              <div className="identifiers">
                <div className="identifier">
                  <div className="blip-icon blip-icon--blip">
                    <BlipIcon name="true" className="bp-fs-3 bp-fill-white"></BlipIcon>
                  </div>
                  <p className="text">
                    Atualizações </p>
                </div>

                <div className="identifier">
                  <div className="blip-icon blip-icon--watermelon">
                    <BlipIcon name="bug" className="bp-fs-1 bp-fill-white"></BlipIcon>
                  </div>
                  <p className="text">
                    Correção de bugs </p>
                </div>

                <div className="identifier">
                  <div className="blip-icon blip-icon--cheetos">
                    <BlipIcon id="star" name="star" className="bp-fs-4 bp-fill-white"></BlipIcon>
                  </div>
                  <p className="text">
                    Novidades </p>
                </div>
              </div>

              <div className="filter">
                <p className="label"> Filtrar por</p>
                <select onChange="filter()" name="filter-options" id="filter-select" className="filter-select">
                  <option onClick="filter()" value="recent">Mais recentes</option>
                  <option value="atts">Atualizações</option>
                  <option value="bug">Correção de bugs</option>
                  <option value="news">Novidades</option>
                </select>
              </div>

            </div>

            <div className="releases" id="releases">
              
            </div>

          </div>

        </div>
        <InfiniteScroll></InfiniteScroll>
      </div>
    );
  }
}

class InfiniteScroll extends React.Component {
  render() {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `

var nextItem = 0;
var releaseItem = document.getElementById('releases');
var releasesAux;
var aux;
var releases =[
      {
         "id":"atts",
         "title":"Aplicação Messenger própria do cliente",
         "date":"19 de Agosto de 2020",
         "text":"Com esta modificação é possível usar sua própria aplicação do Facebook integrada ao Messenger no Blip.",
         "link": "https://help.blip.ai/docs/en/channels/messenger/propria-aplicacao-portal/?utm_source=changelog",
      },
      {
         "id":"news",
         "title":"Adição de Atendentes no BLiP Desk",
         "date":"11 de Agosto de 2020",
         "text":"Para agilizar a adição de novos atendentes na equipe do chatbot, disponibilizamos a possibilidade de acrescentar mais de um e-mail simultaneamente.",
         "link": "https://help.blip.ai/docs/en/helpdesk/blipdesk/gerenciamento-equipes/?utm_source=changelog",
      },
      {
         "id":"news",
         "title":"Botões de ação e de resposta rápida nos modelos de mensagem do WhatsApp",
         "date":"03 de Agosto de 2020",
         "text":"Adicionamos à funcionalidade de modelos de mensagem do WhatsApp no portal do BLiP a atualização que possibilita o uso de botões de ação e de respostas rápidas nas mensagens.",
         "link": "http://help.blip.ai/docs/en/channels/whatsapp/como-criar-aprovar-message-template?utm_source=changelog",
      },
      {
         "id":"atts",
         "title":"Integração com a SugarAds",
         "date":"22 de Julho de 2020",
         "text":"Com o fechamento da SugarAds, descontinuamos a integração antes disponível em Growth, no portal do BLiP.",
      },
      {
         "id":"atts",
         "title":"Notificações no portal do BLiP",
         "date":"21 de Julho de 2020",
         "text":"Atualizamos o modelo de notificações temporárias que fornecem feedbacks sobre as ações realizadas no portal do BLiP.",
      },
      {
         "id":"news",
         "title":"Vídeo nos modelos de mensagem do WhatsApp",
         "date":"14 de Julho de 2020",
         "text":"Adicionamos à funcionalidade de modelos de mensagem do WhatsApp a atualização que possibilita o envio de vídeos (.mp4) nas mensagens.",
         "link": "http://help.blip.ai/docs/en/channels/whatsapp/como-criar-aprovar-message-template/?utm_source=changelog",
      },
      {
         "id":"news",
         "title":"Tempo de Inatividade do Usuário",
         "date":"06 de Julho de 2020",
         "text":"Disponibilizamos o Tempo de Inatividade do Usuário, nova funcionalidade que permite programar diretamente no Builder quanto tempo o chatbot deve esperar por uma resposta do usuário para encerrar a conversa ou enviar uma mensagem para reengajamento.",
         "link": "https://help.blip.ai/docs/en/builder/como-usar-tempo-inatividade/?utm_source=changelog",
      },
      {
         "id":"atts",
         "title":"Permissões de Acesso ao Chatbot",
         "date":"03 de Julho de 2020",
         "text":"Atualizamos a mensagem de alerta da permissão de acesso à um chatbot, porque para acessar o projeto, a conta do usuário logado deve ser a mesma do membro convidado para compor a equipe.",
         "link": "https://help.blip.ai/docs/en/management/gerenciando-permissoes-acesso-equipe/?utm_source=changelog",
      },
      {
         "id":"news",
         "title":"Integração com o RD Station",
         "date":"29 de Junho de 2020",
         "text":"Disponibilizamos uma nova integração entre RD Station e BLiP para que a instalação seja feita com apenas um clique.",
         "link": "https://help.blip.ai/docs/en/analytics/rd-station/como-enviar-dados-rd-station/?utm_source=changelog",
      },
  ];
var alreadyFiltered = false;
var changelogDiv = document.getElementById('pages-content-changelog');
var selectItem = document.getElementById('filter-select');

//function to get select elements
selectItem.addEventListener('change', function(){
  filter();
});

//function to get items from API
{/* window.onload = function() {
  axios.get('https://5eebd3f25e298b0016b694b5.mockapi.io/releases')
  .then(function (response) {
    releases = response.data.releases; 
    createReleases(releases, nextItem);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
});
}; */}

createReleases(releases, nextItem);

function createReleases(releasess, index){
  aux = index + 7;
  console.log(releasess.length, aux);
  for (i=index; i<releasess.length; i++){
    var mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', "release");
    mainDiv.setAttribute('id', releasess[i].id);
    if (i >= aux){
      mainDiv.style.display = "none";
    }
    
    var contentDiv = document.createElement('div');
    contentDiv.setAttribute('class', 'content');

    var title = document.createElement('p');
    title.setAttribute('class', 'title');
    title.innerHTML = releasess[i].title;

    var date = document.createElement('p');
    date.setAttribute('class', 'date');
    date.innerHTML = releasess[i].date;

    var text = document.createElement('p');
    text.setAttribute('class', 'text');
    text.innerHTML = releasess[i].text;

    if(releasess[i].link){
      var link = document.createElement('a');
      link.setAttribute('class', 'link-changelogs');
      link.setAttribute('href', releasess[i].link);
      link.innerHTML = "Ver detalhes";

      text.appendChild(link);
    }
    
    contentDiv.appendChild(title);

    contentDiv.appendChild(date);

    contentDiv.appendChild(text);

    mainDiv.appendChild(contentDiv);
    
    releaseItem.appendChild(mainDiv);
  }
  nextItem = i
  releaseItem.setAttribute('class', 'releases-special');
}

//function to add more items
var loadMore = function() {
  console.log(nextItem);
  createReleases(releases, nextItem);
}

// Detect when scrolled to bottom.
releaseItem.addEventListener('scroll', function() {
  if (releaseItem.scrollTop + releaseItem.clientHeight - 200 >= releaseItem.scrollHeight) {
    loadMore();
  }
});

//Filter
function filter(){
	//destroyReleases();
  var allReleases = document.getElementsByClassName('release');
  var value = selectItem.options[selectItem.selectedIndex].value;
  nonDisplaysAllReleases();
	if (value == "recent"){
		displaysAllReleasesAgain();
	}else{
    var count = 0;
		for (i=0; i<releases.length; i++){
      console.log('legal');
      if (releases[i].id == value){
        if (count < aux){
          allReleases[i].style.display = "block";
          count++;
        }
      }
    }
	}
}

//Remove all release items
function destroyReleases(){
  releaseItem.remove();
}

//Displays none all releases
function nonDisplaysAllReleases(){
  var allReleases = document.getElementsByClassName('release');
  for (i=0; i<releases.length; i++){
    allReleases[i].style.display = "none";
  }
}

//Displays all releases
function displaysAllReleasesAgain(){
  var allReleases = document.getElementsByClassName('release');
  for (i=0; i<releases.length && i<aux; i++){
      allReleases[i].style.display = "block";
  }
}


                  `
        }}
      />
    );
  }
}


Changelog.title = 'Changelogs';
module.exports = Changelog; 
