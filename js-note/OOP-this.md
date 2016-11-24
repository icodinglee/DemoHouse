## this
### this　含义
- 首先，this总是返回一个对象，简单说，就是返回属性或方法“当前”所在的对象

```
var person = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.name;
  }
};

person.describe()
// "姓名：张三"
上面代码中，this.name表示describe方法所在的当前对象的name属性。调用person.describe方法时，describe方法所在的当前对象是person，所以就是调用person.name。
```
- 由于对象的属性可以赋给另一个对象，所以属性所在的当前对象是可变的，即this的指向是可变的

```
var A = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.name;
  }
};

var B = {
  name: '李四'
};

B.describe = A.describe;
B.describe()
// "姓名：李四"
－－－－－－－－－－－－－－－－－－－－－－－－－－

改写一下
function f() {
  return '姓名：'+ this.name;
}

var A = {
  name: '张三',
  describe: f
};

var B = {
  name: '李四',
  describe: f
};

A.describe() // "姓名：张三"
B.describe() // "姓名：李四"
上面代码中，函数f内部使用了this关键字，随着f所在的对象不同，this的指向也不同。
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

只要函数被赋给另一个变量，this的指向就会变。
var A = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.name;
  }
};

var name = '李四';
var f = A.describe;
f() // "姓名：李四"
```

- 如果一个函数在全局环境中运行，那么this就是指顶层对象（浏览器中为window对象）。

```
function f() {
  return this;
}

f() === window // true
```

## 使用场合
- 全局环境:在全局环境使用this，它指的就是顶层对象window

```
this === window // true

function f() {
  console.log(this === window); // true
}
```

- 构造函数:构造函数中的this，指的是实例对象

```
var Obj = function (p) {
  this.p = p;
};

Obj.prototype.m = function() {
  return this.p;
};

var o = new Obj('Hello World!');

o.p // "Hello World!"
o.m() // "Hello World!"
```

- 对象的方法:当A对象的方法被赋予B对象，该方法中的this就从指向A对象变成了指向B对象。

```
var obj ={
  foo: function () {
    console.log(this);
  }
};

obj.foo() // obj

// 情况一
(obj.foo = obj.foo)() // window

// 情况二
(false || obj.foo)() // window

// 情况三
(1, obj.foo)() // window

在JavaScript引擎内部，obj和obj.foo储存在两个内存地址，简称为M1和M2。只有obj.foo()这样调用时，是从M1调用M2，因此this指向obj。但是，上面三种情况，都是直接取出M2进行运算，然后就在全局环境执行运算结果（还是M2），因此this指向全局环境。
```

- 如果某个方法位于多层对象的内部，这时为了简化书写，把该方法赋值给一个变量，往往会得到意料之外的结果。

```
var a = {
  b: {
    m: function() {
      console.log(this.p);
    },
    p: 'Hello'
  }
};

var hello = a.b.m;
hello() // undefined

为了避免这个问题，可以只将m所在的对象赋值给hello，这样调用时，this的指向就不会变。
var hello = a.b;
hello.m() // Hello
```


- Node:在Node中，this的指向又分成两种情况。全局环境中，this指向全局对象global；模块环境中，this指向module.exports。

```
// 全局环境
this === global // true

// 模块环境
this === module.exports // true
```
### 注意事项
- 避免多层this

```

var o = {
  f1: function () {
    console.log(this);
    var f2 = function () {
      console.log(this);
    }();
  }
}

o.f1()
// Object
// Window
-----------------------------
var o = {
  f1: function() {
    console.log(this);
    var that = this;
    var f2 = function() {
      console.log(that);
    }();
  }
}

o.f1()
// Object
// Object
```
- JavaScript 提供了严格模式，也可以硬性避免这种问题。在严格模式下，如果函数内部的this指向顶层对象

```
var counter = {
  count: 0
};
counter.inc = function () {
  'use strict';
  this.count++
};
var f = counter.inc;
f()
// TypeError: Cannot read property 'count' of undefined
```

- 避免数组处理方法中的this:数组的map和foreach方法，允许提供一个函数作为参数。这个函数内部不应该使用this。

```
var o = {
  v: 'hello',
  p: [ 'a1', 'a2' ],
  f: function f() {
    this.p.forEach(function (item) {
      console.log(this.v + ' ' + item);
    });
  }
}

o.f()
// undefined a1
// undefined a2

上面代码中，foreach方法的回调函数中的this，其实是指向window对象，因此取不到o.v的值。原因跟上一段的多层this是一样的，就是内层的this不指向外部，而指向顶层对象。
-----------------------------
解决方式有两种：
一：使用中间变量。
var o = {
  v: 'hello',
  p: [ 'a1', 'a2' ],
  f: function f() {
    var that = this;
    this.p.forEach(function (item) {
      console.log(that.v+' '+item);
    });
  }
}

o.f()
// hello a1
// hello a2
二：将this当作foreach方法的第二个参数，固定它的运行环境
var o = {
  v: 'hello',
  p: [ 'a1', 'a2' ],
  f: function f() {
    this.p.forEach(function (item) {
      console.log(this.v + ' ' + item);
    }, this);
  }
}

o.f()
// hello a1
// hello a2
```
- 避免回调函数中的this

```
var o = new Object();

o.f = function () {
  console.log(this === o);
}

o.f() // true
上面代码表示，如果调用o对象的f方法，其中的this就是指向o对象
```

## 绑定this的方法：JavaScript提供了call、apply、bind这三个方法，来切换/固定this的指向。

### function.prototype.call():函数实例的call方法，可以指定函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。


```
func.apply(thisValue, arg1, arg2)
```


