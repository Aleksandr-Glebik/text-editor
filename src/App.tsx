import { useState } from 'react'
import './App.scss'
import NotesList from './components/NotesList'
import InputField from './components/InputField'

import { useAppDispatch } from './hook'
import { addNote } from './store/noteSlice'
import { addTag } from './store/tagSlice'
import TagsList from './components/TagsList'

function App() {
  const [text, setText] = useState<string>('')
  const [tag, setTag] = useState<string>('')

  const dispatch = useAppDispatch()

  const addNewNote = () => {
    if (text.trim().length) {
      dispatch(addNote(text))
      setText('')
    }
  }

  const addNewTag = () => {
    if (text.trim().length) {
      dispatch(addTag(tag))
      setTag('')
    }
  }

  return (
    <div className="App">
      <div>
        <InputField text={text}
                    setText={setText}
                    addNote={addNewNote}
                    title={'Add new note'}
                    placeholder={'new note'}
        />
        <NotesList />
      </div>
      <div>
        <InputField text={tag}
                    setText={setTag}
                    addNote={addNewTag}
                    title={'Add new tag'}
                    placeholder={'new tag'}
        />
        <TagsList />
      </div>
    </div>
  )
}

export default App
