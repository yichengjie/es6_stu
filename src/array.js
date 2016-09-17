/*
* 二者的区别，在console中运行一下即可知晓
*/
var arr = ["apple","orange","bannana"];
 
function noPassValue(){
  return arr.reduce(function(prev,next){
    console.log("prev:",prev);
    console.log("next:",next);
     
    return prev + " - " +next;
  });
}


function passValue(){
  return arr.reduce(function(prev,next){
    console.log("prev:",prev);
    console.log("next:",next);
    prev[next] = 1;
    return prev;
  },{});
}
 
//console.log("No Additional parameter:",noPassValue());
//console.log("----------------");
console.log("With {} as an additional parameter:",passValue());