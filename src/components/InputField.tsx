
interface InputFieldPropsType {
    title: string
    text: string
    placeholder: string
    setText: (text: string) => void
    addNote: () => void
}

const InputField: React.FC<InputFieldPropsType> = ({ text, setText, addNote, title, placeholder}) => {
    return (
      <label>
        <h2>{title}</h2>
        <input placeholder={placeholder} value={text} onChange={e => setText(e.target.value)} />
        <button onClick={addNote}>add note</button>
      </label>
    )
}

export default InputField