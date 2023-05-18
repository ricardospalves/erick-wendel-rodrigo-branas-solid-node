import { Item } from './Item'

export class Beer extends Item {
  constructor(description: string, price: number) {
    super('Beer', description, price)
  }

  getTax(): number {
    return 10
  }
}
