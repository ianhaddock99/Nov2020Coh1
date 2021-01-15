const express = require('express');
const app = express();

//create a DB
//config info for DB

let config = {
    host: 'localhost',
    port: 5432,
    database: 'sample2020',
    user: 'postgres',
    password: ''
}

let pgp = require('pg-promise')();

let db = pgp(config);

console.log(db);

// db.query(`SELECT * FROM employees.department`)
// .then(records =>{
//     console.log(records);

//     let arr = records.filter(record => {
//         return record.id != 'd005'
//     })
//     console.log(arr[0].dept_name);
// })
// .catch(error =>{
//     console.log(error);
// })

// db.one(`SELECT * FROM employees.department WHERE id='d005'`)
// .then(result =>{
//     console.log(result);
// })
// .catch(error =>{
//     console.log(error);
// })

// db.result(`INSERT INTO student2 VALUES ('Nigerian')`)
// .then(result =>{
//     console.log(result);
// })

db.result(`INSERT INTO student2 VALUES ($1)`, ['Romanian'])
.then(result =>{
    console.log(result);
})



app.listen(3000, (req,res)=>{

    console.log(`Server running on port 3000`);

})

