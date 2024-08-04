import { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";





export default function Page(){ // "Расчет автокредита"
    const  {calcArr} =  useAppContext(); // Массив калькуляторов
    let {typeCalc, toggleTypeCalc} = useAppContext(); // Выбранный калькулятор
    let {initialMoney, toggleInitialMoney} = useAppContext();  // Сумма денег запрашиваемая либо инвестируемая
    
    let [initialMoneyTarget, setInitialMoneyTarget] = useState();
    useEffect(()=>{   toggleInitialMoney(initialMoneyTarget)},[initialMoneyTarget]);


    return (
        <div className={styles.inputForm}>
            <div className={styles.inputForm__title}><h2>{calcArr[typeCalc].name}</h2></div>
            Стоимость покупаемого автомобиля:     <div className={styles.selectDiv}>
                                                <input type="number" className={styles.selectNum} value={initialMoney} onChange={(e)=>{setInitialMoneyTarget(e.target.value)}}  />
                                                <span>руб</span>
                                            </div>

        </div>
    )};