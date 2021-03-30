import React from "react";
import styles from "../css/Home.module.css";

export default function Home() {
    return (
        <>
            <header>
                <a href="#">
                    <img src="./AlivioLogo.png"></img>{" "}
                </a>
                <ul>
                    <li>
                        <a href="#">Why Alivio</a>
                    </li>
                    <li>
                        <a href="#">Solutions</a>
                    </li>
                    <li>
                        <a href="#">Community</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a href="#">Sign in</a>
                    </li>
                    <li>
                        <a href="#" className={styles.trialButton}>
                            <label>Start trial</label>
                        </a>
                    </li>
                </ul>
            </header>
        </>
    );
}
