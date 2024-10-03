const readline =
require('readline').createInterface({ 
     input: process.stdin,
     output: process.stdout});

readline.question('Enter your score:') , score => {
    score = parsentInt(score); }
    console.log(score >= 90 ?
        'Your grade is: Excellent.' :
                score >= 80 ?
        'Your grade is: Good. ' :
                score >= 70 ?
        'Your grade is: Fiar. ':
        'Your grade is need a Improvement.')
        readline.close();