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
];





// Контекст для приложения ====================================================================================================



    const [typeCalc, setTypeCalc] = useState(props.typeCalc || 1); // Тип калькулятора 0-3
    const toggleTypeCalc = useCallback((num) => {setTypeCalc(num)},[]);

    const [initialMoney, setInitialMoney] = useState(props.initialMoney || 0); // Сумма денег запрашиваемая либо инвестируемая
    const toggleInitialMoney = useCallback((num) => {setInitialMoney(num)},[]);

    const [time, setTime] = useState(props.time || 12); // Срок инвестирования либо кредита в месяцах
    const toggleTime = useCallback((num) => {setTime(num)},[]);

    
    
    
    return {
        calcArr,  // Массив калькуляторов


        typeCalc, toggleTypeCalc, // Выбранный калькулятор
        initialMoney, toggleInitialMoney, // Сумма денег запрашиваемая либо инвестируемая
        time, toggleTime, // Срок инвестирования либо кредита в месяцах
};
}