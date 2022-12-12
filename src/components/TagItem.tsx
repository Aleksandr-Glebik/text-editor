import { useAppDispatch } from '../hook'
import { removeTag } from '../store/tagSlice'
import { filterNotes } from '../store/noteSlice'

interface TagsItemPropsType {
    id: string
    text: string
}

const TagItem: React.FC<TagsItemPropsType> = ({id, text}) => {
    const dispatch = useAppDispatch()

    return (
        <li style={{listStyleType: 'none', padding: '5px'}}>
                <span
                 style={{cursor: 'pointer', marginRight: '10px'}}
                 onClick={ (e) => dispatch(filterNotes(text))}
                >
                    #{text}
                </span>
                <span onClick={() => dispatch(removeTag(id))}
                      style={{color: 'red', cursor: 'pointer'}}
                >
                    &times;
                </span>
        </li>
    )
}

export default TagItem
