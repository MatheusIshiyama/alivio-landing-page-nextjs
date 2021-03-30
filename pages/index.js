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
            <section className={styles.information}>
                <div className={styles.header}>
                    <p className={styles.text}>How it works</p>
                    <div className={styles.title}>
                        <h2>Understand & Release the stress in 3 steps</h2>
                        <p>
                            Alivio offers as many journals it takes, tackling
                            different areas such as anxiety, overwhelmedness,
                            sadness, or anger, and a variety of personal causes,
                            to help you become aware of your emotions, and guide
                            you in how to manage stress.
                        </p>
                    </div>
                </div>
                <div className={styles.body}>
                    <div
                        className={[styles.content, styles.content1].join(" ")}
                    >
                        <h1>01</h1>
                        <h2>Personalize</h2>
                        <p>
                            Answer a quick survey about how you express
                            yourself, what causes you stress, and what area
                            would you like to work on. This way, we can fully
                            personalize your journal!
                        </p>
                        <img src="./info1.png" />
                    </div>
                    <div
                        className={[styles.content, styles.content2].join(" ")}
                    >
                        <h1>02</h1>
                        <h2>Write & Understand</h2>
                        <p>
                            Write, draw, reflect, understand. Alivio will guide
                            you through the prompts and will help you manage
                            your stress!
                        </p>
                        <img src="./info2.png" />
                    </div>
                    <div
                        className={[styles.content, styles.content3].join(" ")}
                    >
                        <h1>03</h1>
                        <h2>Alivio!</h2>
                        <p>
                            Now you are aware, and have a way to manage and
                            overcome your own stress. What are you waiting for?
                            Alivio today!
                        </p>
                        <img src="./info3.png" />
                    </div>
                </div>
            </section>
            <section className={styles.about}>
                <div className={styles.header}>
                    <h2>Let's hear about Kayla's success story</h2>
                    <p>See how well Alivio works in a real customer’s life. </p>
                    <a href="#">Let's get started</a>
                </div>
                <div className={styles.body}>
                    <img src="./about.png" />
                </div>
            </section>
        </>
    );
}
