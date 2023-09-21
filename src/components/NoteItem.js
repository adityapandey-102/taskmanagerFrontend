import React, { useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext';
import toast, { Toaster } from 'react-hot-toast';

function NoteItem(props) {
    const { notes, updateNote, handleDragStart,ReadMoreRef,ReadMoreDAta,setReadMore } = props;
    const context = useContext(noteContext);
    const { deleteNote } = context;

   
    const buttonStyle = {
        "cursor": "pointer",
        "padding": "5px",
        "height": "30px",
        "width": "30px",
        "marginRight": "10px",
        "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

    }

    const handleDelete = () => {
        deleteNote(notes._id)
        toast.success('Task Deleted',{duration:4000});


    }
    const handleEdit = () => {
        updateNote(notes)
    }
    const handleDrag = () => {
        console.log(notes.title + " handleDarg");
        handleDragStart(notes)

    }
    const handleReadMore=()=>{

        setReadMore(notes);
    }

    const timeToComplete = new Date(notes.timeToComplete);

    const timeDone = new Date(notes.timeDone);
    let timeDoneValue = `${timeDone.getFullYear()}-${(timeDone.getMonth() < 10 ? "0" + timeDone.getMonth() : timeDone.getMonth())}-${timeDone.getDate()}`;

    const timeStarted = new Date(notes.timeStarted)
    const currentTime = new Date();
    // Calculate the time difference in milliseconds
    const timeTotal = timeToComplete - timeStarted
    const remainingTime = timeToComplete - currentTime;

    const remainingPercentage = (remainingTime / timeTotal) * 100;


    var categoryColour="danger"
    if (notes.categorie==="DOING") {
        categoryColour="primary"
    }
    else if (notes.categorie==="DONE") {
        categoryColour="success"
    }

    return (
        <>
        <div className="card" >
            <div className="card-body" onDragStart={handleDrag} draggable="true" style={{ "width": "350px" }}>
                <div className="d-flex align-items-center">
                    <strong><u><h3 className="card-title">{notes.title}</h3></u></strong>
                    <button type="button" className={`btn btn-${categoryColour} btn-sm`} style={{
                        "position": "absolute",
                        "right": "20px",
                        "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

                    }} >{notes.categorie}</button>
                </div>
                <p className="card-text my-1"><strong>Tag : </strong><span className="badge rounded-pill bg-danger"># {notes.tag}</span>
                </p>
                <p className="card-text my-1 py-2 rounded" style={{ "background": "whitesmoke" }}><strong>Description : </strong>{notes.description.slice(0, 60)} <strong>. . .</strong></p>
                <div className={`card-text ${notes.categorie === "DONE" ? "d-none" : ""}`} ><strong>Time Left : </strong>
                    <div className='percentbar rounded-pill' >
                        <div className='bar' style={{ "width": `${100 - remainingPercentage}%` }}></div>
                    </div>
                </div>
                <div className={`badge rounded-pill bg-danger card-text mb-3 ${notes.categorie !== "DONE" ? "d-none" : ""}`} style={{ "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}><strong>Completed On : </strong>{timeDoneValue}</div>
                <div>
                    <img className="rounded-pill" style={buttonStyle} src="https://img.icons8.com/papercut/60/trash.png" onClick={handleDelete} alt="trash" />

                    <img className="rounded-pill " style={buttonStyle} src="https://img.icons8.com/external-becris-lineal-becris/64/external-edit-mintab-for-ios-becris-lineal-becris.png" alt="external-edit-mintab-for-ios-becris-lineal-becris" onClick={handleEdit} />
                    <button type="button" onClick={handleReadMore} className="btn btn-outline-dark btn-sm" style={{
                        "position": "absolute",
                        "right": "20px"
                    }}>Read More</button>
                </div>

            </div>
            <Toaster/>

        </div>
        </>
    )
}

export default NoteItem
