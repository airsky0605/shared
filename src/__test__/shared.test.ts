import shared from '../shared/shared'
//TODO:
// isEmpty
// 空字符串  ☑️
// 空对象   ☑️
// 空数组   ☑️
// 空Map   ☑️
// 空set   ☑️
// null   ☑️
// undefined ☑️
test('测试空字符串', () => {
  expect(shared.isEmpty('')).toBe(true)
})
test('测试空数组', () => {
  expect(shared.isEmpty([])).toBe(true)
})
test('测试空Map', () => {
  var _map = new Map()
  expect(shared.isEmpty(_map)).toBe(true)
})
test('测试空Set', () => {
  var _set = new Set()
  expect(shared.isEmpty(_set)).toBe(true)
})
test('测试Null', () => {
  expect(shared.isEmpty(null)).toBe(true)
})
test('测试undefined', () => {
  expect(shared.isEmpty(undefined)).toBe(true)
})
test('测试number 0 开启判断', () => {
  expect(shared.isEmpty(0, { needNumberZero: true })).toBe(true)
})
test('测试空对象', () => {
  expect(shared.isEmpty({})).toBe(true)
})
test('测试symbol', () => {
  expect(shared.isEmpty(Symbol())).toBe(false)
})
