import styles from "./styles/logoWrapperStyles.module.css";
import JavascriptLogo from "./JavascriptLogo";
import CppOopsLogo from "./CppOopsLogo"

export const logosArray = [
    {
        courseName: 'JavaScript',
        logo: <div className={styles.logoWrapper} ><JavascriptLogo /></div>
    },
    {
        courseName: 'Object Oriented Programming in C++',
        logo: <div className={styles.logoWrapper} ><CppOopsLogo /></div>
    },
]