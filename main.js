//Arquivo de teste

const Notify = require('./lib/index')

let Instance = Notify({url: 'https://outlook.office.com/webhook/37599f65-a861-4e92-967e-8c0344e66e98@3e3b727e-1a2f-4771-8553-f7dfb8aaeda5/IncomingWebhook/af3ffd11493143d6a5bfd8e03b6532b2/d83ef4ee-7c6e-463e-9f1f-bf90682d77d5'})

Instance.notifyText({ message: 'Erro test', status: 401 }, 'metodo de teste', 'Brasilcap')
  .then(result => console.log('success', result.data))
  .catch(error => console.log('error', error))