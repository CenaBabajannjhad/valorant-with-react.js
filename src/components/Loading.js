import React from 'react'
import Image from './Image'
import LoadingImage from '../assets/gif/loading.gif'

const Loading = ({status}) => {
  return (
    <div className='loading'>
      <Image src={LoadingImage} width='100px' alt='loading...'/>
    </div>
  )
}

export default Loading
