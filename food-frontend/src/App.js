import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit';

const App = () => {
  let [foods, setFoods] = useState([])

// ========GET FOOD DATA=======

const getFoodData = () => {
  axios
  .get('https://ancient-beach-68054.herokuapp.com/api/foods')
  .then(response => setFoods(response.data),
  (err) =>console.error(err)
  )
    .catch((error) => console.error(error))
}

// ========CREATE NEW FOOD DATA=======

const handleCreate = (addFood) => {
  axios
  .post('https://ancient-beach-68054.herokuapp.com/api/foods', addFood)
  .then(response => {  
    console.log(response)
    getFoodData()
  })
}

// ========EDIT FOOD DATA=======

const handleUpdate = (editFood) => {
  console.log(editFood)
  axios
  .put('https://ancient-beach-68054.herokuapp.com/api/foods/' + editFood.id, editFood)
  .then((response) => {
    getFoodData()
  })
}

// ========DELETE SINGLE FOOD DATA=======

const handleDelete = (event) => {
  axios
  .delete('https://ancient-beach-68054.herokuapp.com/api/foods/' + event.target.value)
  .then((response) => {
    getFoodData()
  })
}


useEffect(() => {
  getFoodData()
}, [])

  return (
    <div className="body">
      <h1 className='title'>Food App</h1>
      
      <div className='food_data'>
        {foods.map((food) => {
          return (
            <div className='food' key={food.id}>
              <h2>{food.title}</h2>
              <div id='item_image'><img className='item_image' src={food.image} alt=''/></div>
              <h2>{food.description}</h2>
              
              <h2>{food.price}</h2>
              <h2>{food.date}</h2>
              <button className='delete_btn' onClick={handleDelete} value={food.id} >Delete Item</button>
              <Edit handleUpdate={handleUpdate} id={food.id} />
              <hr/>
            </div>
          )
        })}
      </div>
      <div className='add_form'>
        <h2>Add New Item</h2>
        <Add handleCreate={handleCreate} />
      </div>
      
    </div>
  )
}

export default App;
