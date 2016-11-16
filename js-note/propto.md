# 属性描述对象
[原文地址](http://javascript.ruanyifeng.com/stdlib/attributes.html)
- 定义：JavaScript提供了一个内部数据结构，用来描述一个对象的属性的行为，控制它的行为。这被称为“属性描述对象”（attributes object）。每个属性都有自己对应的属性描述对象，保存该属性的一些元信息。

- 属性描述对象的一个实例。
```
{
  value: 123,          //该属性的默认值
  writable: false,　   //属性值（value）是否可改变
  enumerable: true,    //属性是否可枚举,如果设为false，会使得某些操作（比如for...in循环、Object.keys()、JSON.stringify方法）跳过该属性。
  configurable: false,  //如果设为false，将阻止某些操作改写该属性，比如，无法删除该属性，也不得改变该属性的属性描述对象（value属性除外）。
  get: undefined,      
  set: undefined
}
```

## Object.getOwnPropertyDescriptor()
- Object.getOwnPropertyDescriptor方法可以读出对象自身属性的属性描述对象。

```
var o = { p: 'a' };

Object.getOwnPropertyDescriptor(o, 'p')
// Object { value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```

## Object.defineProperty()
定义属性描述对象，来定义或修改一个属性，然后返回修改后的对象。

```
var o = Object.defineProperty({}, 'p', {
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false
});

o.p
// 123

o.p = 246;
o.p
// 123
// 因为writable为false，所以无法改变该属性的值
```
- Object.defineProperties()
一次性定义或修改多个属性

```
var o = Object.defineProperties({}, {
  p1: { value: 123, enumerable: true },
  p2: { value: 'abc', enumerable: true },
  p3: { get: function () { return this.p1 + this.p2 },
    enumerable:true,
    configurable:true
  }
});

o.p1 // 123
o.p2 // "abc"
o.p3 // "123abc"
```

## 可配置性（configurable）
- 可配置性（configurable）决定了是否可以修改属性描述对象。也就是说，当configurable为false的时候，value、writable、enumerable和configurable都不能被修改了。（需要注意的是，writable只有在从false改为true会报错，从true改为false则是允许的。）

- 至于value，只要writable和configurable有一个为true，就允许改动。

```
var o1 = Object.defineProperty({}, 'p', {
  value: 1,
  writable: true,
  configurable: false
});

Object.defineProperty(o1,'p', {value: 2})
// 修改成功

var o2 = Object.defineProperty({}, 'p', {
  value: 1,
  writable: false,
  configurable: true
});

Object.defineProperty(o2,'p', {value: 2})
// 修改成功
```

- 可配置性决定了一个变量是否可以被删除（delete）。

- 使用var命令声明变量时，变量的configurable为false。
这种差异意味着，如果一个变量是使用var命令生成的，就无法用delete命令删除。也就是说，delete只能删除对象的属性。

## Object.getOwnPropertyNames()
- 返回直接定义在某个对象上面的全部属性的名称，而不管该属性是否可枚举。
- 一般来说，系统原生的属性（即非用户自定义的属性）都是不可枚举的

### Object.prototype.propertyIsEnumerable()



## 存取器（accessor）
- 除了直接定义以外，属性还可以用存取器（accessor）定义。其中，存值函数称为setter，使用set命令；取值函数称为getter，使用get命令。

- 存取器提供的是虚拟属性，即该属性的值不是实际存在的，而是每次读取时计算生成的。利用这个功能，可以实现许多高级特性，比如每个属性禁止赋值。

```
var o = {
  get p() {
    return 'getter';
  },
  set p(value) {
    console.log('setter: ' + value);
  }
};
o.p // "getter"
o.p = 123 // "setter: 123"
上面代码中，o对象内部的get和set命令，分别定义了p属性的取值函数和存值函数。定义了这两个函数之后，对p属性取值时，取值函数会自动调用；对p属性赋值时，存值函数会自动调用,取值函数Getter不能接受参数，存值函数Setter只能接受一个参数（即属性的值）。另外，对象也不能有与取值函数同名的属性。
```


### 对象拷贝
- 将一个对象的所有属性，拷贝到另一个对象
```
var extend = function (to, from) {
  for (var property in from) {
    to[property] = from[property];
  }

  return to;
}

extend({}, {
  a: 1
})
// {a: 1}

上面这个方法的问题在于，如果遇到存取器定义的属性，会只拷贝值。
为了解决这个问题，我们可以通过Object.defineProperty方法来拷贝属性。
var extend = function (to, from) {
  for (var property in from) {
    Object.defineProperty(
      to,
      property,
      Object.getOwnPropertyDescriptor(from, property)
    );
  }

  return to;
}

extend({}, { get a(){ return 1 } })
// { get a(){ return 1 } })

```
- 深度拷贝一个对象
```
var extend = function (to, from) {
  for (var property in from) {
    var descriptor = Object.getOwnPropertyDescriptor(from, property);

    if (descriptor && ( !descriptor.writable
      || !descriptor.configurable
      || !descriptor.enumerable
      || descriptor.get
      || descriptor.set)) {
      Object.defineProperty(to, property, descriptor);
    } else {
      to[property] = from[property];
    }
  }
}
```

## 控制对象状态
- Object.preventExtensions方法可以使得一个对象无法再添加新的属性。使用了preventExtensions方法的对象，可以用delete命令删除它的现有属性。
- Object.isExtensible方法用于检查一个对象是否使用了Object.preventExtensions方法。也就是说，检查是否可以为一个对象添加属性。

- Object.seal方法使得一个对象既无法添加新属性，也无法删除旧属性。可写性（writable）有点特别。如果writable为false，使用Object.seal方法以后，将无法将其变成true；但是，如果writable为true，依然可以将其变成false。至于属性对象的value是否可改变，是由writable决定的。

- Object.isSealed方法用于检查一个对象是否使用了Object.seal方法。

- Object.freeze方法可以使得一个对象无法添加新属性、无法删除旧属性、也无法改变属性的值，使得这个对象实际上变成了常量。 (这个比较厉害)
```
var obj = {
  foo: 1,
  bar: ['a', 'b']
};
Object.freeze(obj);

obj.bar.push('c');
obj.bar // ["a", "b", "c"]
```
