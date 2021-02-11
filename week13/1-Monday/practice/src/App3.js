// import {useState} from 'react'





// function App3() {

//     const [count, setCount] = useState(0)


//   return (
//     <>
//       <div>
//           <h1>
//               Hello World
//           </h1>
//           <h5>
//             {count}
//           </h5>
//           <button onClick={()=> setCount(count + 1)}>Increment</button>
//           <button onClick={()=> setCount(count - 1)}>Decrement</button>
//       </div>
//     </>
//   )
// }

// export default App3

import {useState, useEffect} from 'react'





function App3() {

    // const [count, setCount] = useState(0)

    const [articles, setArticles] = useState([])

    useEffect(()=>{
      const fetchDataAndSetArticles = async ()=> {
        const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ca2fce182d39476c9ec91e70eb643ba5';

        const response = await fetch(url)

        const data =  await response.json();
        console.log(data);
        setArticles(data.articles)
      }

      fetchDataAndSetArticles()

    }, []);

    let articleList = articles.map((article, index) =>{
      return <li key={index}>
              <h4>{article.title}</h4>
              <img src={article.urlToImage}/>
              <p>{article.description}</p>
              </li>
    })


  return (

    
    <>
      {/* <div>
          <h1>
              Hello World
          </h1>
          <h5>
            {count}
          </h5>
          <button onClick={()=> setCount(count + 1)}>Increment</button>
          <button onClick={()=> setCount(count - 1)}>Decrement</button>
      </div> */}

      <div>
        {articleList}
      </div>
    </>
  )
}

export default App3

