import { Card, CardNumber, Suit } from './card'
import { CardCollection } from './card_collention'

/**
 * 山札を表現するクラス.
 */
export class Deck extends CardCollection {
  constructor(cards: Card[]) {
    super(cards)
  }

  public static init(): Deck {
    const cards: Card[] = []
    for (let i = 1; i <= 13; i++) {
      cards.push(new Card(Suit.SPADE, i as CardNumber))
      cards.push(new Card(Suit.HEART, i as CardNumber))
      cards.push(new Card(Suit.DAIAMOND, i as CardNumber))
      cards.push(new Card(Suit.CLUB, i as CardNumber))
    }

    const deck = new Deck(cards)
    deck.suffle()

    return deck
  }

  get length(): number {
    return this.cards.length
  }

  public deal(): Card {
    return this.cards[0]
  }
}
