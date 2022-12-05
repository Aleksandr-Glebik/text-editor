import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type DisabledType = false | true

type Note = {
  id: string
  text: string
  disabled: DisabledType
}

type NotesState = {
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
                    disabled: true
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
        filterNotes(state, action) {}
    }
})

export const {addNote, removeNote, changeNote, filterNotes} = noteSlice.actions

export default noteSlice.reducer