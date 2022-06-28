import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import { useEffect } from 'react';
export const About = () => {
    const a = useContext(NoteContext);
    useEffect(() => {
        a.update();


    }, [])

    return (

        <div>This is About {a.state.name}</div>
    )
}

export default About