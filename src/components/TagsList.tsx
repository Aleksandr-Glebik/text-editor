import {useEffect} from 'react'
import { useAppSelector } from '../hook'
import TagItem from './TagItem'

const TagsList: React.FC = ()  => {
    const tags = useAppSelector(state => state.tags.tags)
    // const notes = useAppSelector(state => state.notes.notes)


    // useEffect( () => {
    //     console.log('notes', notes);
    // }, [notes])


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