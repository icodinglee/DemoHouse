## 继承
[原文](https://segmentfault.com/a/1190000002440502)

### 原型链继承（对象间继承）

```
<script>
    function Parent(){
        this.name = 'mike';
    }

    function Child(){
        this.age = 12;
    }
    Child.prototype = new Parent();//Child继承Parent，通过原型，形成链条

    var test = new Child();
    alert(test.age);
    alert(test.name);//得到被继承的属性
    //继续原型链继承
    function Brother(){   //brother构造
        this.weight = 60;
    }
    Brother.prototype = new Child();//继续原型链继承
    var brother = new Brother();
    alert(brother.name);//继承了Parent和Child,弹出mike
    alert(brother.age);//弹出12
</script>
```

#### 类式继承（构造函数间继承）

```
<script>
    function Parent(age){
        this.name = ['mike','jack','smith'];
        this.age = age;
    }

    function Child(age){
        Parent.call(this,age);
    }
    var test = new Child(21);
    alert(test.age);//21
    alert(test.name);//mike,jack,smith
    test.name.push('bill');
    alert(test.name);//mike,jack,smith,bill
</script>
```
### 组合继承（原型链继承和构造继承(使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承)

```
<script>
    function Parent(age){
        this.name = ['mike','jack','smith'];
        this.age = age;
    }
    Parent.prototype.run = function () {
        return this.name  + ' are both' + this.age;
    };
    function Child(age){
        Parent.call(this,age);//对象冒充，给超类型传参
    }
    Child.prototype = new Parent();//原型链继承
    var test = new Child(21);//写new Parent(21)也行
    alert(test.run());//mike,jack,smith are both21
</script>
```

### 原型式继承

```
<script>
     function obj(o){
         function F(){}
         F.prototype = o;
         return new F();
     }
    var box = {
        name : 'trigkit4',
        arr : ['brother','sister','baba']
    };
    var b1 = obj(box);
    alert(b1.name);//trigkit4

    b1.name = 'mike';
    alert(b1.name);//mike

    alert(b1.arr);//brother,sister,baba
    b1.arr.push('parents');
    alert(b1.arr);//brother,sister,baba,parents

    var b2 = obj(box);
    alert(b2.name);//trigkit4
    alert(b2.arr);//brother,sister,baba,parents
</script>
```

###　寄生式继承(原型式和工厂式继承)

```
<script>
    function obj(o){
      function F(){}
      F.prototype = o;
      return new F();
    }
    function create(o){
        var f= obj(o);
        f.run = function () {
            return this.arr;//同样，会共享引用
        };
        return f;
    }
</script>
```

### 组合式继承

```
<script>
    function Parent(name){
        this.name = name;
        this.arr = ['哥哥','妹妹','父母'];
    }

    Parent.prototype.run = function () {
        return this.name;
    };

    function Child(name,age){
        Parent.call(this,age);//第二次调用
        this.age = age;
    }

    Child.prototype = new Parent();//第一次调用
</script>
```
### 寄生组合式继承

```
<script>
    function obj(o){
        function F(){}
        F.prototype = o;
        return new F();
    }
    function create(parent,test){
        var f = obj(parent.prototype);//创建对象
        f.constructor = test;//增强对象
    }

    function Parent(name){
        this.name = name;
        this.arr = ['brother','sister','parents'];
    }

    Parent.prototype.run = function () {
        return this.name;
    };

    function Child(name,age){
        Parent.call(this,name);
        this.age =age;
    }

    inheritPrototype(Parent,Child);//通过这里实现继承

    var test = new Child('trigkit4',21);
    test.arr.push('nephew');
    alert(test.arr);//
    alert(test.run());//只共享了方法

    var test2 = new Child('jack',22);
    alert(test2.arr);//引用问题解决
</script>
```
