const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');
const requestAPI = require('request');
const dateFns  = require ('date-fns');


module.exports = {
    async store(req, res) {
        const { description, date, local, owner_phone, title, link } = req.body;
        
        const appointment = await connection('appointment').insert({
          id: generateUniqueId(),
          description,
          local,
          date: dateFns.parseISO(date),
          link,
          title,
          owner_phone
        });
        return res.json(appointment);

    }, 
    async index(req, res) {
      const appointment = await connection('appointment').select('*');
      return res.json(appointment);
    },

    async show(req, res) {
      const { id } = req.params;
      const appointment = await connection('appointment').select('*').where('id',id);
      return res.json(appointment);
    },

    async delete(req, res) {
      const { id } = req.params;
      const appointment = await connection('appointment').where('id', id).delete();
      return res.json(appointment);
    }

}