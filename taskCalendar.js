const readline =
require('readline').createInterface({ 
     input: process.stdin,
     output: process.stdout});

readline.question('Enter a day of a week :')
     const tasks = {
         monday: 'Finish your assignments.' ,
         tuesday: 'Attend your class.' ,
         wednesday: 'Work your project.' ,
         thursday: 'Review your DSA.' ,
         friday: 'We have quizzes.' ,
         saturday: 'Relax and Recharge.' ,
         sunday: 'Labada Day.' };

console.log(task[day.toLowerCase()] ) 
        readline.close();