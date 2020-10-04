import { Card, Suit } from '../cards/card'

describe('Test Card', () => {
  describe('construntor', () => {
    test('引数を与えて生成できること', () => {
      const suit = Suit.SPADE
      const rank = 1

      const card = new Card(suit, rank)
      expect(card.suit).toBe(suit)
      expect(card.rank).toBe(rank)
    })
  })
})
