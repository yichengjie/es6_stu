//在函数调用时，会自动在该函数内部生成一个名为 arguments的隐藏对象
//该对象类似于数组，可以使用[]运算符获取函数调用时传递的实参
//只有函数被调用时，arguments对象才会创建，未调用时其值为null
function fn5(name, age){
    console.log(arguments);
    name = 'XXX';
    console.log(arguments);
    arguments[1] = 30;
    console.log(arguments);
}

fn5('Byron', 20);
/**
 *  { '0': 'Byron', '1': 20 }
    { '0': 'XXX', '1': 20 }
    { '0': 'XXX', '1': 30 }
 */