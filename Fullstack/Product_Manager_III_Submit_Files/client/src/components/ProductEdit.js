import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import styles from './ProductEditStyles.module.css';

const ProductDetails = props =>{
    const[title, setTitle] = useState("");
    const[price, setPrice] = useState(0);
    const[description, setDescription] = useState("");
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        let isMounted = true;
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res =>{
                if(isMounted){
                    setTitle(res.data.title);
                    setPrice(res.data.price);
                    setDescription(res.data.description);
                    setLoaded(true);
                }
            })
            .catch(err => console.log(err));
        
        return () => {isMounted = false}
    }, [props.id, title])

    const handleSubmit = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${props.id}`, {
            title,
            price,
            description
        })
            .then( res => console.log(res))
            .then(() => navigate(`http://localhost:3000/product/${props.id}`))
            .catch(err => console.log(err))
    }

    return(
        <>
            <div className={styles.return}><Link to = "/">Return</Link></div>
            {
                loaded?
                <>
                    <h3>Edit Product:</h3>
                    <div className = { styles.formContainer }>
                        <form onSubmit = { handleSubmit }>
                            <label>Title:</label>
                            <input className = { styles.stackedInputs } type="text" defaultValue = {title} onChange={ (e) => setTitle(e.target.value)}/>

                            <label>Price:</label>
                            <input className = { styles.stackedInputs } type="number" step="0.01" defaultValue = {price} onChange={ (e) => setPrice(e.target.value)}/>

                            <label>Description:</label>
                            <textarea className = { styles.stackedInputs } cols="30" rows="10" defaultValue = {description}  onChange={ (e) => setDescription(e.target.value)} ></textarea>

                            <button type="submit">Edit</button>
                        </form>
                    </div>
                </>:
                <p>Loading...</p>
            }
        </>
    )
}

export default ProductDetails;