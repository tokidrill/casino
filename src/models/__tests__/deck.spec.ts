import { Card, Suit } from '../card'
import { Deck } from '../deck'

describe('Test Deck', () => {
  describe('constructor', () => {
    test('引数にカードの配列を与えて生成できること', () => {
      const cards = [
        new Card(Suit.SPADE, 1),
        new Card(Suit.HEART, 1),
        new Card(Suit.DAIAMOND, 1),
        new Card(Suit.CLUB, 1),
      ]
      const deck = new Deck(cards)

      expect(deck.length).toBe(cards.length)
    })
  })
})
