import React from "react";
import styles from "./index.module.css";

function Origami({ description, author }) {
    return (
        <div className={styles.post} >
            <img src="" alt="picture"/>
            <p className={styles.description}>
                {description}
            </p>
            <div>
                <span>
                    <small>Author:</small>
                    {author.username}
                </span>
            </div>

        </div>
    )
}

export default Origami;
