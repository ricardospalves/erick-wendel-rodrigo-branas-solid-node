import { expect, test } from 'vitest'
import { Order } from './Order'
import { Beer } from './Beer'
import { Whisky } from './Whisky'
import { Water } from './Water'
import { MessageDataFile } from './MessageDataFIle'

test('should create an order and calculate the total', () => {
  const order = new Order(new MessageDataFile())

  order.addItem(new Beer('Glacial', 10))
  order.addItem(new Whisky('Glen Moray', 100))
  order.addItem(new Water('Torneiral', 1))

  const total = order.getTotal()

  expect(total).toBe(111)
})

test('should be create an order ans calculate the taxes', () => {
  const order = new Order(new MessageDataFile())

  order.addItem(new Beer('Glacial', 10))
  order.addItem(new Whisky('Glen Moray', 100))
  order.addItem(new Water('Torneiral', 1))

  const taxes = order.getTaxes()

  expect(taxes).toBe(21)
})

test('should be create an order ans calculate the taxes in portuguese', async () => {
  const order = new Order(new MessageDataFile())

  order.addItem(new Beer('Glacial', 10))
  order.addItem(new Whisky('Glen Moray', 100))
  order.addItem(new Water('Torneiral', 1))

  const message = await order.print('pt')

  expect(message).toBe(
    'O preço total foi de $111, as taxas foram $21. Obrigado pelo seu pedido.',
  )
})

// test('should be create an order ans calculate the taxes in english', async () => {
//   const order = new Order(new MessageDataFile())

//   order.addItem(new Beer('Glacial', 10))
//   order.addItem(new Whisky('Glen Moray', 100))
//   order.addItem(new Water('Torneiral', 1))

//   const message = await order.print('en')

//   expect(message).toBe(
//     'Total price was $111, taxes was $21. Thanks you for your order.',
//   )
// })
