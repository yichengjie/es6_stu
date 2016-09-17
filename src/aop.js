Function.prototype.before = function(beforeFn){
    var _self = this ;
    console.info('before : ' ,this) ;
    /**
     * before :  function (){
          console.info('2') ;
       }
    */
    return function(){
        beforeFn.apply(this,arguments)
        return _self.apply(this,arguments)
    }
}

Function.prototype.after = function(afterFn){
    var _self = this ;
    console.info("after : ",this) ;
    /**
     * after :  function (){
          beforeFn.apply(this,arguments)
          return _self.apply(this,arguments)
       }
    */
    return function(){
        var ret = _self.apply(this,arguments) ;
        afterFn.apply(this,arguments) ;
        return ret ;
    }
}

var func = function(){
    console.info('2') ;
}

var beforeFn = function(){
    console.info('1') ;
}

var afterFn = function(){
    console.info('3') ;
}

func = func.before(beforeFn).after(afterFn) ;

func() ;