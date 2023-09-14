
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Home from './Components/Home/Home'


function App() {

  const [actorsData, setActorsData] = useState([])
  const[remaining, setRemaining]=useState(0)
  const [totalCost, setTotalCost] = useState(0)

  // handleActor er moddhe actor parameter hisebe pathate hobe, parent and home child e o declare korte hobe
  const handleActor = (actor) => {
    // kono ekta card jeno 2 bar select na kora jay tahole ei process. ekhane isExist ekta variable jekhane actorsData arekta variable jekhane sob data ache, ei actorsData k find((item)=> item.id == actor.id) diye dekha jabe j same id show korche kina

    const isExist = actorsData.find((item) => item.id == actor.id);
    // isExist ? alert('already booked') : setActorsData([...actorsData, actor])
    let count = actor.salary
    // if else method-----------logic one for single select
     if (isExist) {
      alert('already booked')

    }
    else {
      actorsData.forEach((item) => {
        count += item.salary
      })
      
      const totalRemaining = 20000-count;
      // logic -2 for not crossing 20000$
      if (count > 20000) {
        return alert('Not sufficient Balance to select')
        
      }
      else{
        setTotalCost(count)
        setRemaining(totalRemaining);
        const singleActorsData = [...actorsData, actor]
        setActorsData(singleActorsData)
      }
      
    }

    
   
  }

  return (


    <div >
      <div>
        <p className='text-6xl mb-6 mt-4 text-green-600'>Bangladesh</p>
      </div>
      <div className='default flex'>

        <Home handleActor={handleActor}></Home>
        <Cart actorsData={actorsData} remaining={remaining} totalCost={totalCost} ></Cart>
      </div>

    </div>
  )
}

export default App
