
let db = require('./models');

// db.user.findAll()
// .then(records =>{
//     records.forEach(record => {
//         console.log(record.id, record.firstName, record.lastName);
        
//     });
// })

// db.user.findByPk(3)
// .then(user=>{
//     console.log(user.firstName);
// })

// db.user.findAll({where: {lastName: 'Hit'}})
// .then(records =>{
//     console.log(records[0].firstName, records[0].lastName);
// })

// db.user.destroy({where: {id: 2}})
// .then(numRowsDeleted =>{
    
//     if
// })

// db.user.update({lastName: 'New Name'},{where: {id: 3}})
// .then(updatedRecord => {
//     console.log(updatedRecord);
// })




// db.user.create({
//     firstName:'Eric', 
//     lastName: 'Fisher', 
//     email: 'me@me.com'
// });


// db.user.create({
//     firstName:'John', 
//     lastName: 'Hit', 
//     email: 'me3@me.com'
// });

// db.user.create({
//     firstName:'Kevin', 
//     lastName: 'Plahjas', 
//     email: 'me4@me.com'
// });

// db.user.create({
//     firstName:'Amy', 
//     lastName: 'Fish', 
//     email: 'me5@me.com'
// });





///JOINING
// db.blogs.findAll({
//     include: [{
//         model: db.user,
//         required: true
//     }]
// })

// .then(records =>{
//     records.forEach(blog => {
//         console.log(blog.title, blog.user.firstName, blog.user.lastName);
//     });
// })


///


// db.blogs.findAll({
//     include: [{
//         model: db.user,
//         required: true,
//         where: {firstName: 'John'}
//     }]
// })

// .then(records =>{
//     records.forEach(blog => {
//         console.log(blog.title, blog.user.firstName, blog.user.lastName);
//     });
// })


// db.blogs.findAll({
//     where:{userID: 1},
//     include: [{
//         model: db.user,
//         required: true
//     }]
// })

// .then(records =>{
//     records.forEach(blog => {
//         console.log(blog.title, blog.user.firstName, blog.user.lastName);
//     });
// })


