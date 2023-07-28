import React from 'react'
import mrkdwnStyle from "./styles/markdownCustomStyles.module.css"
const NoteBlock = ({ noteContent }) => {
    return (
        // <blockquote className={mrkdwnStyle.tempP} >{noteContent}</blockquote>
        // <div className={mrkdwnStyle.noteWrapper}  >
        // </div>
        <div className={mrkdwnStyle.noteWrapper}

          
        >
            {noteContent}
        </div>

    )
}

export default NoteBlock