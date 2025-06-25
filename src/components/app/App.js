// import { Button } from "antd";
import 'antd/dist/reset.css';
import '../../styles.scss';
import Theme from '../theme/theme';
import FirstDisplay from '../firstDisplay/firstDisplay';
import SecondDisplay from '../secondDisplay/secondDisplay';
import InputKrBall from '../inputsKrBall/inputsKrBall';
import TotalGpa from '../totalGpa/totalGpa';
import AllGpa from '../allGpa/allGpa';

import { useEffect, useState } from 'react';
import { theme } from 'antd';


function App() {

  const [kurs, setKurs] = useState(1);
  const [sbj, setSbj] = useState(0);
  const [changeKrBl, setChangeKrBl] = useState([])
  const [nowGpa, setNowGpa] = useState(0)
  const [themeMode, setThemeMode] = useState('light')
  
  const [isDisplay, setIsDisplay] = useState(true)
  const [isDisplayGPA, setIsDisplayGPA] = useState(false)
  const [isDisplayKrBal, setisDisplayKrBal] = useState(false)
  const [isDisplayTotalGpa, setisDisplayTotalGpa] = useState(false)
  // const [isDisplayAllGpa, setisDisplayAllGpa] = useState(false)
  const onChangeKurs = k => {
      setKurs(k)
      setIsDisplayGPA(true)
  }

  const display = bool => {
    setIsDisplay(bool)
    setIsDisplayGPA(false)
  }

  const submitChange = (arr, bool) => {
    setChangeKrBl(arr)
    setisDisplayKrBal(bool)
    setisDisplayTotalGpa(true)
  }
  const changeNowGpa = (gpa) => {
    setNowGpa(gpa)
    // setisDisplayAllGpa(true)
  }

  const changeCountSbj = (e, tr) => {
    setisDisplayKrBal(tr)
    setSbj(e)
  }

  const changeTheme = e => {
    setThemeMode(e.target.value)
  }

  useEffect(()=>{
    console.log(themeMode);
    
  })
 


  return (
    <>
      <Theme themeMode={themeMode} changeTheme={changeTheme} />
      <FirstDisplay isDisplay={isDisplay} themeMode={themeMode} kurs={kurs} onChangeKurs={onChangeKurs}/>
      <SecondDisplay themeMode={themeMode} isDisplayGPA={isDisplayGPA} changeCountSbj={changeCountSbj} />
      <InputKrBall themeMode={themeMode} isDisplayKrBal={isDisplayKrBal} submitChange={submitChange} sbj={sbj} />
      <TotalGpa themeMode={themeMode} kurs={kurs} isDisplayTotalGpa={isDisplayTotalGpa} changeKrBl={changeKrBl} changeNowGpa={changeNowGpa} />
      <AllGpa display={display} themeMode={themeMode} isDisplayTotalGpa={isDisplayTotalGpa} kurs={kurs} nowGpa={nowGpa}/>
    </>
  );
}

export default App;
