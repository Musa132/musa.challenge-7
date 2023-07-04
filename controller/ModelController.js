const {user_game} = require('../models')
const {user_game_biodata} = require('../models')


module.exports = class ModelController{
    static async Register(req,res) {
        try {
            const {Name,UserName,Password,Role} = req.body
            const payload = {Name,UserName,Password,Role}
            await user_game.create(payload)
            res.redirect('/login')
        } catch (error) {
            res.send('=== ERROR ===')
        }
    }

    static async delete(req,res) {
        try {         
            const id = req.params.id
            let deletedata = await user_game.destroy({
                where :{
                    id
                }
            })
            let deleteBiodata = await user_game_biodata.destroy({
                where :{
                    id
                }
            })
            res.redirect('/')
        } catch (error) {  
            res.send('=== ERROR ===')
        }
    }
    static async edit(req,res) {
        try {         
            const id = req.params.id
            const {Name,UserName,Password,Role} = req.body
            const payload = {Name,UserName,Password,Role}
            const data = await user_game.update(payload, {where: {id}})  
            res.redirect('/')
        } catch (error) {  
            res.send('=== ERROR ===')
        }
    }

    static async Login(req,res){
        try {
            console.log("=====")
            const {UserName,Password} = req.body
            console.log(req.body)
            let userLogin = await user_game.findOne({where :{UserName}})
            console.log(userLogin)     
            if(userLogin){
                userLogin = userLogin.toJSON()
                console.log(userLogin)
                const Role = userLogin.Role
                console.log(Password)
                console.log(userLogin.Password)
                if(Password !== userLogin.Password) {
                    console.log('=== password salah')
                    return res.redirect('/login')
                }else{
                    console.log("== sudah benar ==")
                    if(Role !== 'super user')   {
                        res.redirect("/biodata")
                    }else {
                    res.redirect("/")
                    }
                    }
                }else{
                    res.redirect('/login')
                }
              
            }catch (error) {
                res.send('=== ERROR ===')
        }
    }
    static async Biodata(req,res) {
        try {
            const {FullName,Age,Level} = req.body
            const payload = {FullName,Age,Level}
            console.log(payload)
            await user_game_biodata.create(payload)
            res.redirect('/home')
        } catch (error) {
            res.send('=== ERROR ===')
        }
    }
}