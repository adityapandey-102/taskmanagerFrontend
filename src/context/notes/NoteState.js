import { useState} from 'react';
import noteContext from './noteContext';


const NoteState = (props) => {

  const host = "https://mynotebookbackend1.onrender.com"
  const notesIntial = []
  const [notes, setNotes] = useState(notesIntial);
  const [user, setUser] = useState({});

  
    //Get all notes 
    const getsNote = async() => {
      // //TODO: API CALL
      const url=`${host}/api/notes/fetchAllNotes`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        }
      });
      const note=await response.json();
      setNotes(note)
    }


  //Add a note
  const addNote = async(title, description, tag) => {
    // //TODO: API CALL
    const url=`${host}/api/notes/addNotes`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag})
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
        "auth-token": localStorage.getItem('token')
      }
    });
    const json=await response.json();

    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //TODO: API CALL
    const url=`${host}/api/notes/updateNotes/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag})
    });
    const json=await response.json();

    //editing the data
    const newNotes=JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }

    }
    setNotes(newNotes)

  }

  //Get all user detail 
  const getsUser = async() => {
    // //TODO: API CALL
    const url=`${host}/api/auth/getUser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    });
    const User=await response.json();
    setUser(User)
  }


  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getsNote,getsUser,user }}>
      {props.children}
    </noteContext.Provider>
  )

}

export default NoteState;