import { HighAndLowDeck } from '../deck'

describe('Test HighAndLowDeck', () => {
  describe('constructor', () => {
    describe('引数なし', () => {
      const deck = new HighAndLowDeck()

      it('長さが52であること', () => {
        expect(deck.length).toBe(52)
      })
    })

    describe('joker 2枚', () => {
      const deck = new HighAndLowDeck(2)

      it('長さが54であること', () => {
        expect(deck.length).toBe(54)
      })
    })
  })
})
