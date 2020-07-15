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
         "id":"news",
         "title":"Título da atualização 22",
         "date":"18 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center.",
         "link": "https://www.help.blip.ai/templates",
      },
      {
         "id":"bug",
         "title":"Título da atualização 21",
         "date":"17 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center."
      },
      {
         "id":"atts",
         "title":"Título da atualização 20",
         "date":"16 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center."
      },
      {
         "id":"news",
         "title":"Título da atualização 19",
         "date":"15 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center."
      },
      {
         "id":"bug",
         "title":"Título da atualização 18",
         "date":"14 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"atts",
         "title":"Título da atualização 17",
         "date":"13 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"bug",
         "title":"Título da atualização 16",
         "date":"12 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"bug",
         "title":"Título da atualização 15",
         "date":"11 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"atts",
         "title":"Título da atualização 14",
         "date":"10 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"news",
         "title":"Título da atualização 13",
         "date":"09 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"bug",
         "title":"Título da atualização 12",
         "date":"08 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"atts",
         "title":"Título da atualização 11",
         "date":"07 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"atts",
         "title":"Título da atualização 10",
         "date":"06 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"atts",
         "title":"Título da atualização 9",
         "date":"06 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"atts",
         "title":"Título da atualização 8",
         "date":"05 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"atts",
         "title":"Título da atualização 7",
         "date":"04 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"atts",
         "title":"Título da atualização 6",
         "date":"03 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"atts",
         "title":"Título da atualização 5",
         "date":"02 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"atts",
         "title":"Título da atualização 4",
         "date":"01 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"atts",
         "title":"Título da atualização 3",
         "date":"01 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"atts",
         "title":"Título da atualização 2",
         "date":"01 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
      },
      {
         "id":"atts",
         "title":"Título da atualização 1",
         "date":"01 de junho de 2020",
         "text":"Estamos utilizando esse espaço apenas para marcação de texto. Não ultrapassar mais do que a quantidade de 2 linhas, uma vez isso pode acabar prejudicando o layout,você pude utilizar links para outras partes do help center. Ver detalhes"
  }
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
  aux = index + 10;
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
