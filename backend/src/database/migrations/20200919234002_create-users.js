
exports.up = function(knex) {
  return knex.schema.createTable('user',(table) => {
    table.decimal('phone').primary();
    table.string('name').notNullable(); 
    table.string('email').notNullable(); 
    table.string('age').notNullable(); 
    table.string('city').notNullable(); 
    table.string('uf', 2).notNullable(); 
});
}

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};


