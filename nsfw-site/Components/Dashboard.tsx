import styles from "../styles/Home.module.css";
import { FC } from "react";
import {Masonry} from "@mui/lab"
import Cards from "./Cards"
import CardsTitle from "./CardsTitle"

export const Dashboard: FC = () => {
    return (

        <div className={styles.absT100}>
            <div className={styles.marginAuto}>
            <Masonry columns={4} spacing={4}>
                <Cards>
                     <CardsTitle>Prova</CardsTitle>
                </Cards>
                <Cards>
                    <CardsTitle>Prova</CardsTitle>
                </Cards>
                <Cards>
                    <CardsTitle>Prova</CardsTitle>
                </Cards>
            </Masonry>
            </div>                   
            
        </div>
       
    )
}

  