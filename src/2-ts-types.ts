/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
// type inference(Implicit)
let ti = 'hello';
// ti = 123

// type annotation(Explicit)
let ta: string;
ta = 'hello ts';
// ta = [1,2,3]

/********** Javascript Types ***********/

let a; // undefined
let b: boolean;
b = true; // boolean

let c: number;
c = 1; // number

let d: string;
d = 'hello'; // string

let e: bigint;
e = 100n; // big int (starting ES2020)

let f: symbol;
f = Symbol('Sym'); // symbol  (starting ES2015)

let g: () => void;
g = function () {
    // function
    return null;
};

let h: null;
h = null; // null ( special primitive )

let i: Record<string, unknown>;
i = {}; // Object Literal

let j: [];
j = []; // array .map, .push, .pop

class Product {
    // class
    //...
}
let k = new Product();

// contoh type any
// let z: any;
// z = 123;
// z = 'hello';

// 3. with dynamic type comes great responsiblity
function sum(a: number, b: number): number {
    // todo : validasi
    return a + b;
}

let arg1 = 4;
let arg2 = 5;
let result = sum(arg1, arg2);
console.log(result);

//   union
let multi: string | number; //string | number
multi = 'hello';
multi = 123;
// multi = true;

// type aliases
type customType = string;
let myType: customType;
myType = 'hello';
// myType = 123;
