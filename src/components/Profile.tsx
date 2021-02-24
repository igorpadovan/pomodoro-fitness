import styles from "../styles/components/Profile.module.css"

export function Profile() {
    return (
        <div className={styles.profileConainer}>
            <img src="http://github.com/igorpadovan.png" alt="Igor Padovan"/>
            <div>
                <strong>Igor Padovan</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}