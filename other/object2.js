'use strict'
//添加访问器属性

var newLine = "<br />";
var obj = {};

function fn1(){
    // Create a user-defined object.
    // Add an accessor property to the object.
    Object.defineProperty(obj, "newAccessorProperty", {
        set: function (x) {
            console.info("in property set accessor : " + this.newaccpropvalue);
            this.newaccpropvalue = x;
        },
        get: function () {
            console.info("in property get accessor : " +this.newaccpropvalue);
            return this.newaccpropvalue;
        },
        enumerable: true,
        configurable: true
    });

    // Set the property value.
    obj.newAccessorProperty = 30;
    console.info("Property value: " + obj.newAccessorProperty + newLine);
    // Output:
    // in property set accessor
    // in property get accessor
    // Property value: 30
}

function fn2(){
    // Modify the get accessor.
    Object.defineProperty(obj, "newAccessorProperty", {
        get: function () { return this.newaccpropvalue; }
    });

    // List the property attributes by using a descriptor.
    // Get the descriptor with Object.getOwnPropertyDescriptor.
    var descriptor = Object.getOwnPropertyDescriptor(obj, "newAccessorProperty");
    for (var prop in descriptor) {
        console.info(prop + ': ' + descriptor[prop]);
    }

    // Output:
    // get: function () { return this.newaccpropvalue; }
    // set: function (x) { document.write("in property set accessor" + newLine); this.newaccpropvalue = x; }
    // configurable: true
    // enumerable: true
}

fn1() ;
console.info('--------------------------------------') ;
fn2() ;

