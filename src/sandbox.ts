console.log('test');
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

//function

let greet: Function;
greet = () => {
    console.log('hello, world');
}

//greet = 'hello';
const add = (a: number, b: number, c?: number | string): void => {
console.log(a+b);
console.log(c);
}

add(5, 10);

const minus = (a: number, b: number): number => {
    return a+b;
}

let result = minus(10, 7);

//Type aliases
type StringOrNum = string | number;

type objWithName = { name: string, uid: StringOrNum};

let greetNew: (a: string, b: string) => void;
greetNew = (name: string, greeting: string) => {
    console.log(`$(name) says $(greeting)`);
}

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add'){
        return numOne = numTwo;
    }
    else{
        return numOne - numTwo;
    }
}

let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};
logDetails = (ninja: {name: string, age: number}) => {
    console.log(`$(ninja.name) is $(ninja.age) years old`);
} 

const anchor = document.querySelector('a')!;
//if(anchor){
//    console.log(anchor.href);
//}
console.log(anchor.href);

//const form = document.querySelector('form');

const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLFormElement;
const tofrom = document.querySelector('#toform') as HTMLFormElement;
const details = document.querySelector('#details') as HTMLFormElement;
const amount = document.querySelector('#amount') as HTMLFormElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueasnumber
    );
});

//Classes
import { Invoice } from './classes/invoice.js'

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

//invOne.client = 'yoshi';

console.log(invOne, invTwo);
console.log(invoices);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});

interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
};

const greetPerson = (person: IsPerson) => {
    console.log('hello ', person.name);
};
greetPerson(me);
