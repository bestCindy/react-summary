以下是我学习 Virtual DOM 的笔记
参考：
- https://segmentfault.com/a/1190000014572815
- https://segmentfault.com/a/1190000014603332
- https://segmentfault.com/a/1190000014641724

### 什么是 Virtual DOM

Virtual DOM 是对真实 DOM 的一个抽象，是用一个 JS 对象去描述 DOM，所以 Virtual DOM 本质上一个对象

### 为什么要用 Virtual DOM

因为浏览器的标准就是把 DOM 设计得非常的复杂。如果我们频繁的操作 DOM，会产生一定的性能问题，我们通过操作一个简单的，抽象的 DOM，最后将差异尽可能一次性的 patch 到真实的 DOM 上，这样会减少很多性能问题

### React 中 Virtual DOM 的 diff
- 在 React 中，当我们要修改数据的时候，我们会调用 `setState` 方法来修改数据
- React 根据新的数据生成一个新的 VDOM，因为 VDOM 本质上是一个普通的 js 对象，所以这个过程是很快的
- 然后 React 将新的 VDOM 和之前的 VDOM 进行 diff，找出不同的地方，生成一个个 patches
- 最后 React 把这些 patches 一次性打到 DOM 上，完成视图的修改

### Virtual DOM 中的 diff 算法

**(一) 如果旧节点不存在**

返回 patch 对象，类型为 `CREATE`

**（二）如果新节点不存在**

类型为 `REMOVE`

**（三）如果两者都存在**

调用 `changed` 函数判断是不是有变动

如果为 `true` 类型为 `REPLACE`

如果为 `false`

- 首先根据 `type` 是否存在来判断节点是不是 VDOM
    - 如果 `type` 不存在的话，newNode 要么是空节点，要么是字符串
- 如果新节点是 VDOM，则返回一个 patches 对象，类型是 `UPDATE`
- 同时需要对 `props` 和 `children` 分别进行 `diffProps` 和 `diffChildren` 操作

关于 `changed` 函数

- 首先比较数据类型
- 数据类型一致的话，判断是不是纯文本，如果是的话比较两个文本是不是相等
- 最后比较两者的类型是否相等