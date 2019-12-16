//Arquivo de teste

const Notify = require('./lib/index')

let Instance = Notify({url: 'https://outlook.office.com/webhook/8a045287-a3ef-4475-bfa7-4c98b0ff0582@1384a791-5f3c-46c2-8b96-437e4cd317ca/IncomingWebhook/60307c6e52304664a30b64b35e98818b/f4764a40-b8a7-497c-98bc-69aa17bd17f8'})

Instance.notifyText({ message: 'Erro test', status: 401 }, 'metodo de teste', 'Brasilcap')
  .then(result => console.log('success', result.data))
  .catch(error => console.log('error', error))