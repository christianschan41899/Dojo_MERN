import './App.css';
import axios from 'axios';
import { Router, navigate } from '@reach/router';
import PetForm from './components/PetForm';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import EditPet from './components/EditPet';

const createPet = pet =>{
  axios.post('http://localhost:8000/api/pets/new/', pet)
    .then(res => console.log(res))
    .then(() => navigate('/'))
    .catch(err => console.log(err));
}

//This requires an id to send a request to change the right document
const updatePet = (pet, id) =>{
  axios.put(`http://localhost:8000/api/pets/${id}`, pet)
    .then(res => console.log(res))
    .then(() => navigate('/'))
    .catch(err => console.log(err));
}

//PetForm needs an empty editingSkills array due to a change that lets it be reused in EditPet since it doesn't let this prop be undefined.
function App() {
  return (
    <Router>
      <PetList path = '/'/>
      <PetForm submitPetProp = {createPet} editingSkills = {["","",""]} path = '/pets/new/'/>
      <PetDetails path = '/pets/:id/'/>
      <EditPet updatePetProp = {updatePet} path = 'pets/:id/edit/'/>
    </Router>
  );
}

export default App;
