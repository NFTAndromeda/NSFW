import { ReactNode,FC } from "react"
import styles from "../styles/Home.module.css";

const CardsTitle: FC<{ children: ReactNode }> = ({ children } ) => {

    return (
        <div className={styles.cardTitle}>
            {children}
        </div>
        
    )
}

export default CardsTitle