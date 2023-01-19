const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

const person = {
    'first name': 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    [userChosenKeyName]: '...',
    greet: function() {
        alert('Hi there!');
    },
    1.5: 'hello'
};

// person.greet();

delete person.age;
// person.age = undefined;
// person.age = null;

const keyName = 'first name';

person.isAdmin = true;
console.log(person[keyName]);
console.log(person[1.5]);
console.log(person);