const User = require('../models/user.model');

module.exports.createUser = (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;
    User.create({
        firstName,
        lastName,
        username,
        email,
        password
    })
        .then(res => res.json({ message: "success", results: data }))
        .catch(err => res.json({ message: "error", errors: err.errors }));
}

module.exports.getUser = (req, res) => {
    User.findOne({username: req.params.username})
        .then(user => res.json(user))
        .catch(err => res.json(err));
}