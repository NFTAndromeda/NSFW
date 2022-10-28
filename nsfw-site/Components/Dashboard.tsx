import styles from "../styles/Home.module.css";
import { FC } from "react";
import {Masonry} from "@mui/lab"
import HighlitedCards from "./HighlitedCard"
import CardsTitle from "./CardsTitle"
import Cards from "./Cards"
import CardsDescription from "./CardsDescription";
import Image from "next/image"
import Logo from "../image/at.jpg"

export const Dashboard: FC = () => {
    return (
            <div className={styles.dashboard}>
                <div className={styles.marginAuto}>
                    <Masonry columns={3} spacing={2} >
                        <HighlitedCards>
                            <CardsTitle>Prova</CardsTitle>
                            <div className={styles.width100}> 
                                <Image className={styles.cardImage} src={Logo} alt='aaa'/>
                            </div>
                            <CardsDescription> 1 ciao sono paolosono paolsono paolciao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolo</CardsDescription>
                        </HighlitedCards>
                        <HighlitedCards>
                            <CardsTitle>Prova</CardsTitle>
                            <CardsDescription> 2ciao sono paolo ciao sono iao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolocipaolociao sono paolociao sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paoliao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolocio sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolo</CardsDescription>
                        </HighlitedCards>
                        <HighlitedCards>
                            <CardsTitle>Prova</CardsTitle>
                            <CardsDescription>3 ciao sono paolo ciao sono paolociao sono paolociao sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paoliao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolo</CardsDescription>
                        </HighlitedCards> 


                        <Cards>
                            <CardsTitle>Prova</CardsTitle>
                            <CardsDescription>3 ciao sono paolo ciao sono paolociao sono paolociao sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paoliao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolo</CardsDescription>
                        </Cards>
                        <Cards>
                            <CardsTitle>Prova</CardsTitle>
                            <CardsDescription>3 ciao sono paolo ciao sono paolociao sono paolociao sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paoliao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolo</CardsDescription>
                        </Cards>
                        <Cards>
                            <CardsTitle>Prova</CardsTitle>
                            <CardsDescription>3 ciao sono paolo ciao sono paolociao sono paolociao sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paoliao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolo</CardsDescription>
                        </Cards>
                        <Cards>
                            <CardsTitle>Prova</CardsTitle>
                            <CardsDescription>3 ciao sono paolo ciao sono paolociao sono paolociao sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paoliao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociiao sono paolo ciao sono paolociao sono paolociociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolociao ciao sono paolociao sono paolociao sono paolociao sono paolo sono paolo</CardsDescription>
                        </Cards> 
                    </Masonry>
                </div>                   
            
            </div>
        
       
       
    )
}

  