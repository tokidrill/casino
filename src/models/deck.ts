import { Card, CardRank, Suit, SuitedCard } from "./cards"
import { CardCollection } from "./card_collention"

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
      for (const suit in Suit) {
        cards.push(new SuitedCard(suit as Suit, i as CardRank))
      }
    }

    const deck = new Deck(cards)
    deck.suffle()

    return deck
  }
}
