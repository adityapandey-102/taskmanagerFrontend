import React, { useContext, useRef, useState, useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote'
import UpdateNote from './UpdateNote';
import ReadMore from './ReadMore';


function Notes(props) {
  const context = useContext(noteContext);
  const { notes, editNote, getsNote } = context;

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "", ecategorie: "", etimeToComplete: "", etimeDone: "" });

  const [categorie, setCategorie] = useState("");
  const [addcategory, setAdd] = useState("TODO");
  const [ReadMoreDAta, setReadMore] = useState({ id: "", title: "", description: "", tag: "", categorie: "", timeToComplete: "", timeDone: "" });



  const updateNote = (currentnote) => {
    ref.current.click();
    var timeToComplete = new Date(currentnote.timeToComplete);
    let timeToCompleteValue = `${timeToComplete.getFullYear()}-${(timeToComplete.getMonth() < 10 ? "0" + timeToComplete.getMonth() : timeToComplete.getMonth())}-${(timeToComplete.getDate() < 10 ? "0" + timeToComplete.getDate() : timeToComplete.getDate())}`;

    var timeDone = new Date(currentnote.timeDone);
    let timeDoneValue = `${timeDone.getFullYear()}-${(timeDone.getMonth() < 10 ? "0" + timeDone.getMonth() : timeDone.getMonth())}-${(timeDone.getDate() < 10 ? "0" + timeDone.getDate() : timeDone.getDate())}`;
    setNote({ id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag, ecategorie: currentnote.categorie, etimeToComplete: timeToCompleteValue, etimeDone: timeDoneValue })
  }

  const ref = useRef(null)
  const refAddButton = useRef(null)
  const ReadMoreRef = useRef(null)

  const draggedNoteRef = useRef(null);




  useEffect(() => {

    if (draggedNoteRef.current && categorie !== "") {

      editNote(
        draggedNoteRef.current._id,
        draggedNoteRef.current.title,
        draggedNoteRef.current.description,
        draggedNoteRef.current.tag,
        categorie, 
        Date.now(),
        draggedNoteRef.current.timeToComplete
      );

      getsNote();
      setCategorie("")
      draggedNoteRef.current = null;
    }
    else {
      getsNote();
    }

  }, [categorie]);



  const handleDragStart = (currentnote) => {
    draggedNoteRef.current = currentnote;

  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }
  const handleDrop = (e) => {
    e.preventDefault();
    const category = e.currentTarget.getAttribute('data-category');
    setCategorie(category);

  }


  const handleAddNote = (e) => {
    refAddButton.current.click();
    setAdd(e.currentTarget.getAttribute('data-category'))

  }




  return (
    <>
      <AddNote category={addcategory} refAddButton={refAddButton} />
      <div className=" text-center mb-3 mt-4">
        <button type='button' onClick={handleAddNote} className="taskAdd btn p-4 btn-lg btn-light fw-bold border-white bg-white">Create Task Now</button>
      </div>
      <div className="container3">
        <div className='outer-container'>
          <div className='category-heading' ><h2>TODO</h2><img width="50" height="50" src="https://img.icons8.com/ios/50/more.png" alt="more" />
          </div>
          <div id="todo" className='example' onDrop={handleDrop} onDragOver={handleDragOver} data-category="TODO">
            <h2 className='AddTask'>Add Task</h2>

            {
              notes.map((task) => {
                return task.categorie === "TODO" && <NoteItem ReadMoreRef={ReadMoreRef} ReadMoreDAta={ReadMoreDAta} setReadMore={setReadMore} key={task._id} handleDragStart={handleDragStart} updateNote={updateNote} notes={task} />
              })}
          </div>
          <div className='add-more rounded' data-category="TODO" onClick={handleAddNote}><img width="30" height="30" className='me-2' src="https://img.icons8.com/ios-glyphs/30/plus-math.png" alt="plus-math" />Add More</div>        </div>

        <div className='outer-container'>
        <div className='category-heading' ><h2>DOING</h2><img width="50" height="50" src="https://img.icons8.com/ios/50/more.png" alt="more" />
          </div>          <div id="doing" className='example' onDrop={handleDrop} onDragOver={handleDragOver} data-category="DOING">
            <h2 className='AddTask'>Add Task</h2>

            {
              notes.map((task) => {
                return task.categorie === "DOING" && <NoteItem ReadMoreRef={ReadMoreRef} ReadMoreDAta={ReadMoreDAta} setReadMore={setReadMore}  key={task._id} handleDragStart={handleDragStart} updateNote={updateNote} notes={task} />
              })}
          </div>

          <div className='add-more rounded' data-category="DOING" onClick={handleAddNote}><img width="30" height="30" className='me-2' src="https://img.icons8.com/ios-glyphs/30/plus-math.png" alt="plus-math" />Add More</div>
        </div>

        <div className='outer-container'>
        <div className='category-heading' ><h2>DONE</h2><img width="50" height="50" src="https://img.icons8.com/ios/50/more.png" alt="more" />
          </div>          <div id="done" className='example' onDrop={handleDrop} onDragOver={handleDragOver} data-category="DONE">
            <h2 className='AddTask'>Add Task</h2>

            {
              notes.map((task) => {
                return task.categorie === "DONE" && <NoteItem ReadMoreRef={ReadMoreRef} ReadMoreDAta={ReadMoreDAta} setReadMore={setReadMore}  key={task._id} handleDragStart={handleDragStart} updateNote={updateNote} notes={task} />
              })}
          </div>
          <div className='add-more rounded' data-category="DONE" onClick={handleAddNote}><img width="30" height="30" className='me-2' src="https://img.icons8.com/ios-glyphs/30/plus-math.png" alt="plus-math" />Add More</div>
        </div>



      </div>


      <UpdateNote  editNote={editNote} note={note} cref={ref} setNote={setNote} />
      <ReadMore key={ReadMoreDAta._id} ReadMoreRef={ReadMoreRef} updateNote={updateNote} setReadMore={setReadMore} notes={ReadMoreDAta} />
      <footer className="mt-auto text-white-50">
          <p>Task Manager Created by <a href="https://www.linkedin.com/in/aditya-pandey-0661881ba/" className="text-white">@Aditya Pandey</a>, <a href="https://github.com/adityapandey-102" className="text-white">GitHub repo</a>.</p>
        </footer>

    </>
  )
}

export default Notes

