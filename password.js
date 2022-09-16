const password = 'DevM0unta1nw33k1';

//DevM0unta1nw33k1

//  /[]/.test();
console.log(/[a-zA-Z]/.test(password));
console.log(/[0-9]/.test(password));

function checkPassword(pass) {
    const letter = /[a-zA-Z]/.test(pass);
    const num = /[0-9]/.test(pass);
    if (num && letter) {
        console.log('Testing one good');
    }
}

console.log(checkPassword(password));