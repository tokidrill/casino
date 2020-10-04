import { Card } from "./cards"
import { CardCollection } from "./card_collention"

/**
 * 山札を表現するクラス.
 */
export abstract class Deck extends CardCollection {
  constructor(cards: Card[]) {
    super(cards)
  }
}
