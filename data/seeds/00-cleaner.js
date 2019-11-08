
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('test').del()
    .then(function () {
      // Inserts seed entries
      return knex('test').insert([
        {id: 1, Name: 'Jarvise', age:23},
        {id: 1, Name: 'James', age:22},
        {id: 1, Name: 'Jolly', age:23}
      ]);
    });
};
