## 兼容问题
### ie 兼容
按浏览器解决兼容，依次解决,哪里错哪里解决

### 选择器过滤

ie6 ie5
|    * html selector{css样式｝

ie7
|    *+html selector{css样式｝



### 属性过滤
 _注意先后顺序

padding-top:20px;   正常

*padding-top:0   ie7 及其一下识别*

_padding-top:0px  ie6

width:100px\0/  ie8+

width:250px\9   ie都识别

注意先后顺序，先写标准样式 > *ie7 >_ie6 >\0/ie8



### 样式表过滤（把问题写在一个样式表里面）

```
<!--[if !IE]><!--> 除IE外都可识别 <!--<![endif]-->
　　<!--[if IE]> 所有的IE可识别 <![endif]-->
　　<!--[if IE 5.0]> 只有IE5.0可以识别 <![endif]-->
　　<!--[if IE 5]> 仅IE5.0与IE5.5可以识别 <![endif]-->
　　<!--[if gt IE 5.0]> IE5.0以及IE5.0以上版本都可以识别 <![endif]-->
　　<!--[if IE 6]> 仅IE6可识别 <![endif]-->
　　<!--[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]-->
　　<!--[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]-->
　　<!--[if IE 7]> 仅IE7可识别 <![endif]-->
　　<!--[if lt IE 7]> IE7以及IE7以下版本可识别 <![endif]-->
　　<!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->
```

### ie6bug

#### 双边距浮动bug
- 问题：元素采用浮动，同时制定了边距，这样在IE6下就会出现第一个浮动元素的边距会双倍
- 解决：给第一个元素，display:inline

#### ie6下不识别微型高度
- 问题：默认情况下不识别比字号小的高度
- 解决：设置font-size=0； overflow:hidden

#### IE6 ie7 阶梯列表bug
- 问题：ul>li>img,浮动了img
- 解决：将浮动指定给li

### ie6下横向列表宽度
- 问题：ul>li>a,li浮动但未制定宽度，a 触发了布局属性（把a转化为块），每个li独立成行
- 解决：把a 也float

###### 两个盒子，上盒设置margin-bottom 下盒设置margin-top,会有重叠，之间间距会以两者最大值呈现。

### ie下绝对定位元素消失
- 问题描述：绝对定位元素的前或者后有浮动元素，定位元素消失。
- 解决：在绝对定位元素和浮动元素之间加一个盒子，并且clear:both

### 高度不能自适应
- 问题：子元素采用了浮动，父元素不能自适应
- 解决：
    - a.添加overflow:hidden ；后遗症：采用绝对定位的元素超出界限之后将会被隐藏。
    - b.在末尾处加空标签 div ，并给其设置样式clear:both
    - clearfix:给大盒子加clearfix class名字
    ```
    .clearfix:before,.clearfix:after{
      display: block;
      content: " ";
    }
    .clearfix:after{clear:both}
    .clearfix{zoom:1}
    ```
