import { Item } from './Item'

export class Water extends Item {
  constructor(description: string, price: number) {
    super('Water', description, price)
  }

  getTax(): number {
    return 0
  }
}
