# Date对象
- Date对象是JavaScript提供的日期和时间的操作接口。它可以表示的时间范围是，1970年1月1日00:00:00前后的各1亿天（单位为毫秒）。

```
var today = new Date();

today
// "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"

// 等同于
today.toString()
// "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"
```
### new Date(milliseconds)
```
// 1970年1月2日的零时
var Jan02_1970 = new Date(3600 * 24 * 1000);
// Fri Jan 02 1970 08:00:00 GMT+0800 (CST)
```

### new Date(datestring)
```
new Date('January 6, 2013');
 Sun Jan 06 2013 00:00:00 GMT+0800 (CST)
```

### new Date(year, month [, day, hours, minutes, seconds, ms])
```
var time=new Date(1995,7,26,18,18,18)

1 Sat Aug 26 1995 18:18:18 GMT+0800 (CST)
```

## 日期的运算

```
var d1 = new Date(2000, 2, 1);
var d2 = new Date(2000, ２, ２);

d2 - d1
// 86400000＝60*60*1000*24
```
## Date对象的静态方法
- Date.now() 返回当前距离1970年1月1日 00:00:00 UTC的毫秒数
- Date.parse('January 26, 2011 13:51:50')  解析日期字符串，返回距离1970年1月1日 00:00:00的毫秒数。
## Date实例对象的方法
#### to类__从Date对象返回一个字符串，表示指定的时间。
  ```
  var d = new Date(2013, 0, 1);

  d.toString()
  // "Tue Jan 01 2013 00:00:00 GMT+0800 (CST)"
  ```
### get类__获取Date对象的日期和时间
- getTime()：返回距离1970年1月1日00:00:00的毫秒数，等同于valueOf方法。
- getDate()：返回实例对象对应每个月的几号（从1开始）。
- getDay()：返回星期几，星期日为0，星期一为1，以此类推
- getYear()：返回距离1900的年数
- getFullYear()：返回四位的年份。
- getMonth()：返回月份（0表示1月，11表示12月）。
- getHours()：返回小时（0-23）。
- getMilliseconds()：返回毫秒（0-999）。
- getMinutes()：返回分钟（0-59）
- getSeconds()：返回秒（0-59）。

**所有这些get*方法返回的都是整数，不同方法返回值的范围不一样**
- 分钟和秒：0 到 59
- 小时：0 到 23
- 星期：0（星期天）到 6（星期六）
- 日期：1 到 31
- 月份：0（一月）到 11（十二月）
- 年份：距离1900年的年数

```
var d = new Date('January 6, 2013');

d.getDate() // 6
d.getMonth() // 0
d.getYear() // 113
d.getFullYear() // 2013
d.getTimezoneOffset() // -480
```

#### 计算本年还有多少天

```
function leftDays() {
  var today = new Date();
  var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
  var msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((endYear.getTime() - today.getTime()) / msPerDay);
}
```
### set类__设置Date对象的日期和时间。
（方法类型和get类似）
- Date对象提供了一系列set*方法，用来设置实例对象的各个方面。
- set*方法的参数都会自动折算。以setDate为例，如果参数超过当月的最大天数，则向下一个月顺延，如果参数是负数，表示从上个月的最后一天开始减去的天数。
- set类方法和get类方法，可以结合使用，得到相对时间。

[参考地址](http://javascript.ruanyifeng.com/stdlib/date.html)
