import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Tag = {
  id: string
  text: string
}

type TagsState = {
   tags: Tag[]
}

const initialState: TagsState = {
    tags: []
}

const tagSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        addTag(state, action: PayloadAction<string>) {
            state.tags.push({
                    id: new Date().toISOString(),
                    text: action.payload,
                })
        },
        removeTag(state, action: PayloadAction<string>) {
            state.tags = state.tags.filter(tag => tag.id !== action.payload)
        },
    }
})

export const {addTag, removeTag } = tagSlice.actions

export default tagSlice.reducer