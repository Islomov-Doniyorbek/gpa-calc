import React from 'react'

import 'antd/dist/reset.css';
import { Flex, Radio } from 'antd';
const options = [
  { label: 'Negative', value: 'negative' },
  { label: 'Light', value: 'light' },
  { label: 'Forest', value: 'forest' },
  { label: 'Navy', value: 'navy' },
  { label: 'Cherry', value: 'crimson' },
];
const Theme = ({changeTheme, themeMode}) => {
  return (
    <div className={`theme ${themeMode}`}>
       <Flex vertical gap="middle">
        <Radio.Group block options={options} defaultValue="Pear" optionType="button" onChange={(e)=>changeTheme(e)} />
      </Flex>
    </div>
  )
}

export default Theme
