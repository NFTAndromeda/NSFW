import { FC } from "react";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Image from "next/image"
import Logo from "../image/LogoSmall.png"
export const TopBar: FC = () => {
  return (
   
    <div className={styles.topBar}>
       <Image src={Logo} alt='logo' height={60} width={60}/>
      <div className={styles.topBarWrapper}>
          <ul>
            <li><a>Home</a></li>
          </ul>
      </div>
      <WalletMultiButton/>
    </div>
  );
};