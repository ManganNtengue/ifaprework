const {readFile, writeFile}=require('fs');
const { isErrored } = require('stream');
console.log('start');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile('./content/result-async.txt', 
        `Here is the result: \n ${first}, \n ${second} \n fait par Mangan`,
        {flag: 'a'},
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with this task');
        })
    })
})
console.log('starting the next task');