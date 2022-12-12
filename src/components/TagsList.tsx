import { useEffect } from 'react'
import { useAppSelector } from '../hook'
import { useAppDispatch } from '../hook'
import TagItem from './TagItem'
import { concatTags } from '../store/tagSlice'
import { getArrDiffTags } from '../utils/getArrDifTags'
import { removeFilter } from '../store/noteSlice'

const TagsList: React.FC = ()  => {
    const tags = useAppSelector(state => state.tags.tags)
    const notes = useAppSelector(state => state.notes.notes)

    const dispatch = useAppDispatch()

    useEffect( () => {
        let newArr = getArrDiffTags(notes, tags)
        dispatch(concatTags(newArr))
    }, [tags, notes, dispatch])

    return (
        <>
            <div>
                <p>
                    Кликните по тегу для фильтрации списка заметок
                </p>
            </div>
            <ul style={{paddingLeft: '0px'}}>
                {
                tags.map( (tag) => (
                <TagItem key={tag.id}
                            {...tag}
                />))
                }
            </ul>
            <div>
                <button
                    onClick={e => dispatch(removeFilter())}
                >
                    Отмена фильтра
                </button>
            </div>
        </>

    )
}

export default TagsList