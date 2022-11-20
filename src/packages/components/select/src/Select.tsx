import React, { useState } from "react"
import './styles.css'

function select() {
  const [toggleOption, setToggleOption] = useState(false)

  const [show, setShow] = useState('')

  const handleSetShow = (data: any) => {
    setShow(data)
    console.log(data)
  }

  return (
    <div className={`nice-select ${toggleOption ? 'active': ''}`} onClick={() => setToggleOption(!toggleOption)}>
      <input type='text' value={show} className='textBox' placeholder='Dropdown Menu' readOnly />
      <ul className='list'>
        <li onClick={() => setShow('HTML')} >HTML</li>
        <li onClick={() => setShow('JS')} >JS</li>
        <li onClick={() => setShow('REACT')} >REACT</li>
      </ul>
    </div>
  )
}

interface ListProps {
  children: any
}

const Select = ({children}: ListProps) =>  (
  <select className='list'>
    {children}
  </select>
)

const SelectItem = ({children, ...props}: ListProps) => {
  const { value} = props

  return (
    <option value={value} >
      {children}
    </option>
  )
}

export default select
