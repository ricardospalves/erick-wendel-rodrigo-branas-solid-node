import { Item } from './Item'

export class Order {
  public items: Item[]

  constructor() {
    this.items = []
  }

  addItem(item: Item) {
    this.items.push(item)
  }

  getTaxes() {
    const taxes = this.items.reduce((previousValue, { category, price }) => {
      if (category === 'Beer') {
        previousValue += (price * 10) / 100
      }

      if (category === 'Whisky') {
        previousValue += (price * 20) / 100
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
}
