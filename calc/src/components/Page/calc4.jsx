import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import INPUTnumber from "../microElements/InputNumber"
import { useEffect, useState } from "react";



export default function Page(){ // "Расчет потребительского кредита"
    const  {calcArr} =  useAppContext(); // Массив калькуляторов
    let {typeCalc, toggleTypeCalc} = useAppContext(); // Выбранный калькулятор
    let {initialMoney, toggleInitialMoney} = useAppContext();  // Сумма денег запрашиваемая либо инвестируемая
    let {time, toggleTime, // Срок инвестирования либо кредита в месяцах
    percent, togglePercent, // Процентная ставка
    startMoney, toggleStartMoney} = useAppContext();   // Старторвый капиталл или первоначальный взнос
    let {insurance, toggleInsurance} = useAppContext(); // Страхование
    let [monthlyRate, setMonthlyRate] = useState(0); // Ежемесячная ставка
    let [totalRate, setTotalRate] = useState(0); // Общая ставка
    let [creditPayment, setCreditPayment] = useState(0); // Кредитный платеж


    togglePercent(14.5);
        useEffect(()=>{
            setMonthlyRate(percent/1200)
        },[percent]);

        useEffect(()=>{
            setTotalRate( (1 + monthlyRate)**(time*12)   )
        },[monthlyRate, time]);

        useEffect(()=>{
            setCreditPayment(  ((initialMoney-startMoney+insurance*(time)) >0) ? Math.round((initialMoney-startMoney+insurance*(time))*monthlyRate*(totalRate/(totalRate-1))) : 0  )
        },[totalRate, initialMoney,startMoney,insurance]);




    return (
        <div className={styles.inputForm}>
                <div className={styles.inputForm__title}><h2>{calcArr[typeCalc].name}</h2></div>
                <INPUTnumber lable={"Стоимость жилья"}  state = {initialMoney} setState={toggleInitialMoney} span={"руб"}/>
                <INPUTnumber lable={"Первоначальный взнос"}  state = {startMoney} setState={toggleStartMoney} span={"руб"}/>
                <INPUTnumber lable={"Стоимость страховки в год"}  state = {insurance} setState={toggleInsurance} span={"руб"}/>
                <div>Сумма кредита {(initialMoney-startMoney+insurance*time >0? initialMoney-startMoney+insurance*time: 0)}</div>
                <INPUTnumber lable={"Срок кредитования"}  state = {time} setState={toggleTime} span={"Лет"}/> 
                <INPUTnumber lable={"Процентная ставка"}  state = {percent} setState={togglePercent} span={"%"}/>
                <div > Размер ежемесячного платежа: {creditPayment}</div>    
                <div> Необходимый доход: {Math.round(creditPayment*2.5)}</div>           
        </div>
    )};