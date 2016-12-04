### 函数的变量提升
- 与全局作用域一样，函数作用域内部也会产生“变量提升”现象。var命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。

```
function foo(x) {
  if (x > 100) {
    var tmp = x - 100;
  }
}


function foo(x) {
  var tmp;
  if (x > 100) {
    tmp = x - 100;
  };
}

```
###  函数本身的作用域
- 函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关
- 闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。
```
var a = 1;
var x = function () {
  console.log(a);
};

function f() {
  var a = 2;
  x();
}

f() // 1
```
***函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域。***

```
function foo() {
  var x = 1;
  function bar() {
    x++;
    console.log(x);
  }
  return bar;
}

var x = 2;
var f = foo();
f()
f()
f()
console.log(x)
```

### 参数
- 参数的省略
  - 如果一定要省略靠前的参数，只有显式传入undefined。

```
function f(a, b) {
  return a;
}

f( , 1) // SyntaxError: Unexpected token ,(…)
f(undefined, 1) // undefined
```

- 默认值

```
function f(a) {
  (a !== undefined && a !== null) ? a = a : a = 1;
  return a;
}

f() // 1
f('') // ""
f(0) // 0
```

### 传递方式
- 传值传递：原始类型的值（数值、字符串、布尔值），在函数体内修改参数值，不会影响到函数外部。

```
var p = 2;

function f(p) {
  p = 3;
}
f(p)
p // 2
```

- 传址传递：函数参数是复合类型的值（数组、对象、其他函数）,在函数内部修改参数，将会影响到原始值,但是函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。

```
var obj = {p: 1};

function f(o) {
  o.p = 2;
}
f(obj);

obj.p // 2



var obj = [1, 2, 3];

function f(o){
  o = [2, 3, 4];
}
f(obj);

obj // [1, 2, 3]
```

- 如果需要对某个原始类型的变量，获取传址传递的效果，可以将它写成全局对象的属性

```
var a = 1;

function f(p) {
  window[p] = 2;
}
f('a');

a // 2
上面代码中，变量a本来是传值传递，但是写成window对象的属性，就达到了传址传递的效果。
```

## arguments对象
- arguments对象除了可以读取参数，还可以为参数赋值（严格模式不允许这种用法）。
- 可以通过arguments对象的length属性，判断函数调用时到底带几个参数

```
var f = function(a, b) {
  arguments[0] = 3;
  arguments[1] = 2;
  return a + b;
}

f(1, 1)
// 5
```

- 虽然arguments很像数组，但它是一个对象。数组专有的方法（比如slice和forEach），不能在arguments对象上直接使用
- 可以通过apply方法，把arguments作为参数传进去，这样就可以让arguments使用数组方法了。

```
// 用于apply方法
myfunction.apply(obj, arguments).

// 使用与另一个数组合并
Array.prototype.concat.apply([1,2,3], arguments)
```
- 将arguments转为真正的数组 ：slice方法和逐一填入新数组。
- callee属性: arguments对象带有一个callee属性，返回它所对应的原函数。可以通过arguments.callee，达到调用函数自身的目的。这个属性在严格模式里面是禁用的，因此不建议使用。

### 闭包(定义在一个函数内部的函数，能够读取其他函数内部变量的函数)
- JavaScript有两种作用域：全局作用域和函数作用域。函数内部可以直接读取全局变量。
-　链式作用域:子对象会一级一级地向上寻找所有父对象的变量
- 闭包最大的特点，就是它可以“记住”诞生的环境
- 闭包的最大用处有两个，一个是*可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。

```
function createIncrementor(start) {
  return function () {
    return start++;
  };
}

var inc = createIncrementor(5);

inc() // 5
inc() // 6
inc() // 7
start是函数createIncrementor的内部变量。通过闭包，start的状态被保留了，每一次调用都是在上一次调用的基础上进行计算。闭包inc使得函数createIncrementor的内部环境，一直存在,不会在调用结束后，被垃圾回收机制回收
```

- 封装对象的私有属性和私有方法

```
function Person(name) {
  var _age;
  function setAge(n) {
    _age = n;
  }
  function getAge() {
    return _age;
  }

  return {
    name: name,
    getAge: getAge,
    setAge: setAge
  };
}

var p1 = Person('张三');
p1.setAge(25);
p1.getAge() // 25
```

***注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。***

### 立即调用的函数表达式（IIFE）

```
function(){ /* code */ }();
// SyntaxError: Unexpected token (
```
- 如果function关键字出现在行首，一律解释成语句。因此，JavaScript引擎看到行首是function关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。
```
(function(){ /* code */ }());
// 或者
(function(){ /* code */ })();
最后的分号都是必须的
```
- 匿名函数：一是不必为函数命名，避免了污染全局变量；二是IIFE内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量

```
// 写法一
var tmp = newData;
processData(tmp);
storeData(tmp);


// 写法二
(function (){
  var tmp = newData;
  processData(tmp);
  storeData(tmp);
}());
写法二比写法一更好，因为完全避免了污染全局变量。
```

### eval
- eval命令的作用是，将字符串当作语句执行。
- eval没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。

```
var a = 1;
eval('a = 2');

a // 2
```

- JavaScript规定，如果使用严格模式，eval内部声明的变量，不会影响到外部作用域。

```
(function f() {
  'use strict';
  eval('var foo = 123');
  console.log(foo);  // ReferenceError: foo is not defined
})()
上面代码中，函数f内部是严格模式，这时eval内部声明的foo变量，就不会影响到外部。


(function f() {
  'use strict';
  var foo = 1;
  eval('foo = 2');
  console.log(foo);  // 2
})()
上面代码中，严格模式下，eval内部还是改写了外部变量，可见安全风险依然存在。
```

***eval最常见的场合是解析JSON数据字符串，不过正确的做法应该是使用浏览器提供的JSON.parse方法***

- 直接调用（立即执行），这种情况下eval的作用域就是当前作用域。除此之外的调用方法，都叫“间接调用”，此时eval的作用域总是全局作用域

```
var a = 1;

function f() {
  var a = 2;
  var e = eval;
  e('console.log(a)');
}

f() // 1
```
