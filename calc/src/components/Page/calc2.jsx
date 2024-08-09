import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import INPUTnumber from "../microElements/InputNumber"




export default function Page(){ //"Расчет инвестиций"
    const  {calcArr} =  useAppContext(); // Массив калькуляторов
    let {typeCalc, toggleTypeCalc} = useAppContext(); // Выбранный калькулятор
    let {initialMoney, toggleInitialMoney} = useAppContext();  // Сумма денег запрашиваемая либо инвестируемая
    let {time, toggleTime, // Срок инвестирования либо кредита в месяцах
    percent, togglePercent, // Процентная ставка
    startMoney, toggleStartMoney} = useAppContext();   // Старторвый капиталл или первоначальный взнос
    let {insurance, toggleInsurance} = useAppContext(); // Страхование
    let {monthlyPayment, toggleMonthlyPayment}= useAppContext(); // Ежемесячные инвесимции
    togglePercent(3.5);


    return (
        <div className={styles.inputForm}>
                <div className={styles.inputForm__title}><h2>{calcArr[typeCalc].name}</h2></div>

                <INPUTnumber lable={"Первоначальный капиталл"}  state = {startMoney} setState={toggleStartMoney} span={"руб"}/>
                <INPUTnumber lable={"Ежемесячный взнос"}  state = {monthlyPayment} setState={toggleMonthlyPayment} span={"руб"}/>                
                <INPUTnumber lable={"Срок инвестиций"}  state = {time} setState={toggleTime} span={"мес"}/> 
                <INPUTnumber lable={"Процентная ставка"}  state = {percent} setState={togglePercent} span={"%"}/>
                <div > За {time} месяцев вы накопите: {Math.round(((startMoney)*(1+percent/1200)**time)+(monthlyPayment*time)*(1+percent/2400)**time)}</div>               
        </div>
    )};