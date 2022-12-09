import { useAppSelector } from '../hook'
import NoteItem from './NoteItem'

const NotesList: React.FC = ()  => {
    const notes = useAppSelector(state => state.notes.notes)
    // console.log('notes', notes);
    return (
        <ul style={{paddingLeft: '0px'}}>
            {
             notes.map( (note) => (
              <NoteItem key={note.id}
                        {...note}
              />))
            }
        </ul>
    )
}

export default NotesList