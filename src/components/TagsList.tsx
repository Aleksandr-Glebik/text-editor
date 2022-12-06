import { useAppSelector } from '../hook'
import TagItem from './TagItem'

const TagsList: React.FC = ()  => {
    const tags = useAppSelector(state => state.tags.tags)

    return (
        <ul style={{paddingLeft: '0px'}}>
            {
             tags.map( (tag) => (
              <TagItem key={tag.id}
                        {...tag}
              />))
            }
        </ul>
    )
}

export default TagsList