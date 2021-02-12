// import React, { Component } from 'react'
import Clear from './Clear'
import DisplayInfo from './DisplayInfo'
import Increment from './Increment'

// class Parent extends Component {

//     constructor(){
//         super();
//         this.state = {
//             count: 0
//         }
//     }

//     incrementCount =() => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     resetCount = () => {
//         this.setState({
//             count: 0
//         })
//     }


//   render() {
//     return (
//       <>
//         <h1 className="text-center mt-5">Lifting State </h1>

//         <div className ="row">
//             <div className ="col-6 offset-3 formCOlor p-5 formFont">

//             <DisplayInfo count={this.state.count} />

//             <Increment increment={this.incrementCount} />

//             <Clear reset={this.resetCount} />
//             </div>
//         </div>
//       </>
//     )
//   }
// }

// export default Parent


import React, {useState, useEffect} from 'react'

const Parent = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const clear = () => setCount(0);

  return (

  <>
    <DisplayInfo count={count} />
    <Increment  increment={increment} />
    <Clear reset={clear} />
  </>

  )
}


export default Parent





