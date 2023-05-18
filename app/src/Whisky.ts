import { Item } from './Item'

export class Whisky extends Item {
  constructor(description: string, price: number) {
    super('Whisky', description, price)
  }

  getTax(): number {
    return 20
  }
}
