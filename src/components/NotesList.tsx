import { useAppSelector } from '../hook'
import NoteItem from './NoteItem'

const NotesList: React.FC = ()  => {
    const notes = useAppSelector(state => state.notes.notes)
    // console.log('notes', notes);
    return (
        <ul style={{paddingLeft: '0px'}}>
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