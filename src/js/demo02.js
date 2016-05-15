'use strict' ;

function fn1(){
	var myarr = ['a','b','c','a'] ;	
	myarr.forEach(function(value){
		console.info(value) ;
		if(value=='b'){
		  //错误的写法，在forEach中不能使用break、会直接报错
		  //  break;
		}
	}) ;
	console.info('-------------------') ;

	for(var index in myarr){
		console.info(myarr[index]) ;
	}

	console.info('--------------------') ;

	for(var value of myarr){
		console.info(value) ;
		if(value=='b'){
			break;
		}
	}
	console.info('---------------------') ;
	for(var chr of "hello world"){
		console.info(chr) ;
	}

	console.info('----------------------') ;

	var uniqueWords = new  Set(myarr) ;
	console.info(uniqueWords) ;
};


function * quips(name){

	yield "你好 " + name +" ! " ;

	yield "希望你能喜欢这篇介绍ES6的译文" ;

	if (name.startsWith('X')) {
		yield "你的名字 " +name +" 首字母是X ，这个很酷!"
	};

	yield "我们下次再见！" ;

}


function testQuips(){
	var iter = quips("yicj") ;
	//这时候什么也没有返回
	console.info(JSON.stringify(iter)) ;

	var t1 = iter.next() ;

	console.info('t1 : '+ JSON.stringify(t1)) ;

	var t2 = iter.next() ;

	console.info('t2 : ' + JSON.stringify(t2)) ;

	var t3 = iter.next() ;

	console.info('t3 : ' + JSON.stringify(t3) ) ;

	var t4 = iter.next() ;

	console.info('t4 : ' + JSON.stringify(t4)) ;
}

//testQuips() ;


function testQuips2(){
	var iter = quips("yicj") ;
	var t = iter.next() ;
	let flag = t['done'] ;
	console.info(t['value']) ;
	while(flag == false){
		t =  iter.next() ;
		flag = t['done'] ;
		//console.info(JSON.stringify(t)) ;
		if(flag==false){
			console.info('value : ' + t['value']) ;
		}
	}
}
//testQuips2() ;	

function testQuips3 (){
	var iter = quips("Xyicj") ;
	for(var v of iter){
		console.info(v) ;
	}
}

//testQuips3() ;


function proxyDemo(){
	var target = {} ;

	var handler = {
		set:function( target ,key ,value ,receiver){
			throw new Error('请不要为这个对象设置属性!') ;
		}
	} ;
	var proxy  = new Proxy(target,handler) ;
	proxy.name = 'yicj' ; 
}

proxyDemo() ;





