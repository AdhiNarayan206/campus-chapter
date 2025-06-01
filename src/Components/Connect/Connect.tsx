import { useEffect, useRef } from "react";
import styles from "./Connect.module.css";
import image from "./assets/image.svg";
import { Discord, Whatsapp } from "./assets/svg";
import data from "../../../data.json";

const Connect = () => {
    const connectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fadeInUp");
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (connectRef.current) {
            observer.observe(connectRef.current);
        }

        return () => {
            if (connectRef.current) {
                observer.unobserve(connectRef.current);
            }
        };
    }, []);

    return (
        <div 
            id="contact" 
            className={styles.ConnectWrapper} 
            ref={connectRef}
        >
            <h1>Connect With Us</h1>
            <div className={styles.contentWrapper}>
                <div className={styles.innerContent}>
                    <div>
                        <h2>Join µLearn {data.collegeCode} Discord server!</h2>
                        <p>
                            Do join our campus community discord server, so you
                            don't miss out any of the updates.
                        </p>
                    </div>
                    <div className={styles.socialMedia}>
                        <a href={data.discordLink} className={styles.discord} target="_blank" rel="noopener noreferrer">
                            <Discord />
                            Join Discord
                        </a>
                        <a href={data.whatsAppLink} className={styles.Whatsapp} target="_blank" rel="noopener noreferrer">
                            <Whatsapp />
                            Join Whatsapp
                        </a>
                    </div>
                </div>
                <div>
                    <img src={image} alt="Connect with us illustration" />
                </div>
            </div>
        </div>
    );
};

export default Connect;
