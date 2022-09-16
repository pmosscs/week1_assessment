const password = 'DevM0unta1nw33k1';

//test passwords
//DevM0unta1nw33k1
//hello
//1234567890

//how to test for numbers and letters (MDN)
//  /[]/.test();
//console.log(/[a-zA-Z]/.test(password));
//console.log(/[0-9]/.test(password));

function checkPassword(pass) {
    const lower = /[a-z]/.test(pass);
    const upper = /[A-Z]/.test(pass);
    const num = /[0-9]/.test(pass);
    if (pass.length >= 10 && pass.length <= 20 && upper === true && lower === true && num === true) {
        console.log('Your password meets all requirements.');
    } else {
        console.log('Your password does not meet the requirements.');
    }
}

checkPassword(password);