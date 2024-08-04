import { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import {useAppContext} from  "../../context/ContextProvider";


export default function CalcNav(){
    const  {calcArr} =  useAppContext(); // Массив калькуляторов
    let {typeCalc, toggleTypeCalc} = useAppContext(); // Выбранный калькулятор




let Items =  () =>  {return calcArr.map((elem, index)=>
<div className={typeCalc !== calcArr[index].id ? styles.item : styles.itemSelect} onClick={()=>{ toggleTypeCalc(index) }}> 
 <p>{calcArr[index].name}</p>
</div>

)};



console.log(Items);


                            
return (
            <div className={styles.header}>
                <Items/>
            </div>

)};