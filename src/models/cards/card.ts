export enum Suit {
  SPADE = 'spade',
  HEART = 'heart',
  DAIAMOND = 'diamond',
  CLUB = 'club',
}

export type CardRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13

/**
 * トランプのカードを表現するクラス.
 */
export class Card {
  readonly suit: Suit
  readonly rank: CardRank

  constructor(suit: Suit, rank: CardRank) {
    this.suit = suit
    this.rank = rank
  }
}
