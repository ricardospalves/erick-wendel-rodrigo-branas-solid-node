import { Item } from './Item'
import { MessageData } from './MessageDta'
import { TaxItem } from './TaxItem'

export class Order {
  public items: Item[]
  messageData: MessageData

  constructor(messageData: MessageData) {
    this.items = []
    this.messageData = messageData
  }

  addItem(item: Item) {
    this.items.push(item)
  }

  getTaxes() {
    const taxes = this.items.reduce((previousValue, item) => {
      if (item instanceof TaxItem) {
        previousValue += item.calculateTax()
      }

      return previousValue
    }, 0)

    return taxes
  }

  getTotal() {
    const total = this.items.reduce((previousValue, product) => {
      previousValue += product.price

      return previousValue
    }, 0)

    return total
  }

  async print(language: string) {
    const message = await this.messageData.read(language)

    return message
      .replace('{{price}}', `${this.getTotal()}`)
      .replace('{{taxes}}', `${this.getTaxes()}`)
  }
}
