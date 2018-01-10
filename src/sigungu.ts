// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { AddressUnit } from './address'
export { default as sidoList } from './address'

export function getSub(addr: AddressUnit): AddressUnit[] {
  return addr.subClassList ? addr.subClassList : []
}
