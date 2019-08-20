---
id: nlp-como-exportar-base-conhecimento
title: Como importar/exportar uma base de conhecimento
sidebar_label: Como importar/exportar uma base de conhecimento
---

Se você já tem uma base de conhecimento (conjunto de intenções + entidades) e deseja trazê-la para o BLiP, basta utilizar a ferramenta de importação de intenções e entidades. Da mesma maneira, é possível também exportar todo o conteúdo da sua base de conhecimento. 

## Exportando sua base de conhecimento

O processo de exportação dos dados do seu conjunto de intenções e/ou entidades, previamete cadastrados, pode ser feita da seguinte maneira: Acesse o **Portal**, escolha o seu bot e selecione o módulo **Inteligência Artifical**.

Para exportar intenções, selecione a opção **Intenções**, no menu lateral esquerdo, clique no botão mais opções e selecione **Exportar intenções** (conforme imagem abaixo)

![Menu exportar intenções](/img/ai/nlp/nlp-como-exportar-base-conhecimento-1.png)<br>

Da mesma forma, para exportar entidades, selecione a opção **Entidades**, no menu lateral esquerdo, clique no botão mais opções e selecione **Exportar entidades** (conforme imagem abaixo)

![Opção exportar entidades](/img/ai/nlp/nlp-como-exportar-base-conhecimento-2.png)<br>

## Entendendo a estrutura dos arquivos exportados

O processo de exportação gera 2 arquivos no formato CSV (comman separeted value), **blip-entities.csv** e **blip-intentions.csv**, com os dados de entidades e intenções do modelo, respectivamente.

O arquivo de intenção (**blip-intentions.csv**) possui 2 colunas. A primeira delas possui o nome da intenção e a segunda um exemplo de entrada do usuário, conforme figura abaixo. Um modelo hipotético que possui uma intenção com 6 exemplos de entradas do usuário, representará 6 linhas no arquivo de exportação de intenções.

![modelo de arquivo exportado](/img/ai/nlp/nlp-como-exportar-base-conhecimento-3.png)<br>

O arquivo de entidades (**blip-entities.csv**), por sua vez, possui 3 colunas. A primeira coluna possui o nome da entidade, a segunda o valor que representa a entidade e a terceira coluna possui todos os sinônimos relacionados a um determinado valor, separados pelo caracter **`/`**. A imagem abaixo apresenta um exemplo do arquivo de entidades 

![modelo de arquivos de entidade](/img/ai/nlp/nlp-como-exportar-base-conhecimento-4.png)<br>

## Importando uma base de conhecimento

Para importar uma base de conhecimento, pré existente, ao BLiP é preciso realizar 2 tarefas. A primeira delas é a construção dos arquivos blip-intentions.csv e **blip-entities.csv** (explicados acima), no formato esperado pelo BLiP.

O segundo passo é realizar a importação dos arquivos preparados. Para isso, acesse o Portal, escolha o bot e selecione o módulo Inteligência Artificial. Selecione o menu Intenções (ou Entidades), no menu lateral esquerdo, clique no botão mais opções, selecione Importar intenções (ou Importar entidades) e faça upload do arquivo **blip-intentions.csv** (ou **blip-entities.csv**).

![opção importar entidades blip](/img/ai/nlp/nlp-como-exportar-base-conhecimento-5.png)<br>
