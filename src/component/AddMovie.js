import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'

function AddMovie({add}) {
const [newM, setnewM] = useState([])
const handleChange=(e)=>{
  setnewM(el=>({...el,[e.target.name]:e.target.value}))
}


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add new Movie 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
                
                 
                <div className="bigDiv">
                    <label className="input">title</label>
                    <input type="text" name="name" onChange={handleChange} />
                </div>
                <div className="bigDiv">
                <label className="input"> image</label>
                <input type="text" name="image" onChange={handleChange} />
                </div>
               
                <div className="bigDiv">
                    <label className="input">description</label>
                    <input type="text" name="description" onChange={handleChange} />
                </div>
                <div className="bigDiv">
                    <label className="input">rating</label>
                    <input type="text" name="rating" onChange={handleChange} />
                </div>
            </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={newMovie=>add(newM)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
 
    )
}

export default AddMovie
