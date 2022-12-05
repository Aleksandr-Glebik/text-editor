
interface NotesItemPropsType {
    id: string | undefined
    text: string | undefined
    disabled: boolean | undefined
    removeNote: (id: string | undefined) => void
    changeNote: (id: string | undefined) => void
}

const NotesItem: React.FC<NotesItemPropsType> = ({id, text, disabled, removeNote, changeNote}) => {
    return (
        <li>
            <input placeholder='note' defaultValue={text} disabled={disabled}/>
            <button onClick={() => changeNote(id)}>
            {disabled
                ? 'change'
                : 'save'
            }
            </button>
            <button onClick={() => removeNote(id)}>delete</button>
        </li>
    )
}

export default NotesItem
