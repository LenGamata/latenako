const readline =
require('readline').createInterface({ 
     input: process.stdin,
     output: process.stdout});

readline.question("Enter your age:") , age => {
    age = parseInt(age);}
    age = parseInt(age);

    if (age < 13) {
    console.log('You are a child');
    } else if (age >= 13 && age <= 19) {
        console.log('You are a teenager.');
    } else if (age >= 20) {
        console.log('You are an adult.');
    } else {
        console.log('Invalid age entered.');
    }

    rl.close();