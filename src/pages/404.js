import React from "react"
import styles from "./404.module.scss"

export default () => (
    <div className={styles.content}>
       <h1 className={styles.header}>404 page</h1>
       <p className={styles.errorMessage}>Error message</p>
    </div>
)