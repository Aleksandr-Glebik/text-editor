import { useState } from 'react'
import './App.scss'
import NotesList from './components/NoteList/NotesList'
import InputField from './components/InputField/InputField'

import { useAppDispatch } from './hook'
import { addNote } from './store/noteSlice'
import { addTag } from './store/tagSlice'
import TagsList from './components/TagsList'

import Header from './components/Header/Header'
import Main from './components/Main/Main'

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
    if (tag.trim().length) {
      dispatch(addTag(tag))
      setTag('')
    }
  }

  return (
    <div className="wrapper">
      <Header />
      <Main>
        <div className='main-notes'>
          <InputField text={text}
                      setText={setText}
                      addNote={addNewNote}
                      title={'Add new note'}
                      placeholder={'new note'}
          />
          <NotesList />
        </div>
        <div className='main-tags'>
          <InputField text={tag}
                      setText={setTag}
                      addNote={addNewTag}
                      title={'Add new tag'}
                      placeholder={'new tag'}
          />
          <TagsList />
        </div>
      </Main>
    </div>
  )
}

export default App
