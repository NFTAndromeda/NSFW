import { FC } from "react";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Image from "next/image"
import Link from "next/link"
import Logo from "../image/LogoSmall.png"
export const TopBar: FC = () => {
  return (
   
    <div className={styles.topBar}>
      
      <div className={styles.topBarWrapper}>
          <ul>
            <li className={styles.topBarLogoLi}><Link href="/"><Image className={styles.topBarLogo} src={Logo} alt='logo' height={60} width={60}/> NSFW</Link> </li>
            <li><Link href="/">Home</Link></li>
            <li><WalletMultiButton/></li>
          </ul>
           
      </div>
      
    </div>
  );
};