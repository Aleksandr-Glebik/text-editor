
import NoteItem from './NoteItem'
import { NoteType } from '../App'

interface NotesListPropsType {
    notes: NoteType[]
    removeNote: (id: string | undefined) => void
    changeNote: (id: string | undefined) => void
}


const NotesList: React.FC<NotesListPropsType> = ({ notes, removeNote, changeNote })  => {
    return (
        <ul>
            {
             notes.map( (note) => (
              <NoteItem key={note.id}
                        removeNote={removeNote}
                        changeNote={changeNote}
                        {...note}
              />))
            }
        </ul>
    )
}

export default NotesList