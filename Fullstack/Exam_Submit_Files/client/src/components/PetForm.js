import React, { useState } from 'react';
import { Link } from '@reach/router';
import styles from './PetForm.module.css';

const PetForm = props =>{
    const [name, setName] = useState(props.editingName);
    const [species, setSpecies] = useState(props.editingSpecies);
    const [description, setDescription] =  useState(props.editingDescription);
    const [skillOne, setSkillOne] = useState(props.editingSkills[0]);
    const [skillTwo, setSkillTwo] = useState(props.editingSkills[1]);
    const [skillThree, setSkillThree] = useState(props.editingSkills[2]);

    const handleSubmit = e =>{
        e.preventDefault();
        props.submitPetProp({name, species, description, skills:[skillOne, skillTwo, skillThree]});
    }

    return(
        <>
            <div className = {styles.header}>
                <h2>Pet Shelter</h2>
                <Link to = "/">back to Home</Link>
            </div>
            <br></br>
            <h4>Know a pet needing a home?</h4>
            <div className={styles.formContainer}>
                <form onSubmit = {handleSubmit}>
                    <div className = {styles.header}>
                        <div className = {styles.inputRow}>
                            <label>Pet Name:</label>
                            <input className = {styles.inputStacker} type="text" defaultValue = {props.editingName} onChange = {(e) => setName(e.target.value)}/>

                            <label>Pet Type:</label>
                            <input className = {styles.inputStacker} type="text" defaultValue = {props.editingSpecies} onChange = {(e) => setSpecies(e.target.value)}/>

                            <label>Pet Description:</label>
                            <input className = {styles.inputStacker} type="text" defaultValue = {props.editingDescription} onChange = {(e) => setDescription(e.target.value)}/>

                        </div>
                        <div className = {styles.inputRow}>
                            <p>Skills (optional):</p>

                            <label>Skill 1:</label>
                            <input className = {styles.inputStacker} type="text" defaultValue = {props.editingSkills[0]} onChange = {(e) => setSkillOne(e.target.value)}/>

                            <label>Skill 2:</label>
                            <input className = {styles.inputStacker} type="text" defaultValue = {props.editingSkills[1]} onChange = {(e) => setSkillTwo(e.target.value)}/>

                            <label>Skill 3:</label>
                            <input className = {styles.inputStacker} type="text" defaultValue = {props.editingSkills[2]} onChange = {(e) => setSkillThree(e.target.value)}/>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default PetForm;