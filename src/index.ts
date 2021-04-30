const injectApi = require('./shared/injectHook')
import shared from './shared/shared'
import business from './shared/business'
const exportAll = {
  ...injectApi,
  ...shared,
  ...business
}
export default exportAll
