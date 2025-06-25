import React from 'react'
import { Select } from 'antd';


const FirstDisplay = ({kurs, onChangeKurs, themeMode, isDisplay}) => {
  return (
    <div className={`kurs ${themeMode} ${isDisplay}`}>
        Kursni tanlang:&nbsp;
        <Select value={kurs} 
            onChange={(value)=> onChangeKurs(value)}
            showSearch
            placeholder="Kurs"
            filterOption={(input, option) => {
              var _a;
              return (
                (_a = option === null || option === void 0 ? void 0 : option.label) !== null &&
                _a !== void 0
                ? _a
                : ''
              )
              .toLowerCase()
              .includes(input.toLowerCase());
            }}
            options={[
              { value: 1, label: 'I' },
              { value: 2, label: 'II' },
              { value: 3, label: 'III' },
              { value: 4, label: 'IV' },
            ]}
            
        />

    </div>
  )
}

export default FirstDisplay
