import { FC } from "react";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Image from "next/image"
import Logo from "../image/LogoSmall.png"
export const TopBar: FC = () => {
  return (
   
    <div className={styles.topBar}>
      
      <div className={styles.topBarWrapper}>
          <ul>
            <li><Image src={Logo} alt='logo' height={60} width={60}/></li>
            <li><a>Home</a></li>
            <li><WalletMultiButton/></li>
          </ul>
           
      </div>
      
    </div>
  );
};