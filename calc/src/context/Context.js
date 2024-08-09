import { useState, useCallback, useEffect } from 'react';



export const useCreateAppContext = function(props) {
// Входные данные: ============================================================================================================

const calcArr =  
[   {   id:0, 
        name: "Расчет ипотеки",

    }, 
    {   id:1, 
        name: "Расчет автокредита",
        
    }, 
    {   id:2, 
        name: "Расчет инвестиций",
        
    },
    {   id:3, 
        name: "Пенсионные накопления",
        
    },
    {   id:4, 
        name: "Потребительский кредит",
        
    },
];





// Контекст для приложения ====================================================================================================



    const [typeCalc, setTypeCalc] = useState(props.typeCalc || 0); // Тип калькулятора 0-3
    const toggleTypeCalc = useCallback((num) => {setTypeCalc(num)},[]);

    const [initialMoney, setInitialMoney] = useState(props.initialMoney || 2000000); // Сумма денег запрашиваемая для кредита
    const toggleInitialMoney = useCallback((num) => {setInitialMoney(num)},[]);

    const [monthlyPayment, setMonthlyPayment] =useState(props.monthlyPayment || 1000); // Сумма ежемесячных инвестиций
    const toggleMonthlyPayment = useCallback((num) => {setMonthlyPayment(num)}, [])   

    const [startMoney, setStartMoney] = useState(props.startMoney || 500000) // Старторвый капиталл или первоначальный взнос
    const toggleStartMoney = useCallback((num) => {setStartMoney(num)}, [])

    const [time, setTime] = useState(props.time || 20); // Срок инвестирования либо кредита лет
    const toggleTime = useCallback((num) => {setTime(num)},[]);

    const [percent, setPercent] = useState(props.percent || 9); // Процентная ставка
    const togglePercent = useCallback((num) => setPercent(num), []);

    const [insurance, setInsurance] = useState(props.insurance || 0); // страхование
    const toggleInsurance = useCallback((num) => setInsurance(num), []);
    
    return {
        calcArr,  // Массив калькуляторов

        typeCalc, toggleTypeCalc, // Выбранный калькулятор
        initialMoney, toggleInitialMoney, // Сумма денег запрашиваемая либо инвестируемая
        time, toggleTime, // Срок инвестирования либо кредита в месяцах
        percent, togglePercent, // Процентная ставка
        startMoney, toggleStartMoney,  // Старторвый капиталл или первоначальный взнос
        insurance, toggleInsurance, // Страхование
        monthlyPayment, toggleMonthlyPayment // Ежемесячные инвесимции
}
}