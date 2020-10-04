import { Card } from './card'

export abstract class CardCollection {
  // TODO: Setみたいにインスタンスで重複なしを表現できる型ない？？
  protected cards: Card[]

  constructor(cards: Card[]) {
    this.cards = cards.slice()
  }

  get length(): number {
    return this.cards.length
  }

  public slice(): Card[] {
    return this.cards.map(c => c)
  }

  public suffle(): void {
    this.cards = this.cards.sort(() => Math.random() - 0.5)
  }

  public take(count: number = 1): Card[] {
    return this.cards.splice(0, count)
  }
}
