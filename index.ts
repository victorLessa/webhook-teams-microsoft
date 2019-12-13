import { cardModel, messageModel } from './object-card'
import Axios, {AxiosInstance} from 'axios'

class NotifyError {

  private _axios:AxiosInstance

  constructor(private options:{ url:string }) {

    if(!options.url) 
      throw new Error('Insira objeto de configuração do Webhook ex: { url: "***" }')
    
    this._axios = Axios.create({
      baseURL: options.url
    })

  }

  async sendRequest(data:object) {
    try {
      await this._axios.request({
        method: 'post',
        data
      })
    } catch(error) {
      throw new Error(error)
    }
  }

  async notifyCard(error:any) {
    await this.sendRequest(cardModel(error))
  }

  async notifyText(error:any) {
    await this.sendRequest(messageModel(error))
  }

}


let instance = new NotifyError({url:'yrfd'})

console.log(instance)