import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Invoice('mario', 'plumbing work', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
console.log('test');
let character = 'mario';
let age = 30;
let isBlackBelt = false;
//character = 40
character = 'lulgi';
//isBlackBelt = 'yes';
isBlackBelt = true;
const circ = (diameter) => {
    return diameter * Math.PI;
};
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
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
//ninja.skills = ['fighting', 'sneaking']
//explicit types
let character1;
let isLoggedIn;
//age = 'lulgi';
age = 30;
//arrays
let ninjas = [];
ninjas.push('shaun');
//union types
let mixednew = [];
mixednew.push('hello');
mixednew.push(20);
mixednew.push(false);
console.log(mixednew);
let uid;
uid = '123';
uid = 123;
//objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
//dynamic type - any
let myage = 25;
myage = true;
console.log(myage);
myage = 'hello';
console.log(myage);
myage = { name: 'luigi' };
console.log(myage);
//all mixed
let allmixed = [];
allmixed.push(5);
allmixed.push('mario');
allmixed.push(false);
console.log(allmixed);
let myninja;
myninja = { name: 'yoshi', age: 25 };
console.log(myninja);
//function
let greet;
greet = () => {
    console.log('hello, world');
};
//greet = 'hello';
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
let greetNew;
greetNew = (name, greeting) => {
    console.log(`$(name) says $(greeting)`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne = numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(`$(ninja.name) is $(ninja.age) years old`);
};
const anchor = document.querySelector('a');
//if(anchor){
//    console.log(anchor.href);
//}
console.log(anchor.href);
//const form = document.querySelector('form');
const form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#toform');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    //console.log(
    //   type.value,
    //    tofrom.value,
    //    details.value,
    //    amount.valueasnumber
    //);
});
//Classes
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
//invOne.client = 'yoshi';
console.log(invOne, invTwo);
console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
