
import injectApi from './shared/injectHook'
import {
  isEmpty,
  isObject,
  isMap,
  isSet,
} from './shared/shared'
import business from './shared/business'
const exportAll = {
  ...injectApi,
  isEmpty,
  isObject,
  isMap,
  isSet,
  ...business,
}
export default exportAll
