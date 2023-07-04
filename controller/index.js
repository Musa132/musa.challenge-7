const user = require('../models/index.json').user
const products = require('../models/index.json').products
const jwt = require('jsonwebtoken')

async function loginPage(req,res) {
    try {
        res.render('./login')
    } catch (error) {
        res.send(error)
    }
    
}

async function getProducts(req,res) {
    try {
        res.status(200).json({
            products
        })
    } catch (error) {
        res.send(error)
    }
}

async function loginAPI(req,res) {
    try {
        const { username, password } = req.body
        const {userName : usernameData, password : passwordData, id} = user[0]
        console.log(user[0])
        console.log('==== controller ===')
        if(usernameData === username && password === passwordData ) {
            let token = jwt.sign(user[0], '123123')
            res.status(200).json({
                token 
            })
        }else {

        }
    } catch (error) {
        res.send(error)
    }
}

async function homePage(req,res) {
    try {
        // console.log(req.session)
        console.log(req.session.passport, "<< ini session")
        res.render('./home')
    } catch (error)    {
        res.send(error)
        
    }
}

async function userPage(req,res) {
    try {
        res.send(user[0])
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    loginPage,
    loginAPI,
    homePage,
    userPage,
    getProducts
}
