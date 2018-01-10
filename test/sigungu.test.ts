import { sidoList, getSub } from '../src/sigungu'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('length of sidoList is 17', () => {
    expect(sidoList.length).toEqual(17)
  })

  describe('getSub', () => {
    let sgg
    let myeondong

    it('extract subclass address', () => {
      sgg = getSub(sidoList[0])[0]
      expect(sgg.name).toEqual('강남구')
      myeondong = getSub(sgg)[0]
      expect(myeondong.name).toEqual('개포1동')
    })

    describe('C class address (읍면동)', () => {
      it('does not have subclass', () => {
        const sgg = getSub(sidoList[0])[0]
        const myeondong = getSub(sgg)[0]
        expect(getSub(myeondong).length).toEqual(0)
      })
    })
  })
})
