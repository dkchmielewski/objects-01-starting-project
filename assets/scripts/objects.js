const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';


const person = {
    'first name': 'Max',
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
console.log(person['first name']);