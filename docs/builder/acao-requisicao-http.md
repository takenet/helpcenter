---
id: acao-requisicao-http
title: Ação: Requisição HTTP
sidebar_label: Ação: Requisição HTTP
---

Essa ação permite realizar uma requisição HTTP para qualquer API pública. Para que o Builder seja capaz de realizar a requisição, é preciso preencher todas as informações necessárias para o request.

| Nome do parâmetro  | Descrição                                                            |
| ----------------- | -------------------------------------------------------------------- |
| **Método**        | Método da requisição HTTP. (Valores suportados: POST, GET, PUT, DELETE, PATCH, OPTIONS, HEAD, TRACE). **Obrigatório** |
| **Url**       | Url completa da requisição. **Obrigatório**    |
| **Corpo** | Objeto que será enviado no corpo (body) da requisição.
| **Cabeçalhos**  | Dicionário (chave e valor) com todos os cabeçalhos necessários para a requisição. Exemplo: `Authorization: key 238912371313`. **Opcional**
| **Variável de Status da resposta** | Variável para receber o status da requisição. Esta variável será preenchida com um dos códigos de status em um requisição HTTP. Exemplo: 200. **Opcional**
| **Variável para corpo da resposta** | Variável para receber o **corpo** da resposta dada pela API. Exemplo: `{"key1": "foo"}`. **Opcional**

## Exemplo

Fazer uma requisição para a extensão [Desk](https://docs.blip.ai/#desk) para recuperar as informações de [todos os tickets de um bot](https://docs.blip.ai/#get-all-tickets-of-a-bot):

### 1. Informe o método e a URL

![Exemplo requisicao HTTP](/img/builder/acao-requisicao-http-1.png)

### 2. Caso necessário, informe os cabeçalhos

![Exemplo requisicao HTTP](/img/builder/acao-requisicao-http-2.png)

### 3. Defina as variáveis de retorno

Você pode utilizar esses retornos para exibir as informações para o usuário, ou para armazenar alguma delas no contato, por exemplo.

![Exemplo requisicao HTTP](/img/builder/acao-requisicao-http-3.png)

### 4. Defina o corpo da requisição

![Exemplo requisicao HTTP](/img/builder/acao-requisicao-http-4.png)
