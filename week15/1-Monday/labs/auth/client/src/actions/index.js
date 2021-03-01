
import actionTypes from './actionTypes';
import axios from 'axios'

export const signUp = (formData) => {

    console.log(formData)
  //take username and password 
  //call server api
  //wait for an authenticated token
  //call reducer to store token

  return async dispatch=>{
    try{
        let response = await axios.post('/signup', formData)

        console.log(response.data.token);

        //dispatch action to reducer
        dispatch({type: "AUTH_USER", data: response.data.token})
        localStorage.setItem('token', response.data.token);
    }
    catch(e){
        console.log('error')
        console.log(e)
    }
  }
    
}


//logging in app
export const signIn = (formData) => {
    return async dispatch => {
        try{
            let response = await axios.post('/signin', formData);

            dispatch({type: "AUTH_USER", data: response.data.token});

            console.log('signin', response.data.token)
            localStorage.setItem('token', response.data.token);
        }
        catch(e){

        }
    }
}

//logout

export const signOut = () => {

    localStorage.removeItem('token');
    
    console.log('signing out')
    return {
        type: "AUTH_USER",
        data: ''
    }
}





