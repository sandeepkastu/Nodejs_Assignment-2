const readline=require('readline');

const test=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

test.question('Please enter your name :  ',(name)=>{
    console.log('Hello',name);
         test.question('who is your girl   ',(name)=>{
            console.log("that's better,stay single ");
            test.close();
         })
     
})