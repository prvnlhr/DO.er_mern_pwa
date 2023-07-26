import React from 'react'
import styles from "./styles/listItemStyles.module.css"
const ListItem = ({ textContent }) => {
    return (
        <div className={styles.listItemWrapper} >
            <li className={styles.listItemText} >{textContent}</li>
        </div>
    )
}

export default ListItem