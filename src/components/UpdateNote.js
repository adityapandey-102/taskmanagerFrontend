import React, { useRef} from 'react'
import toast from 'react-hot-toast';




function UpdateNote(props) {
    const refClose = useRef(null)
    const { note, setNote, cref, editNote } = props;

    const handleEdit = () => {
        if (note.ecategorie==="DONE") {
            console.log("hitted")
            editNote(note.id, note.etitle, note.edescription, note.etag, note.ecategorie, Date.now(), note.etimeToComplete);
        }
        else{
            editNote(note.id, note.etitle, note.edescription, note.etag, note.ecategorie, note.etimeDone, note.etimeToComplete);
        }

        toast.success("Note is updated successfully!",{duration:4000})
        refClose.current.click();
    }


    const handleCategorie = (e) => {
        setNote({...note,ecategorie:e.target.getAttribute('value')})
      }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
        if(e.target.name==="etimeToComplete")
        {
        var timeToComplete=new Date(e.target.value);
        if (timeToComplete<Date.now()) {
            toast.error('Invalid Deadline',{duration:6000});
        }
        }
        
    }
    return (
        <>
            <button type="button" className="btn btn-primary d-none" ref={cref} data-bs-toggle="modal" data-bs-target="#exampleModal" >
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content" style={{"background":"#1b1733"}}>
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
                                    <textarea type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etimeToComplete" className="form-label">TimeToComplete</label>
                                    <input type="date" className="form-control" id="etimeToComplete" name='etimeToComplete' value={note.etimeToComplete} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etimeDone" className="form-label">TimeDone</label>
                                    <input type="date" className="form-control" id="etimeDone" name='etimeDone' value={note.etimeDone} onChange={onChange} />
                                </div>

                                <div className="dropdown my-4" style={{ "cursor": "pointer" }}>
                                    <a className="btn btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Choose Categorie:
                                    </a> <button type="button" className="btn btn-light" style={{ "cursor": "default" }}>{note.ecategorie}</button>
                                    <ul className="dropdown-menu">
                                        <li><span className="dropdown-item" onClick={handleCategorie} value="TODO" >TODO</span></li>
                                        <li><span className="dropdown-item" onClick={handleCategorie} value="DONE" >DONE</span></li>
                                        <li><span className="dropdown-item" onClick={handleCategorie} value="DOING" >DOING</span></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.edescription.length < 5 || note.etitle.length < 3} className="btn btn-primary" onClick={handleEdit}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default UpdateNote
