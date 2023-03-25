import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Column from './Components/Column/Column'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App"> 
     <body className='body'>
        <Header />
        <section className='content-column'>
          <Column title='Planejamento'/>
          <Column title='A Fazer' />
          <Column title='Fazendo'/>
          <Column title='Feito'/>
        </section>
     </body>
      
    </div>
  )
}

export default App
