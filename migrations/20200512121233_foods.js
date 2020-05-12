exports.up = function(knex) {
  return knex.schema.createTable('foods', tbl => {
    tbl.increments();
    tbl
      .string('name')
      .notNullable()
      .unique();

    tbl
      .integer('category_id')
      .notNullable()
      .references('id')
      .inTable('categories')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('foods');
};
