import React, {useState, useEffect} from "react";

const ConditionalRendering = () => {


const [isLoaded, setisLoaded] = useState(false); //has our data loaded

useEffect(() => {
  setTimeout(()=>{
    setisLoaded(true);
  }, 3000)
}, [])


if(!isLoaded){
  
  return <>Data is loading</>;
}
else{
   return <>This is our main view</>
}

};

export default ConditionalRendering;
