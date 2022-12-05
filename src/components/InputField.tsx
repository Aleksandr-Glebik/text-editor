
interface InputFieldPropsType {
    text: string | undefined
    setText: (text: string) => void
    addNote: () => void
}

const InputField: React.FC<InputFieldPropsType> = ({ text, setText, addNote}) => {
    return (
      <label>
        <input placeholder='new note' value={text} onChange={e => setText(e.target.value)} />
        <button onClick={addNote}>add note</button>
      </label>
    )
}

export default InputField