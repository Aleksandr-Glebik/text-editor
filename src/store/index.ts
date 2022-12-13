import { configureStore } from "@reduxjs/toolkit";
import noteReducer from './noteSlice'
import tagReducer from './tagSlice'
import { NotesState } from "./noteSlice";
import { TagsState } from "./tagSlice";

type stateType = {
    notes: NotesState
    tags: TagsState
}

const saveToLocalStorage = (state: stateType) => {
    try {
        const initialState = JSON.stringify(state)
        localStorage.setItem('state', initialState)
    } catch (e) {
        console.error(e)
    }
}

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('state')
        return stateStr ? JSON.parse(stateStr) : undefined
    } catch (e) {
        console.error(e)
        return undefined
    }
}

const store = configureStore({
    reducer: {
        notes: noteReducer,
        tags: tagReducer,
    },
    preloadedState: loadFromLocalStorage()
})

export default store

store.subscribe( () => {
    saveToLocalStorage(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

