import {useAppContext} from  "../../context/ContextProvider";
import Page0 from "../Page/calc0";
import Page1 from "../Page/calc1";
import Page2 from "../Page/calc2";
import Page3 from "../Page/calc3";
import Page4 from "../Page/calc4";


export default function RenderPage(props) {
    let {typeCalc} = useAppContext(); // Выбранный калькулятор
    let ArrPages = [<Page0/>,<Page1/>,<Page2/>,<Page3/>, <Page4/>];  


return <div> {ArrPages[typeCalc]}  </div> 
}
