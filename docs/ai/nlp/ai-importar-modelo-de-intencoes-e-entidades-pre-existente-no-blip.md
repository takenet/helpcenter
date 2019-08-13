---
id: ai-importar-modelo-de-intencoes-e-entidades-pre-existente-no-blip
title: Importar modelo de NLP (intenções e entidades) pré-existente no BLiP
sidebar_label: Importar modelo de NLP (intenções e entidades) pré-existente no BLiP
---

Para importar intenções e entidades dos provedores para dentro do BLiP, atualmente é necessário alterar manualmente os arquivos exportados pelos provedores para que eles sigam o formato do BLiP. Abaixo será descrito o formato de exportação e importação tanto do BLiP quanto dos provedores. Seguindo os formatos descritos é possível transferir conteúdo de uma plataforma para a outra.

## BLiP

O formato do CSV utilizado pelo BLiP para importar/exportar Intenções utiliza o separador ***"tab"*** e mantém em cada linha do arquivo duas informações, o nome de uma intenção acompanhada por uma frase que a exemplifique. Exemplo:

```text
sep=  
Nome da Intenção 1    Frase de exemplo A  
Nome da Intenção 1    Frase de exemplo B  
Nome da Intenção 2    Frase de exemplo C
```

No caso das Entidades cada linha armazena, separados por vírgula, o nome de uma entidade, o valor da mesma, e todos os sinônimos de um dado valor. Sendo que os sinônimos são separados por ‘/’. Exemplo:

```text
sep=,  
Nome da Entidade 1, Valor A, Sinônimo 1/ Sinônimo 2/ Sinônimo 3/Sinônimo 4  
Nome da Entidade 1, Valor B, Sinônimo 1/ Sinônimo 2/ Sinônimo 3/Sinônimo 4  
Nome da Entidade 2, Valor A, Sinônimo 1/ Sinônimo 2/ Sinônimo 3/Sinônimo 4  
Nome da Entidade 2, Valor B, Sinônimo 1/ Sinônimo 2/ Sinônimo 3/Sinônimo 4  
```

## Watson

No caso do Watson as intenções e entidades são armazenadas em um CSV como as do BLiP. As Intenções o Watson são armazenadas com um exemplo por linha, com o nome da Intenção no fim da linha. O exemplo e o nome da Intenção são separadas por uma vírgula. 

```text
Exemplo 1, Nome da Intenção 1  
Exemplo 2, Nome da Intenção 1  
Exemplo 1, Nome da Intenção 2  
Exemplo 2, Nome da Intenção 2  
Exemplo 3, Nome da Intenção 2  
```

As entidades são salvas com um valor por linha. É salvo o nome da entidade, o valor e os sinônimos, tudo separado por vírgula.

```text
Nome da Entidade 1, Valor A, Sinônimo 1, Sinônimo 2  
Nome da Entidade 1, Valor B, Sinônimo 1, Sinônimo 2  
Nome da Entidade 2, Valor A, Sinônimo 1, Sinônimo 2  
```

## Dialogflow 

O Dialogflow exporta suas intenções e entidades no formato Json. É gerado uma pasta para as intenções e uma pasta para as entidades. Cada uma das intenções é dividida em dois arquivos, um json que define a intenção e segue o formato abaixo:

```json
{
  "id": "ID da Intenção",
  "name": "Nome da Intenção",
  "auto": true,
  "contexts": [],
  "responses": [
    {
      "resetContexts": false,
      "affectedContexts": [],
      "parameters": [],
      "messages": [
        {
          "type": 0,
          "lang": "pt-br",
          "speech": []
        }
      ],
      "defaultResponsePlatforms": {},
      "speech": []
    }
  ],
  "priority": 500000,
  "webhookUsed": false,
  "webhookForSlotFilling": false,
  "fallbackIntent": false,
  "events": []
}
```

E um segundo arquivo temos as frases de exemplo para a intenção. Ele segue esse formato:

```json
[
  {
    "id": "ID do Exemplo 1",
    "data": [
      {
        "text": "Exemplo 1 da Intenção",
        "userDefined": false
      }
    ],
    "isTemplate": false,
    "count": 0,
    "updated": 0
  },
  {
    "id": "ID do Exemplo 2",
    "data": [
      {
        "text": "Exemplo 2 da Intenção",
        "userDefined": false
      }
    ],
    "isTemplate": false,
    "count": 0,
    "updated": 0
  }
]
```

As entidades seguem um formato parecido com o das intenções. Um arquivo é gerado para definir a entidade e outro para listar os valores e sinônimos relativos àquela entidade. O arquivo que define a entidade segue o seguinte formato:

```json
{
  "id": "ID da Entidade",
  "name": "Nome da Entidade",
  "isOverridable": true,
  "isEnum": false,
  "isRegexp": false,
  "automatedExpansion": false,
  "allowFuzzyExtraction": false
}
```

E o arquivo que descreve os valores e sinônimos segue este formato:

```json
[
  {
    "value": "Valor 1",
    "synonyms": [
      "Valor 1",
      "sinônimo 1",
      "sinônimo 2"
    ]
  },
  {
    "value": "Valor 2",
    "synonyms": [
      "Valor 2",
      "sinônimo 1",
      "sinônimo 2"
    ]
  }
]
```

## Luis

No caso do LUIS, não é possível exportar intenções e entidades automaticamente. Por tanto, não é possível migrar, automaticamente, um modelo do LUIS para dentro do BLiP. Para realizar a migração copie e cole as informações do seu modelo do LUIS para dentro do BLiP. 😉

## Conclusão

Para fazer a migração de Intenções e Entidades de algum provedor para dentro do BLiP é necessário entender o formato de exportação/importação utilizado pelo provedor e também pelo BLiP. De forma geral o trabalho consiste em usar o arquivo exportado pelo provedor e alterar sua formatação para que siga o formato aceito pelo BLiP. Após realizado o processo de conversão basta importar os arquivos contendo suas intenções e entidades no BLIP.

Para realizar a importação dos arquivos preparados acesse o Portal, escolha o bot e selecione o módulo Inteligência Artificial. Selecione o menu Intenções (ou Entidades), no menu lateral esquerdo, clique no botão mais opções, selecione Importar intenções (ou Importar entidades) e faça upload do arquivo **blip-intentions.csv** (ou **blip-entities.csv**).

![Importação dos arquivos](/img/practice/ai/ai-importar-modelo-de-intencoes-e-entidades-pre-existente-no-blip-1.png)


