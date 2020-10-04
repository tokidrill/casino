import { Card, Suit } from '../card'

describe('Test Card', () => {
  describe('construntor', () => {
    test('引数を与えて生成できること', () => {
      const suit = Suit.SPADE
      const number = 1

      const card = new Card(suit, number)
      expect(card.suit).toBe(suit)
      expect(card.number).toBe(number)
    })
  })
})
