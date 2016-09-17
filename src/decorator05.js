'use strict'
import {autobind,readonly } from 'core-decorators' ;

class Person {
    @autobind
    getPerson(){
        return this ;
    }
}

let p1 = new Person() ;
let p2 = p1.getPerson() ;

let flag = (p2 == p1 ) ;
console.info(flag) ;

class Meal {
  @readonly
  entree = 'steak';
}

var dinner = new Meal() ;
dinner.entree = 'salmon' ;


