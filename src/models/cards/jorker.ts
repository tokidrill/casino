import { Card } from "./card";
import { Color } from "./types/color";
import { Rank } from "./types/rank";

export class Joker extends Card {
  readonly rank: Rank = 'JORKER'
  readonly color: Color

  constructor(color: Color) {
    super()
    this.color = color
  }
}
