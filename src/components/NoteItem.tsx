import { useAppDispatch } from '../hook'
import { removeNote, changeNote } from '../store/noteSlice'
interface NotesItemPropsType {
    id: string
    text: string
    disabled: boolean
}

const NoteItem: React.FC<NotesItemPropsType> = ({id, text, disabled}) => {
    const dispatch = useAppDispatch()

    return (
        <li>
            <input placeholder='note' defaultValue={text} disabled={disabled}/>
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
