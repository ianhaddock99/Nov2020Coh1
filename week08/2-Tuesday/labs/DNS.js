const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is the website URL?', url => {
    readline.close();

    const dns = require('dns');
    let name = url 
    dns.lookup(name, (error, buffer) => {
        if(error){
            console.error("Invalid Domain Name");
        }
            console.log(`IP ADDRESS : ${buffer}`);
    });

});