---
id: adicionando-push-notification-blip-chat-android
title: Adicionando push notification no BLiP Chat Android
sidebar_label: Adicionando push notification no BLiP Chat Android
---

Em alguns cenários específicos, pode ser necessário adicionar push notification em aplicativos Android que embarcam o BLiP Chat.

Através do **Push Notification** é possível notificar o usuário sobre mensagens não lidas.

Para isso são necessárias algumas configurações específicas entre o aplicativo (que está embarcando o BLiP Chat), o FCM (Firebase Cloud Messaging) e o BLiP. Abaixo estão descritas as etapas necessárias para realizar essas configurações.

## 1 - Configurar FCM no aplicativo

[Adicione o Firebase ao seu projeto Android](https://firebase.google.com/docs/android/setup?hl=pt-br), caso ainda não tenha feito isso.  
Configure [um app cliente do Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/android/client?hl=pt-br) no seu projeto Android.

## 2 - Registrar o token FCM dos usuários no BLiP Chat

Para que o BLiP Chat envie notificações é necessário registrar o token do usuário no servidor do BLiP. É através desta informação que o BLiP consegue determinar qual a credencial FCM (Google) de um usuário do BLiP Chat.

O token do usuário deve ser capturado utilizando o método onTokenRefresh da sua classe que herda de FirebaseInstanceIdService.

```java
@Override
public void onTokenRefresh() { 

   // Get updated InstanceID token.
   String refreshedToken = FirebaseInstanceId.getInstance().getToken();
   // Store token to send later when connecting to blip chat.
   storeTokenUsingAnyMethod(refreshedToken);
}
```

O token armazenado deve ser passado para o BLiP Chat quando o client (BlipClient) é carregado. Para isso, é necessário passar o token (FCM) do usuário concatenado com **@firebase<span>.</span>gw<span>.</span>msging<span>.</span>net** na propriedade extras da conta do usuário.

O valor deve ser definido como um item da propriedade `‘extras’` do `‘Account’`. A propriedade `‘extras’` é um `Map<String,String>`, o item deve ter a chave `"#inbox.forwardTo"` e o valor `“{storedToken}@firebase.gw.msging.net”`. Veja o exemplo abaixo:

```java
AuthConfig authConfig = new AuthConfig(AuthType.Dev, "userIdentifier","userPassword");

Map<String, String> extras = new HashMap<>();
String fcmUserToken = "stored_user_token";
extras.put("#inbox.forwardTo", String.format("%s@firebase.gw.msging.net", fcmUserToken));

Account account = new Account();
account.setFullName("User Name");
account.setEmail("user@gmail.com");
account.setEncryptMessageContent(true);
account.setExtras(extras);

BlipOptions blipOptions = new BlipOptions();
blipOptions.setAuthConfig(authConfig);
blipOptions.setAccount(account);

BlipClient.openBlipThread(MainActivity.this, BuildConfig.APPKEY, blipOptions);
```

## 3 - Enviar arquivo de chave privada de sua conta de serviço

Além das configurações 1 e 2, é necessário enviar para o BLiP um arquivo com as chaves privadas do seu projeto FCM.

Para gerar o arquivo com essas configurações, siga os passos abaixo:

1. No Firebase console, abra **Configurações > Contas de serviço**.

Clique em Gerar nova chave privada e confirme clicando em Gerar chave.
Armazene com segurança o arquivo JSON que contém a chave.

2. Envie um email (**sem anexar o arquivo**) para blip@take.net com o assunto **Integração FCM**.

*A equipe do BLiP responderá o email informando onde o arquivo de chave privada deverá ser armazenado. **Obs.: Não anexe o arquivo de chave privada no email.***

Após todos os passos acima o seu aplicativo já pode receber as mensagens.

## Testando a integração

Crie uma classe que herda de **FirebaseMessagingService** para consumir os pushes enviados pelo BLiP através do método abaixo:

```java
@Override
public void onMessageReceived(RemoteMessage remoteMessage) {
    // TODO(developer): Handle FCM messages here.
    // Check if message contains a data payload.

    if (remoteMessage.getData().size() > 0) {
        Log.d(TAG, "Message data payload: " + remoteMessage.getData());
        
        // Handle message within 10 seconds
        handleNow();
    }
}
```

O retorno do método remoteMessage.getData() é um Map<String, String> com 3 itens, os quais representam uma mensagem no protocolo utilizado pelo BLiP Chat.

**‘id’** = identificador da mensagem  
**‘content’** = json do conteúdo da mensagem.  
**‘type’** = tipo da mensagem.  

Os conteúdos e tipos das mensagens são exemplificados [aqui](https://docs.blip.ai/?http#content-types)
