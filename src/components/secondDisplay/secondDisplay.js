import React from 'react'


const SecondDisplay = ({isDisplayGPA, changeCountSbj, themeMode}) => {
 
  return (
    <div className={`subjectCount ${isDisplayGPA} ${themeMode}`}>
        <span>Nechta fan bor?</span> &nbsp;
        <input type="number" 
        name='sbjCount'
        min={2} 
        max={16} 
        step={1} 
        onChange={(e) => changeCountSbj(e.target.value, true)} 
        placeholder='...'/>
    </div>
  )
}

export default SecondDisplay
