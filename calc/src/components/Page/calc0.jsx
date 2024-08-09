import { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import INPUTnumber from "../microElements/InputNumber"



export default function Page(){ // "Расчет ипотеки"
    const  {calcArr} =  useAppContext(); // Массив калькуляторов
    let {typeCalc, toggleTypeCalc} = useAppContext(); // Выбранный калькулятор
    let {initialMoney, toggleInitialMoney} = useAppContext();  // Сумма денег запрашиваемая либо инвестируемая
    let {time, toggleTime, // Срок инвестирования либо кредита в месяцах
    percent, togglePercent, // Процентная ставка
    startMoney, toggleStartMoney} = useAppContext();   // Старторвый капиталл или первоначальный взнос
    let {insurance, toggleInsurance} = useAppContext(); // Страхование


    return (
        <div className={styles.inputForm}>
                <div className={styles.inputForm__title}><h2>{calcArr[typeCalc].name}</h2></div>
                <INPUTnumber lable={"Стоимость жилья"}  state = {initialMoney} setState={toggleInitialMoney} span={"руб"}/>
                <INPUTnumber lable={"Первоначальный взнос"}  state = {startMoney} setState={toggleStartMoney} span={"руб"}/>
                <INPUTnumber lable={"Стоимость страховки в год"}  state = {insurance} setState={toggleInsurance} span={"руб"}/>
                <div>Сумма кредита {(initialMoney-startMoney+insurance*time/12 >0? initialMoney-startMoney+insurance*time/12: 0)}</div>
                <INPUTnumber lable={"Срок кредитования"}  state = {time} setState={toggleTime} span={"мес"}/> 
                <INPUTnumber lable={"Процентная ставка"}  state = {percent} setState={togglePercent} span={"%"}/>
                <div > Размер ежемесячного платежа: {Math.round(((initialMoney-startMoney+insurance*(time/12) >0? initialMoney-startMoney+insurance*(time/12): 0))* ((percent/1200)+ ((percent/1200)/ (1+(percent/1200))*(time-1))))}</div>               
        </div>
    )};