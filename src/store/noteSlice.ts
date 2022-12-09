import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTagFromString } from '../utils/getTagFromString'

export type DisabledType = false | true

export type Note = {
  id: string
  text: string
  disabled: DisabledType
  tag: string
}

export type NotesState = {
   notes: Note[]
}

const initialState: NotesState = {
    notes: []
}

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<string>) {
            state.notes.push({
                    id: new Date().toISOString(),
                    text: action.payload,
                    disabled: true,
                    tag: getTagFromString(action.payload)
                })
        },
        removeNote(state, action: PayloadAction<string>) {
            state.notes = state.notes.filter(note => note.id !== action.payload)
        },
        changeNote(state, action: PayloadAction<string>) {
            const changedNote = state.notes.find(note => note.id === action.payload)
            if (changedNote) {
                changedNote.disabled = !changedNote.disabled
            }
        },
        setNewValue(state, action: PayloadAction<{id: string, value: string}>) {
            const changedNote = state.notes.find(note => note.id === action.payload.id)
            if (changedNote) {
                changedNote.text = action.payload.value
                changedNote.tag = getTagFromString(action.payload.value)
            }
        }
    }
})

export const {addNote, removeNote, changeNote, setNewValue} = noteSlice.actions

export default noteSlice.reducer