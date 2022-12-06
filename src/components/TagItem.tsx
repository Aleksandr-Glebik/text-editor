import { useAppDispatch } from '../hook'
import { removeTag } from '../store/tagSlice'

interface TagsItemPropsType {
    id: string
    text: string
}

const TagItem: React.FC<TagsItemPropsType> = ({id, text}) => {
    const dispatch = useAppDispatch()

    return (
        <li style={{listStyleType: 'none'}}>
                <span>#{text}</span>
                <span onClick={() => dispatch(removeTag(id))}
                      style={{color: 'red', cursor: 'pointer'}}
                >
                    &times;
                </span>
        </li>
    )
}

export default TagItem
