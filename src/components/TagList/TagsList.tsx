import { useEffect } from 'react'
import { useAppSelector } from '../../hook'
import { useAppDispatch } from '../../hook'
import TagItem from '../TagItem/TagItem'
import { concatTags } from '../../store/tagSlice'
import { getArrDiffTags } from '../../utils/getArrDifTags'
import { removeFilter } from '../../store/noteSlice'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

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
        <>
          {tags.length > 0 && <div className='tag-list__container'>
            <p className='tag-list__text'>
                Кликните по тегу для фильтрации списка заметок
            </p>
            <TransitionGroup component={'ul'} className='tag-list__list'>
                {
                tags.map( (tag) => (
                        <CSSTransition
                          classNames={'at'}
                          timeout={400}
                          key={tag.id}
                          mountOnEnter
                          unmountOnExit
                        >
                            <TagItem  {...tag} />
                        </CSSTransition> as any
                ))
                }
            </TransitionGroup>
            <button
                onClick={e => dispatch(removeFilter())}
                className='btn cancel-btn'
            >
                Отмена фильтра
            </button>
        </div>}
        </>
    )
}

export default TagsList