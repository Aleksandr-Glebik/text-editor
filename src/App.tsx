import { useState } from 'react'
import './App.scss'
import NotesList from './components/NotesList'
import InputField from './components/InputField'

export type DisabledType = false | true | undefined
export interface NoteType {
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
      <InputField text={text}
                  setText={setText}
                  addNote={addNote}
      />
      <NotesList notes={notes}
                 removeNote={removeNote}
                 changeNote={changeNote}
      />
    </div>
  )
}

export default App
