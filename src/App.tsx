import { useState } from 'react'
import styles from './App.module.css'
import powered from './assets/powered.png'
import { levels,Level, calculateImc } from './helpers/imc';
import {GridItem} from './components/GridItem';
import arrow from './assets/leftarrow.png'


const App=()=> {
  const [yourheight,setYourheight]=useState<number>(0);
  const [yourWeight,setYourWeight]=useState<number>(0);
  const [toShow, setToShow]= useState<Level | null>(null);


  function handleCalculate(){
    if(yourWeight && yourheight){
      setToShow(calculateImc(yourheight,yourWeight))
      
    }else{
      alert('falta prencher') 
    } 
  }
  function ofshow(){
    setToShow(null);
    setYourWeight(0)
    setYourheight(0)
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
            <img src={powered} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.left}>
            <h1>Calcule o seu IMC</h1>
            <p>IMC é a sigla para indice de Massa Corporal, parametro adotado pela Organização Mundial de saude para calcular o peso ideal de cada pessoa</p>

            <input type="number"
              placeholder='Digite a sua altura em metros EX(1.60)Cm'
              value={yourheight > 0 ? yourheight : ''}
              onChange={e => setYourheight(parseFloat(e.target.value))}
              disabled={toShow ? true: false}/>
        
            <input type="number"
                placeholder='digite o seu peso em kg exemplo : 56'
                value={yourWeight > 0 ? yourWeight : ''}
                onChange={e => setYourWeight(parseFloat(e.target.value))}
                disabled={toShow ? true: false}/>
                <button onClick={handleCalculate} disabled={toShow ? true: false}>Calcular</button> 
        </div>

        <div className={styles.right}> 
          {!toShow && 
            <div className={styles.grid}>
              {levels.map((item,key)=>(
                <GridItem key={key} item={item}/>
              ))}
            </div>
            }
            {toShow && 
            <div className={styles.rightBig}>
              <div className={styles.rightArrow}onClick={ofshow}>
                <img src={arrow}alt='' width='20'></img>
              </div>
              <GridItem item={toShow}/>
              </div>}
        </div>
      </div>
    </div>
  )
} 
export default App;
