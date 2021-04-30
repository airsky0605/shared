import { filterEmptyOfObject } from '../shared/business'
test('测试非对象内容传递抛错', () => {
  expect(()=>filterEmptyOfObject('')).toThrowError('该方法只接收对象')
})
test('测试控对象内容', () => {
  expect(filterEmptyOfObject({})).toEqual({})
})
var  pd = {
  a : "a",
  b : "b",
  c : "",
  d:undefined,
  e:null,
  f:{
      f_a : "f_a",
      f_b:undefined,
      f_c:null,
      f_d:"",
      f_e:{
          f_e_a:"f_f_a",
          f_e_b:undefined,
          f_e_c:null,
          f_e_d:""
      }
  }
}
var pded = {
  a : "a",
  b : "b",
  f:{
      f_a : "f_a",
      f_e:{
          f_e_a:"f_f_a",
      }
  }
}
test('过滤后的内容', () => {
  const filtered = filterEmptyOfObject(pd)
  expect((filtered)).toEqual(pded)
})