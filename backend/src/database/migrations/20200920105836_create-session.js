

exports.up = function(knex) {
  return knex.schema.createTable('session',(table) => {
    table.string('phone').primary();
    table.string('id').notNullable(); 
});
}

exports.down = function(knex) {
  return knex.schema.dropTable('session');
};


