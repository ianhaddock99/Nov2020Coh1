import Child from './Child';



let Parent = (props) => {
    
    return(
        <div>
            My name is {props.firstName}
            <Child childName="Dale" />        
            
        </div>
    )
}

export default Parent