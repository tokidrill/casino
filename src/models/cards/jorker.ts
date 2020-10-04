import { Color, Rank } from ".";
import { Card } from "./card";

export class Joker extends Card {
  readonly rank: Rank = 'JORKER'
  readonly color: Color

  constructor(color: Color) {
    super()
    this.color = color
  }
}
