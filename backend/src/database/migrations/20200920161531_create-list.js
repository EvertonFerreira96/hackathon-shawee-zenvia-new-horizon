
exports.up = function(knex) {
  return knex.schema.createTable('list',(table) => {
    table.string('number_phone').primary(); 
    table.string('number_appointment').notNullable(); 
    table.foreign('number_phone').references('phone').inTable('user');
    table.foreign('number_appointment').references('id').inTable('appointment');
});
}

exports.down = function(knex) {
  return knex.schema.dropTable('list');
};


