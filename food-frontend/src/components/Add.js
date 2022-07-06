import React, { useState, useEffect } from 'react'

const Add = (props) => {
    let emptyFood = {title: '', description: '', image: '', price: '', date: ''}

    const [food, setFood] = useState(emptyFood)

    const handleChange = (event) => {
        setFood({...food, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(food)
        setFood({title: '', description: '', image: '', price: '', date: ''})
    }

    return (
        <>
            <form className='addPost' onSubmit={handleSubmit}>
                <label htmlFor="title">Item name:</label> <br>
                </br>
                <input value={food.title} type="text" name="title" onChange={handleChange} />
                <br />
                <label htmlFor="description">Item Description:</label> 
                <br>
                </br>
                <input value={food.description} type="text" name="description" onChange={handleChange} />
                <br />
                <label htmlFor="image">Image Link:</label>
                <br>
                </br>
                <input value={food.image} type="text" name="image" onChange={handleChange} />
                <br />
                <label htmlFor="price">Item Price:</label>
                <br>
                </br>
                <input value={food.price} type="text" name="price" onChange={handleChange} />
                <br />
                <label htmlFor="date">Log Date:</label>
                <br>
                </br>
                <input value={food.date} type="date" name="date" onChange={handleChange} />
                <br />
                <input className='add_btn' type="submit" />
            </form>
        </>
    )
}

export default Add