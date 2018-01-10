const axios = require('axios')

const year = 2016

function getSido() {
  return axios
    .post(
      'https://sgis.kostat.go.kr/ServiceAPI/map/sidoAddressList.json',
      // { base_year: 2016 }
      `base_year=${year}`
    )
    .then(res => res.data.result.sidoList)
    .then(sidoList =>
      Promise.all(
        sidoList.map(sido => {
          return getSigungu(sido.sido_cd).then(sggList => {
            sido.sggList = sggList
            return sido
          })
        })
      )
    )
}

function getSigungu(sidoCode) {
  return axios
    .post(
      'https://sgis.kostat.go.kr/ServiceAPI/map/sggAddressList.json',
      // { base_year: 2016 }
      `sido_cd=${sidoCode}&base_year=${year}`
    )
    .then(res => res.data.result.sggList)
    .then(sggList =>
      Promise.all(
        sggList.map(sgg => {
          return getAdm(sidoCode, sgg.sgg_cd).then(admList => {
            sgg.admList = admList
            return sgg
          })
        })
      )
    )
}

// 읍동면?
function getAdm(sidoCode, sggCode) {
  return axios
    .post(
      'https://sgis.kostat.go.kr/ServiceAPI/map/admAddressList.json',
      // { base_year: 2016 }
      `sido_cd=${sidoCode}&sgg_cd=${sggCode}&base_year=${year}`
    )
    .then(res => res.data.result.admList)
    .catch(e => {
      console.log('e', e)
      return []
    })
}

// import simplify from './simplify'

getSido()
  // .then(simplify)
  .then(_ => {
    console.log(JSON.stringify(_, null, 2))
  })

// on shell
// node sigungu.js > address.json
