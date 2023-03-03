import React from 'react'
import Win from '../Assets/Win.gif'
import gameOverMusic from '../Assets/gameOver.mp3'

function GameOver({ turn , handleReset , gameDrawn , handleResetCounter}) {
  
  let gameOverSound = new Audio(gameOverMusic);
  gameOverSound.play();
  setTimeout(() => {
    gameOverSound.pause();
  }, 3000);


  return (
      <div className='items-center justify-center flex flex-col space-y-4 my-5'>
        {!gameDrawn && <div className='flex items-center justify-center text-4xl font-bold'>{turn==='X'?'O':'X'} won.</div>}
        {gameDrawn && <div className='flex items-center justify-center text-4xl font-bold'>Game Drawn</div>}
        <img src={Win} alt="Winning" className='w-[20vh] transition ease-out'/>
        <p className='text-5xl font-extrabold '>
          GameOver
        </p>
        <button className='focus:outline-none bg-gray-300 p-[1vh] transition ease-out hover:scale-110 rounded-md border-r-2' onClick={handleReset}>Reset</button>
        <button className='focus:outline-none bg-gray-300 p-[1vh] transition ease-out hover:scale-110 rounded-md border-r-2' onClick={handleResetCounter}>Reset Win Counter</button>
      </div>
  )
}

export default GameOver
