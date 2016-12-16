# D3.js

## 选择
- datum()：绑定一个数据到选择集上
- data()：绑定一个数组到选择集上，数组的各项值分别与选择集的各元素绑定
- d3.select()：是选择所有指定元素的第一个
- d3.selectAll()：是选择指定元素的全部

## 插入　删除
- append()：在选择集末尾插入元素
- insert()：在选择集前面插入元素
- remove();删除元素

## svg
- SVG 绘制的是矢量图，因此对图像进行放大不会失真。
- 基于 XML，可以为每个元素添加 JavaScript 事件处理器。
- 每个图形均视为对象，更改对象的属性，图形也会改变。
- 不适合游戏应用。

## Canvas
- 绘制的是位图，图像放大后会失真。
- 不支持事件处理器。
- 能够以 .png 或 .jpg 格式保存图像
- 适合游戏应用

## 比例尺(将某一区域的值映射到另一区域，其大小关系不变。)
- 线性比例尺
- 序数比例尺

## 动态　——过渡（D3 提供了 4 个方法用于实现图形的过渡：从状态 A 变为状态 B）

- transition() 启动过渡效果。 其前后是图形变化前后的状态（形状、位置、颜色等等）
```
.attr("fill","red")         //初始颜色为红色
.transition()               //启动过渡
.attr("fill","steelblue")   //终止颜色为铁蓝色
```
- duration() 过渡的持续时间

```
linear：普通的线性变化
circle：慢慢地到达变换的最终状态
elastic：带有弹跳的到达最终状态
bounce：在最终状态处弹跳几次
```

- delay() 指定延迟的时间，表示一定时间后才开始转变，单位同样为毫秒。此函数可以对整体指定延迟，也可以对个别指定延迟
 -  整体延迟
 ```
   .transition()
  .duration(1000)
  .delay(500)
 ```
 - 对一个一个的图形（图形上绑定了数据）进行延迟
 ```
 .transition()
 .duration(1000)
 .delay(funtion(d,i){
    return 200*i;
 })
 假设有 10 个元素，那么第 1 个元素延迟 0 毫秒（因为 i = 0），第 2 个元素延迟 200 毫秒，第 3 个延迟 400 毫秒，依次类推….整个过渡的长度为 200 * 9 + 1000 = 2800 毫秒。
 ```

## 理解 Update、Enter、Exit   
(Update、Enter、Exit 是 D3 中三个非常重要的概念，它处理的是当选择集和数据的数量关系不确定的情况。)
- 如果数组为 [3, 6, 9, 12, 15]，将此数组绑定到三个 p 元素的选择集上。可以想象，会有两个数据没有元素与之对应，这时候 D3 会建立两个空的元素与数据对应，这一部分就称为 Enter。而有元素与数据对应的部分称为 Update。如果数组为 [3]，则会有两个元素没有数据绑定，那么没有数据绑定的部分被称为 Exit。

## 交互式操作
- 交互，指的是用户输入了某种指令，程序接受到指令之后必须做出某种响应。对可视化图表来说，交互能使图表更加生动，能表现更多内容。例如，拖动图表中某些图形、鼠标滑到图形上出现提示框、用触屏放大或缩小图形等等。

- 鼠标常用事件
```
click：鼠标单击某元素时，相当于 mousedown 和 mouseup 组合在一起。
mouseover：光标放在某元素上。
mouseout：光标从某元素上移出来时。
mousemove：鼠标被移动的时候。
mousedown：鼠标按钮被按下。
mouseup：鼠标按钮被松开。
dblclick：鼠标双击。
```
- 键盘常用事件
```
keydown：当用户按下任意键时触发，按住不放会重复触发此事件。该事件不会区分字母的大小写，例如“A”和“a”被视为一致。
keypress：当用户按下字符键（大小写字母、数字、加号、等号、回车等）时触发，按住不放会重复触发此事件。该事件区分字母的大小写。
keyup：当用户释放键时触发，不区分字母的大小写。 触屏常用的事件有三个：

touchstart：当触摸点被放在触摸屏上时。
touchmove：当触摸点在触摸屏上移动时。
touchend：当触摸点从触摸屏上拿开时。 当某个事件被监听到时，D3 会把当前的事件存到 d3.event 对象，里面保存了当前事件的各种参数，请大家好好参详。如果需要监听到事件后立刻输出该事件，可以添加一行代码：
```

## 布局
(决定什么元素绘制在哪里)
![布局](http://wiki.jikexueyuan.com/project/d3wiki/images/layout-2.png)

#### 布局的作用是：将不适合用于绘图的数据转换成了适合用于绘图的数据。
- D3 总共提供了 12 个布局：饼状图（Pie）
- 力导向图（Force）![force](http://wiki.jikexueyuan.com/project/d3wiki/images/layout-force.png)
- 弦图（Chord）![chord](http://wiki.jikexueyuan.com/project/d3wiki/images/layout-chord.png)
- 树状图（Tree）![tree](http://wiki.jikexueyuan.com/project/d3wiki/images/layout-diagonal.png)
- 集群图（Cluster）![cluster](http://wiki.jikexueyuan.com/project/d3wiki/images/layout-cluster.png)
- 捆图（Bundle）![bundle](http://wiki.jikexueyuan.com/project/d3wiki/images/layout-bundle.png)
- 打包图（Pack） ![pack](http://wiki.jikexueyuan.com/project/d3wiki/images/layout-pack.png)
- 直方图（Histogram）
- 分区图（Partition）![分区图](http://wiki.jikexueyuan.com/project/d3wiki/images/layout-partition.png)
- 堆栈图（Stack）![Stack](http://wiki.jikexueyuan.com/project/d3wiki/images/layout-stack.png)
- 矩阵树图（Treemap）![treemap](http://wiki.jikexueyuan.com/project/d3wiki/images/layout-treemap.png)
- 层级图（Hierarchy）。 ![]()


## 生成器
SVG 有一个元素，叫做路径 path，是 SVG 中功能最强的元素，它可以表示其它任意的图形。顾名思义，路径元素就是通过定义一个段“路径”，来绘制出各种图形。但是，路径是很难计算的，通过布局转换后的数据 piedata 仍然很难手动计算得到路径值。为我们完成这项任务的，就是生成器。

## 力导向图
力导向图（Force-Directed Graph），是绘图的一种算法。在二维或三维空间里配置节点，节点之间用线连接，称为连线。各连线的长度几乎相等，且尽可能不相交。节点和连线都被施加了力的作用，力是根据节点和连线的相对位置计算的。根据力的作用，来计算节点和连线的运动轨迹，并不断降低它们的能量，最终达到一种能量很低的安定状态。
