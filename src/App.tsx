import React, { useEffect, useState } from 'react'
import './App.scss'

// type DisabledType = 'disabled' | '' | undefined
type DisabledType = false | true | undefined

interface NoteType {
  id: string | undefined
  text: string | undefined
  disabled: DisabledType
}

function App() {
  const [text, setText] = useState<string>('')
  const [notes, setNotes] = useState<NoteType[]>([])

  const addNote = () => {
    if (text.trim().length) {
      setNotes([
        ...notes,
        {
          id: new Date().toISOString(),
          text,
          disabled: true
        }
      ])
      setText('')
    }
  }

  useEffect( () => {

  }, [notes])

  const removeNote = (noteId: string | undefined) => {
    setNotes(notes.filter(note => note.id !== noteId))
  }

  const changeNote = (noteId: string | undefined) => {
    setNotes(notes.map( note => {
        if (note.id !== noteId) return note;
        return {
              ...note,
              disabled: !note.disabled
        }
      }) as NoteType[]
    )
  }

  return (
    <div className="App">
      <label>
        <input placeholder='new note' value={text} onChange={e => setText(e.target.value)} />
        <button onClick={addNote}>add note</button>
      </label>
      <ul>
        {
          notes.map( note => (
            <li key={note.id}>
              <input placeholder='note' defaultValue={note.text} disabled={note.disabled}/>
              <button onClick={() => changeNote(note.id)}>
                {note.disabled
                 ? 'change'
                 : 'save'
                }
              </button>
              <button onClick={() => removeNote(note.id)}>delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
