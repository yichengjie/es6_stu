function testable(isTestable){
    return function(target){
        target.isTestable = isTestable ;
    }
}

@testable(false)
class MyTestableClass{

}

console.log(MyTestableClass.isTestable) ;