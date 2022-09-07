import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Recipe from "./components/recipe/Recipe";
import NewIngredient from "./components/new-ingredient/container/NewIngredient";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Recipe />
  )
}

export default App
