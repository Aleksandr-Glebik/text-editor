import {useEffect} from 'react'
import { useAppSelector } from '../hook'
import { useAppDispatch } from '../hook'
import TagItem from './TagItem'
import { concatTags } from '../store/tagSlice'
import { getArrDiffTags } from '../utils/getArrDifTags'

const TagsList: React.FC = ()  => {
    const tags = useAppSelector(state => state.tags.tags)
    const notes = useAppSelector(state => state.notes.notes)

    const dispatch = useAppDispatch()

    useEffect( () => {
        let newArr = getArrDiffTags(notes, tags)
        dispatch(concatTags(newArr))
    }, [tags, notes, dispatch])

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