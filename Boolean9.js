// Boolean9

let A = 2;
let B = -7;
let C = 4;

let res = (A > 0 && B > 0 && C < 0 ) || (A > 0 && B < 0 && C > 0 ) || (A < 0 && B < 0 && C > 0 );

console.log(res);