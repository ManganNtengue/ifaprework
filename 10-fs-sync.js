const {readFileSync, writeFileSync}=require('fs');
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// if the file deosn't exist writeFileSync will create one and if not it will overwrite de existing file 
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: \n ${first}, \n ${second}`,
    {flag: 'a'}
    )
console.log('done with this task');
console.log('starting the next one');