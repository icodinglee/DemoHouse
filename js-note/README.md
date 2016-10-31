## js note
#### what js can do?
```
1.增强页面动态效果(如:下拉菜单、图片轮播、信息滚动等)

2.实现页面与用户之间的实时、动态交互(如:用户注册、登陆验证等)
```
### rules for naming variables
```
  1.必须以字母、下划线或美元符号开头，后面可以跟字母、下划线、美元符号和数字
  2.变量名区分大小写
  3.不允许使用JavaScript关键字和保留字做变量名,不能包含空格。
```
wrong useage
```
 6num  //开头不能用数字
 %sum //开头不能用除(_ $)外特殊符号,如(%  + /等)
 sum+num //开头中间不能使用除(_ $)外特殊符号，如(%  + /等)
```
```
 变量声明var num,
 自加一：num++
 自减一：num--
```
```
 逻辑运算符
 且＆＆　
 或||
 非！
 操作符之间的优先顺序：算术操作符 → 比较操作符 → 逻辑操作符 → "="赋值符号
```
## Array
```
创建数组，存储8个数据 var myarray= new Array(8)
注意：
1.创建的新数组是空数组，没有值，如输出，则显示undefined。
2.虽然创建数组时，指定了长度，但实际上数组都是变长
，也就是说即使指定了长度为8，仍然可以将元素存储在规定长度以外
```
向数组中增加一个元素
```
myarray[5]=88;
```
## if else if  else
swithch 语句
```
var day=new Date().getDay();
switch (day)
{
case 0:
  x="Today it's Sunday";
  break;
case 1:
  x="Today it's Monday";
  break;
case 2:
  x="Today it's Tuesday";
  break;
case 3:
  x="Today it's Wednesday";
  break;
case 4:
  x="Today it's Thursday";
  break;
case 5:
  x="Today it's Friday";
  break;
case 6:
  x="Today it's Saturday";
  break;
default:
  x="Looking forward to the Weekend";
}
```
while 循环
```
和for循环有相同功能的还有while循环, while循环重复执行一段代码，直到某个条件不再满足。

<script type="text/javascript">
var num=0;  //初始化值
while (num<=6)   //条件判断
{
  document.write("取出第"+num+"个球<br />");
  num=num+1;  //条件值更新
}
</script>
```
