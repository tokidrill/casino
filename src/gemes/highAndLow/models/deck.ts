import { BLACK, Card, CardRank, Deck, Joker, RED, Suit, SuitedCard } from "../../../models";

export class HighAndLowDeck extends Deck {
  constructor(jorker: 0 | 1 | 2 = 0, shuffle = false) {
    const cards: Card[] = [
      // TODO: CardRankにダウンキャストするのは型安全でないので別の方法を取りたい.
      ...[...Array(13)].map((_, i) => new SuitedCard(Suit.SPADE, i + 1 as CardRank)),
      ...[...Array(13)].map((_, i) => new SuitedCard(Suit.HEART, i + 1 as CardRank)),
      ...[...Array(13)].map((_, i) => new SuitedCard(Suit.DAIAMOND, i + 1 as CardRank)),
      ...[...Array(13)].map((_, i) => new SuitedCard(Suit.CLUB, i + 1 as CardRank)),
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
