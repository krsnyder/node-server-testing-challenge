exports.up = function (knex) {
  return knex.schema
    .createTable('teams', (table) => {
      table.increments('team_id');
      table.string('team_name', 128).notNullable();
      table.string('team_manager', 128).notNullable().unique();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('teams');
};
