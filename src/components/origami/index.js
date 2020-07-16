import React from "react";
import styles from "./index.module.css";
import image from "../../images/blue-origami-bird.png";

function Origami({ description, author }) {
    return (
        <div className={styles.post} >
            <img src={image} alt="Bird" className={styles.img}/>
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
