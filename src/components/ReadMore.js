import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import { toast } from 'react-hot-toast';

function ReadMore(props) {
    

    const {notes,updateNote, ReadMoreRef,setReadMore } = props;
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

    useEffect(()=>{
        if (notes.title!=="") {
            ReadMoreRef.current.click();
            setReadMore({ id: "", title: "", description: "", tag: "",categorie:"", timeToComplete: "", timeDone: "" })
            document.getElementById("delete").addEventListener("click",handleDelete);
            document.getElementById("editfunc").addEventListener("click",handleEdit2);
        }
    },[notes])

    const handleDelete = () => {
        deleteNote(notes._id)
        toast.success("Note is deleted successfully!",{duration:4000})
    }
    const handleEdit2 = () => {
        updateNote(notes)
    }


 
    const timeToComplete = new Date(notes.timeToComplete);
    let timeToCompleteValue = `${timeToComplete.getFullYear()}-${(timeToComplete.getMonth() < 10 ? "0" + timeToComplete.getMonth() : timeToComplete.getMonth())}-${(timeToComplete.getDate() < 10 ? "0" + timeToComplete.getDate() : timeToComplete.getDate())}`;

    const timeDone = new Date(notes.timeDone);
    let timeDoneValue =  `${timeDone.getFullYear()}-${(timeDone.getMonth() < 10 ? "0" + timeDone.getMonth() : timeDone.getMonth())}-${(timeDone.getDate() < 10 ? "0" + timeDone.getDate() : timeDone.getDate())}`;
    
    const timeStarted = new Date(notes.timeStarted)
    let timeStartedValue =  `${timeStarted.getFullYear()}-${(timeStarted.getMonth() < 10 ? "0" + timeStarted.getMonth() : timeStarted.getMonth())}-${(timeStarted.getDate() < 10 ? "0" + timeStarted.getDate() : timeStarted.getDate())}`;
    
    const currentTime = new Date();
    // Calculate the time difference in milliseconds
    const timeTotal = timeToComplete - timeStarted
    const remainingTime = timeToComplete - currentTime;

    // Calculate the remaining hours
    const millisecondsPerHour = 1000 * 60 * 60; // Number of milliseconds in an hour
    // const TotalHours = timeTotal / millisecondsPerHour;
    const remainingHoursFromNow = remainingTime / millisecondsPerHour;
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
            <button type="button" className="btn btn-primary d-none" ref={ReadMoreRef} data-bs-toggle="modal" data-bs-target="#exampleModal9" >
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal9" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{
                "color":"black"
            }} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Task Details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex align-items-center">
                                <strong><u><h3 className="card-title">{notes.title}</h3></u></strong>
                                <button type="button" className={`btn btn-${categoryColour} btn-sm`} style={{
                                    "position": "absolute",
                                    "right": "20px",
                                    "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                                }} >{notes.categorie}</button>
                            </div>
                            <p className="card-text mt-3"><strong>Tag : </strong><span className="badge rounded-pill bg-danger"># {notes.tag}</span>
                            </p>
                            <p className="card-text mb-2"><strong>Task Started On : </strong>{timeStartedValue}</p>
                            <p className="card-text mb-2"><strong>Deadline On : </strong>{timeToCompleteValue}</p>
                            <p className="card-text mb-1 py-2 rounded" style={{ "background": "whitesmoke" }}><strong>Description : </strong>{notes.description}</p>
                            <div className={`card-text ${notes.categorie === "DONE" ? "d-none" : ""}`} ><strong>Time Left : </strong>
                                <div className='percentbar rounded-pill' >
                                    <div className='bar' style={{ "width": `${100 - remainingPercentage}%`,}}></div>
                                </div>
                                <div className='ms-2 Timeleft' style={{"display":"inline-block"}}>  {Math.trunc(remainingHoursFromNow)} hrs left</div>
                            </div>
                        
                            <div className={`badge rounded-pill bg-danger card-text mb-3 ${notes.categorie !== "DONE" ? "d-none" : ""}`} style={{ "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}><strong>Completed On : </strong>{timeDoneValue}</div>
                        </div>
                        <div className="modal-footer">
                        <div>
                                <img id="delete" className="rounded-pill" style={buttonStyle} src="https://img.icons8.com/papercut/60/trash.png"  alt="trash" />

                                <img id='editfunc' className="rounded-pill " style={buttonStyle} src="https://img.icons8.com/external-becris-lineal-becris/64/external-edit-mintab-for-ios-becris-lineal-becris.png" alt="external-edit-mintab-for-ios-becris-lineal-becris"/>
                            </div>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReadMore
