import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {
    const s1 = {
        "name": "Abhi",
        "class": "5b"
    }
    const [state, setState] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Larry",
                "class": "10b"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{ state, update }} >
            {props.childern}
        </NoteContext.Provider >
    )
}

export default NoteState;