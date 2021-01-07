const express = require('express');
const router = express.Router();
const axios = require('axios');

let pictures = [
    "https://i.pinimg.com/originals/f4/01/0b/f4010b762ef1cd617f5e9a0a8ca0533a.jpg",
    "https://cdn.hpm.io/wp-content/uploads/2016/10/07162709/IMG_5206.jpg",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/houston-skyline-from-above-tod-and-cynthia-grubbs.jpg"
]
let nameArr = [
    "Woody",
    "RJ",
    "Micah",
    "Jeremy",
    "Chris",
    "Dan",
    "Cainan",
    "Michael"
]
let cities = [
    "Atlanta",
    "Houston",
    "Seattle",
    "Miami"
]


router.get('/', async (req, res)=>{

    let data = await axios.get('https://corona.lmao.ninja/v2/states');
    

    res.render('index.ejs',{
        pic: pictures,
        names: nameArr,
        data: data.data
    })
    
})


router.get('/:id', (req,res) => {
    let id = req.params.id;
    res.render('index',{
        pic: pictures[id],
        city: cities[id],
        names: nameArr
    })
})



module.exports = router;


// let pictures = [
//     "https://i.pinimg.com/originals/f4/01/0b/f4010b762ef1cd617f5e9a0a8ca0533a.jpg",
//     "https://cdn.hpm.io/wp-content/uploads/2016/10/07162709/IMG_5206.jpg",
//     "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/houston-skyline-from-above-tod-and-cynthia-grubbs.jpg"
// ]
// let nameArr = [
//     "Woody",
//     "RJ",
//     "Micah",
//     "Jeremy",
//     "Chris",
//     "Dan",
//     "Cainan",
//     "Michael"
// ]
// let cities = [
//     "Atlanta",
//     "Houston",
//     "Seattle",
//     "Miami"
// ]

// JS FILE res.render('index.ejs', {
    //     firstName: "Ian",
    //     lastName: "Haddock"
    // })  
    
    /* EJS FILE <h2><%= firstName %></h2>
    
    <h2><%= lastName %></h2> */
    
    
    
    
    // JS FILE res.render('index.ejs',{
        //     pic1:pictures[0],
        //     pic2:pictures[1],
        //     pic3:pictures[2],
        //     city1:cities[0],
        //     city2:cities[1],
        // })
        
        /* EJS FILE <img src="<%= pic1 %>" alt="">
        <img src="<%= pic2 %>" alt="">
        <img src="<%= pic3 %>" alt="">
        
        <h3><%= city1 %></h3>
        <h3><%= city2 %></h3> */
        
        
        
        
        
        // JS FILE res.render('index.ejs',{
    //     pic: pictures
    // })
    
    // EJS FILE <% if (pic.length > 0) { %>
    
    //     <img src="<%= pic[0] %> " alt=""> 
    // <% } %></img>
    
    
    
    
    // JS FILE router.get('/', (req, res)=>{
    
    //     res.render('index.ejs',{
    //             pic: pictures
    //     })
    
    // })
    
    
    // EJS FILE <img src="<%= pic[0] %> " alt=""></img>
    
    
    


    
    // JS FILE router.get('/:id', (req,res) => {
    //     let id = req.params.id;
    //     res.render('index',{
    //         pic: pictures[id],
    //         city: cities[id]
    //     })
    // })



    // EJS FILE <img src="<%= pic %>" alt="">

    // <h2><%= city %></h2>





//  JS FILE   router.get('/', (req, res)=>{
    
//         res.render('index.ejs',{
//             pic: pictures,
//             city: false
//         })
    
// })


// router.get('/:id', (req,res) => {
//     let id = req.params.id;
//     res.render('index',{
//         pic: pictures[id],
//         city: cities[id]
//     })
// })




    // EJS FILE <% if (city) { %>
        
    //     <h2><%= city %></h2>
    // <% } %>
        
    // <img src="<%= pic %>" alt=""></img>

    



// JS FILE   router.get('/', (req, res)=>{
    
//         res.render('index.ejs',{
//             pic: pictures,
//             names: nameArr
//         })
    
// })


// router.get('/:id', (req,res) => {
//     let id = req.params.id;
//     res.render('index',{
//         pic: pictures[id],
//         city: cities[id],
//         names: nameArr
//     })
// })

    // EJS FILE <img src="<%= pic %>" alt="">
    
    // <% names.forEach(name => { %>
    //     <h2><%= name %> </h2> 
    // <% }) %></img>


    // router.get('/', async (req, res)=>{

    //     let data = await axios.get('https://corona.lmao.ninja/v2/states');
        
    
    //     res.render('index.ejs',{
    //         pic: pictures,
    //         names: nameArr,
    //         data: data.data[0].state
    //     })
        
    // })


    // EJS FILE <%= data %>




    // JS FILE router.get('/', async (req, res)=>{

    //     let data = await axios.get('https://corona.lmao.ninja/v2/states');
        
    
    //     res.render('index.ejs',{
    //         pic: pictures,
    //         names: nameArr,
    //         data: data.data
    //     })
        
    // })


    // EJS FILE <% data.forEach(el => { %>
    //     <h3><%= el.state %></h3>
    //    <% }) %>