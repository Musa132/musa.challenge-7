const { render } = require('ejs')
const {user_game} = require('../models')
const {user_game_biodata} = require('../models')
const { Login } = require('./ModelController')
module.exports = class ViewController{
    static async Data(req,res) {
        try {
            const data = await user_game.findAll()
            const Biodata = await user_game_biodata.findAll()
            res.render('./data',{ data,Biodata})
        } catch (error) {  
            res.send('=== ERROR ===')
        }
    }

    static async Register(req,res) {
        try {         
            res.render('./register')
        } catch (error) {  
            res.send('=== ERROR ===')
        }
    }

    static async Home(req,res) {
        try {
            res.render('./home')
        } catch (error) {  
            res.send('=== ERROR ===')
        }
    }

    static async Game(req,res) {
        try {
            res.render('./game')
        } catch (error) {  
            res.send('=== ERROR ===')
        }
    }

    static async Login(req,res) {
        try {
            res.render('./login')
        } catch (error) {  
            res.send('=== ERROR ===')
        }
    }

    static async edit(req,res) {
        try {         
            const id = req.params.id
            const data = await user_game.findOne({
                where :{
                    id
                }
            })
            res.render('./edit', {data})
        } catch (error) {  
            res.send('=== ERROR ===')
        }
    }
    static async Biodata(req,res) {
        try {
            res.render('./biodata')
        } catch (error) {  
            res.send('=== ERROR ===')
        }
    }
}