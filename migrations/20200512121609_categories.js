exports.up = function(knex) {
  return knex.schema.createTable('categories', tbl => {
    tbl.increments();

    tbl
      .string('name')
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.shema.dropTableIfExists('categories');
};
