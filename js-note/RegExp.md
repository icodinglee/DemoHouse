# 正则表达式

```
- var regex = /xyz/;
- var regex = /xyz/;
```

- 正则对象的方法：将字符串作为参数，比如regex.test(string)。
- 字符串对象的方法：将正则对象作为参数，比如string.match(regex)

## 正则对象的属性和方法
- 一类是修饰符相关，返回一个布尔值，表示对应的修饰符是否设置

```
ignoreCase：返回一个布尔值，表示是否设置了i修饰符，该属性只读。
global：返回一个布尔值，表示是否设置了g修饰符，该属性只读。
multiline：返回一个布尔值，表示是否设置了m修饰符，该属性只读。

var r = /abc/igm;

r.ignoreCase // true
r.global // true
r.multiline // true
```
- 另一类是与修饰符无关的属性，主要是下面两个。

```
lastIndex：返回下一次开始搜索的位置。该属性可读写，但是只在设置了g修饰符时有意义。
source：返回正则表达式的字符串形式（不包括反斜杠），该属性只读

var r = /abc/igm;

r.lastIndex // 0
r.source // "abc"
```

## test()
- 正则对象的test方法返回一个布尔值，表示当前模式是否能匹配参数字符串。
