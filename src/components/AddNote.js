import React, { useState, useContext, useRef } from 'react'
import noteContext from '../context/notes/noteContext';
import { toast } from 'react-hot-toast';

function AddNote(props) {
  const context = useContext(noteContext);
  const { addNote } = context;
  const {refAddButton,category}= props;
  const [categorie, setCategorie] = useState(category)

  
  const [note, setNote] = useState({ title: "", description: "", tag: "", categorie: categorie, timeToComplete: "", timeDone: "" });


  const handleAddNote = (e) => {
    e.preventDefault();
    setNote(note.categorie = categorie)
    addNote(note.title, note.description, note.tag, note.categorie, note.timeToComplete, note.timeDone);
    toast.success("Your note is added successfully!",{duration:4000})
    setCategorie("TODO")
    setNote({ title: "", description: "", tag: "", categorie: categorie, timeToComplete: "", timeDone: "" })
  }

  const handleCategorie = (e) => {
    setCategorie(e.target.getAttribute('value'))
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (

    <div style={{"color":"black"}}>

      <button type="button" className="btn btn-primary d-none " ref={refAddButton} data-bs-toggle="modal" data-bs-target="#exampleModal2">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{"background":"#1b1733","color":"white"}} >
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add Notes</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">


              <form className="my-3" >
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="title" name='title' onChange={onChange} value={note.title} aria-describedby="emailHelp" minLength={3} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea type="text" className="form-control" id="description" name='description' onChange={onChange} value={note.description} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} />
                </div>
                <div className="mb-3 w-25">
                  <label htmlFor="timeToComplete" className="form-label">TimeToComplete</label>
                  <input type="date" className="form-control" id="timeToComplete" name='timeToComplete' value={note.timeToComplete} onChange={onChange} />
                </div>
                <div className="mb-3 w-25">
                  <label htmlFor="timeDone" className="form-label">TimeDone</label>
                  <input type="date" className="form-control" id="timeDone" name='timeDone' value={note.timeDone} onChange={onChange} />
                </div>
                <div className="dropdown my-4" style={{ "cursor": "pointer" }}>
                  <a className="btn btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Choose Categorie:
                  </a> <button type="button" className="btn btn-light" style={{ "cursor": "default" }}>{categorie}</button>
                  <ul className="dropdown-menu">
                    <li><span className="dropdown-item" onClick={handleCategorie} value="TODO" >TODO</span></li>
                    <li><span className="dropdown-item" onClick={handleCategorie} value="DONE" >DONE</span></li>
                    <li><span className="dropdown-item" onClick={handleCategorie} value="DOING" >DOING</span></li>
                  </ul>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={note.description.length < 5 || note.title.length < 3} className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
            </div>
          </div>
        </div>
      </div>

    </div>



  )
}

export default AddNote
