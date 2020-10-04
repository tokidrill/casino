import { Deck } from "../../../models/deck";

export class HighAndLowDeck extends Deck {
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
