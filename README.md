# Sigungu

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/alexjoverm/typescript-library-starter.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/alexjoverm/typescript-library-starter.svg)](https://travis-ci.org/alexjoverm/typescript-library-starter)
[![Coveralls](https://img.shields.io/coveralls/alexjoverm/typescript-library-starter.svg)](https://coveralls.io/github/alexjoverm/typescript-library-starter)
[![Dev Dependencies](https://david-dm.org/alexjoverm/typescript-library-starter/dev-status.svg)](https://david-dm.org/alexjoverm/typescript-library-starter?type=dev)


A minimal address data of south korea

### Installation
```bash
# Run npm install
npm install --save sigungu
```

### Description

```js
// index.js
const { sidoList, getSub } = require('sigungu');

// 광역시 / 도
const sido = sidoList[0];

console.log(sido.code, sido.name);

// 시군구 (예외 있음)
const sigungu = getSub(sido)[0];

console.log(sigungu.code, sigungu.name);

// 동면
const dongmyeon = getSub(sigungu)[0];

console.log(dongmyeon.code, dongmyeon.name);

const more = getSub(dongmyeon);

console.log(more);
```
```sh
$ node index.js
11 서울특별시
230 강남구
68 개포1동
[]
```