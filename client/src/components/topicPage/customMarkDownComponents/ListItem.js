import React from 'react'
import styles from "./styles/markdownCustomStyles.module.css"
const ListItem = ({ textContent }) => {
    return (
        // <div className={styles.listItemWrapper} >
        //     <li className={styles.liTag} >{textContent}</li>
        // </div>

        <li className={styles.liTag} >{textContent}</li>
    )
}

export default ListItem