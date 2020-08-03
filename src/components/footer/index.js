import React from "react";
import Link from "../link";
import styles from "./index.module.css";
import logo from "../../images/blue-origami-bird-flipped.png";
import getNavigation from "../../utils/navigation";


const Footer = () => {
    const links = getNavigation();
    return (
        <div className={styles.footer}>
            <div>
            {
                links.map(navElement => {
                    return (
                        <Link href={navElement.link} title={navElement.title} type="footer" />
                    )

                })
            }
            </div>
            <p className={styles.university}>Software University 2019</p>
        </div>
    )
}

export default Footer;
