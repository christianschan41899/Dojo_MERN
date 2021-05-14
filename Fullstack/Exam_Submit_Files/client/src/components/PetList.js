import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import styles from './PetList.module.css';

const PetList = props =>{
    const[petList, setPetList] = useState(null);
    const[loaded, setLoaded] = useState(false);
    useEffect(() =>{
        let isMounted = true;
        axios.get('http://localhost:8000/api/pets/')
            .then(res =>{
                if(isMounted){
                    setPetList(res.data);
                    setLoaded(true);
                }
            })
            .catch(err => console.log(err))
        
        return () => {isMounted = false};
    }, [])

    return(
        <>
            <div className = {styles.header}>
                <h2>Pet Shelter</h2>
                <Link to = "/pets/new/">add pet to the shelter</Link>
            </div>
            <h4>These Pets are looking for a good home!</h4>
            <table className = {styles.tableMain}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    loaded?
                    petList.map( (pet, index) =>
                    <tr key = {index}>
                        <td>{pet.name}</td>
                        <td>{pet.species}</td>
                        <td><Link to = {"/pets/"  + pet._id}>details</Link> | <Link to = {"/pets/"  + pet._id + "/edit/"}>edit</Link></td>
                    </tr>):
                    <tr>
                        <td></td>
                    </tr>
                }
                </tbody>
            </table>
        </>
    )
}

export default PetList;