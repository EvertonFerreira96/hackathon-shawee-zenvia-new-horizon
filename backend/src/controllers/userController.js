const connection = require('../database/connection');


module.exports = {
    async store(req, res) {
        const { phone, name, email, age, city, uf } = req.body;
        const user = await connection('user').insert({
            phone
          , name
          , email
          , age
          , city
          , uf
            });
            return res.json(user);
    },
   
    async index(req, res) {
        const users = await connection('user').select('*');
        return res.json(users);
    },

    async show(req, res) {
        const { phone } = req.params;
        const users = await connection('user').select('*').where('phone', phone);
        return res.json(users);
    },
    
    async delete(req, res) {
        const { phone } = req.params;
        const user = await connection('user').where('phone', phone).delete();
        return res.json(user);
    }

}