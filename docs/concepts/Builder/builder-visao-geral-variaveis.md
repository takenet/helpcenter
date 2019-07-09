---
id: builder-visa-geral-variaveis
---
# [BUILDER] Visão Geral das Variáveis

  

Durante a construção da sua aplicação no Builder, pode ser necessário armazenar valores em variáveis. Isso é indispensável para a construção de fluxos condicionais, ou para simplesmente armazenar/recuperar valores ao longo da interação do usuário.

  

Em qualquer ponto do fluxo da conversa, é possível recuperar o valor de qualquer variável definida anteriormente. Em contrapartida, só é possível armazenar valores em uma variável em locais específicos do Builder, como:

  

* Entrada de dados dos usuários (nos blocos de controle e de conteúdo);

* Resultados de requisições em API;

* Resultado da execução de um script;

* Tela de variáveis globais de configuração;

  

Uma variável do builder é formada exclusivamente por uma sequência de caracteres alfanuméricos (maiúsculas ou minúsculas), não sendo permitido utilizar caracteres especiais. **Todas as variáveis são case sensitive**. Existem quatro tipos de variáveis no Builder: Variáveis de **contexto**, variáveis de **usuário**, variáveis de **configuração** e variáveis de **sistema**. Confira cada uma delas abaixo:

  

## Variáveis de Contexto

  

Em uma conversa entre duas ou mais pessoas, construímos, inconscientemente, um contexto. Por exemplo: em um encontro casual entre dois amigos, Maria e João, um deles começa a falar sobre seu cachorro.

  

Ao encontrar João, Maria diz:

*- Oi João, tudo bem?*

  

João então responde:

*- Olá Maria, tudo ótimo. Hoje estou radiante, ganhei um cachorro lindo.*

  

Logo após o primeiro contato, Maria começa a fazer perguntas sobre o cachorro que João ganhou:

*- Que legal João, qual é o nome dele ?*

  

Prontamente, João responde:

*- O nome dele é Toto.*

  

Repare que, na fala de Maria, não existe nenhuma relação explícita entre a frase “qual é o nome dele?” e o cachorro de João. A relação entre o pronome possessivo “dele” e o cachorro de João só é perceptível devido ao contexto da conversa — os dois amigos sabem que, a princípio, estão conversando sobre o cachorro de João.

  

As variáveis de contexto permitem o armazenamento/recuperação de valores relativas aos assuntos conversados entre o usuário e o bot. É possível armazenar valores em uma variável de contexto através dos conteúdos entrada de usuário e HTTP, além das ações de requisição HTTP, execução de script, definição de variáveis e processamento de comandos.

  

Para recuperar o valor de uma variável de contexto, basta utilizar, em qualquer ponto do fluxo da conversa, o seguinte padrão:

  

{{context.**nomeVariavel**}}

  

ou apenas

  

{{**nomeVariavel**}}

  

Onde:

  

**nomeVariavel** representa o nome da variável de contexto desejada.

  

## Variáveis de Usuário

Todo usuário que conversa com algum bot construído no BLiP possui uma conta (Contact). Contact é uma estrutura que armazena atributos (informações) do usuário dependendo do canal (aplicativo de mensagens) que ele utiliza. Por exemplo: qualquer usuário do Facebook Messenger que entrar em contato com o seu bot já possuirá informações básicas e públicas, como nome e URL da foto do perfil definida em sua conta.

  

As variáveis de usuário permitem que seja possível utilizar qualquer informação definida na conta dos usuários de forma simples. Para saber todos os detalhes sobre como as informações de Contact do BLiP são armazenadas, verifique a extensão de diretório neste link (https://docs.blip.ai/#directory).

  

Para recuperar o valor de uma variável de usuário, basta utilizar, em qualquer ponto do fluxo da conversa, o seguinte padrão:

  

{{contact.**nomeVariavel**}}

  

Onde:

  

**nomeVariavel** representa o nome da variável de contato desejada.

  

Se você deseja enviar uma mensagem de saudação com o nome do usuário que está interagindo com o seu bot, utilize a variável {{contact.name}} para isso. Por exemplo:

  

*“Olá {{contact.name}}, boas vindas!”*

  

A tabela abaixo apresenta todas variáveis de contato disponíveis no BLiP e uma descrição sobre o que representam. Os valores e a disponibilidade dos dados depende do canal do usuário.

  

|Nome das Variáveis |Descrição  |
|--|--|
| name |O nome do contato  |
| address | O endereço do contato |
| city | A cidade do contato. |
| email | O e-mail do contato. |
| source | O nome do canal do contato. |
| phoneNumber | O número de telefone do contato. |
| photoUri | A URI da foto pública do contato. |
| cellPhoneNumber | O telefone celular do contato. |
| gender | O sexo do contato. |
| timezone | O timezone do contato relativo ao GMT. |
| culture | A informação da cultura do usuário (no formato IETF). |
| extras | Um JSON genérico para armazenar pares de strings (chave e valor). |
| identity | A identidade do contato no formato name@domain. **Propriedade obrigatória** |
| group | Indica o nome do grupo ao qual o usuário pertence |

**Obs.: Alguns canais não fornecem nenhuma informação do contato além de seu identificador, definido pela variável {{contact.identity}}. **

##Variáveis de Configuração

As variáveis de configuração possibilitam armazenar valores de configuração de uso geral.

Imagine por exemplo que o fluxo de conversa realiza 10 ações de requisições HTTP para uma mesma API de endpoint https://minhaapi.com.

Nesse cenário, é possível criar, por exemplo, uma variável de configuração endpoint com o valor https://minhaapi.com e reaproveitar essa variável em todas as 10 ações do fluxo. Caso o endereço da sua API mude, basta alterar o valor da variável.

Para criar ou alterar o valor de qualquer variável de configuração, clique nas configurações do Builder, expanda a opção Variáveis de configuração e adicione o nome e o valor da variável (conforme imagem abaixo).