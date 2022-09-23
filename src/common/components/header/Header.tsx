import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import {StyledNextLink} from "../StyledNextLink";

export default function Header() {
    return(
        <header className={styles.header} >
            <div className={styles.brandContainer}>
                <Image src={"/brand/logo.png"} alt={"logo"} width={50} height={50}/>
                <h2>DevClusters</h2>
            </div>
            <div className={styles.menuContainer} >
                <Link href={'/'}><StyledNextLink>About us</StyledNextLink></Link>
                <Link href={'/'}><StyledNextLink>Team</StyledNextLink></Link>
                <Link href={'/'}><StyledNextLink>Services</StyledNextLink></Link>
                <Link href={'/'}><StyledNextLink>Benefits</StyledNextLink></Link>
                <Link href={'/'}><StyledNextLink>Cases</StyledNextLink></Link>
            </div>
            <div className={styles.langContainer} >
                <Link className={styles.selected} href={'/'}><StyledNextLink>EN</StyledNextLink></Link>
                |
                <Link href={'/'}><StyledNextLink>ES</StyledNextLink></Link>
            </div>
        </header>)
}
