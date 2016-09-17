import { traits } from 'traits-decorator';

class TFoo{
    foo(){
        console.info('foo') ;
    }
}

const TBar = {
    bar(){
        console.info('bar') ;
    },
    foo() { console.log('foo') }
}
@traits(TFoo,TBar::excludes('foo'))
class MyClass{

}

let obj = new MyClass() ;
obj.foo() ;
obj.bar() ;