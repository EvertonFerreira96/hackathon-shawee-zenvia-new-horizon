const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');
const requestAPI = require('request');

module.exports = {
    async store(req, res) {
        const { phone } = req.body;
        const id = generateUniqueId();
        await connection('session').where('phone',phone).delete();

        const formData = {
          from: "ahead-charger",
          to:`${phone}`,
          contents:[{"type":"text","text": `Olá a sua senha de acesso é: ${id}`}]
        }

         requestAPI.post({
          headers: {
            'Content-Type': 'application/json',
            'X-API-TOKEN':'iDlYjUYJ02xJ7yoxrjIAFd5yn0WzaDpTFRpt'
          },
          url: 'https://api.zenvia.com/v1/channels/whatsapp/messages',
          body: JSON.stringify(formData),
        });

        const session = await connection('session').insert({
          id,
          phone
        });
        return res.json(session);

    }, 
    async index(req, res) {
      const { phone, password } = req.body;
      const session = await connection('session').select('*').where('phone', phone).andWhere({'id': password});

      if(session < 1) 
        return res.json({ message : 'Não autorizado, senha inválida'});

      return res.json({ message : 'Autorizado, senha váida'});
      
      
    },
    async delete(req, res) {
      const { phone } = req.body;
      const session = await connection('session').where('phone', phone).delete();
      return res.json(session);
    }

}