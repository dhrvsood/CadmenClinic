import React from 'react'

const TailwindWrapper = ({ children }) => {
  return <div>
    {children}
    <style jsx global>{`
      @import '../styles/tailwind.css';
    `}</style>
  </div>
}

export default TailwindWrapper
