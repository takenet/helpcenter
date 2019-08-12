---
id: chat-como-adicionar-bot-em-app-ios-utilizando-blip
title: Como adicionar um bot em um aplicativo iOS utilizando o BLiP Chat?
sidebar_label: Como adicionar um bot em um aplicativo iOS utilizando o BLiP Chat?
---

Com o BLiP Chat, você pode colocar o seu chatbot dentro do seu aplicativo Android e iOS de forma super simples.

No iOS, o BLiP Chat suporta aplicativos feitos em *Swift* e *Objective-C*. A instalação é feita através do CocoaPod — caso ainda não tenha o CocoaPod, confira [este guia](https://guides.cocoapods.org/using/using-cocoapods.html) ensinando a configurá-lo.

Para usar o BLiP Chat, basta adicionar a referência no arquivo *Podfile*:

```
target 'MyApp' do
    ...
    pod "BlipChat"
    ...
end
```

E concluir a instalação do pod rodando o comando no diretório do seu projeto:

```bash
$ pod install
```

## Pré-requisitos

Para poder utilizar o BLiP Chat, seu app deve ter acesso à internet, sendo que, no Android, esse acesso precisa ser requisitado dentro do `AndroidManifest.xml`. Para isso, adicione a permissão de internet no seu aplicativo. Se o seu chatbot em algum momento requisita a **localização** do usuário, você também deve adicionar a permissão de localização.

```xml
<manifest xlmns:android...>
    ...
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    ...
</manifest>
```

No iOS, apenas a permissão de localização precisa ser informada. Então, se o seu chatbot requisitar a **localização** do usuário em algum momento, você deve adicionar uma mensagem para o usuário explicando porque a localização é necessária. Adicione a chave *Privacy - Location When In Use Usage Description* no arquivo `info.plist` do seu projeto.

## Configurando seu chat

Para incluir seu chatbot em seu aplicativo, você precisa pegar a sua ApiKey. Caso tenha dúvidas, você pode conferir [este post ensinando a fazer isso](/docs/practice/api-http-sdks/api-http-sdks-como-encontrar-a-api-key-do-meu-bot).

Abrindo sua janela de conversa
É muito simples abrir uma conversa com o seu chatbot. Use a classe **BlipClient** e chame o método *openBlipThread* passando o seu contexto atual e sua API-KEY.

#### Android:

```java
BlipClient.openBlipThread(context, "SUA-API-KEY", null);
```

#### iOS:

```swift
BlipClient.openBlipThread(myView: self, apiKey: "SUA-API-KEY", options: nil)
```

O método *openBlipThread* pode retornar uma exceção, já que ele verifica se possui todas as informações necessárias para abrir o chat. Então, você deve colocá-lo dentro de um *try catch*. Você também pode passar um objeto *BlipOptions*, que possui algumas configurações opcionais que serão abordadas mais adiante.

Agora imagine que você queira, por exemplo, abrir uma conversa entre o usuário e seu chatbot assim que o app é aberto.

#### Android:

```java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        try {
            BlipClient.openBlipThread(context, "SUA-API-KEY", null);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }
}
```

#### Swift:

```swift
class ViewController: UIViewController {

    override func viewDidAppear(_ animated: Bool) {
        do {
            try BlipClient.openBlipThread(myView: self, apiKey: "SUA-API-KEY", options: nil)
        } catch {
            print (error.localizedDescription)
        }
    }
}
```

Também existem algumas possibilidades de customização do seu chat que podem ser configuradas através do objeto **BlipOptions**.

### Autenticação

É possível definir o tipo de autenticação do usuário que irá conversar com o seu chatbot. Existem três tipos de autenticações possíveis:

* **Guest**: onde cada usuário é tratado como convidado e não há quaisquer informações sobre eles;
* **Login**: onde o usuário deve informar seu nome e e-mail antes de conversar com o chatbot;
* **Dev**: onde o desenvolvedor do app é responsável por passar as informações do usuário para o BLiP Chat. Nesse modo, o histórico da conversa esta disponível sempre que o usuário se conectar.

Para entender melhor os possíveis modos de autenticação, dê uma olhada [neste post](/docs/concepts/blip-chat/chat-tipos-de-autenticacao-chat) que explica cada tipo de forma detalhada.

### Esconder o menu da janela

A janela de conversa com o seu chatbot possui um menu no canto superior direito e pode ser escondida. Para isso, basta definir o valor para a propriedade hideMenu dentro do objeto BlipOptions. Por padrão, essa propriedade é false.

#### Android:

```java
BlipOptions blipOptions = new BlipOptions();
blipOptions.setHideMenu(true);
```

#### iOS:

```swift
let options = BlipOptions()
options.hideMenu = false;
```

### Título da janela

No iOS, a janela do BLiP Chat possui um título que pode ser customizado. Para isso, defina o valor da propriedade windowTitle com o título apropriado. Por padrão, esse título é BLiP Chat.

```swift
let options = BlipOptions()
options.windowTitle = "Seu Título";
```

## Exemplos

Após conhecer um pouco mais sobre as funcionalidades do BLiP Chat, vamos fazer um exemplo um pouco mais completo. Digamos que você queria abrir uma conversa entre o usuário e seu chatbot com o tipo de autenticação Dev, fornecendo as informações de nome, e-mail e senha, e esconder o menu da janela de chat.

#### Android:

```java
import net.take.blipchat.*;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        try {
            BlipOptions blipOptions = new BlipOptions();
            blipOptions.setAuthType(AuthType.DEV);
            blipOptions.setUserIdentifier("IDENTIFICADOR-DO-USUARIO");
            blipOptions.setUserPassword("SENHA-DO-USUARIO");
            blipOptions.setUserName("NOME-DO-USUARIO");
            blipOptions.setUserEmail("EMAIL-DO-USUARIO");
            blipOptions.setHideMenu(true); // Esconde o menu da janela

            BlipClient.openBlipThread(MainActivity.this, "SUA-API-KEY", blipOptions);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }

    }
}
```

#### iOS:

```swift
import BlipChat

class ViewController: UIViewController {
   
   @IBAction func openThread(_ sender: Any) {
       let options = BlipOptions(authType: .Dev,
                                 userIdentifier: "IDENTIFICADOR-DO-USUARIO",
                                 userPassword: "SENHA-DO-USUARIO",
                                 userName: "NOME-DO-USUARIO",
                                 userEmail: "EMAIL-DO-USUARIO")
       options.windowTitle = "Meu App iOS" // Define o titulo da janela
       options.hideMenu = true // Esconde o menu da janela
       do {
           try BlipClient.openBlipThread(myView: self, apiKey: "SUA-API-KEY", options: options)
       } catch {
           print (error.localizedDescription)
       }
   }
}
```