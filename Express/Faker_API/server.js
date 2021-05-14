const express = require("express");
const { name } = require("faker");
const faker = require("faker");
const app = express();
const port = 8000;

class User{
    constructor(){
        this.__id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this.__id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

app.get("/api/users/new", (req,res) =>{
    res.json(new User());
});

app.get("/api/companies/new", (req,res) =>{
    res.json(new Company());
});

app.get("/api/users/companies", (req,res) =>{
    new_user = new User();
    new_company = new Company();
    res.json({
        user : new_user,
        company : new_company
    })
});

app.listen(port, () => console.log(`Listening to port ${port}... `));