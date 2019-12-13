import { cardModel, messageModel } from './object-card'
import Axios, { AxiosInstance } from 'axios'

class NotifyError {

  static axios:AxiosInstance

  constructor(options: {url: string}) {
    NotifyError.axios = Axios.create({
      baseURL: options.url
    })
  }

  async sendRequest(data:object) {
    await NotifyError.axios.request({
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