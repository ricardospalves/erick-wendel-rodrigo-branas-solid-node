import { TaxItem } from './TaxItem'

export class Whisky extends TaxItem {
  constructor(description: string, price: number) {
    super('Whisky', description, price)
  }

  getTax(): number {
    return 20
  }
}
