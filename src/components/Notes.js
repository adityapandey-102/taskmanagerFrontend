import React, { useContext, useRef, useState, useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote'
import { useNavigate } from 'react-router-dom';


function Notes(props) {
  const context = useContext(noteContext);
  const { notes, editNote, getsNote,getsUser } = context;
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });
  let navigate=useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      getsNote();
      getsUser();
    }
    else{
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);


  const updateNote = (currentnote) => {
    ref.current.click();
    setNote({ id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag })
  }
  const ref = useRef(null)
  const refClose = useRef(null)


  const handleEdit = () => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    props.showAlert("Note is updated successfully!","success")
    refClose.current.click();
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote showAlert={props.showAlert}/>

      <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Notes</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">


              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onChange} aria-describedby="emailHelp" minLength={3} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={note.edescription.length<5 || note.etitle.length<3} className="btn btn-primary" onClick={handleEdit}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      {/* Displaying all note */}
      <div className="row my-3">
        <h2>Your Notes</h2>
        <h5 className='my-3'>{notes.length===0 && "No Notes to display"}</h5>
        {notes.map((notes) => {
          return <NoteItem showAlert={props.showAlert} key={notes._id} updateNote={updateNote} notes={notes} />
        })}
      </div>
    </>
  )
}

export default Notes
