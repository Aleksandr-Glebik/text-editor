import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Tag = {
  id: string
  text: string
}

export type TagsState = {
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
        concatTags(state, action: PayloadAction<Tag[]>) {
            let newArr = action.payload
            for (let i = 0; i < newArr.length; i++) {
                state.tags = state.tags.concat(newArr[i])
            }
        }
    }
})

export const { addTag, removeTag, concatTags } = tagSlice.actions

export default tagSlice.reducer