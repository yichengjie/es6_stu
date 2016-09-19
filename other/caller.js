//在函数A调用函数B时，被调用函数B会自动生成一个caller属性，
//指向调用它的函数对象，如果函数当前未被调用，
//或并非被其他函数调用，则caller为null

function fn4(){
    console.log('1 : ' ,fn4.caller);
    function fn(){
        console.log("2 : " ,fn.caller);
    }
    fn();
}

fn4();