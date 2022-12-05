import { useState } from 'react'
import './App.scss'
import NotesList from './components/NotesList'
import InputField from './components/InputField'

import { useAppDispatch } from './hook'
import { addNote } from './store/noteSlice'

function App() {
  const [text, setText] = useState<string>('')

  const dispatch = useAppDispatch()

  const addNewNote = () => {
    dispatch(addNote(text))
    setText('')
  }

  return (
    <div className="App">
      <InputField text={text}
                  setText={setText}
                  addNote={addNewNote}
      />
      <NotesList />
    </div>
  )
}

export default App
