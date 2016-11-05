## localStorage与cookie的区别
它们之间的区别是为了更大容量的设计，响应当前页面设计的需要；
关于localStrage
1.localStorage拥有setItem getItem RemoveItem clear等方法；
2.其容量有10M；
3.用于持久化的存储；
关于cookie
1.每次请求新的页面cookie都会被发送过去，浪费带宽；
2.需要指定的作用域，不可跨域请求；
3.cookie大小为4KB;
而cookie需要前端开发者自己封装Set get方法，
但是它又是不可缺失的，主要是因为cookie的作用是与
服务器进行交互的，作为HTTP规范的一部分存在，而webStorage仅在本地‘存储’数据而生；

## localStorage与sessionStorage的区别
sessionStorage 和 localStorage 就一个不同的地方， sessionStorage数据的存储仅特定于某个会话中，
也就是说数据只保持到浏览器关闭，当浏览器关闭后重新打开这个页面时， 之前的存储已经被清除。
而 localStorage 是一个持久化的存储，它并不局限于会话。
关闭页面会导致 sessionStorage 的数据被清除，但刷新或重新打开新页面数据还是存在，
如果需要存储的只是少量的临时数据。我们可以使用sessionStorage 。或者做页面间的小交互。

## cookie localStorage 和　sessionStorage
![差异](http://a1.qpic.cn/psb?/V116o6aP3hvTPH/.uJr34deG*I80SVafbzMB2T4Z4bzo37xApiykYUI6*I!/b/dLEAAAAAAAAA&bo=OgMgAQAAAAADBzo!&rf=viewer_4)
