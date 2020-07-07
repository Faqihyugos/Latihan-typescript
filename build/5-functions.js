"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y, z, a = 0) {
    return x + y + a;
}
console.log(add(2, 3));
const addEx = function (x, y) {
    return x + y;
};
const addArrow = (x, y) => x + y;
const hello = (name) => console.log('hello ' + name);
function request(url, cb) {
    cb(url);
}
let fn = (str) => console.log(str);
request('http://typescriptlang.org', fn);
function submitContact(firstName, lastName, language = 'english', gender) {
    return {
        firstName: firstName,
        lastName: lastName,
        language,
        ...(gender && { gender }),
    };
}
let result = submitContact('faqih', 'yugo', 'indonesia', 'male');
console.log(result);
function fruitsCollection(item, ...restItems) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado');
console.log(fruits);
function CT(param) {
    return param;
}
function CT_generic(param) {
    return param;
}
CT_generic('hello');
CT_generic(112);
function CT_overload(param) {
    return param;
}
CT_overload('hello');
CT_overload(123);
