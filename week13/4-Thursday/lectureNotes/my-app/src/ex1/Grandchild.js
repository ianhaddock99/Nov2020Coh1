let Grandchild = (props) => {
    
    return(
        <div>
        I am a grandchild and my name is {props.GCname}
        </div>
    )
}

export default Grandchild


// import React, { Component } from 'react'

// class Grandchild extends Component {
//   render() {
//     return (
//       <>
//         I am a grandchild and my name is {this.props.name}
//       </>
//     )
//   }
// }

// export default Grandchild
