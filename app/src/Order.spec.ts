import { expect, test } from 'vitest'
import { Order } from './Order'
import { Item } from './Item'

test('should create an order and calculate the total', () => {
  const order = new Order()

  order.addItem(new Item('Beer', 'Glacial', 10))
  order.addItem(new Item('Whisky', 'Glen Moray', 100))
  order.addItem(new Item('Whater', 'Torneiral', 1))

  const total = order.getTotal()

  expect(total).toBe(111)
})

test('should be create an order ans calculate the taxes', () => {
  const order = new Order()

  order.addItem(new Item('Beer', 'Glacial', 10)) // 10%
  order.addItem(new Item('Whisky', 'Glen Moray', 100)) // 20%
  order.addItem(new Item('Whater', 'Torneiral', 1)) // 0%

  const taxes = order.getTaxes()

  expect(taxes).toBe(21)
})
