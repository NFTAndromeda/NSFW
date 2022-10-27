import styles from '../styles/Home.module.css'
import {Headers} from '../Components/Headers'
import {TopBar} from '../Components/TopBar'
import {Dashboard} from '../Components/Dashboard'
import WalletContextProvider from '../Components/WalletContextProvider'
require("@solana/wallet-adapter-react-ui/styles.css");


export default function Home() {
  return (
    <div className={styles.container}>
      <Headers/>
      <WalletContextProvider>
        <TopBar/>
        <Dashboard/>
    
      </WalletContextProvider>
      
    </div>
  )
}
