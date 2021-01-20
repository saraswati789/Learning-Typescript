let character = 'mario';
let age = 30;
let isBlackBelt = false;

//character = 40
character = 'lulgi';

//isBlackBelt = 'yes';
isBlackBelt = true;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(3));


console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});

let names = ['lulgi', 'mario', 'yoshi'];
//names.push(3);
names.push('toad');

let numbers = [10, 20, 30, 40];

//numbers.push('shaun');
//numbers[1] = 'shaun';
numbers.push(25);


let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

//objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age:30
};
ninja.age = 40;
ninja.name = 'ryu';

//ninja.skills = ['fighting', 'sneaking']


//explicit types
let character1: string;

let isLoggedIn: boolean;

//age = 'lulgi';
age = 30;


//arrays
let ninjas: string[] = [];

ninjas.push('shaun');


//union types
let mixednew: (string|number|boolean)[] = [];
mixednew.push('hello');
mixednew.push(20);
mixednew.push(false);
console.log(mixednew);

let uid: string|number;
uid = '123';
uid = 123;


//objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30};

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}
ninjaTwo = {name: 'mario', age: 20, beltColor: 'black'}

//dynamic type - any
let myage: any = 25;

myage = true;
console.log(myage);
myage = 'hello';
console.log(myage);

myage = {name: 'luigi'};
console.log(myage);

//all mixed
let allmixed: any[] = [];

allmixed.push(5);
allmixed.push('mario');
allmixed.push(false);
console.log(allmixed);

let myninja: {name: any, age: any };

myninja = {name: 'yoshi', age: 25 };
console.log(myninja);