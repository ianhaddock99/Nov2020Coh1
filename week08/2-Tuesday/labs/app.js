////PURE NODE//////

const http = require('http');
const someName = require('./sample'); ////CREATING MODULE FROM SAMPLE.JS/////
console.log(someName);


const server = http.createServer((request, response)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    
    switch(request.url){
        case'/':
            response.setHeader('Content-Type', 'text/html');
            response.end(`<h1>Hello World</h1>`);
            break;
        case'/aboutus':
            response.setHeader('Content-Type', 'text/html');
            response.end(`<h1>About Us</h1>`);
            break;
        case'/data':
            response.setHeader('Content-Type', 'application/json');
            let students = [{firstName:"Andrea", lastName:"Meyer"}, {firstName:"Matt", lastName:"Roberts"}];
            let studentStr = JSON.stringify(students);
            response.end(studentStr);
            break;

        default:
            response.setHeader('Content-Type', 'text/html');
            response.end(`You have reached an error`);
            break;
    }
});

server.listen(3000, ()=>{
    console.log("Runnig on port 3000");
})