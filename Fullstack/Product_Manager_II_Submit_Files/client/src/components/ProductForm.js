import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import styles from './ProductFormStyle.module.css';

const ProductForm = props =>{
    const[title, setTitle] = useState("");
    const[price, setPrice] = useState(0);
    const[description, setDescription] = useState("");
    const[products, setProducts] = useState([]);
    const[loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    },[])

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
            <div className = {styles.productList}>
                <h2>All Products:</h2>
                {
                    loaded ?
                    products.map( (product, index) =>
                    <>
                        <Link key={index} to={'/product/'+product._id}>{product.title}</Link> 
                        <br></br>
                    </>
                    ):""
                }
            </div>
        </>
    )

}

export default ProductForm;