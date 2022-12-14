import './inputField.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faPencil,
)

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
        <h2 className='input-field__title'>{title}</h2>
        <div className='input-field__content'>
          <FontAwesomeIcon icon={faPencil} className='input-field__icon'/>
          <input placeholder={placeholder}
                value={text}
                onChange={e => setText(e.target.value)}
                className='input input-field__input'
          />
          <button
            onClick={addNote}
            className='btn input-field__btn'
          >
            add
          </button>
        </div>

      </label>
    )
}

export default InputField