import React, { useState } from 'react'

interface CloseRightProps {
    onCloseRight: (postId: string) => void
  }


const CloseRight = ({onCloseRight}: CloseRightProps)  => {


    const onCloseRighted = (e:any) => {
        var selectId = '2'
        onCloseRight(selectId)
    }

  return (
    <>
     <button 
      className='btn-closeRight'
      onClick={(e) => onCloseRighted(e)}
      > X </button>
    </>
  )
}

export default CloseRight