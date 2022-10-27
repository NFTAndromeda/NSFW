import { ReactNode,FC} from "react"
import styles from "../styles/Home.module.css";

const Cards: FC<{children : ReactNode}> = ({ children } ) => {

    return (
            <div className={styles.card}>   
                {children}
            </div>
        
        
    )
}

export default Cards