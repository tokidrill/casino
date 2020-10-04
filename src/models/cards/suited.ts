import { Card, CardRank, Color } from "."

export enum Suit {
  SPADE = 'spade',
  HEART = 'heart',
  DAIAMOND = 'diamond',
  CLUB = 'club',
}

export class SuitedCard extends Card {
  readonly suit: Suit
  readonly rank: CardRank

  constructor(suit: Suit, rank: CardRank) {
    super()
    this.suit = suit
    this.rank = rank
  }

  get color(): Color {
    return Suit.SPADE || Suit.CLUB ? 'BLACK' : 'RED'
  }
}
