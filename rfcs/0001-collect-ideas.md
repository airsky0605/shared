# 通用能力集合的提案

- Start Date:2021-04.30
- Author: Nello.Huang
- Reference Issues:https://github.com/airsky0605/shared/issues/1

## 概述

此 RFC 仅作为收集信息之用。  
此包与 lodash 不同的是，此包会加入一些业务的思考，以及一些抽象出来的业务方法，但不会耦合业务内部。  
如果可以接纳的话，后续发布新版的时候会列一个 Task 标记哪些是已经合并进入，敬请悉知。

## 基本范例

文字说明、或者是代码说明亦可(最好是代码和文字说明一起)。

比如说 过滤 null undefined 空字符串的一个方法。

复杂的功能，请提供基本形态和最终形态。

```typescrit

// 基本形态
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
//想要得到的形态
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

```
