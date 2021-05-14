import React, { useState } from 'react';
import axios from 'axios';
import styles from './ProductFormStyle.module.css';

const ProductForm = props =>{
    const[title, setTitle] = useState("");
    const[price, setPrice] = useState(0);
    const[description, setDescription] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/create', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return(
        <>
            <h3>Create a Product:</h3>
            <div className = { styles.formContainer }>
                <form onSubmit = { handleSubmit }>
                    <label>Title:</label>
                    <input className = { styles.stackedInputs } type="text" onChange={ (e) => setTitle(e.target.value)}/>

                    <label>Price:</label>
                    <input className = { styles.stackedInputs } type="number" step="0.01" onChange={ (e) => setPrice(e.target.value)}/>

                    <label>Title:</label>
                    <textarea className = { styles.stackedInputs } cols="30" rows="10"  onChange={ (e) => setDescription(e.target.value)} ></textarea>

                    <button type="submit">Create</button>
                </form>
            </div>
        </>
    )

}

export default ProductForm;