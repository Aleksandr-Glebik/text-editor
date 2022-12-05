import { useState, useEffect } from 'react'
import { useAppDispatch } from '../hook'
import { removeNote, changeNote } from '../store/noteSlice'
interface NotesItemPropsType {
    id: string
    text: string
    disabled: boolean
}

const NoteItem: React.FC<NotesItemPropsType> = ({id, text, disabled}) => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState(text)

    useEffect( () => {
        setValue(value)
    }, [value])

    return (
        <li>
            <input placeholder='note'
                   disabled={disabled}
                   value={value}
                   onChange={e => setValue(e.target.value)}
            />
            <button onClick={() => dispatch(changeNote(id))}>
            {disabled
                ? 'change'
                : 'save'
            }
            </button>
            <button onClick={() => dispatch(removeNote(id))}>delete</button>
        </li>
    )
}

export default NoteItem
