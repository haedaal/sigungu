function simplify(rawData) {
  return rawData.map(simplifySido)
}

function simplifySido(sido) {
  const { y_coor, x_coor, sido_nm, sido_cd, sggList } = sido;
  return {
    class: 'A',
    y_coor,
    x_coor,
    name: sido_nm,
    code: sido_cd,
    subClassList: sggList.map(simplifySgg)
  }
}

function simplifySgg(sgg) {
  const { y_coor, x_coor, sgg_nm, sgg_cd, admList } = sgg;
  return {
    class: 'B',
    y_coor,
    x_coor,
    name: sgg_nm,
    code: sgg_cd,
    subClassList: admList.map(simplifyAdm)
  }
}

function simplifyAdm(adm) {
  const { y_coor, x_coor, emdong_nm, emdong_cd } = adm;
  return {
    class: 'C',
    y_coor,
    x_coor,
    name: emdong_nm,
    code: emdong_cd,
  }
}

export default simplify
