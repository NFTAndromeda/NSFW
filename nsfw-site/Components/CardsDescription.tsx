import { ReactNode,FC } from "react"
import styles from "../styles/Home.module.css";

const CardsDescription: FC<{ children: ReactNode }> = ({ children } ) => {

    return (
        <div className={styles.cardsDescription}>
            {children}
        </div>
        
        
    )
}

export default CardsDescription