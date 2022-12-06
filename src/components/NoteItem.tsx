import { useState, useEffect, useRef } from 'react'
import { useAppDispatch } from '../hook'
import { removeNote, changeNote } from '../store/noteSlice'
import { getTagFromString } from '../utils/getTagFromString'
interface NotesItemPropsType {
    id: string
    text: string
    disabled: boolean
    tag: string
}

const NoteItem: React.FC<NotesItemPropsType> = ({id, text, disabled, tag}) => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState(text)
    const tagRef = useRef(tag)

    useEffect( () => {
        setValue(value)
        tagRef.current = getTagFromString(value)
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
                    {tagRef.current && <p>tag: {tagRef.current}</p>}
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
