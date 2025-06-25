import React, { useEffect } from 'react'

const TotalGpa = ({changeKrBl, isDisplayTotalGpa, changeNowGpa, themeMode,kurs}) => {
    let krr = 0, ball = 0, surat=0;
    // console.log(changeKrBl);
    
    for (let i = 0; i < changeKrBl.length; i++) {
        krr+=parseInt(changeKrBl[i].kr);
        ball+=parseInt(changeKrBl[i].ball);
        surat+=parseInt(changeKrBl[i].kr)*(parseInt(changeKrBl[i].ball))
    }
    let gpa = surat/krr
    useEffect(()=>{
        changeNowGpa(gpa.toFixed(2))
    })
    return (
        <div className={`totalGpa ${isDisplayTotalGpa} ${themeMode}`}>
            <div className='bx'>
                <span>Jami kredit:</span> <b>{krr}</b>
            </div>
            <div className='bx'>
                <span>Umumiy ball:</span> <b>{ball}</b>
            </div>
            <div className='bx'>
                <span>{kurs}-kurs GPA bali:</span> <b>{gpa.toFixed(2)}</b>
            </div>
        </div>
    )
}

export default TotalGpa
