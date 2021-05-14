const { Pet } = require("../models/pet.model");

module.exports.createPet = (req, res) => {
    const { name, species, description, skills } = req.body;
    Pet.create({
        name,
        species,
        description,
        skills
    })
        .then(pet => res.json({ message: "success", results: data }))
        .catch(err => res.json({ message: "error", errors: err.errors }));
}

module.exports.getPets = (req, res) => {
    Pet.find()
        .then(pets => res.json(pets))
        .catch(err => res.json(err));
}

module.exports.getPetDetails = (req, res) =>{
    Pet.findOne({_id: req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.updatePet = (req, res) => {
    const { name, species, description, skills } = req.body;
    Pet.findOneAndUpdate({_id: req.params.id}, 
        {
            name,
            species,
            description,
            skills
        }, {new:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.json(err));
}

module.exports.adoptPet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(confirmDelete => res.json(confirmDelete))
        .catch(err => res.json(err))
}