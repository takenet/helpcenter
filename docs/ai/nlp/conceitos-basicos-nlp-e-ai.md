---
id: conceitos-basicos-nlp-e-ai
title: Conceitos básicos para utilizar NLP e IA em chatbots
sidebar_label: Conceitos básicos para utilizar NLP e IA em chatbots
---

O vídeo abaixo apresenta os conceitos básicos, intenções e entidades, envolvidos nos algoritmos de NLP.

<br><iframe width="778" height="517" src="https://www.youtube.com/embed/m7JPVnDNWI0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>

Outros conceitos importantes:

* **Modelo de IA**: Conjunto de Intenções + Entidades
* **Motor de IA (ou provedor de IA)**: Ferramenta que utiliza o modelo de IA para classificação de novas mensagens de forma automática. 
* Exemplos de motor de IA são: Watson da IBM e LUIS da Microsoft.<br><br>
----
A seguir serão apresentados outros detalhes importantes para o entendimento destes conceitos.

# Intenção

## Definição

As intenções representam ações ou pedidos que o usuário deseja realizar. Elas mapeiam o que o usuário quer dizer com as ações que seu bot pode executar. A intenção é a principal saída do Provedor de NLP e é, em geral, o conceito mais difícil de entender em NLP. São entendidas como:

  - Ações ou Verbos

  - Categoria


## Composição

Toda intenção possui 2 partes:

 - **Nome da intenção**: É um texto que serve para identificação da intenção. É a "categoria", mas não é usada diretamente para o provedor (internamente, o BLiP gera um identificador único, que é usado na comunicação com o provedor de NLP escolhido). O nome da intenção é apenas um rótulo, um id. _Deve ser o mais claro possível: Deve mapear claramente a ideia dos textos/exemplos._

	 - Passo a Passo para dar nomes para intenções:

		 - Ler os exemplos cadastrados, buscando entender a ideia principal

		 - Explicar essa ideia em uma frase

		 - Cortar em 30 caracteres:

			 - **OU** cortar nos primeiros 30 caracteres.

			- **OU** resumir a frase em 3 palavras (até 30 caracteres na soma).

		- Usar o resultado dessa análise como novo nome da intenção.

	- **Exemplos ou Perguntas**: São os textos que efetivamente serão enviados para o provedor de NLP para treinamento do modelo de NLP.

# Confiança

Confiança ou Confiabilidade é grau de certeza do provedor de NLP ao categorizar um texto. Varia entre 0 e 1 e quanto mais perto de 1, maior a certeza do provedor de NLP

**Confiança Mínima** (valores arbitrários)

- IA em **desenvolvimento** 0.5 ou 50%

 - IA em **entregue** e em evolução 0.75 ou 75%

 - IA **madura ou crítica** 0.9 ou 90%

# Exemplos ou Perguntas

É o principal insumo do provedor de NLP e é delas que saem os modelos de NLP.

*Exemplos = Perguntas.*



**Regras:**

 - Devem ter a estrutura gramatical correta.

 - Devem transmitir a mesma ideia (semântica próxima).

 - Devem ser sintaticamente diferentes (evitar variações infantis ou muito simples).

 - Mínimo 10, ideal 20.

 - Evitar muita diferença na quantidade de exemplos entre intenções (devemos buscar o balanceamento da base e os “faróis de NLP” do BLiP podem nos ajudar com isso)


```markdown
Intenção: "Abrir um sinistro"

Exemplos:

 - Como faço para abrir um sinistro?

 - Bati meu carro, e agora?

 - Bateram em mim no trânsito, o que fazer?

 - Abertura de sinistro em caso de acidente.
```

# Entidade

## Definição

Entidades podem ser entendidas como pedaços do texto que completam o sentido de intenções. Em geral, as entidades do chatbot são substantivos, adjetivos, coisas, produtos e serviços que fazem parte do contexto do negócio do cliente. Além disso, podem ser também números, datas, valores monetários, porcentagens, pessoas e localizações.

Entidades são informações que são como variáveis das intenções: elas representam o objeto das mesmas.

 - Substantivos

 - Adjetivos

Servem para completar o sentido da intenção/categoria encontrada pelo provedor de NLP e são a saída "secundária" dele.

 - Coisas

 - Produtos

 - Serviços

 - Tipos de Coisas, Produtos e Serviços

## Composição

Toda entidade é composta de 3 partes:

 - **Nome da Entidade** - É o identificador da entidade e não é analisado pelo provedor de NLP (serve apenas como um identificador mesmo)

 - **Valor da Entidade** - É o texto principal da entidade e é o que é retornado pelo provedor quando a presença é identificada no texto.

 - **Sinônimos do Valor** - Cada valor é um texto único, mas as pessoas podem falar a mesma "entidade" de formas diferentes. Os sinônimos servem para fazer esse mapeamento: as diversas formas de falar a mesma entidade.


```markdown
Entidade: Comida

Valor 1: Pizza

Sinônimos: pitisa, pitsa, pitza, piza, pissa

Valor 2: Nachos

Sinônimos: nacos, natchos
```

```markdown
Entidade: Cliente

Valor 1: Porto Seguro

Sinônimos: porto, ps, porto seg, seguradora azul

Valor 2: Santander

Sinônimos: satander, samtamder, banco vermelho
```

# Entidade x Intenção

Um texto analisado pelo provedor **sempre terá uma intenção** (mesmo com a confiança baixa).

Um texto analisado **pode ter 0 ou mais entidades.** Isso ocorre porque a entidade é buscada no texto, enquanto as intenções são inferidas usando o texto recebido. As entidades são buscadas no texto e só serão encontradas se o cadastro delas tiver sido feito corretamente.

