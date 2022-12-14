import { useAppDispatch } from '../../hook'
import { removeTag } from '../../store/tagSlice'
import { filterNotes } from '../../store/noteSlice'
import './tagItem.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
    faCircleXmark,
)

interface TagsItemPropsType {
    id: string
    text: string
}

const TagItem: React.FC<TagsItemPropsType> = ({id, text}) => {
    const dispatch = useAppDispatch()

    return (
        <li className='item-tag'>
                <span
                 onClick={ (e) => dispatch(filterNotes(text))}
                 className='item-tag__text'
                >
                    #{text}
                </span>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  onClick={() => dispatch(removeTag(id))}
                  className='item-tag__icon'
                />
        </li>
    )
}

export default TagItem
