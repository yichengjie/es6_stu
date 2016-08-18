/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	function test1() {

		var arr = [1, 2, 3, 4];
		var first = arr[0];
		var second = arr[1];
		var third = arr[2];

		console.info('first : ' + first);
		console.info('second : ' + second);
		console.info('third : ' + third);
	}

	//test1() ;
	//留空跳过结构数组元素
	function test2() {
		var arr = [1, 2, 3, 4];
		var third = arr[2];

		console.info('third : ' + third);
	}

	//test2() ;
	//不定参数
	function test3() {
		var arr = [1, 2, 3, 4];
		var head = arr[0];
		var tail = arr.slice(1);

		console.info('tail : ' + tail);
	}

	//test3() ;
	//对象的结构
	function test4() {
		var robotA = { name: 'Bender' };
		var robotB = { name: 'Flexo' };
		var nameA = robotA.name;
		var nameB = robotB.name;

		console.info('nameA : ' + nameA);
		console.info('nameB : ' + nameB);
	}

	//test4() ;
	//当属性名与变量名一致时
	function test5() {
		//var {foo:foo,bar:bar} = {foo:'lorem',bar:'ipsum'} ;
		var _foo$bar = { foo: 'lorem', bar: 'ipsum' };
		var foo = _foo$bar.foo;
		var bar = _foo$bar.bar;

		console.info('foo : ' + foo);
		console.info('bar : ' + bar);
	}

	//test5() ;
	//当解构一个未定义的属性时，得到的值为undefined
	function test6() {
		var _ref = {};
		var missing = _ref.missing;

		console.info(missing);
	}

	//test6() ;
	//当解构对象并赋值给变量时，如果已经申明或不打算声明这些变量时
	function test7() {
		//{blowUp} = {blowUp:10} 这种会语法错误
		var blowUp = void 0;
		var _blowUp = { blowUp: 10 };
		blowUp = _blowUp.blowUp;

		console.info('blowUp : ' + blowUp);
	}

	//test7() ;
	//默认值
	function test8() {
		var _ref2 = [];
		var _ref2$ = _ref2[0];
		var missing = _ref2$ === undefined ? true : _ref2$;

		console.info('missing : ' + missing);
		var _ref3 = {};
		var _ref3$message = _ref3.message;
		var msg = _ref3$message === undefined ? 'Something went wrong' : _ref3$message;

		console.info(msg);

		var _ref4 = {};
		var _ref4$x = _ref4.x;
		var x = _ref4$x === undefined ? 3 : _ref4$x;

		console.info('x : ' + x);
	}

	//test8() ;
	//
	function test9(_ref5) {
		var name = _ref5.name;
		var age = _ref5.age;

		console.info('name : ' + name);
		console.info('age : ' + age);
	}

	test9({ name: 'yicj', age: '28' });

/***/ }
/******/ ]);