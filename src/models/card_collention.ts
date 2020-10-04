import { Card } from './cards/card'

export abstract class CardCollection {
  // TODO: Setみたいにインスタンスで重複なしを表現できる型ない？？
  protected cards: Card[]

  constructor(cards: Card[]) {
    this.cards = cards.slice()
  }

  get length(): number {
    return this.cards.length
  }

  public slice(start = 0, end?: number): Card[] {
    return this.cards.slice(start, end)
  }

  public suffle(): void {
    this.cards = this.cards.sort(() => Math.random() - 0.5)
  }

  public addToTop(cards: Card[]): void {
    this.cards.unshift(...cards)
  }

  public addToBottom(cards: Card[]): void {
    this.cards.push(...cards)
  }

  public take(count = 1): Card[] {
    return this.cards.splice(0, count)
  }
}
