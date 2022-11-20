import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import "./styles.css"

interface ListProps {
  children: any
}

// const SelectContext = createContext()

export default function Select({children}) {

  return (
    <div className={`nice-select`} >
      {children}
    </div>
  )
}

Select.Trigger = function ({ children }) {
  return(
    {children}
  )
};


// Select.Content = function({ children}) {
//   const { isCollapsed} = useContext(SelectContext)
//   return (
//       <ul className='list'>
//         {children}
//       </ul>
//   )
// }

