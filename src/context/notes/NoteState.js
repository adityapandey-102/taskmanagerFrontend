import { useState} from 'react';
import noteContext from './noteContext';


const NoteState = (props) => {

  const host = "https://taskmangerbackend.onrender.com"
  const notesIntial = []
  const [notes, setNotes] = useState(notesIntial);
  
    //Get all notes 
    const getsNote = async() => {
      // //TODO: API CALL
      const url=`${host}/api/notes/fetchAllNotes`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const note=await response.json();
      setNotes(note)
    }


  //Add a note
  const addNote = async(title, description, tag,categorie,timeToComplete,timeDone) => {
    // //TODO: API CALL
    if (!timeDone) {
      timeDone=Date.now()
    }
    const url=`${host}/api/notes/addNotes`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title,description,tag,categorie,timeToComplete,timeDone})
    });
    const note=await response.json();

    setNotes(notes.concat(note))
  }

  //Delete a note
  const deleteNote = async (id) => {
    // //TODO: API CALL
    const url=`${host}/api/notes/deleteNotes/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
    // const json=await response.json();

    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //Edit a note
  const editNote = async (id, title, description, tag,categorie,timeDone,timeToComplete) => {
    //TODO: API CALL
    const url=`${host}/api/notes/updateNotes/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title,description,tag,categorie,timeDone,timeToComplete})
    });
    // const json=await response.json();
    

    //editing the data
    const newNotes=JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        newNotes[index].categorie = categorie;
        newNotes[index].timeDone = timeDone;
        newNotes[index].timeToComplete = timeToComplete;
        break;
      }

    }
    setNotes(newNotes)

  }



  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getsNote }}>
      {props.children}
    </noteContext.Provider>
  )

}

export default NoteState;