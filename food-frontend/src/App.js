import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  let [foodData, setFoodData] = useState([])


const getFoodData = () => {
  axios
  .get('https://ancient-beach-68054.herokuapp.com/api/foods')
  .then(response => setFoodData(response.data),
  (err) =>console.error(err)
  )
    .catch((error) => console.error(error))
}





useEffect(() => {
  getFoodData()
}, [])

  return (
    <>
      <h1>Welcome</h1>
    </>
  )
}

export default App;
