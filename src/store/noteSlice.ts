import { createSlice } from '@reduxjs/toolkit'

const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: []
    },
    reducers: {
        addNote(state, action) {},
        removeNote(state, action) {},
        changeNote(state, action) {},
        filterNotes(state, action) {}
    }
})

export const {addNote, removeNote, changeNote, filterNotes} = noteSlice.actions

export default noteSlice.reducer