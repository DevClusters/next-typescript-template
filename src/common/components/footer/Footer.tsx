import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import {StyledNextLink} from "../StyledNextLink";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {StyledAnchorIcons} from "../StyledAnchorIcons";

export default function Footer() {
    return(
        <footer className={styles.footer} >
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
            <div>
                <StyledAnchorIcons href={'https://www.instagram.com/devclusters/'} target={'_blank'}><InstagramIcon/></StyledAnchorIcons>
                <StyledAnchorIcons href={'https://www.facebook.com/devclusters/'} target={'_blank'}><FacebookIcon/></StyledAnchorIcons>
                <StyledAnchorIcons href={'mailto: bengarr.negocios@gmail.com '} target={'_blank'}><EmailIcon/></StyledAnchorIcons>
                <StyledAnchorIcons href={'https://wa.me/+527731950959'} target={'_blank'}><WhatsAppIcon/></StyledAnchorIcons>
                <StyledAnchorIcons href={'https://www.linkedin.com/company/devclusters/'} target={'_blank'}><LinkedInIcon/></StyledAnchorIcons>
            </div>
            <div className={styles.policyContainer} >
                <a>Terminos y condiciones</a>
                |
                <a>Politicas de privacidad</a>
            </div>
            <div>
                <p>Copyright © 2022 DevClusters. All rights reserved.</p>
            </div>
            
        </footer>)
}
