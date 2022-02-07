const controller = require('../controller/UserController')


let userDB = [
    {user: "Sebi1",password:"montag"},
    {user: "Michi",password:"dienstag"},
    {user: "Leni",password:"mittwoch"},
    {user: "Florian",password:"freitag"},
]


function writeDB(){
    userDB.forEach(item =>{
        controller.storeUser(item.user,item.password,(err,user)=>{
            if (err) {
                console.log("User: " + item.user + " failed to store. ("+err+")" )
            }
            else if (user) {
                console.log("User: " + item.user + "has been stored successfully." )
            }
        })
    })
}

module.exports = {
    writeDB
}