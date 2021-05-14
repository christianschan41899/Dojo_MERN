const PetController = require('../controller/pet.controller');

module.exports = app =>{
    app.get('/api/pets', PetController.getPets);
    app.get('/api/pets/:id', PetController.getPetDetails);
    app.put('/api/pets/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.adoptPet);
    app.post('/api/pets/new', PetController.createPet);

}