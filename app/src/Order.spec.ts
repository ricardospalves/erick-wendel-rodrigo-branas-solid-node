import { expect, test } from 'vitest'
import { Order } from './Order'
import { Beer } from './Beer'
import { Whisky } from './Whisky'
import { Water } from './Water'

test('should create an order and calculate the total', () => {
  const order = new Order()

  order.addItem(new Beer('Glacial', 10))
  order.addItem(new Whisky('Glen Moray', 100))
  order.addItem(new Water('Torneiral', 1))

  const total = order.getTotal()

  expect(total).toBe(111)
})

test('should be create an order ans calculate the taxes', () => {
  const order = new Order()

  order.addItem(new Beer('Glacial', 10))
  order.addItem(new Whisky('Glen Moray', 100))
  order.addItem(new Water('Torneiral', 1))

  const taxes = order.getTaxes()

  expect(taxes).toBe(21)
})
