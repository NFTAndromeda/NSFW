import { FC } from "react";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Image from "next/image"

export const TopBar: FC = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarWrapper}>
        <ul>
          <li><a>Home</a></li>
        </ul>  
      </div>
      <WalletMultiButton/>
    </div>
  );
};