Por exemplo: Se cadastrarmos uma entidade com o valor **sinistro**, ela só será encontrada (e logo, reconhecida) se o texto analisado tiver exatamente o texto “sinistro”, como: “Preciso abrir um **sinistro**”. Por outro lado, no texto “Preciso abrir um **sinistrão**”, a entidade com valor **sinistro** não é reconhecida.

# Reconhecimento de Entidades

No NLP, entidades são reconhecidas através do "casamento de padrão". Isso significa que, para reconhecer uma entidade, é preciso que exista um casamento exato entre o "valor" da entidade e o pedaço de texto analisado.

O BLiP e alguns provedores já realizam alguns tratamentos simples para que esse casamento de padrões fique mais simples e dê menos trabalho para o cliente:

 - Não é necessário cadastrar valores ou sinônimos com letras maiúsculas e minúsculas.

 - Não é necessário tratar acentuação.

Não precisamos de provedores de NLP para analisar entidades (fazemos isso por comodidade). O que realmente é identificado são os valores da entidade e os sinônimos.

# Resposta ou Conteúdo

Efetivamente aquilo que o cliente vê ou aquilo que entregamos para o cliente. Esse é um tópico que ainda será mais trabalhado em outro material. Mas basicamente, entregamos respostas e/ou conteúdo para o cliente através das tomadas de decisão do chatbot suportadas pelo NLP. Esse conteúdo fica armazenado no próprio chatbot, no Builder ou mesmo no campo de “respostas” de intenções no portal do BLiP. Inclusive, esse campo possui atualmente uma limitação de 480 caracteres.

De forma geral, podemos dizer que conteúdos são textos, fluxos e ações. Ou seja, através do NLP, podemos entregar conteúdos para o usuário que sejam uma resposta simples de uma pergunta, um fluxo do Builder ou mesmo ações como transbordar para o atendimento humano ou fazer uma chamada de API. Respostas então, são a entrega do conteúdo.

# Base de Conhecimento

Nos referimos a base de conhecimento em 2 momentos:

 - **Momento 1 - Base de Perguntas e Respostas**

	- Em geral é a base que está no cliente.

	- É a base que usamos como insumo para gerar o modelo de NLP (intenções e entidades)

 - **Momento 2 - Base de Intenções com Exemplos, Entidades com Sinônimos e Conteúdos (Respostas)**

	- É como nos referimos a base "pronta", dentro do BLiP

Pensando no momento 1, existe uma base de conhecimento ideal? **Sim!** **MAS!** Dificilmente o cliente terá essa base de conhecimento pronta. Podemos atuar ensinando como fazer, mas normalmente nós acabaremos fazendo.

 - **Perguntas e Conteúdos (Ações, Texto e Fluxos)**

	- Uma lista de perguntas mapeando para ações, textos de resposta ou mesmo fluxos do chatbot.

 - **Intenções, Entidades e Conteúdos (Ações, Texto e Fluxos)**

	- Uma lista de intenções e entidades mapeando para ações, textos de resposta ou mesmo fluxos do chatbot.

## Quando devemos receber a base de conhecimento?

Em todos os chatbots que usam NLP, a base de conhecimento deve chegar o quanto antes. Em geral, ela será muito necessária no desenho do chatbot, principalmente quando os UXs entrarem no detalhe do comportamento do serviço.

# Modelo de NLP

Com todos os conceitos expostos, podemos definir o modelo de NLP como sendo:

![](/img/ai/nlp/conceitos-basicos-nlp-e-ai-01.png)

O modelo de NLP é o que efetivamente analisa o texto e entrega as intenções (junto com a confiança) e entidades reconhecidas.

Todas as vezes que **e** **apenas quando** realizamos um novo treino, criamos um novo modelo de NLP.

## Pontos importantes

- O modelo não fica mais inteligente sozinho.

- O modelo não fica mais inteligente com a interação dos usuários.

- Quanto melhor for sua base de conhecimento, tão melhor será meu modelo de NLP.

- Em geral, os provedores de NLP coletam as bases de conhecimento e as interações dos usuários para aprimorar suas tecnologias. Normalmente todos têm opção para desabilitar esse compartilhamento.

- A qualidade do provedor no processamento da língua portuguesa influencia na qualidade do modelo de NLP.

- Podem demorar para serem treinados/construídos (de 1 a 10 minutos).

- Respondem as análises muito rapidamente (menos de 1 segundo em geral)

- Existem regras para construção dos modelos que valem para todos os provedores, **o que não significa** que todas as práticas sejam boas para todos os provedores. Existem sim particularidades de cada provedor.

# Treinamento e Publicação

## Treinamento

Processo de construção de um novo modelo de NLP.

- Enviar a base de conhecimento para o(s) Provedor(es) de NLP.

- Aguardar alguns minutos para finalização do treino.

- Novo modelo de NLP está pronto.

## Publicação

Processo de disponibilização de um novo modelo de NLP para os clientes.

- Aguardar a finalização do processo de treinamento.

- Publicar via BLiP.

- Novo modelo de NLP já pode ser usado pelo cliente.

# Aprimoramento e Aprovação

## Aprimoramento

Processo de analisar o resultado da análise do modelo de NLP, propondo/sugerindo alterações (criar, remover, modificar) nos exemplos das intenções e nos valores e sinônimos das entidades.

## Aprovação

 É um processo criado pelo BLiP em que as sugestões/propostas de aprimoramento são validadas por um especialista em modelos de NLP (analista de IA).