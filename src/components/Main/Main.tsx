import React, { ReactNode } from 'react';
import './main.scss'

interface MainPropsType {
    children: ReactNode
}

const Main: React.FC<MainPropsType> = ( { children } ) => {
    return (
        <main className='main'>
            {children}
        </main>
    )
}

export default Main