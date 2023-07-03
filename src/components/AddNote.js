import React,{useState,useContext}from 'react'
import noteContext from '../context/notes/noteContext';

function AddNote(props) {
    const context=useContext(noteContext);
    const {addNote}=context;
    const [ note, setNote]=useState({title:"",description:"",tag:""});

    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        props.showAlert("Your note is added successfully!","success")
        setNote({title:"",description:"",tag:""})
    }

    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <div className="container my-3">
      <h2>Add your Notes</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' onChange={onChange}value={note.title} aria-describedby="emailHelp" minLength={3} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name='description'onChange={onChange}value={note.description} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name='tag'value={note.tag}onChange={onChange}/>
        </div>
        <button disabled={note.description.length<5|| note.title.length<3} className="btn btn-primary" onClick={handleClick}>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default AddNote
