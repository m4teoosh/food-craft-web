import { useState } from 'react'
import './App.css'
import NewIngredient from "./components/new-ingredient/container/NewIngredient";
import axios from "axios";
import Recipe from "./components/recipe/Recipe";



function App() {
  const [count, setCount] = useState(0)

  return (
      <Recipe />
  )
}

export default App
