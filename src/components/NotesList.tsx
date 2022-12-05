import { useAppSelector } from '../hook'
import NoteItem from './NoteItem'

const NotesList: React.FC = ()  => {
    const notes = useAppSelector(state => state.notes.notes)

    return (
        <ul>
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