import { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";
import Page0 from "../Page/calc0";
import Page1 from "../Page/calc1";
import Page2 from "../Page/calc2";
import Page3 from "../Page/calc3";




export default function Form(){
    const  {calcArr} =  useAppContext(); // Массив калькуляторов
    let {typeCalc, toggleTypeCalc} = useAppContext(); // Выбранный калькулятор
    let {initialMoney, toggleInitialMoney} = useAppContext();  // Сумма денег запрашиваемая либо инвестируемая


let RETURN = ()=>{
switch(typeCalc){
case 0: return <Page0/>;    break;
case 1: return <Page1/>;    break;
case 2: return <Page2/>;    break;
case 3: return <Page3/>;    break;
default: return <Page0/>;    break;
}}


return (
    <RETURN/>  
)};