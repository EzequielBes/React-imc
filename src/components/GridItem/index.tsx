import {Level} from "../../helpers/imc";
import downImage from "../../assets/down.png";
import upImage from "../../assets/up.png";
import style from "./GridItem.module.css"



type Props ={
    item:Level;
}

export const GridItem =({item}:Props)=>{
    return (
        <div className={style.main} style={{backgroundColor: item.color}}>
            <div className={style.gridIcon}>
              <img src={item.icon === 'up' ? upImage : downImage} alt="" width='30'/>
            </div>
            <div className={style.gridTitle}>
                {item.title}
            </div>
            {item.yourImc && 
            <div className={style.yourImc}>Seu imc é {item.yourImc} kg/m2</div>}
            <div className={style.gridInfo}>
                <>
                    IMC esta entre <strong>{item.imc[0]} </strong> e <strong> {item.imc[1]} </strong>
                </>
            </div>
        </div>
    )
}