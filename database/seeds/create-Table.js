
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'Hamid', password: '$2a$10$fZkp73eBJSOaYe6..9J1d.tpSJ1Miev7BFmJZ.JvbuwIIIgkqzjSy' },
      ]);
    });
};
