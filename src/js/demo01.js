'use strict' ;

function test1(){

	var arr = [1,2,3,4] ;
	var [first,second,third] = arr ;
	console.info('first : ' + first) ;
	console.info('second : ' + second) ;
	console.info('third : '  + third) ;
} 

//test1() ;
//留空跳过结构数组元素
function test2(){
	let arr = [1,2,3,4] ;
	let [,,third] = arr ;
	console.info('third : '  + third) ;
} 

//test2() ;
//不定参数
function test3(){
	let arr = [1,2,3,4] ;
	let [head,...tail] = arr ;
	console.info('tail : '  + tail) ;
} 

//test3() ;
//对象的结构
function test4(){
	var robotA = {name:'Bender'} ;
	var robotB = {name:'Flexo'} ;
	var {name:nameA} = robotA ;
	var {name:nameB} = robotB ;
	console.info('nameA : ' +nameA) ;
	console.info('nameB : ' + nameB) ;
}

//test4() ;
//当属性名与变量名一致时
function test5(){
	//var {foo:foo,bar:bar} = {foo:'lorem',bar:'ipsum'} ;
	var {foo,bar} = {foo:'lorem',bar:'ipsum'} ;
	console.info('foo : ' +foo) ;
	console.info('bar : ' + bar) ;
}

//test5() ;
//当解构一个未定义的属性时，得到的值为undefined
function test6(){
	var {missing} = {} ;
	console.info(missing) ;
}

//test6() ;
//当解构对象并赋值给变量时，如果已经申明或不打算声明这些变量时
function test7(){
	//{blowUp} = {blowUp:10} 这种会语法错误
	let blowUp ;
	({blowUp} = {blowUp:10}) ;
	console.info('blowUp : ' + blowUp) ;
}

//test7() ;
//默认值
function test8(){
	var [missing = true] = [] ;
	console.info('missing : ' + missing) ;
	var {message:msg = 'Something went wrong'} = {} ;
	console.info(msg) ;

	var {x = 3} = {} ;
	console.info('x : ' + x) ;
}

//test8() ;
//
function test9({name,age}){
	console.info('name : ' + name) ;
	console.info('age : ' + age) ;
}

test9({name:'yicj',age:'28'}) ;
