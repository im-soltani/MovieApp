import React,{useState} from 'react';
import { Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

 function ModalAdd({addMovie}) {
    const [value,setvalue]=useState({});


    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);
  
const handleShow = (event) =>{
    setvalue
    ({...value,[event.target.name]:event.target.value})
}


const  handleSubmit = e => {
    e.preventDefault();
     setModal(false)
     addMovie(Date.now(),value.image,value.name,value.year,value.rating);
   setvalue("") 
  };


/*const handleSubmit= e => {
    e.preventDefault();
setModal(false)
  addMovie(Date.now(),value.image,value.name,value.year,value.rating); 
  setvalue("")
  };*/
    return (
  <div>    
   <Button color="danger" onClick={()=>setModal(true)}>+</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <div>
        <label>Image:</label>
        <input id="image" type="text" name="image" onChange={handleShow} ></input>
        </div>
        <div>
        <label>Title:</label>
        <input id="name" type="text" name="name" onChange={handleShow} ></input>
        </div>
        <div>
        <label>Year:</label>
        <input id="year" type="text"  name="year"onChange={handleShow} ></input>
        </div>
        <div>
        <label>Rating:</label>
        <input id="rating" type="text" name="rating" onChange={handleShow} ></input>
        </div>
        </ModalBody>
        <ModalFooter >
          <Button color="primary" onClick={handleSubmit}>Add</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
</div>    
    )
}

export default ModalAdd