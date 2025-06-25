import React, { useState, useEffect, useRef } from 'react';

const InputKrBall = ({ sbj, submitChange,themeMode,isDisplayKrBal }) => {
  const [inputs, setInputs] = useState([]);
  const inputRefs = useRef([]);
  

  useEffect(() => {
    if (sbj > 0) {
      setInputs(Array.from({ length: sbj }, () => ({ kr: '', ball: '' })));
      inputRefs.current = Array.from({ length: sbj }, () => React.createRef());
    }
  }, [sbj]);

  const handleInputs = (idx, fld, val) => {
    const newInputs = [...inputs];
    newInputs[idx][fld] = val;
    setInputs(newInputs);
    if (fld === 'kr' && val.length > 0 && val.length < 2) {
      inputRefs.current[idx].current.focus();
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Barcha qiymatlar:', inputs);
    submitChange(inputs, false);
  };

  return (
    <form className={`krBals ${isDisplayKrBal} ${themeMode}`} onSubmit={
      (e)=>{
        handleSubmit(e);
        // krbl(inputs)
      }
    }>
      {inputs.map((item, i) => (
        <div className='row' key={i} style={{ marginBottom: '10px' }}>
          <input
            type="number"
            name={`kr${i}`}
            placeholder={`Kr ${i + 1}`}
            value={item.kr}
            onChange={(e) => handleInputs(i, 'kr', e.target.value)}
            min={2}
            max={8}
            step={1}
            required
          />
          <input
            type="number"
            name={`ball${i}`}
            placeholder={`Ball ${i + 1}`}
            value={item.ball}
            onChange={(e) => handleInputs(i, 'ball',  (e.target.value === '2' || e.target.value === '02' ? 0 : e.target.value))}
            min={0}
            max={5}
            step={1}
            maxLength={1}
            required
            ref={inputRefs.current[i]} 
          />
        </div>
      ))}
      {inputs.length > 0 && <button type="submit">Ok</button>}
    </form>
  );
};

export default InputKrBall;
