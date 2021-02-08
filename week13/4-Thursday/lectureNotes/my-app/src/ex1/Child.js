import Grandchild from './Grandchild';

let Child = (props) => {
    
    return(
        <div>
        I am a child my name is {props.childName}
        <Grandchild GCname="Carlos" />
        </div>
    )
}

export default Child