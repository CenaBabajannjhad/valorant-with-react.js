import React from 'react'

const Image = ({src , alt , width = '100%' , cName}) => {
  return (
    <img className={cName} width={width} src={src} alt={alt} />
  )
}

export default Image
