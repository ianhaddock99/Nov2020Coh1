import React, {useState, useEffect} from 'react'

const useCounter = (initialState, step) => {
  
  const [count, setCount] = useState(initialState)
  
  
  const increment = () => setCount(count + step);

  return [count, increment]
  
}

const App = () => {
  const [count, increment] = useCounter({initialState: 5, step: 4});

  return <button onClick={increment}>{count}</button>
}


// const App = () => {


//   // const initialCount = () => Number(window.localStorage.getItem('count') || 0)

//   // const [count, setCount] = useState(initialCount)
  
  
//   // const increment = () => setCount(count + 1);
//   // const [count2, setCount2] = useState(0)

//   // const handleChange2 = () =>{

//   //   setCount2(count2 + 1)
//   // };
  
//   // useEffect(() => {
//   //   window.localStorage.setItem('count', count);
//   //   console.log('count has been updated');
//   // }, [count])

//   // useEffect(() => {
//   //   console.log('i get called alot');
//   // })


//   return (
//     <>
//       <div styles={{textAlign: 'center', paddingTop: '200px'}}>
//       {/* <button onCLick={()=> setCount(count + 1)}>{count}</button> */}
//       <button onClick={handleChange}>{count}</button>
//       {/* <button onClick={handleChange2}>{count2}</button> */}

//       </div>
//     </>
//   )
// }

export default App

