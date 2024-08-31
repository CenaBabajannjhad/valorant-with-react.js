import React from 'react'

const Title = ({cName , title}) => {
  return (
    <h2 className={cName}>
      {title}
    </h2>
  )
}

export default Title;
