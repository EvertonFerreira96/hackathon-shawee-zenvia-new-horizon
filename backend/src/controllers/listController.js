const connection = require('../database/connection');

module.exports = {
    async store(req, res) {
        const { phone, id } = req.body;
        const user = await connection('list').insert({
            number_phone:phone
          , number_appointment:id
            });
            return res.json(user);
    },
   
    async index(req, res) {
        const users = await connection('list').select('*');
        return res.json(users);
    },
    async show(req, res) {
        const users = await connection('list').select('*').where('number_appointment',req.params.id);
        return res.json(users);
    },
    
    async delete(req, res) {
        const { id } = req.params;
        const appointment = await connection('list').where('number_appointment', id).delete();
        return res.json(user);
    }

}