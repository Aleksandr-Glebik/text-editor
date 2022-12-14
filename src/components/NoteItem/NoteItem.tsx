import { useState, useEffect, useRef } from 'react'
import { useAppDispatch } from '../../hook'
import { removeNote, changeNote, setNewValue } from '../../store/noteSlice'
import { getTagFromString } from '../../utils/getTagFromString'
import './noteItem.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faClipboardList} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
    faClipboardList,
)

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
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect( () => {
        dispatch(setNewValue({id, value}))
        tagRef.current = getTagFromString(value)
    }, [disabled, dispatch, id])

    useEffect( () => {
      if (!disabled) {
            inputRef?.current?.focus?.()
      }
    }, [disabled])

    const handlerKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        if (inputRef.current) {
          dispatch(changeNote(id))
          dispatch(setNewValue({id, value}))
          tagRef.current = getTagFromString(value)
        }
      }
    }

    return (
        <li className='item'>
                <div className='item__content'>
                    <input placeholder='note'
                        disabled={disabled}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        ref={inputRef}
                        className='input item__content-input'
                        onKeyDown={handlerKeyDown}
                    />
                    {value && <div className='item__content-container'>
                                <FontAwesomeIcon
                                  icon={faClipboardList}
                                  className='item__content-icon'
                                />
                                <p className='item__content-text'>
                                    {value}
                                </p>
                                {tagRef.current && <span   className='item__content-tag'>{tagRef.current}</span>}
                              </div>}
                </div>
                <div className='item__action'>
                    <button
                      onClick={() => dispatch(changeNote(id))}
                      className='btn btn-change'
                    >
                      {disabled
                        ? 'change'
                        : 'save'
                      }
                    </button>
                    <button
                      onClick={() => dispatch(removeNote(id))}
                      className='btn btn-delete'
                    >
                      delete
                    </button>
                </div>
        </li>
    )
}

export default NoteItem
