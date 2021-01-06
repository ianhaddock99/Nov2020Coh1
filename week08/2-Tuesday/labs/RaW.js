const prompt = require('prompt-sync')();

const input = prompt('What is the input file name?');
const output = prompt('What is the output file name?');

const fs = require('fs');


fs.readFile(input, (error, buffer) => {

    if(error){
        console.error(error.message);
    }
    console.log(`Data from file ${input} : ${buffer.toString().toUpperCase()}`);

    fs.writeFile(output, buffer.toString().toUpperCase(), (error) => {
            
            if(error){
                console.log(error.message);
                return;
            }
            console.log("File Saved at:", output);
    })
});


