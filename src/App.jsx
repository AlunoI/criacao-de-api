import { useState, useEffect } from 'react'
import './App.css'
import Conteudo from './componentes/index'
import Conteudo2 from './componentes/conteudo2'
import Conteudo3 from './componentes/conteudo3'

function App() {


  const [activeTab, setActiveTab] = useState('Tab 1')

  function handleChangeTab(tabName) {
    setActiveTab(tabName)
  }



  function renderTabContent() {
    switch (activeTab) {
      case 'Tab 1':
        return <Conteudo/>
      case 'Tab 2':
        return <Conteudo2/>
      case 'Tab 3':
        return <Conteudo3/>
      default:
        break
    }
  }



  return (
    <>
      <h1 className='items-center justify-center flex h-16 text-xl'><span className='font-bold'>Jogos</span></h1>
      <section className='flex items-center justify-around w-2/5 h-24 px-20 mx-auto'>
        <button onClick={() => handleChangeTab('Tab 1')} className='bg-gray-400 border-solid rounded-xl h-11 w-32 border-gray border-2 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300'>Todos os jogos</button>
        <button onClick={() => handleChangeTab('Tab 2')} className='bg-gray-400 border-solid rounded-xl h-11 w-40 border-gray border-2 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300'>Jogos de aventura</button>
        <button onClick={() => handleChangeTab('Tab 3')} className='bg-gray-400 border-solid rounded-xl h-11 w-32 border-gray border-2 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300'>Xbox one</button>

      </section>


      <div className='tab_content'>
        {renderTabContent()}
      </div>


    </>
  )
}

export default App
