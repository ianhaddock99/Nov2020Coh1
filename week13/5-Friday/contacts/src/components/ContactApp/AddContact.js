import React, {useState} from 'react'
import {Dropdown} from 'react-bootstrap'
import {v4 as uuidv1} from 'uuid';

const AddContact = (props) => {

  const [category, setCategory] = useState('Friend');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phnumber, setPhnumber] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipcode, setZipcode] = useState('')
  console.log(`category ${category} name ${name}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.addContact({
      id: uuidv1(),
      name: name,
      email: email,
      phnumber: phnumber,
      address: address,
      category: category,
      city: city,
      state: state,
      zipcode: zipcode
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
    <div className="row">
      <div className="col-9">
        <div className="form-group">
        <input type="text" className="form-control" 
        id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="Enter name of contact" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" className="form-control mt-4" 
        id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="Email of contact" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" className="form-control mt-4" 
        id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="Phone number of contact" value={phnumber} onChange={(e)=>setPhnumber(e.target.value)} />
        <input type="text" className="form-control mt-4" 
        id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="Address of contact" value={address} onChange={(e)=>setAddress(e.target.value)} />
        <input type="text" className="form-control mt-4" 
        id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="City of contact" value={city} onChange={(e)=>setCity(e.target.value)} />
        <input type="text" className="form-control mt-4" 
        id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="State of contact" value={state} onChange={(e)=>setState(e.target.value)} />
        <input type="text" className="form-control mt-4" 
        id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="Zip code of contact" value={zipcode} onChange={(e)=>setZipcode(e.target.value)} />
        
      </div>
      </div>
    </div>
      <div className="row">
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Type of Contact
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={()=>setCategory('Friend')} href="#/action-1">Friend</Dropdown.Item>
            <Dropdown.Item onClick={()=>setCategory('CoWorker')}href="#/action-2">CoWorker</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button type="submit" className="btn btn-secondary">Submit</button>
      </div>
    {/* end of row */}
  </form>
    </>
  )
}

export default AddContact
