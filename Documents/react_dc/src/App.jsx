
import './App.css'
import { InputText } from './components/InputText'
import { H1Title } from './components/h1Title'

function App() {


  return (
    <>
       <H1Title titulo='abacaxi torrado' />
      {/* <h1>Olá Mundo</h1>
      <h1>Abacaxi Torrado</h1> */}

      <InputText
        id='nome'
        name='nome'
        placeholder='nome'
      />
      <br />
      <InputText
        id='sobrenome'
        name='sobrenome'
        placeholder='sobrenome'
      />
      {/*       
      <input type="text" name="nome" id="nome" placeholder='nome'></input>
      <br />
      <input type="text" name="sobrenome" id="sobrenome" placeholder='nome'></input>
 */}

    </>
  )
}

export default App
