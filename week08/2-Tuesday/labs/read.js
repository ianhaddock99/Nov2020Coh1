const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is the file name?', name => {
    readline.close();
    
    const fs = require('fs');
    
    let file = name;
    
    fs.readFile(file, (error, buffer) => {
    
    if(error){
        console.error(error.message);
    }
        console.log(`File Data : ${buffer.toString().toUpperCase()}`);
    });
});
