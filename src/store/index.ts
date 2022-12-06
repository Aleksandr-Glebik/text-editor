import { configureStore } from "@reduxjs/toolkit";
import noteReducer from './noteSlice'
import tagReducer from './tagSlice'

const store = configureStore({
    reducer: {
        notes: noteReducer,
        tags: tagReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch