---
id: como-aprimorar-meu-modelo-de-inteligencia-artificial
title: Como aprimorar meu modelo de inteligência artificial
sidebar_label: Como aprimorar meu modelo de inteligência artificial
---

O processo de aprimoramento é uma forma de gerar métricas e obter insights sobre o nível de assertividade do modelo. Ao aprovar ou corrigir uma análise, esses dados são enviados para a matriz de confusão e ajudam a entender se as frases estão sendo entendidas corretamente pelo modelo. Finalmente, análise corrigidas podem ser aprovadas e/ou salvas como exemplo de intenções.

## Apresentação

Para visualizar todas as análises realizadas no modelo de NLP de seu bot, bem como as intenções identificadas em cada análise, acesse o portal do BLiP, clique no módulo de Inteligência Artificial e escolha a opção de Aprimoramento no menu lateral.

![Tela de aprimoramento](/img/ai/nlp/como-aprimorar-meu-modelo-de-inteligencia-artificial-1.png)

Em cada análise, o BLiP apresenta qual foi a intenção, entidades identificadas e qual a confiabilidade retornada pelo provedor principal ativo no momento da análise.

## Como aprimorar

Ao selecionar uma ou mais frases, é possível: aprovar, corrigir intenção, excluir ou salvar como exemplo.

**1. Aprovar**  
A aprovação é um recurso utilizado para gerar métrica de sucesso do modelo, realizando essa ação você está gerando dados para a construção de matrizes de confusão via interações de usuário. Assim, é possível saber se o seu modelo está entendendo o usuário corretamente.

![Como aprovar uma análise](/img/ai/nlp/como-aprimorar-meu-modelo-de-inteligencia-artificial-2.png)

**2. Salvar como exemplo**  
Ao salvar uma frase como exemplo você está inserindo-a dentro da base, como exemplo da intenção que foi analisada pelo modelo. É útil quando o modelo ainda está sendo criado e os insights de usuários podem ajudar a aumentar a quantidade de exemplos cadastrados na intenção.  É importante lembrar que os novos exemplos só começam a ser reconhecidos após o treinamento do modelo.

![Como salvar intenção](/img/ai/nlp/como-aprimorar-meu-modelo-de-inteligencia-artificial-3.png)

**3. Corrigir intenção**  
Quando o modelo  identificou uma intenção diferente do esperado para o que o usuário disse é importante corrigi-lo. Essa correção pode ser aprovada e/ou salva como exemplo.

![Como corrigir a intenção](/img/ai/nlp/como-aprimorar-meu-modelo-de-inteligencia-artificial-4.png)

**4. Excluir**  
Às vezes pode ser necessário tirar da análise insumos que não agregam, como por exemplo, quando a interação do usuário é irrelevante para o contexto do modelo NLP do seu bot. Por isso você pode excluir frases quando julgar necessário.

![Como excluir uma análise](/img/ai/nlp/como-aprimorar-meu-modelo-de-inteligencia-artificial-5.png)

## Ações em lote

Todas essas ações podem ser feitas em lote, basta selecionar um ou mais itens da tabela e escolher uma das ações.

![Ações em lote](/img/ai/nlp/como-aprimorar-meu-modelo-de-inteligencia-artificial-6.png)

## Detalhes da frase

Ao passar o mouse sobre uma frase aparece uma seta, ao clicar nela é possível visualizar os detalhes da frase.

![Detalhes da frase na tabela](/img/ai/nlp/como-aprimorar-meu-modelo-de-inteligencia-artificial-7.png)

É possível ver os detalhes de cada frase analisada, verificando assim, o contexto em que a frase foi dita, facilitando a interpretação da intenção do usuário.

![Sidebar de detalhes da frase](/img/ai/nlp/como-aprimorar-meu-modelo-de-inteligencia-artificial-8.png)

## Não precisa de aprovação

Na versão anterior era necessário aprovar todas as sugestões de alteração realizadas no aprimoramento, porém, agora a aprovação faz parte do processo de aprimoramento. Os usuários que têm permissão de visualizar, editar, excluir na tela de aprimoramento ([veja aqui como fazer para configurar nível de permissão aos membros do seu time](https://help.blip.ai/docs/management/gerenciando-permissoes-acesso-equipe/)), podem executar as ações sem necessitar de mudar de página.
