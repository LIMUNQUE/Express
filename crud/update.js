require('../connection')
const user = require('../models/User')

async function updateUser() {
    const user = await User.update({username : 'User 1'},
    {password : 'contraseña segura'})
    console.log(user)
}
updateUser();