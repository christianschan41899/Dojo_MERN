import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import styles from './PetDetails.module.css';

const PetDetails = props =>{
    const[currentPet, setCurrentPet] = useState(null);
    const[loaded, setLoaded] = useState(false);
    useEffect(() =>{
        let isMounted = true;
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res =>{
                if(isMounted){
                    setCurrentPet(res.data);
                    setLoaded(true);
                }
            })
            .catch(err => console.log(err))
        
        return () => {isMounted = false};
    }, [props.id]);

    const adoptThisPet = e =>{
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => console.log(res))
            .then(() => navigate('/'))
            .catch(err => console.log(err));
    }

    return(
        <>
            <div className = {styles.header}>
                <h2>Pet Shelter</h2>
                <Link to = "/">back to Home</Link>
            </div>
            {
                loaded?
                <>
                    <h4>Details about {currentPet.name}</h4>
                    <form onSubmit = {adoptThisPet}>
                        <button type="submit">Adopt this Pet!</button>
                    </form>
                    <div>
                        <p>Pet Type: {currentPet.species}</p>
                        <p>Description: {currentPet.description}</p>
                        <p>Skills: </p>
                        {
                            currentPet.skills.map((skill, index) =>
                            <p key = {index}> {skill} </p>
                            )
                        } 
                    </div>
                </>:
                <p>Loading ...</p>
            }
            
        </>
    )

}

export default PetDetails;