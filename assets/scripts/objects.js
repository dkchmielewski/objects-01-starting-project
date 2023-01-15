const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    greet: function() {
        alert('Hi there!');
    }
};

// person.greet();

delete person.age;
// person.age = undefined;
// person.age = null;

person.isAdmin = true;
console.log(person);