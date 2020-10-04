import { Card, Suit } from "../card";
import { CardCollection } from "../card_collention";
import { Deck } from "../deck";

describe('Test CardCollection', () => {
  class TestCollection extends CardCollection { }

  describe('constructor', () => {
    const cards = [
      new Card(Suit.SPADE, 1),
      new Card(Suit.HEART, 1),
      new Card(Suit.DAIAMOND, 1),
      new Card(Suit.CLUB, 1),
    ]
    const collection = new TestCollection(cards)

    it('カードの配列を引数に与えて生成できる', () => {
      expect(collection).toBeInstanceOf(TestCollection)
    })
  })
})
