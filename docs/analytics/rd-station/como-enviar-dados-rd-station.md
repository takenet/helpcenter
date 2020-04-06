---
id: como-enviar-dados-rd-station
title: Integração RD Station - Enviando dados de um bot para o RD Station
sidebar_label: Integração RD Station - Enviando dados de um bot para o RD Station
---

Siga os passos abaixo para realizar a integração entre o RD Station e o BLiP.

## 1. Instalando o Aplicativo do BLiP no RD Station

Para configurar um bot no RD Station, acesse o portal do BLiP, escolha o bot desejado, clique no ícone de quebra-cabeça no canto superior direito (abaixo de seu nome de usuário) e em seguida clique em _RD Station_. A seguinte tela será apresentada:

![Tela de Instalção do RD Station](/img/analytics/rd-station/como-enviar-dados-rd-station-1.png)

Clique no botão Instalar. Após isso, um pop-up será aberto com a página do RD Station. Neste momento, entre com suas credenciais do RD Station, escolha a conta que deseja se conectar e clique em _Continuar_.

![Autenticando no RD Station](/img/analytics/rd-station/como-enviar-dados-rd-station-2.png)

Leia as permissões solicitadas pelo aplicativo e clique em _Conectar_.

![Autorizando Permissões no RD Station](/img/analytics/rd-station/como-enviar-dados-rd-station-3.png)

Após o término da instalação, a seguinte página será exibida, contendo o nome da sua conta do RD Station e o id do bot conectado.

![Tela de Instalção do RD Station Logada](/img/analytics/rd-station/como-enviar-dados-rd-station-4.png)

## 2. Utilizando a Integração

A integração com o RD Station funciona através de ações no fluxo do seu bot ou através de comandos (HTTP ou SDK).
Esta integração permite que você crie leads com dados detalhados do seu cliente.

### Ações do Bot

No builder, acesse o bloco do seu fluxo em que deseja criar um lead.
Clique em __Ações__ e em seguida clique em __+ Adicionar ação de entrada/saída__. Selecione a opção __Registro de eventos__.
Em __Categoria__ preencha com o valor `lead`, e em __Ação__ preencha com o valor `create`. __Rótulo__ e __Valor__ não precisam ser preenchidos.

Os dados do seu cliente devem ser adicionados como informações extras da ação.

Clique em __+ Adicionar informações extras__ para cada informação que você deseja enviar para o RD Station. Em __Key__ preencha com o nome do dado, e em __Value__ preencha com a valor do dado (você também pode usar variáveis do fluxo).
As informações extras da ação devem ter pelo menos dois campos obrigatórios: `identificador` e `email`. Se algum destes __não estiver definido__, o lead __não será salvo__.

![Ação de Criação de Leads no RD Station](/img/analytics/rd-station/como-enviar-dados-rd-station-5.png)

__Nota__:

- Quando o lead é gerado por um evento no builder os campos personalizados `#stateId`, `#messageId` e `#stateName` são gerados automaticamente.

### Comandos

Para criar novas conversões de leads na sua conta RDStation, você deve mandar um comando de tipo [event-track](https://docs.blip.ai/#event-analysis), com os campos `category: "lead"` e `action: "create"`.
O comando deve ter pelo menos dois campos que são obrigatórios: `identificador` e `email`. Se algum destes **não estiver definido**, o lead **não será salvo**.

**Exemplo:** Requisição HTTP realizada para salvar a conversão:

```
POST https://msging.net/commands HTTP/1.1
Authorization: Key YOUR-BLIP-API-KEY
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "9494447a-2581-4597-be6a-a5dff33af156",
    "to": "postmaster@analytics.msging.net",
    "method": "set",
    "type": "application/vnd.iris.eventTrack+json",
    "uri": "/event-track",
    "resource": {
        "category": "lead",
        "action": "create",
        "extras": {
            "conversion_identifier": "9494447a-2581-4597-be6a-a5dff33af156",
            "identificador": "sad78a9x1-asrth-87452-be6a-5ua85paxla",
            "email": "joao.silva@email.com",
            "step": "Pagamento",
            "conversion_time": "2020-12-04 18:45:12 +00:00"
        }
    }
}
```

__Notas__:

- Não inserir __Keys__ repetidas em um mesmo comando ou ação. Caso isto aconteça a segunda ocorrência da __Key__ será ignorada assim como o seu respectivo __Value__;
- O nome das __Keys__ devem seguir as seguintes regras: Usar caracteres alfanuméricos e/ou underline, não usar caracteres especiais e usar no máximo 64 caracteres;
- Caso você digite o nome de um campo que não exista no RD Station, o BLiP irá criá-los automaticamente.
- Após a criação de um campo personalizado no BLiP, a RD Station garante que ele estará disponivel para uso em até 3 horas. Caso o seu lead não exiba o campo personalizado, aguarde este período e tente novamente.
- Apenas campos do tipo **string** são suportados pelo BLiP. Portanto as `keys tags` e `available_for_mailing` **não são suportadas**.
- Para mais detalhes dos campos suportados acesse: https://developers.rdstation.com/pt-BR/reference/events#events-post