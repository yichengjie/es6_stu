/**
 * Created by yicj on 2016/6/26.
 */
'use strict' ;
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y ;
    }
    toString(){
        return '('+this.x+','+this.y+')' ;
    }
}

Object.assign(Point.prototype, {
    hello(){},
    toValue(){return 1 ;}
});

var p = new Point(1,2) ;
console.info(typeof Point) ;
console.info(typeof p) ;
console.info(p) ;
console.info(p.toString()) ;
console.info('value : ' + p.toValue()) ;