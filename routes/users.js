import express from 'express'
import { v4 as uuidv4 } from 'uuid';

const router = express()

//Mock Database
const userDB = []

router.get('/', (req,res) => {
    res.send("CRUD Application!!")
})

//GET Request
router.get('/users', (req,res) => { res.send(userDB)})

//POST Request 

/*
User sending the array of objects  [{},{}]
*/
router.post('/user', (req,res) => {
    const users = req.body;   
    users.forEach(element => {
        userDB.push({...element, id: uuidv4()})
    });
    res.send("Info added succesfully")
    })

//GET Request with ID Search
router.get('/users/:id', (req,res) => {
    const {id} = req.params;  //Capture the id from the URL

   const foundUser =  userDB.find((user) => user.id === id)

   res.send(foundUser)

})

//Delete User

router.delete('/user/delete/:id', (req, res) => {
    const {id} = req.params

    userDB.filter((user) => user.id !== id)

    res.send("Record has been succesfully deleted !!")

})

//Patch Operation

router.patch('/user/update/:id', (req, res) => {
    const {id} = req.params

    const {firstName, lastName, email} = req.body

    const user = userDB.find((user => user.id === id))

    if(firstName){user.firstName = firstName}
    if(lastName) {user.lastName = lastName}
    if(email) {user.email = email}

    res.send("Record Updated Succesfully!!")
})

export default router