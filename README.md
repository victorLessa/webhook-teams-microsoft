#Dependências 

* [Axios](https://github.com/axios/axios)

#Instalação

```bash
npm i bbcap-notify-error
```



#Exemplo

```js
const Webhook = require('bbcap-notify-error')({url: '<URL_WEB_HOOK>'})
// Instance.<method>
```



##Enviar mensagem de texto

```js
function methodName(req, res) {
    try{
    	...
    }catch(error) {
        Webhooks.notifyText(error, method, packageName) // method = nome da função
          .then(result => {...})
          .catch(error => {...})
     }
}
```