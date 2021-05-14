import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import styles from './ProductDetails.module.css';

const ProductDetails = props =>{
    const [currentProduct, setCurrentProduct] = useState(null);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res =>{
                setCurrentProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    })
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
                </>:
                <p>Loading...</p>
            }
        </>
    )
}

export default ProductDetails;