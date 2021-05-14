import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import styles from './ProductDetails.module.css';

const ProductDetails = props =>{
    const [currentProduct, setCurrentProduct] = useState(null);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        let isMounted = true;
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res =>{
                if(isMounted){
                    setCurrentProduct(res.data);
                    setLoaded(true);
                }
            })
            .catch(err => console.log(err));

        return () => {isMounted = false}
    }, [props.id])

    const deleteThisProduct = () =>{
        axios.delete(`http://localhost:8000/api/products/${props.id}`)
            .then(res =>{
                console.log(res);
                navigate(`http://localhost:3000/`);
            })
            .catch(err => console.log(err))
    }
    return(
        <>
            <div className={styles.return}><Link to = "/">Return</Link></div>
            {
                loaded?
                <>
                    <div className = {styles.product}>
                        <p className={styles.title}>Title: {currentProduct.title}</p>
                        <p>Price: ${currentProduct.price}</p>
                        <p className={styles.description}>{currentProduct.description}</p>
                    </div>
                    <button className = {styles.actionButton}><Link className = {styles.removeDecorations} to = {"/product/"+ props.id + "/edit/"}>Edit</Link></button>
                    <button className = {styles.actionButton} onClick = { deleteThisProduct }>Delete</button>
                </>:
                <p>Loading...</p>
            }
        </>
    )
}

export default ProductDetails;