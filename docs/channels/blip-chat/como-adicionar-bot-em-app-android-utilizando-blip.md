---
id: como-adicionar-bot-em-app-android-utilizando-blip
title: Como adicionar um bot em um aplicativo Android utilizando o BLiP Chat?
sidebar_label: Como adicionar um bot em um aplicativo Android utilizando o BLiP Chat?
---

Com o **BLiP Chat**, é possível colocar o seu bot dentro do seu aplicativo Android de forma muito simples. Para isso, adicione a referência do repositório no arquivo `build.gradle` do seu projeto:

## 1. Adicionando referência
Adicione a referência para o repositório Maven jcenter.

*Para dúvidas sobre este passo, consulte a documentação oficial: https://bintray.com/bintray/jcenter*

```java
allprojects {
    repositories {
        //others repository dependencies
        jcenter()
    }
}

```

E importe o módulo via gradle:

```java
implementation 'net.take:blip-chat:2.1.24'
```

Ou via Maven:

```xml
<dependency>
  <groupId>net.take</groupId>
  <artifactId>blip-chat</artifactId>
  <version>2.1.24</version>
  <type>pom</type>
</dependency>
```

Ou faça o download da [última versão JAR ](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22net.take%22)e importe para o seu app.

## 2. Pré-requisitos

Para poder utilizar o BLiP Chat, seu app deve ter acesso à **internet**. Tal permissão deve ser requisitada dentro do arquivo *AndroidManifest.xml* do seu projeto. Se em algum momento o seu chatbot requisita a **localização** do usuário, você também deve adicionar a permissão de localização. Para **enviar arquivos**, você também precisará conceder permissões. Para tanto, **adicione as informações abaixo no arquivo de manifesto do seu projeto**:

```xml
<manifest xlmns:android...>
    ...
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.CAMERA" />
    ...
</manifest>
```

Também será necessário adicionar a dependência GSON ao seu aplicativo, uma vez que o BLiP Chat usa esta biblioteca.

```java
implementation 'com.google.code.gson:gson:2.8.5'
```

## 3. Abrindo sua janela de conversa

Para abrir a janela de conversa com o bot dentro do seu aplicativo, use a classe **BlipClient** e chame o método *openBlipThread*, passando seu contexto atual e sua API-KEY.

```java
BlipClient.openBlipThread(context, "YOUR-BLiP-CHAT-API-KEY", null);
```

Para encontrar a API-KEY do BLiP Chat do seu bot, vá até o portal e escolha o bot correspondente. Clique no módulo Canais e escolha o canal BLiP Chat. Clique na aba Instalação e copie sua API-KEY, conforme a imagem abaixo:

Para encontrar a API-KEY do BLiP Chat do seu bot, vá até o portal e escolha o bot correspondente. Clique no módulo Canais e escolha o canal BLiP Chat. Clique na aba Instalação e copie sua API-KEY, conforme a imagem abaixo:

![Encontrando API-KEY do Blip Chat do seu bot](/img/channels/blip-chat/chat-como-adicionar-bot-em-app-android-utilizando-blip-1.png)

**Observação**: O método *openBlipThread* pode retornar uma exceção, já que ele verifica se possui todas as informações necessárias para abrir o chat. Então, você deve colocá-lo dentro de um *try catch*. Você também pode passar um objeto *BlipOptions*, que possui algumas configurações opcionais que serão abordadas mais adiante.

### Exemplo

Imagine que você queira abrir uma conversa entre o usuário e o seu chatbot assim que o app é aberto.

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

## 4. (Opcional) Customizando a interface do chat no Android

Existem algumas possibilidades de customização do seu chat que podem ser configuradas através do objeto **BlipOptions**. São elas:

### Autenticação

É possível definir o tipo de autenticação do usuário que irá conversar com o seu chatbot. Existem dois tipos de autenticações possíveis:

* **Não logado**: na qual cada usuário é tratado como convidado e não há quaisquer informações sobre ele.
* **Logado**: na qual o desenvolvedor do app é responsável por passar as informações do usuário para o BLiP Chat. Nesse modo, o histórico da conversa está disponível sempre que o usuário se conectar.

Para entender melhor os possíveis modos de autenticação, veja este post.

### Esconder o menu da janela

A janela de conversa com o seu chatbot possui um menu no canto superior direito que pode ser escondido. Para isso, basta definir o valor para a propriedade **hideMenu** dentro do objeto *BlipOptions*. Por padrão, essa propriedade é *false*.

```java
BlipOptions blipOptions = new BlipOptions();
blipOptions.setHideMenu(true);
```

### Título da janela

No Android, a janela do BLiP Chat possui um título que pode ser customizado. Para isso, defina o valor da propriedade **windowTitle** com o título apropriado. Por padrão, este título é *BLiP Chat*.

```swift
let options = BlipOptions()
options.windowTitle = "Seu Título";
```

### Exemplo

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

![Customizando a interface do chat no Android](/img/channels/blip-chat/chat-como-adicionar-bot-em-app-android-utilizando-blip-2.png)