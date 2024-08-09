import {AppContextProvider} from "../../context/ContextProvider";
import styles from "./styles.module.css";
import CalcNav from "../CalcNav/CalcNav";
import Form from "../RenderPage/RenderPage";




export default function Main(){

return (
    <div className={styles.calc}>
        <AppContextProvider>
        <div className={styles.container}>
                <div className={styles.div}>
                    <CalcNav/>
                    <Form/>
                </div>
        </div>
        </AppContextProvider>
    </div>
)};