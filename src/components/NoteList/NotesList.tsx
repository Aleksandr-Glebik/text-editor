import { useAppSelector } from '../../hook'
import NoteItem from '../NoteItem/NoteItem'
import './noteList.scss'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

const NotesList: React.FC = ()  => {
    const notes = useAppSelector(state => state.notes.notes)
    // console.log('notes', notes);
    return (
        <TransitionGroup component={'ul'} className='note-list'>
            {
             notes.map( (note) => {
                if (note.filtered === false) {
                    return (
                        <CSSTransition
                          classNames={'ai'}
                          timeout={400}
                          key={note.id}
                          mountOnEnter
                          unmountOnExit
                        >
                            <NoteItem {...note} />
                        </CSSTransition> as any
                    )
                }
                return null
             })
            }
        </TransitionGroup>
    )
}

export default NotesList