## 面向对象编程　Object Oriented Programming
### 构造函数:js基于构造函数（constructor）和原型链（prototype）。
一个简单的构造函数
```
var Vehicle = function () {
  this.price = 1000;
};
上面代码中，Vehicle就是构造函数，它提供模板，用来生成对象实例。为了与普通函数区别，构造函数名字的第一个字母通常大写。
```
构造函数特点

```
函数体内部使用了this关键字，代表了所要生成的对象实例。
生成对象的时候，必需用new命令，调用Vehicle函数。
```
### new 命令
####　基本用法
- 忘了使用new命令：这种情况下，构造函数就变成了普通函数，并不会生成实例对象，this这时代表全局对象
- 为了保证构造函数必须与new命令一起使用，一个解决办法是，在构造函数内部使用严格模式，即第一行加上use strict。

```
function Fubar(foo, bar){
  'use strict';
  this._foo = foo;
  this._bar = bar;
}

Fubar()
// TypeError: Cannot set property '_foo' of undefined
```
- 另一个解决办法：在构造函数内部判断是否使用new命令，如果发现没有使用，则直接返回一个实例对象。

```
function Fubar(foo, bar){
  if (!(this instanceof Fubar)) {
    return new Fubar(foo, bar);
  }

  this._foo = foo;
  this._bar = bar;
}

Fubar(1, 2)._foo // 1
(new Fubar(1, 2))._foo // 1
```

###  new命令原理
- 创建一个空对象，作为将要返回的对象实例
- 将这个空对象的原型，指向构造函数的prototype属性
- 将这个空对象赋值给函数内部的this关键字
- 开始执行构造函数内部的代码
- 如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。

```
var Vehicle = function () {
  this.price = 1000;
  return 1000;
};

(new Vehicle()) === 1000
```

- 如果return语句返回的是一个跟this无关的新对象，new命令会返回这个新对象，而不是this对象。

```
var Vehicle = function (){
  this.price = 1000;
  return { price: 2000 };
};

(new Vehicle()).price
// 2000
```
- 如果对普通函数（内部没有this关键字的函数）使用new命令，则会返回一个空对象。

```
function getMessage() {
  return 'this is a message';
}

var msg = new getMessage();

msg // {}
typeof msg // "Object"
```
