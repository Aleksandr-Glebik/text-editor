import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTagFromString } from '../utils/getTagFromString'

export type DisabledType = false | true

export type Note = {
  id: string
  text: string
  disabled: DisabledType
  tag: string
  filtered: boolean
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
                    tag: getTagFromString(action.payload),
                    filtered: false
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
        },
        filterNotes(state, action: PayloadAction<string>) {
            state.notes = state.notes.map(note => {
                if (note.tag.slice(1) !== action.payload) {
                    note.filtered = true
                } else {
                    note.filtered = false
                }
                return note
            })
        },
        removeFilter(state) {
            state.notes = state.notes.map(note => {
                note.filtered = false
                return note
            })
        }
    }
})

export const { addNote, removeNote, changeNote, setNewValue, filterNotes, removeFilter } = noteSlice.actions

export default noteSlice.reducer