```
var obj = {};

var f = function () {
  return this;
};

f() === this // true
f.call(obj) === obj // true
上面代码中，在全局环境运行函数f时，this指向全局环境；call方法可以改变this的指向，指定this指向对象obj，然后在对象obj的作用域中运行函数f。
```
- call方法的参数，应该是一个对象。如果参数为空、null和undefined，则默认传入全局对象。

```
var n = 123;
var obj = { n: 456 };

function a() {
  console.log(this.n);
}

a.call() // 123
a.call(null) // 123
a.call(undefined) // 123
a.call(window) // 123
a.call(obj) // 456
```
- 如果call方法的参数是一个原始值，那么这个原始值会自动转成对应的包装对象，然后传入call方法。

```
var f = function () {
  return this;
};

f.call(5)
// Number {[[PrimitiveValue]]: 5}
```
- call方法还可以接受多个参数:call的第一个参数就是this所要指向的那个对象，后面的参数则是函数调用时所需的参数。

```
function add(a, b) {
  return a + b;
}

add.call(this, 1, 2) // 3
```

- call方法的一个应用是调用对象的原生方法

```
var obj = {};
obj.hasOwnProperty('toString') // false

// 覆盖掉继承的 hasOwnProperty 方法
obj.hasOwnProperty = function () {
  return true;
};
obj.hasOwnProperty('toString') // true

Object.prototype.hasOwnProperty.call(obj, 'toString') // false
```
### function.prototype.apply()

```
func.apply(thisValue, [arg1, arg2, ...])
```
- apply方法的第一个参数也是this所要指向的那个对象，如果设为null或undefined，则等同于指定全局对象。第二个参数则是一个数组，该数组的所有成员依次作为参数，传入原函数。原函数的参数，在call方法中必须一个个添加，但是在apply方法中，必须以数组形式添加。

```
function f(x,y){
  console.log(x+y);
}

f.call(null,1,1) // 2
f.apply(null,[1,1]) // 2
```
- 找出数组最大数字

```
var a = [10, 2, 4, 15, 9];

Math.max.apply(null, a)
// 15
```
- 将数组转化为undefined

```
Array.apply(null, ["a",,"b"])
// [ 'a', undefined, 'b' ]
```
- 通过apply方法，利用Array构造函数将数组的空元素变成undefined。

```
Array.apply(null, ["a",,"b"])
// [ 'a', undefined, 'b' ]
```

- 转换类似数组的对象:利用数组对象的slice方法，可以将一个类似数组的对象（比如arguments对象）转为真正的数组。

```
Array.prototype.slice.apply({0:1,length:2})
// [1, undefined]
```
- 绑定回调函数的对象

```
var o = new Object();

o.f = function () {
  console.log(this === o);
}

var f = function (){
  o.f.apply(o);
  // 或者 o.f.call(o);
};

$('#button').on('click', f);

更简单的是使用bind方法
```

### function.prototype.bind():bind方法用于将函数体内的this绑定到某个对象，然后返回一个新函数

```
var counter = {
  count: 0,
  inc: function () {
    this.count++;
  }
};

counter.count // 0
counter.inc()
counter.count // 1

----------------------------------
var counter = {
  count: 0,
  inc: function () {
    this.count++;
  }
};

var func = counter.inc;
func();
counter.count // 0
count // NaN

上面代码中，函数func是在全局环境中运行的，这时inc内部的this指向顶层对象window，所以counter.count是不会变的，反而创建了一个全局变量count。因为window.count原来等于undefined，进行递增运算后undefined++就等于NaN。

为了解决这个问题，可以使用this方法，将inc内部的this绑定到counter对象。
var func = counter.inc.bind(counter);
func();
counter.count // 1

绑定到其他对象
var obj = {
  count: 100
};
var func = counter.inc.bind(obj);
func();
obj.count // 101
```
- bind比call方法和apply方法更进一步的是，除了绑定this以外，还可以绑定原函数的参数。

```
var add = function (x, y) {
  return x * this.m + y * this.n;
}

var obj = {
  m: 2,
  n: 2
};

var newAdd = add.bind(obj, 5);

newAdd(5)
// 20

上面代码中，bind方法除了绑定this对象，还将add函数的第一个参数x绑定成5，然后返回一个新函数newAdd，这个函数只要再接受一个参数y就能运行了。

如果bind方法的第一个参数是null或undefined，等于将this绑定到全局对象，函数运行时this指向顶层对象（在浏览器中为window）。
```
##### bind  注意事项
- （1）每一次返回一个新函数
bind方法每运行一次，就返回一个新函数，这会产生一些问题。比如，监听事件的时候，不能写成下面这样。

```
element.addEventListener('click', o.m.bind(o));
上面代码中，click事件绑定bind方法生成的一个匿名函数。这样会导致无法取消绑定

---
正确的方法：
var listener = o.m.bind(o);
element.addEventListener('click', listener);
//  ...
element.removeEventListener('click', listener);
```

- （2）结合回调函数使用

```
var counter = {
  count: 0,
  inc: function () {
    'use strict';
    this.count++;
  }
};

function callIt(callback) {
  callback();
}
callIt(counter.inc.bind(counter));
counter.count // 1
```
- 结合call使用：利用bind方法，可以改写一些JavaScript原生方法的使用形式，以数组的slice方法为例

```
Array.prototype.slice.call([1, 2, 3], 0, 1)
// [1]

var slice = Function.prototype.call.bind(Array.prototype.slice);
slice([1, 2, 3], 0, 1) // [1]

----------------------------------------------------------------
function f() {
  console.log(this.v);
}

var o = { v: 123 };

var bind = Function.prototype.call.bind(Function.prototype.bind);

bind(f, o)() // 123
上面代码表示，将Function.prototype.call方法绑定Function.prototype.bind以后，bind方法的使用形式从f.bind(o)，变成了bind(f, o)

```
