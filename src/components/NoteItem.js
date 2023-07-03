import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';

function NoteItem(props) {
    const { notes,updateNote } = props;
    const context=useContext(noteContext);
    const {deleteNote}=context;

    const handleDelete=()=>{
        deleteNote(notes._id)
        props.showAlert("Note is deleted successfully!","success")
    }
    const handleEdit=()=>{
        updateNote(notes)
    }

    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                    <h5 className="card-title">{notes.title}</h5>
                    <i className="fa-solid fa-trash-can mx-2" onClick={handleDelete}></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={handleEdit}></i>
                    </div>
                    <p className="card-text">{notes.description}</p>
                    <p className="card-text">{notes.tag}</p>
                </div>
            </div>

        </div>
    )
}

export default NoteItem
