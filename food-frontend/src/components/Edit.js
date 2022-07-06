import React, { useState } from 'react'

const Edit = (props) => {
    const [food, setFood] = useState({...props.sleep})

    const handleChange = (event) => {
        setFood({...food, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(food)
    }

    return (
        <>
            <details>
                <summary>Edit This Item</summary>
                <form className='editPost' onSubmit={handleSubmit}>
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
                <input type="submit" />
                </form>
            </details>
        </>
    )
}

export default Edit