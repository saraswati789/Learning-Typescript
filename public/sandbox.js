var character = 'mario';
var age = 30;
var isBlackBelt = false;
//character = 40
character = 'lulgi';
//isBlackBelt = 'yes';
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(3));
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var names = ['lulgi', 'mario', 'yoshi'];
//names.push(3);
names.push('toad');
var numbers = [10, 20, 30, 40];
//numbers.push('shaun');
//numbers[1] = 'shaun';
numbers.push(25);
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
//objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
//ninja.skills = ['fighting', 'sneaking']
//explicit types
var character1;
var isLoggedIn;
//age = 'lulgi';
age = 30;
//arrays
var ninjas = [];
ninjas.push('shaun');
//union types
var mixednew = [];
mixednew.push('hello');
mixednew.push(20);
mixednew.push(false);
console.log(mixednew);
var uid;
uid = '123';
uid = 123;
//objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
//dynamic type - any
var myage = 25;
myage = true;
console.log(myage);
myage = 'hello';
console.log(myage);
myage = { name: 'luigi' };
console.log(myage);
//all mixed
var allmixed = [];
allmixed.push(5);
allmixed.push('mario');
allmixed.push(false);
console.log(allmixed);
var myninja;
myninja = { name: 'yoshi', age: 25 };
console.log(myninja);
