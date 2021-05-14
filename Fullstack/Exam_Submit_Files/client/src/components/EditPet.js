import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetForm from './PetForm';

const EditPet = props =>{
    const [currentPet, setCurrentPet] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let isMounted = true;
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res =>{
                if(isMounted){
                    setCurrentPet(res.data);
                    setLoaded(true);
                }
            })
            .catch(err => console.log(err));
        
        return () => {isMounted = false}
    }, [props.id])

    /*PetForm won't be aware of the id of the document, so we handle it here where we can and instead pass
      PetForm a new update function with no id requirement as a prop*/
    const newUpdatePetProp = pet =>{
        props.updatePetProp(pet, props.id);
    }

    return(
        <>
            {
                loaded?
                <PetForm submitPetProp = {newUpdatePetProp} editingName = {currentPet.name} editingSpecies = {currentPet.species} editingDescription = {currentPet.description} editingSkills = {currentPet.skills} />
                :
                <p>Loading</p>
            }
        </>
    );
}

export default EditPet;