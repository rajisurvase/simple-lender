import dynamic from 'next/dynamic'
import React from 'react'


const Header=dynamic(()=>import('../Header/Header'))
const Footer=dynamic(()=>import('../Footer/Footer'))

type wrapperProps = {
    children:JSX.Element
}

const Wrapper = (props:wrapperProps) => {
  return (
    <div>
        <Header/>
        {
            props.children
        }
        <Footer/>
    </div>
  )
}

export default Wrapper