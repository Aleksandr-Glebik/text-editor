import './header.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckDouble} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
    faCheckDouble,
)

const Header: React.FC = () => {
    return (
        <header className='header'>
            <FontAwesomeIcon icon={faCheckDouble} className='header-logo'/>
            <h1 className='header-title'>Todo List</h1>
        </header>
    )
}

export default Header