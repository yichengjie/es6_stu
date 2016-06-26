/**
 * Created by yicj on 2016/6/25.
 */
'use strict' ;
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5

    if (true) {
        function f() {}
    }
}

f1() ;