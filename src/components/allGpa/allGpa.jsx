import React, { useEffect, useState } from 'react'

const AllGpa = ({kurs, nowGpa, isDisplayTotalGpa, themeMode, display}) => {
    const [gpas, setGpas] = useState([]);
    const [gpa, setGpa] = useState(0);
    const [isDisp, setIsDisp] = useState(false)
    const [isDispForm, setIsDispForm] = useState(false)

    useEffect(()=>{
        setGpas(
            Array.from({length: kurs-1}, ()=> (0))
        )
        
    }, [kurs])
    
    const handleInputs = (idx, val) => {
        const newInputs = [...gpas];
        newInputs[idx] = val;
        setGpas(newInputs);
    };
    const calculus = e => {
        let totalgpa = 0
        e.preventDefault()
        for (let i = 0; i < gpas.length; i++) {
            totalgpa+=parseFloat(gpas[i]);
        }
        console.log(totalgpa);
        console.log(nowGpa);
        console.log(kurs);
        let fix = (totalgpa+parseFloat(nowGpa))/kurs
        setGpa(fix.toFixed(2))
        setIsDisp(true)
    } 

  return (
    <div className={`allGpa ${isDisplayTotalGpa} ${themeMode}`}>
        <form className={`allGpaForm ${isDispForm}`} onSubmit={(e)=>{calculus(e); setIsDispForm(true); display(false)}}>
        {
            gpas.map((item, idx)=>(
                <input key={idx} type='number' min={2} max={5} step={0.01} placeholder={`${idx+1}-kurs GPA bali`} onChange={(e)=>{
                    handleInputs(idx, e.target.value)
                }} />
            ))
        }
            <button type='submit'>Ok</button>
        </form>
        <p className={`allGpaFoot ${isDisp}`} >Umumiy GPA: {gpa}</p>
    </div>
    
  )
}

export default AllGpa
