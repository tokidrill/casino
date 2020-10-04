import { Card } from './card'

export abstract class CardCollection {
  // TODO: Setみたいにインスタンスで重複なしを表現できる型ない？？
  protected cards: Card[]

  constructor(cards: Card[]) {
    this.cards = cards
  }

  public suffle(): void {
    this.cards = this.cards.sort(() => Math.random() - 0.5)
  }
}
