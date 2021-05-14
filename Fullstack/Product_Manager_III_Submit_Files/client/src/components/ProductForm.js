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
        //There is an memory leak when navigating away from this page. Console tells me it's from useEffect
        //I assume something updates and triggers an API call. So I will make it so the API call not trigger a setState.
        let isMounted = true;
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                if(isMounted){
                    setProducts(res.data);
                    setLoaded(true);
                }
            })
            .catch(err => console.log(err));
        
        //When we navigate away this should prevent the setState.
        return () => {isMounted = false}
    },[products])
    //This warning  doesn't happen to any of the other modules, but I'm going to add this in just in case.
    
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

    const deleteThisProduct = (e, id) =>{ //Unless that e is there before this is called this runs immediately and nukes the database
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res =>{
            console.log(res);
        })
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
                    <div key = {index}>
                        <Link to={'/product/'+product._id}>{product.title}</Link> 
                        <button className = {styles.actionButton}><Link className = {styles.removeDecorations} to = {"/product/"+ product._id + "/edit/"}>Edit</Link></button>
                        <button className = {styles.actionButton} onClick = {(e) => deleteThisProduct(e, product._id)}>Delete</button>
                        <br key={index}></br>
                    </div>
                    ):""
                }
            </div>
        </>
    )

}

export default ProductForm;