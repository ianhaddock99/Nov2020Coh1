

//USING FOR LOOP TO CYCLE THROUGH EACH PAGE IN API 

// $(()=>{
//     let fullCharList = [];
//     let flag = false;
//     for(let index = 1; index <= 50; index++){

//         $.get(`https://www.anapioficeandfire.com/api/characters?page=${index}&pageSize=50`)
//         .done((charList)=>{
//         fullCharList = [...fullCharList, ...charList]    
//         })
//         .done(()=>{
//             if(fullCharList.length >= 2130 && flag==false){
//             flag = true;
//             console.log(fullCharList);

//             let gotArr = fullCharList.map(obj =>{
//                 return `<li> Name:${obj.name} <br> House:${obj.allegiances} </li>`
//             })
//             let ul = document.querySelector('ul');
//             ul.innerHTML = gotArr.join('');
//             }
//         })
//     }

// })

// USING PROMISE ALL

$(()=>{
 // 1st METHOD
    let fetchArr = [];
    let url = "";

    for(let page = 0; page < 45; page++){
        url = fetch("https://www.anapioficeandfire.com/api/characters?page=" + page + "&pageSize=50")

        fetchArr.push(url);
    }

    let promise = Promise.all(fetchArr);

    promise.then((resultsArr)=>{
        return Promise.all(resultsArr.map(char =>{
            return char.json()
        }))
    })

    .then((dataArr)=>{
        console.log(dataArr);

        let charList = [];

        dataArr.forEach((char)=>{
            charList = [...charList, ...char]
        })
        
        let ul = document.querySelector('ul');

        for (var i = 0; i < charList.length; i ++){
            if (charList[i].allegiances && charList[i].allegiances.length > 0 && charList[i].name) {
            
            ul.innerHTML += `
                <li>
                    Name:${charList[i].name}
                </li>
                <li>
                    <a href=${charList[i].allegiances[0]}>House: ${charList[i].allegiances[0]}</a>
                    <a href=${charList[i].allegiances[1]}>House: ${charList[i].allegiances[1]}</a>
                    <a href=${charList[i].allegiances[2]}>House: ${charList[i].allegiances[2]}</a>
                    
                </li>
            `
            }
        }
            
            
            
        

        

        
        
        
    })



    //2nd METHOD
    // let apiCall1 = fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50');
    // let apiCall2 = fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50');

    // let promise = Promise.all([apiCall1, apiCall2])

    // promise.then((resultsArr)=>{
    //     let results = [];
    //     results[0] = resultsArr[0].json();
    //     results[1] = resultsArr[1].json();

    //     return Promise.all(results)
    // })
    // .then((dataArr)=>{
        
    //     console.log(dataArr);

    //     let charArray = [];

    //     dataArr.forEach((char)=>{

    //         charArray = [...charArray, ...char]  
    //     })
    //     console.log(charArray);
    // })
})