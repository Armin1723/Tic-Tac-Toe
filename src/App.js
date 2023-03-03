import GameBox from './Components/GameBox';
import './App.css';
import React , {useEffect, useState} from 'react';
import GameOver from './Components/GameOver';
import Ting from './Assets/ting.mp3';
import Footer from './Components/Footer'
import Confetti from 'react-confetti';
import Tic from './Assets/tic.png'

function App() {
  const [turn, setTurn] = useState('X');
  const [array,setArray] = useState(Array(9).fill(''));
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameDrawn , setGameDrawn] = useState(false);
  const [winCounter, setWinCounter] = useState({ X: 0, O: 0 });
  let music = new Audio(Ting);

  useEffect(()=>{
    checkWin();
    // eslint-disable-next-line
  },[array]);

  //To prevent accidental reloads of webpage.
  const alertUser = (e) => {     e.preventDefault();     e.returnValue = "";   };
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const handleReset=()=>{
      setArray(Array(9).fill(''));
      setIsGameOver(false);
      setGameDrawn(false);
  }

  const handleResetCounter = () =>{
    setWinCounter({ X: 0, O: 0});
    handleReset();
  }

  const checkWin=() =>{
      let wins = [
        [0, 1, 2],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((array[e[0]] === array[e[1]]) && (array[e[2]] === array[e[1]]) && (array[e[0]] !== "") ){
          if(array[ e[0]] === 'X')
            setWinCounter({ ...winCounter, X: winCounter.X + 1 });
          else
            setWinCounter({ ...winCounter, O: winCounter.O + 1 });
          setIsGameOver(true);
        }}) 

    if(!array.includes('')){
      setGameDrawn(true);
      setIsGameOver(true);
    }
  }
  

  function handleClick(id) {
    music.play();
    setArray(
      array.map((item, index) => {
        if (index === id) {
          if (turn==='X') {
            setTurn('O');
            // checkWin();
            return turn ;
          } else {
            setTurn('X');
            // checkWin();
            return turn ;
          }
        }
        else {
          return item;
        }
      })
      );
  }

  return (
    <div className="max-w-screen-md min-h-[100vh] text-gray-700 mx-auto shadow-xl shadow-gray-400 flex flex-col justify-between bg-gradient-to-br from-cyan-300 to-red-300">
      <div className='flex flex-col text-3xl items-center justify-center space-y-4 m-3'>
        <div className='font-extrabold text-[6vh] py-5'>Tic Tac Toe</div>
        <div><img src={Tic} alt="" className='w-32 flex flex-row justify-center items-center cursor-pointer hover:rotate-180 transition ease-out hover:scale-110 drop-shadow-xl shadow-gray-800' /></div>
        <div className='flex flex-row'>Win Counter: </div>
        <div><pre>X : {winCounter.X}       O : {winCounter.O}</pre></div>
        {!isGameOver && <div className='pt-6'>Turn For {turn}</div> }
      </div>
      {!isGameOver && <GameBox array={array} handleClick={handleClick}/> }
      {isGameOver && <GameOver turn={turn} handleReset={handleReset} gameDrawn={gameDrawn} handleResetCounter={handleResetCounter}/>}
      { isGameOver && !gameDrawn && <Confetti />}
      <Footer/>
    </div>
  );
}

export default App;;
