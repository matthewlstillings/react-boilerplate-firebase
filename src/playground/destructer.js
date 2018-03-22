/*{ console.log('Running');

const person = {
   name: 'Andrew',
    age: 26,
    location: {
        city: 'NYC',
        temp: 1000 
    }
}

//Destructering the above object

const {name: userName = 'User Unknown', age = 'Undefined'} = person; 
const {city, temp: temperature} = person.location;

console.log(`${userName} is ${age}`);
console.log(`It's ${temperature} in ${city}`); }*/

//Destructuring arrays

const address = ['123 John street', 'Philly', 'PN', '65802'];

const [, city, state = 'USA'] = address

console.log(`You are in ${city}, ${state}.`);


const product = ['juice', 'sour', '9.00', '11.00', '16.00'];

const [item, type, small, medium, large] = product;

console.log(`A medium, ${type} ${item} costs ${medium}. `);
