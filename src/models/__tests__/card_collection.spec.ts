import { Card, Suit } from "../card";
import { CardCollection } from "../card_collention";

describe('Test CardCollection', () => {
  class TestCollection extends CardCollection { }

  const c1 = new Card(Suit.SPADE, 1)
  const c2 = new Card(Suit.HEART, 1)
  const c3 = new Card(Suit.DAIAMOND, 1)
  const c4 = new Card(Suit.CLUB, 1)
  const cards = [c1, c2, c3, c4]

  describe('constructor', () => {
    const collection = new TestCollection(cards)

    it('カードの配列を引数に与えて生成できる', () => {
      expect(collection).toBeInstanceOf(TestCollection)
    })
  })

  describe('get', () => {
    const collection = new TestCollection(cards)

    describe('length', () => {
      it('生成時与えられたカードの長さであること', () => {
        expect(collection.length).toBe(cards.length)
      })
    })
  })

  describe('take', () => {
    describe('引数なし', () => {
      const c = new TestCollection(cards)
      const r = c.take()

      it('1枚1番上から取得されること', () => {
        expect(r).toStrictEqual([c1])
      })
      it('1番上を除いた残りになること', () => {
        expect(c.slice()).toStrictEqual([c2, c3, c4])
      })
    })

    describe('引数あり', () => {
      const collection = new TestCollection(cards)
      const recieved = collection.take(3)

      it('上から引数に与えた分だけ取得されること', () => {
        expect(recieved).toStrictEqual([c1, c2, c3])
      })
      it('与えた引数分除かれた残りになること', () => {
        expect(collection.slice()).toStrictEqual([c4])
      })
    })

    describe('コレクションの長さを上回る引数の場合', () => {
      const collection = new TestCollection(cards)
      const recieved = collection.take(100)
      it('全て取得されること', () => {
        expect(recieved).toStrictEqual([c1, c2, c3, c4])
      })
      it('取得元は空になること', () => {
        expect(collection.slice()).toStrictEqual([])
      })
    })
  })
})
