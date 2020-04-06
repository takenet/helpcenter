---
id: como-identificar-usuarios-campanha
title: Como identificar usuários vindos de uma campanha (anúncio)
sidebar_label: Como identificar usuários vindos de uma campanha (anúncio)
---

Sempre que um usuário acessa o bot via Campanha, nos metadados do envio da primeira mensagem, será possivel identificar atributos relacionados à essa campanha. Observe tais metados no log do bot:

![](/img/growth/como-identificar-usuarios-campanha-1.png)<br/>

Para extrair essas informações é necessário **executar um script**. O script abaixo é utilizado para obter apenas o valor do `messenger.ad_id` presente neste metadados.

```javascript
function run(metadata){
metadata= JSON.parse(metadata);

return metadata["messenger.ad_id"];
}
``` 

Abaixo é apresentado o escopo do script.

![](/img/growth/como-identificar-usuarios-campanha-2.png)<br/>

Utilize [registro de eventos](docs/builder/acao-registro-evento) para engrandecer a captura de dados e torná-los mais apresentáveis a partir de relatórios personalizados.