import React from 'react'

const GameBox = ({array, handleClick}) => { 
  return (
    <div className='board my-2'>
        {array.map((item,index) => {
                if( item === '')
                return (
                    <div key={index} className='square' onClick={() => handleClick(index)}>
                        {item}
                    </div>
                )
                else
                return(
                    <div key={index} className='square clicked flex items-center justify-center' >
                        {item}
                    </div>
                )
        })}
    </div>
  )
}

export default GameBox
