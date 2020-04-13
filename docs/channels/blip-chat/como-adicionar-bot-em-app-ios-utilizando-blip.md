---
id: como-adicionar-bot-em-app-ios-utilizando-blip
title: Como adicionar um bot em um aplicativo iOS utilizando o BLiP Chat?
sidebar_label: Como adicionar um bot em um aplicativo iOS utilizando o BLiP Chat?
---

Com o BLiP Chat, você pode colocar o seu chatbot dentro do seu aplicativo Android e iOS de forma super simples.

No iOS, o BLiP Chat suporta aplicativos feitos em *Swift* e *Objective-C*. A instalação é feita através do CocoaPod — caso ainda não tenha o CocoaPod, confira [este guia](https://guides.cocoapods.org/using/using-cocoapods.html) ensinando a configurá-lo.

Para usar o BLiP Chat, basta adicionar a referência no arquivo *Podfile*:

```
target 'MyApp' do
    ...
    use_frameworks!
    pod "BlipChat"
    ...
end
```

E concluir a instalação do pod rodando o comando no diretório do seu projeto:

```bash
$ pod install
```

Abra *.xcworkspace com o Xcode.

*Nota: **NÃO** use \*.xcodeproj. Você irá receber um erro se você abrir um arquivo do projeto no lugar do workspace.*

## Pré-requisitos

* Para usar o BLiP Chat no iOS, utilize versões iOS 10 ou maiores.

* No iOS, apenas a permissão de localização precisa ser informada. Então, se o seu chatbot requisitar a **localização** do usuário em algum momento, você deve adicionar uma mensagem para o usuário explicando porque a localização é necessária. Adicione a chave *Privacy - Location When In Use Usage Description* no arquivo `info.plist` do seu projeto.

## Configurando seu chat

Para incluir seu chatbot em seu aplicativo, você precisa pegar a sua ApiKey. Caso tenha dúvidas, você pode conferir [este post ensinando a fazer isso](/docs/api-sdks/como-encontrar-a-api-key-do-meu-bot). Você também precisará colocar o seu **iOS App Id** na sessão de **Domínios do Chatbot** das configurações do BLiP, para habilitar o chat em sua aplicação.

Para usar localização, configure a **Usage Description Key** para **Location Service** no arquivo *info.plist*. Use a chave **Privacy - Location When In Use Usage Description** e configure uma mensagem para solicitar ao usuário permissão de usar a localização dele.

![Configurando permissão de localização](/img/channels/blip-chat/como-adicionar-bot-em-app-ios-utilizando-blip-01.png)

## Abrindo sua janela de conversa

1. Importe o BLiP SDK

#### Swift:

```swift
import BlipChat
```

#### Objective-C:

```objective-c
#import "BlipChat/BlipChat.h"
```
------------------------------

2. Use a classe **BLiPClient** e chame o método *openBlipThread* para abrir uma nova thread.

#### Swift:

```swift
BlipClient.openBlipThread(myView: self, apiKey: "SUA-API-KEY", options: nil)
```

#### Objective-C:

```objective-c
[BlipClient openBlipThreadWithMyView:self appKey:(NSString*) @"your-api-key" options:options error: nil];
```

<i>Obs: In Objective-C, o nome do método é openBlipThreadWithMyView.</i>

-----------------

3. Agora imagine que você queira, por exemplo, abrir uma conversa entre o usuário e seu chatbot assim que o app é aberto (quando o *ViewController* é carregado).

#### Swift:

```swift
import UIKit
import WebKit
import BlipChat

class ViewController: UIViewController {

	override func viewDidLoad() {
		super.viewDidLoad()
	}

	override func viewDidAppear(_ animated: Bool) {
		do {
        	try BlipClient.openBlipThread(myView: self, appKey: "your-api-key", options: nil)
		} catch {
			print (error.localizedDescription)
		}
	}

	override func didReceiveMemoryWarning() {
		super.didReceiveMemoryWarning()
		// Dispose of any resources that can be recreated.
	}
}
```

#### Objective-C:

```objective-c
#import "ViewController.h"
#import "BlipChat/BlipChat.h"

@interface ViewController ()
@end

@implementation ViewController

- (void)viewDidAppear:(BOOL)animated {
	[super viewDidAppear: animated];
	[BlipClient openBlipThreadWithMyView:self appKey:@"your-app-key" options:nil error: nil];
}

- (void)didReceiveMemoryWarning {
	[super didReceiveMemoryWarning];
	// Dispose of any resources that can be recreated.
}
@end
```

## Funcionalidades avançadas:

Também existem algumas possibilidades de customização do seu chat que podem ser configuradas através do objeto **BlipOptions**.

### Autenticação

É possível definir o tipo de autenticação do usuário que irá conversar com o seu chatbot. Existem dois tipos de autenticações possíveis:

* **Guest**: onde cada usuário é tratado como convidado e não há quaisquer informações sobre eles;
* **Dev**: onde o desenvolvedor do app é responsável por passar as informações do usuário para o BLiP Chat. Nesse modo, o histórico da conversa está disponível sempre que o usuário se conectar.

Para entender melhor os possíveis modos de autenticação, dê uma olhada [neste post](/docs/channels/blip-chat/tipos-de-autenticacao-chat) que explica cada tipo de forma detalhada.

Para definir o tipo de autenticação, use o enum *AuthTypeProvider.AuthType* na propriedade *authType* do *BlipOptions*. Quando usando **Swift**, os tipos possíveis são: `.Guest` e `.Dev`. Quando usando **Objective-C**, os valores possíveis são: `AuthTypeGuest` e `AuthTypeDev`.

#### Swift:

```swift
let authConfig = AuthConfig(authType: .Dev, userIdentity: "user-identifier", userPassword: "user-password")
options = BlipOptions(authType: authConfig, account: nil)
```

#### Objective-C:

```objective-c
AuthConfig *authConfig = [[AuthConfig alloc] initWithAuthType:AuthTypeDev userIdentity:@"user-identifier" userPassword:@"user-password"];
options = [[BlipOptions alloc] initWithAuthType:authConfig account: nil];
```

------------------------------

### Esconder o menu da janela

A janela de conversa com o seu chatbot possui um menu no canto superior direito e pode ser escondida. Para isso, basta definir o valor para a propriedade hideMenu dentro do objeto BlipOptions.

#### Swift:

```swift
let options = BlipOptions()
options.hideMenu = false;
```

#### Objective-C:

```objective-c
BlipOptions *options = [[BlipOptions alloc] init];
options.hideMenu = NO;
```

-------------------------

### Título da janela

No iOS, a janela do BLiP Chat possui um título que pode ser customizado. Para isso, defina o valor da propriedade *windowTitle* com o título apropriado. Por padrão, esse título é BLiP Chat.

#### Swift:

```swift
let options = BlipOptions()
options.windowTitle = "Seu Título";
```

#### Objective-C:

```objective-c
BlipOptions *options = [[BlipOptions alloc] init];
options.windowTitle = @"Seu Título";
```

-----------------

### Título da janela com tipo Dev de autenticação

#### Swift:

```swift
import UIKit
import WebKit
import BlipChat

class ViewController: UIViewController {
	
	override func viewDidLoad() {
		super.viewDidLoad()
	}
	
	override func viewDidAppear(_ animated: Bool) {
		let authConfig = AuthConfig(authType: .Dev, userIdentity: "user-identifier", userPassword: "user-password")
		let account = Account(fullname: "user-name", email: "user-email")
		let options = BlipOptions(authType: authConfig, account: account)
		options.windowTitle = "Seu título"
		
		do {
        		try BlipClient.openBlipThread(myView: self, appKey: "sua-app-key", options: options)
        	} catch {
            		print (error.localizedDescription)
        	}
	}
	
	override func didReceiveMemoryWarning() {
		super.didReceiveMemoryWarning()
		// Dispose of any resources that can be recreated.
	}
}
```

#### Objective-C:

```objective-c
#import "ViewController.h"
#import "BlipChat/BlipChat.h"


@interface ViewController ()
@end

@implementation ViewController

- (void)viewDidAppear:(BOOL)animated {
	[super viewDidAppear: animated];

	AuthConfig *authConfig = [[AuthConfig alloc] initWithAuthType:AuthTypeDev userIdentity:@"user-identifier" userPassword:@"user-password"];
	Account *account = [[Account alloc] initWithFullname:@"user-name" 	email:@"user-email"];
	BlipOptions *options = [[BlipOptions alloc] initWithAuthType:authConfig account:account];
	options.windowTitle = @"Seu título";
    
    [BlipClient openBlipThreadWithMyView:self appKey: @"your-app-key" options:options error: nil];
}

- (void)didReceiveMemoryWarning {
	[super didReceiveMemoryWarning];
	// Dispose of any resources that can be recreated.
}

@end
```

------------------

### Especificando dados do usuário

O BLiP Chat permite que alguns dados do usuário, como `fullname`, `email` e outros, sejam especificados no carregamento. Para ver todas as possíveis propriedades, acesse a documentação do [Lime Protocol](https://limeprotocol.org/resources.html#account).

Para definir as informações, crie um objeto `Account` e passe ele como parâmetro para **BlipOptions**.

#### Swift:

```swift
let authConfig = AuthConfig(authType: .Dev, userIdentity: "user-identifier", userPassword: "user-password")
let account = Account(fullname: "user-name", email: "user-email")
options = BlipOptions(authType: authConfig, account: account)
```

#### Objective-C:

```objective-c
AuthConfig *authConfig = [[AuthConfig alloc] initWithAuthType:AuthTypeDev userIdentity:@"user-identifier" userPassword:@"user-password"];
Account *account = [[Account alloc] initWithFullname:@"user-name" email:@"user-email"];
options = [[BlipOptions alloc] initWithAuthType:authConfig account: account];
```

------------

## Exemplos

Após conhecer um pouco mais sobre as funcionalidades do BLiP Chat, vamos fazer um exemplo um pouco mais completo. Digamos que você queria abrir uma conversa entre o usuário e seu chatbot com o tipo de autenticação Dev, fornecendo as informações de nome, e-mail e senha, e esconder o menu da janela de chat.

### Swift:

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

### Objective-C:

```objective-c
#import "ViewController.h"
#import "BlipChat/BlipChat.h"


@interface ViewController ()
@end

@implementation ViewController

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear: animated];
}

- (IBAction)openThread:(id)sender {
    BlipOptions *options = [BlipOptions alloc];
    if ([sender tag] == 0) {
        options = [options init] ;
    } else if([sender tag] == 1) {
        AuthConfig *authConfig = [[AuthConfig alloc] initWithAuthType:AuthTypeDev userIdentity:@"ObjcTest1" userPassword:@"123456"];
        Account *account = [[Account alloc] initWithFullname:@"iosName1" email:@"iosEmail1@email.com"];
        account.encryptMessageContent = TRUE;
        options = [options initWithAuthType:authConfig account:account];
    } else if([sender tag] == 2) {
        AuthConfig *authConfig = [[AuthConfig alloc] initWithAuthType:AuthTypeDev userIdentity:@"ObjcTest2" userPassword:@"123456"];
        Account *account = [[Account alloc] initWithFullname:@"iosName2" email:@"iosEmail2@email.com"];
        account.encryptMessageContent = TRUE;
        options = [options initWithAuthType:authConfig account:account];
    } else if([sender tag] == 3) {
        AuthConfig *authConfig = [[AuthConfig alloc] initWithAuthType:AuthTypeDev userIdentity:@"ObjcTest3" userPassword:@"123456"];
        Account *account = [[Account alloc] initWithFullname:@"iosName3" email:@"iosEmail3@email.com"];
        options = [options initWithAuthType:authConfig account:account];
    }
    options.windowTitle = @"Objective C";
    [BlipClient openBlipThreadWithMyView:self appKey:@"YOUR-APP-KEY"  options:options error:nil];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

@end
```

<!-- Rating frame -->
<script type="text/javascript" src="/scripts/rating.js"></script>