exports.up = function(knex, Promise) {
  return knex.schema.createTable("emails", table => {
    table.increments();
    table.string("to_name");
    table.string("to_address");
    table.string("from_name");
    table.string("from_address");
    table.string("subject");
    table.dateTime("sent");
    table.text("email_body");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("emails");
};
