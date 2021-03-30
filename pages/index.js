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
                            Start trial
                        </a>
                    </li>
                </ul>
            </header>
            <section className={styles.banner}>
                <div className={styles.bannerContent}>
                    <h2>Be aware,</h2>
                    <h2>Manage well.</h2>
                    <p>
                        Everyone experiences stressin differents ways. Let
                        Alivio guide you, in a personalized journal experience,
                        to overcome your stress.
                    </p>
                    <a href="#">Find Your Way</a>
                </div>
            </section>
        </>
    );
}
