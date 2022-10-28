import { ReactNode,FC} from "react"
import styles from "../styles/Home.module.css";

const HighlitedCard: FC<{children : ReactNode}> = ({ children } ) => {

    return (
      
        <div className={styles.highlitedCard}>   
            {children}
        </div> 
             
        
        
        
    )
}

export default HighlitedCard