'use strict'
/**
 * new是从构造函数生成实例的命令。ES6为new命令引入了一个new.target属性，
 * （在构造函数中）返回new命令作用于的那个构造函数。如果构造函数不是通过new命令调用的，
 * new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。
 */
function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error('必须使用new生成实例');
  }
}

// 另一种写法
function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error('必须使用new生成实例');
  }
}

var person = new Person('张三'); // 正确
var notAPerson = Person.call(person, '张三');  // 报错
