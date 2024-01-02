
import './App.css'
import Tile from '../components/Tile'

function App(){
  let imageAddress ="https://images.app.goo.gl/iGwBB5pSC5Nyc9LX8"
  return (
    <>
    <h1 style ={{backgroundColor: "red"}}>2</h1>
    <span className='span'>How's going on</span>
    <Tile/>
    <img src={imageAddress} />
    </>
  )
}

export default App;
