import React, { createContext, useContext, useState } from 'react'
import './styles.css'

interface Props {
  children: React.ReactNode
  value?: string
}

interface TriggerProps {
  value?: string
  placeholder: string
}

const ThemeContext = createContext<any>('')

export function Select({ children }: Props) {
  const [toggle, setToggle] = useState(false)
  const [theme, setTheme] = useState('')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`nice-select ${toggle ? 'active' : ''}`} onClick={() => setToggle(!toggle)}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const SelectTrigger = ({ value, placeholder }: TriggerProps) => {
  const { theme } = useContext(ThemeContext)
  let valor = value
  if (theme !== '') {
    valor = theme
  }
  return <input type='text' placeholder={placeholder} value={valor} readOnly />
}

export const SelectContent = ({ children }: Props) => {
  return <ul className='list'>{children}</ul>
}

export const SelectItem = ({ children, value }: Props) => {
  const { setTheme } = useContext(ThemeContext)
  return <li onClick={() => setTheme(value)}>{children}</li>
}
