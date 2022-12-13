import { useAppSelector } from '../../hook'
import NoteItem from '../NoteItem/NoteItem'
import './noteList.scss'

const NotesList: React.FC = ()  => {
    const notes = useAppSelector(state => state.notes.notes)
    // console.log('notes', notes);
    return (
        <ul className='note-list'>
            {
             notes.map( (note) => {
                if (note.filtered === false) {
                    return <NoteItem key={note.id} {...note} />
                }
                return null
             })
            }
        </ul>
    )
}

export default NotesList