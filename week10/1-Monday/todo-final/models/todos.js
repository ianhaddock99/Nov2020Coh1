const db = require('./database');

class Todo {
    constructor(){

    }

    async getAllTodo(){

        const response =  await db.query("SELECT * FROM todos ORDER BY id DESC")
    }
}