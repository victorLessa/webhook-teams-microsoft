const { cardModel, messageModel } = require('./models')
const Axios = require('axios')

class ValidationError extends Error {
  constructor(err) {
    super(err.message);
    this.stack = err.stack
    this.name = "ValidationError";
  }
}

class NotifyError {
  constructor(options) {
    if(typeof options !== 'object' || !options.url) 
      throw new ValidationError('Insira objeto contendo a url do app Webhook ex: { url: "***" }')
    
    this._axios = Axios.create({
      baseURL: options.url
    })

  }

  sendRequest(data) {
    return new Promise((resolve, reject) => {
      this._axios.request({
        method: 'post',
        data
      })
      .then(success => resolve(success))
      .catch(error => reject(error))
    })
  }

  // Ja ja sai esse metodo
  // notifyCard(msg) {
  //   return this.sendRequest(cardModel(msg)).then(result => result.data)
  // }

  notifyText(err, method, nameProject) {
    try {
      if(typeof err !== 'object' || !err.message)
        throw Error('Primeiro parametro deve ser uma objeto ex: { message: "****", status: 500, stack: "***" }')
      
      return this.sendRequest(messageModel(err, method, nameProject))
    } catch(err) {
      throw new ValidationError(err)
    }
  }

}

module.exports = function(options) {
  return new NotifyError(options);
}