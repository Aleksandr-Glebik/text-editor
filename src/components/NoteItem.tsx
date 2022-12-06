import { useState, useEffect } from 'react'
import { useAppDispatch } from '../hook'
import { removeNote, changeNote } from '../store/noteSlice'
interface NotesItemPropsType {
    id: string
    text: string
    disabled: boolean
    tag: string
}

const NoteItem: React.FC<NotesItemPropsType> = ({id, text, disabled, tag}) => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState(text)

    useEffect( () => {
        setValue(value)
    }, [value])

    return (
        <li>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start'}}>
                    <input placeholder='note'
                        disabled={disabled}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    {tag && <p>tag: {tag}</p>}
                </div>
                <div>
                    <button onClick={() => dispatch(changeNote(id))}>
                    {disabled
                        ? 'change'
                        : 'save'
                    }
                    </button>
                    <button onClick={() => dispatch(removeNote(id))}>delete</button>
                </div>
            </div>
        </li>
    )
}

export default NoteItem
