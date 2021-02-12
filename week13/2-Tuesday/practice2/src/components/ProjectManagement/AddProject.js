import React, {useState} from "react";
import {Dropdown} from 'react-bootstrap'
import {v4 as uuidv1} from 'uuid';



const AddProject = (props) => {

  const [category, setCategory] = useState('Front-End');
  const [title, settitle] = useState('')
  console.log(`category ${category} title ${title}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.addProject({
      id: uuidv1(),
      title: title,
      category: category
    })
  }

  return <>
  <form onSubmit={handleSubmit}>
    <div className="row">
      <div className="col-9">
        <div className="form-group">
        <input type="text" className="form-control" 
        id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="Enter project" value={title} onChange={(e)=>settitle(e.target.value)} />
        
      </div>
      </div>
      <div className="col-3">
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={()=>setCategory('Front-End')} href="#/action-1">Front-End</Dropdown.Item>
            <Dropdown.Item onClick={()=>setCategory('Back-End')}href="#/action-2">Back-End</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
    {/* end of row */}
    <button type="submit" className="btn btn-secondary">Submit</button>
  </form>
  </>;
};
export default AddProject;
