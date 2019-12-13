import { cardModel, messageModel } from './object-card'
import Axios, { AxiosInstance } from 'axios'

class NotifyError {

  private _axios:AxiosInstance

  constructor(options: {url: string}) {
    this._axios = Axios.create({
      baseURL: options.url
    })
  }

  async sendRequest(data:object) {
    await this._axios.request({
      method: 'post',
      data
    })
  }

  async notifyCard(error:any) {
    await this.sendRequest(cardModel(error))
  }

  async notifyText(error:any) {
    await this.sendRequest(messageModel(error))
  }

}


export default NotifyError