# 运算符
[more](http://javascript.ruanyifeng.com/grammar/operator.html)
### 加法运算符
- 算法步骤

```
1.如果运算子是对象，先自动转成原始类型的值（即先执行该对象的valueOf方法，如果结果还不是原始类型的值，再执行toString方法；如果对象是Date实例，则先执行toString方法）。
2.两个运算子都是原始类型的值以后，只要有一个运算子是字符串，则两个运算子都转为字符串，执行字符串连接运算。
否则，两个运算子都转为数值，执行加法运算
```

```
'3' + 4 + 5 // "345"
3 + 4 + '5' // "75"

[1, 2] + [3]
// "1,23"

// 等同于
String([1, 2]) + String([3])
[]

// '1,2' + '3'
---
1 - '2' // -1
1 * '2' // 2
1 / '2' // 0.5

var now = new Date();
typeof (now + 1) // "string"
typeof (now - 1) // "number"
```

### 算术运算符

```
加法运算符（Addition）：x + y
减法运算符（Subtraction）： x - y
乘法运算符（Multiplication）： x * y
除法运算符（Division）：x / y
余数运算符（Remainder）：x % y
自增运算符（Increment）：++x 或者 x++
自减运算符（Decrement）：--x 或者 x--
----

var x = 1;
var y = 1;

x++ // 1
++y // 2
自增和自减运算符有一个需要注意的地方，就是放在变量之后，会先返回变量操作前的值，再进行自增/自减操作；放在变量之前，会先进行自增/自减操作，再返回变量操作后的值。
----

数值运算符（Convert to number）： +x
负数值运算符（Negate）：-x
```

### 数值运算符和负数值运算符

```
+true // 1
+[] // 0
+{} // NaN
```

### 赋值运算符

```
x += y // 等同于 x = x + y
x -= y // 等同于 x = x - y
x *= y // 等同于 x = x * y
x /= y // 等同于 x = x / y
x %= y // 等同于 x = x % y
x >>= y // 等同于 x = x >> y
x <<= y // 等同于 x = x << y
x >>>= y // 等同于 x = x >>> y
x &= y // 等同于 x = x & y
x |= y // 等同于 x = x | y
x ^= y // 等同于 x = x ^ y
```

### 比较运算符

```
如果两个运算子都是字符串，则按照字典顺序比较（实际上是比较Unicode码点）。
否则，将两个运算子都转成数值，再进行比较（等同于先调用Number函数）。
字符串按照字典顺序进行比较。
```

```
[2] > [1] // true
// 等同于 [2].valueOf().toString() > [2].valueOf().toString()
// 即 '2' > '1'

[2] > [11] // true
// 等同于 [2].valueOf().toString() > [11].valueOf().toString()
// 即 '2' < '11'

{x: 2} >= {x: 1} // true
// 等同于 {x: 2}.valueOf().toString() >= {x: 1}.valueOf().toString()
// 即 '[object Object]' >= '[object Object]'
```

### 严格相等运算符
- NaN与任何值都不相等（包括自身）。另外，正0等于负0。
- 两个复合类型（对象、数组、函数）的数据比较时，不是比较它们的值是否相等，而是比较它们是否指向同一个对象。

```
{} === {} // false
[] === [] // false
(function (){} === function (){}) // false
原因是对于复合类型的值，严格相等运算比较的是，它们是否引用同一个内存地址，而运算符两边的空对象、空数组、空函数的值，都存放在不同的内存地址，结果当然是false

var v1 = {};
var v2 = v1;
v1 === v2 // true
如果两个变量引用同一个对象，则它们相等。

对于两个对象的比较，严格相等运算符比较的是地址，而大于或小于运算符比较的是值。
new Date() > new Date() // false
new Date() < new Date() // false
new Date() === new Date() // false
```
- undefined === undefined // true
- null === null // true
- 对象（这里指广义的对象，包括数组和函数）与原始类型的值比较时，对象转化成原始类型的值，再进行比较。
- undefined和null与其他类型的值比较时，结果都为false，它们互相比较时结果为true。

### 布尔运算符

```
取反运算符：!
且运算符：&&
或运算符：||
三元运算符：?:
```
### 位运算符
位运算符用于直接对二进制位进行计算，一共有7个。
这些位运算符直接处理每一个比特位（bit），所以是非常底层的运算，好处是速度极快，缺点是很不直观，许多场合不能使用它们，否则会使代码难以理解和查错

```
或运算（or）：符号为|，表示若两个二进制位都为0，则结果为0，否则为1。

与运算（and）：符号为&，表示若两个二进制位都为1，则结果为1，否则为0。

否运算（not）：符号为~，表示对一个二进制位取反。

```
或运算”的规则是，两个二进制位之中只要有一个为1，就返回1，否则返回0。“与运算”的规则是，两个二进制位之中只要有一个位为0，就返回0，否则返回1。
```
异或运算（xor）：符号为^，表示若两个二进制位不相同，则结果为1，否则为0。

左移运算（left shift）：符号为<<，详见下文解释。

右移运算（right shift）：符号为>>，详见下文解释。

带符号位的右移运算（zero filled right shift）：符号为>>>
```

### 异或运算
- “异或运算”在两个二进制位不同时返回1，相同时返回0

```
0 ^ 3 // 3
上面表达式中，0的二进制形式是00，3的二进制形式是11，它们每一个二进制位都不同，所以得到11
```

```
异或运算也可以用来取整。
12.9 ^ 0 // 12
```
###  左移运算符
- 左移运算符表示将一个数的二进制值向左移动指定的位数，尾部补0，即乘以2的指定次方（最高位即符号位不参与移动）。

```
// 4 的二进制形式为100，
// 左移一位为1000（即十进制的8）
// 相当于乘以2的1次方
4 << 1
// 8

-4 << 1
// -8
```
- 如果左移0位，就相当于将该数值转为32位整数，等同于取整，对于正数和负数都有效。

```
13.5 << 0
// 13

-13.5 << 0
// -13
```
### 将rgb转换为二进制
```
var color = {r: 186, g: 218, b: 85};

// RGB to HEX
// (1 << 24)的作用为保证结果是6位数
var rgb2hex = function(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .substr(1);
}

var rgb2hex = function(r, g, b) {
return ( "#"+r.toString(16)+g.toString(16)+b.toString(16))
}

rgb2hex(color.r,color.g,color.b)
// "#bada55"
```
### 右移运算符
- 右移运算符表示将一个数的二进制值向右移动指定的位数，头部补0，即除以2的指定次方（最高位即符号位不参与移动）。
### 带符号位的右移运算符（»>）
### 开关作用
- 位运算符可以用作设置对象属性的开关。

### void运算符
- void运算符的作用是执行一个表达式，然后不返回任何值，或者说返回undefined。
-这个运算符主要是用于书签工具（bookmarklet），以及用于在超级链接中插入代码，目的是返回undefined可以防止网页跳转
```
var x = 3;
void (x = 5) //undefined
x // 5
```

```
<a href="javascript:void window.open('http://example.com/')">
  点击打开新窗口
</a>

<a href="http://example.com" onclick="f();">文字</a>
上面代码有一个问题，函数f必须返回false，或者说onclick事件必须返回false，否则会引起浏览器跳转到example.com。
function f() {
  // some code
  return false;
}

void运算符可以取代上面两种写法。
<a href="javascript: void(f())">文字</a>
```

## 运算顺序
- 这五个运算符的优先级从高到低依次为：小于等于（<=)、严格相等（===）、或（||）、三元（?:）、等号（=）。

### 圆括号的作用
- 圆括号（()）可以用来提高运算的优先级，因为它的优先级是最高的，即圆括号中的表达式会第一个运算。
- 圆括号不是运算符，而是一种语法结构。它一共有两种用法：一种是把表达式放在圆括号之中，提升运算的优先级；另一种是跟在函数的后面，作用是调用函数。
- 函数放在圆括号中，会返回函数本身。如果圆括号紧跟在函数的后面，就表示调用函数。

## 左结合与右结合

```
大多数情况，计算顺序总是从左到右，这叫做运算符的“左结合”（left-to-right associativity），即从左边开始计算。
x + y + z

但是少数运算符的计算顺序是从右到左，即从右边开始计算，这叫做运算符的“右结合”（right-to-left associativity）。其中，最主要的是赋值运算符（=）和三元条件运算符（?:）
w = x = y = z;
q = a ? b : c ? d : e ? f : g;

just like:
  w = (x = (y = z));
  q = a ? b : (c ? d : (e ? f : g));
上面的两行代码，各有三个等号运算符和三个三元运算符，都是先计算最右边的那个运算符。
```
