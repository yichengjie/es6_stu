'use strict'
import {mixins} from './mixins.js'  ;
const Foo = {
    foo(){
        console.info('foo') ;
    }
} ;

@mixins(Foo)
class MyClass{

}
//等价于下面
//mixins(Foo)(MyClass) ;

let obj = new MyClass() ;
obj.foo() ;