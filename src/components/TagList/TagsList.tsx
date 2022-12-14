import { useEffect } from 'react'
import { useAppSelector } from '../../hook'
import { useAppDispatch } from '../../hook'
import TagItem from '../TagItem/TagItem'
import { concatTags } from '../../store/tagSlice'
import { getArrDiffTags } from '../../utils/getArrDifTags'
import { removeFilter } from '../../store/noteSlice'

import './tagList.scss'

const TagsList: React.FC = ()  => {
    const tags = useAppSelector(state => state.tags.tags)
    const notes = useAppSelector(state => state.notes.notes)

    const dispatch = useAppDispatch()

    useEffect( () => {
        let newArr = getArrDiffTags(notes, tags)
        dispatch(concatTags(newArr))
    }, [tags, notes, dispatch])

    return (
        <div className='tag-list__container'>
            <p className='tag-list__text'>
                Кликните по тегу для фильтрации списка заметок
            </p>
            <ul className='tag-list__list'>
                {
                tags.map( (tag) => (
                <TagItem key={tag.id}
                            {...tag}
                />))
                }
            </ul>
            <button
                onClick={e => dispatch(removeFilter())}
                className='btn cancel-btn'
            >
                Отмена фильтра
            </button>
        </div>

    )
}

export default TagsList