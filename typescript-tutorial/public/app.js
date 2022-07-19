const me = {
    name: 'A',
    age: 30,
    speak(t) {
        console.log(t);
    },
    spend(amo) {
        return amo - 1;
    }
};
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// let docOne:HasFormatter
// let docTwo:HasFormatter
// docOne = new Invoice('yoshi','detailed web work',222)
// const invOne= new Invoice('A','work web site', 250)
// const invTwo= new Invoice('B','work city site', 300)
// let Invoices:Invoice[] = []
// Invoices.push(invOne)
// Invoices.push(invTwo)
// Invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })
// const form = document.querySelector('form')!
const form2 = document.querySelector('.new-item-form');
// console.log(form2.children)
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
