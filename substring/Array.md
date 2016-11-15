### call apply
- obj.call(thisObj, arg1, arg2, ...);
- obj.apply(thisObj, [arg1, arg2, ...]);
- 两者作用一致，都是把obj(即this)绑定到thisObj，这时候thisObj具备了obj的属性和方法。或者说thisObj『继承』了obj的属性和方法。
- 唯一区别是apply接受的是数组参数，call接受的是连续参数。
- call和apply是为了动态改变this而出现的，当一个object没有某个方法，但是其他的有，我们可以借助call或apply用其它对象的方法来操作。
- 用的比较多的，通过document.getElementsByTagName选择的dom 节点是一种类似array的array。它不能应用Array下的push,pop等方法。我们可以通过：
- var domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));*
这样domNodes就可以应用Array下的所有方法了。


### sort()
- sort方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变

```
[4, 3, 2, 1].sort()
// [1, 2, 3, 4]

[11, 101].sort()
// [101, 11]
```

- sort方法按照自定义方式排序

```
[
  { name: "张三", age: 30 },
  { name: "李四", age: 24 },
  { name: "王五", age: 28  }
].sort(function (o1, o2) {
  return o1.age - o2.age;
})

[
   { name: "李四", age: 24 },
   { name: "王五", age: 28  },
   { name: "张三", age: 30 }
 ]
```
### map方法
- map方法对数组的所有成员依次调用一个函数，根据函数结果返回一个新数组。

```
[1, 2, 3].map(function(elem, index, arr) {
  return elem * index;
});

 [0, 2, 6]
```

- map方法不仅可以用于数组，还可以用于字符串，用来遍历字符串的每个字符。但是，不能直接使用，而要通过函数的call方法间接使用，或者先将字符串转为数组，然后使用。

```
var upper = function (x) {
  return x.toUpperCase();
};

[].map.call('abc', upper)
// [ 'A', 'B', 'C' ]

// 或者
'abc'.split('').map(upper)
// [ 'A', 'B', 'C' ]

```
- map方法还可以接受第二个参数，表示回调函数执行时this所指向的对象。map方法不会跳过undefined和null，但是会跳过空位。

```
var arr = ['a', 'b', 'c'];

[1, 2].map(function(e){
  return this[e];
}, arr)

 ['b', 'c']
```
### forEach()
- orEach方法与map方法很相似，也是遍历数组的所有成员，执行某种操作，但是forEach方法一般不返回值，只用来操作数据。如果需要有返回值，一般使用map方法。
- forEach方法也可以接受第二个参数，用来绑定回调函数的this关键字。
- forEach方法无法中断执行，总是会将所有成员遍历完。

```
var obj = {
  name: '张三',
  times: [1, 2, 3],
  print: function () {
    this.times.forEach(function (n) {
      console.log(this.name);
    }, this);
  }
};

obj.print()
使用forEach方法的第二个参数固定this
```

- forEach方法也可以用于类似数组的对象和字符串。
```
var str = 'hello';
Array.prototype.forEach.call(str, function (elem, i) {
  console.log( i + ':' + elem);
});
```


### fliter()
- filter方法的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。
```
[1, 2, 3, 4, 5].filter(function (elem, index, arr) {
  return index % 2 === 0;
});
// [1, 3, 5]
```

- filter方法还可以接受第二个参数，指定测试函数所在的上下文对象（即this对象）。

```
var Obj = function () {
  this.MAX = 3;
};

var myFilter = function (item) {
  if (item > this.MAX) {
    return true;
  }
};

var arr = [2, 8, 3, 4, 1, 3, 2, 9];
arr.filter(myFilter, new Obj())
// [8, 4, 9]
```

### some()，every()
- some方法是只要有一个数组成员的返回值是true，则整个some方法的返回值就是true，否则false。

```
var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem >= 3;
});
```
### reduce()，reduceRight()
- reduce方法和reduceRight方法依次处理数组的每个成员，最终累计为一个值。
```
这两个方法的第一个参数都是一个函数。该函数接受以下四个参数。
累积变量，默认为数组的第一个成员
当前变量，默认为数组的第二个成员
当前位置（从0开始）
原数组
```
- sinple-example
```
[1, 2, 3, 4, 5].reduce(function(x, y){
  return x + y;
}, 10);
第一轮执行，x是数组的第一个成员，y是数组的第二个成员。从第二轮开始，x为上一轮的返回值，y为当前数组成员，直到遍历完所有成员，返回最后一轮计算后的x,
上面代码指定参数x的初值为10，所以数组从10开始累加，最终结果为25,第二个参数相当于设定了默认值，处理空数组时尤其有用
function add(prev, cur) {
  return prev + cur;
}
[].reduce(add, 1)
// 1
```

- 数组求和

```
Array.prototype.sum = function (){
  return this.reduce(function (partial, value) {
    return partial + value;
  })
};

[3, 4, 5, 6, 10].sum()
```

- reduce 和　reduceRight区别
```
function substract(prev, cur) {
  return prev - cur;
}

[3, 2, 1].reduce(substract) // 0
[3, 2, 1].reduceRight(substract) // -4
```

- 找出长度最长的数组元素。
```
function findLongest(entries) {
  return entries.reduce(function (longest, entry) {
    return entry.length > longest.length ? entry : longest;
  }, '');
}

findLongest(['aaa', 'bb', 'c']) // "aaa"
```

### indexof lastindexof
- indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。




### 数组的链式操作

```
var users = [
  {name: 'tom', email: 'tom@example.com'},
  {name: 'peter', email: 'peter@example.com'}
];

users
.map(function (user) {
  return user.email;
})
.filter(function (email) {
  return /^t/.test(email);
})
.forEach(alert);
// 弹出tom@example.com

```
