import React, { useState, useEffect } from 'react'
import TextAreaExpandable from '../common/TextAreaExpandable'


const style = {
    note: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    input: {
        border: 'none',
        height: '50px'
    }
}
const NoteDisplay = (props) => {
    const [noteState, setNoteState] = useState({ title: '', content: '', lastMod: null })
    useEffect(() => {
        setNoteState(props)
    }, [props.title, props.content, props.lastMod])

    const handleTitleChange = (e) => {
        e.preventDefault()
        setNoteState({ ...noteState, title: e.target.value })
    }

    const handleContentChange = (e) => {
        e.preventDefault()
        setNoteState({ ...noteState, content: e.target.value })
    }

    const saveNote = () => {
        const { title, content } = noteState
        props.onChange(props.id, title, content)
    }

    const deleteNote = () => {
        props.onDelete(props.id)
    }

    return (
        <div style={style.note} className="m-2 p-3">
            {noteState &&
                <React.Fragment>
                    <div className='row'>
                        <h3 className='col-8'><input onChange={handleTitleChange} style={style.input} value={noteState.title}></input></h3>
                        <div className='col-4'>
                            <button onClick={saveNote} className='btn btn-primary float-right btn-sm m-1'>Save</button>
                            <button onClick={deleteNote} className='btn btn-secondary float-right btn-sm m-1' >Clear</button>
                        </div>
                    </div>
                    <p><TextAreaExpandable onChange={handleContentChange} style={style.input} value={noteState.content} /></p>
                    <small>{noteState.lastMod ? noteState.lastMod.toString() : ''}</small>
                </React.Fragment>
            }
        </div>
    )
}

export default NoteDisplay