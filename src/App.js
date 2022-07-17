import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [gameList, setGameList] = useState(null)

  useEffect(() => {
    const apiCall = async () => {
      let { data } = await axios.get(
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json',
      )
      console.log(data)
      let temp = [...data]
      temp.splice(0, 1)
      data = [...temp]
      setGameList(data)
    }
    apiCall()
    return () => {}
  }, [])
  return (
    <div className="App">
      <h1>Welcome to game app</h1>
      <div className='list'>
        {gameList &&
          gameList.map((e, i) => {
            return (
              <div className='card'>
                <div className='container'>
                  <h3>{e.title}</h3>
                  <h4>{e.platform}</h4>
                  <h5>Score {e.score}</h5>
                  <div className='info'><b>Genre:</b> {e.genre}</div>
                  <div><b>Editor's choice:</b> {e.editors_choice}</div>
                </div>
              </div>
            )
          })}
      </div>
      
    </div>
  )
}

export default App
