import React, { Component } from 'react'

class Forms extends Component {


    constructor(){
        super();

        this.state = {
            textValue: "hello",
            isValid: false,
            selectValue: ''
        }
    }


    handleChange = (e) => {
        console.log(e.target.name);


        let targetType = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        let name = e.target.name;

        this.setState({
            [name] : targetType
        }, ()=>{
            console.log(this.state);
        })
    }

    handleForm(e) {
        e.preventDefault();
        console.log('form was submitted');
    }

    // handleChange = (e) => {
    //     console.log(e.target.value);
    //     this.setState({
    //         textValue: e.target.value
    //     })
    // }

    // handleCheckbox = (e) => {
    //     console.log(e.target.checked);
    //     this.setState({
    //         isValid: e.target.checked
    //     })
    // }

    // handleDropDown = (e) => {
    //     console.log(e.target.value);
    //     this.setState({
    //         selectValue: e.target.value
    //     })
    // }


  render() {
    return (
      <>
        <h1 className="text-center mt-5">Class Based Forms</h1>

        <div className="row mt-5">
            <div className="col-6 offset-3 formColor p-5 formFont">
                Forms will go here


            <form onSubmit={this.handleForm}>
                <input type="text" value={this.state.textValue} onChange={this.handleChange} name = "textValue"  />
                Current Text Change {this.state.textValue}
                <br/>
                <input type="checkbox" checked={this.state.isValid} onChange={this.handleChange} name ="isValid" />
                <br/>
                <select name="selectValue" onChange={this.handleChange}>

                    <option value="New York">New York</option>
                    <option value="Houston">Houston</option>
                    <option value="Atlanta">Atlanta</option>
                    <option value="Seattle">Seattle</option>
                    <option value="Santa Barbara">Santa Barbara</option>
                
                </select>
                <br/>
                <input type="submit" />
            </form>
            </div>

        </div>
      </>
    )
  }
}

export default Forms
