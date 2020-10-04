import { BLACK, Card, CardRank, Deck, Joker, RED, Suit, SuitedCard } from "../../../models";

export class HighAndLowDeck extends Deck {
  constructor(jorker: 0 | 1 | 2 = 0, shuffle = false) {
    const cards: Card[] = [
      ...[...Array(13)].map((_, i) => new SuitedCard(Suit.SPADE, i++ as CardRank)),
      ...[...Array(13)].map((_, i) => new SuitedCard(Suit.HEART, i++ as CardRank)),
      ...[...Array(13)].map((_, i) => new SuitedCard(Suit.DAIAMOND, i++ as CardRank)),
      ...[...Array(13)].map((_, i) => new SuitedCard(Suit.CLUB, i++ as CardRank)),
    ]

    switch (jorker) {
      case 1:
        cards.push(new Joker(RED))
        break
      case 2:
        cards.push(new Joker(RED), new Joker(BLACK))
        break
    }
    super(cards)

    if (shuffle) {
      this.suffle()
    }
  }
}
