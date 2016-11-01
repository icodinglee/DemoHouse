## ajax的定义　Asynchronous Javascript And XML　异步JavaScript和XML
##### ajax是多种技术组合起来的一种浏览器和服务器的交互技术，基本思想是允许一个互联网浏览器向一个远程页面或服务做异步的http调用，并且收到的数据来更新一个当前web页面而不必刷新整个页面，该技术能够改进客户端体验。

### ajax交互模型
##### 同步：脚本会停留并等待服务器响应　　同步：脚本允许页面继续其进程并处理可能的回复

## 什么是跨域问题？
##### 跨域问题最简单的理解就是因为js同源策略发的限制，a.com 下的js无法操作b.com 或者c.a.com 下的对象
![image](http://a2.qpic.cn/psb?/V116o6aP3hvTPH/5FDGacIAVs0Dq*XFDqKYRG6P7P5lPfyfJrnsPQYGBDY!/b/dNwAAAAAAAAA&bo=mwKnAQAAAAADBx0!&rf=viewer_4)

### 注意：（１）如果是端口号或者协议造成的跨域问题前端无法解决；（２）在跨域问题上，域仅仅通过url头部来判断而不会尝试判断相同的ip地址对应的域或者两个域是否为对应一个ip

## 跨域问题的解决
###  **TipOne:** 对于主域相同而子域不同的例子，设置：document.domain
###  **TipTwo:** 动态创建script标签
###  **TipThree:** 利用iframe和location
### **TipFour:** window.name实现的跨域数据传输
### **TipFive:** 使用HTML5　postmessage
### **TipSix:** 利用flash
### **TipSix:** 利用fwindow剪切板
