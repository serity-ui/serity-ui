import ReactDOM from 'react-dom'

function Portal(props: any) {
  if(typeof window !== 'undefined') {
    return ReactDOM.createPortal(props.children, document.body)
  }
}

export default Portal
