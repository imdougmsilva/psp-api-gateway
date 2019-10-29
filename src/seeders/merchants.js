module.exports = {
  up: async queryInterface => queryInterface.bulkInsert('merchant', [
    {
      id: 'e0a38f95-05c2-4627-94e7-c0b19e7690ca',
      name: 'João das Couves',
      document: '910.463.530-20',
      token: 'Cz9mZeYbr4hGIViKhzh4CAVfvdOgCM5O',
      expiration_date: '2019-10-31 00:00:00',
      created_at: '2019-10-31 00:00:00',
      updated_at: '2019-10-31 00:00:00',
    },
    {
      id: '9131f300-990f-4abc-b44b-fa2349ed855d',
      name: 'Amanda das Amoras',
      document: '702.352.270-05',
      token: 'yCwd5wo40HiXi6TEsFgvOxGq6zoeny77',
      expiration_date: '2019-10-31 00:00:00',
      created_at: '2019-10-31 00:00:00',
      updated_at: '2019-10-31 00:00:00',


    },
    {
      id: '30d8a1a7-06c8-4833-8d7d-0d09f7186f48',
      name: 'Jose das Ortencias',
      document: '207.957.770-00',
      token: '9HBDt7PUhSElc2yAZGYkkkuZebpzfPyA',
      expiration_date: '2019-10-31 00:00:00',
      created_at: '2019-10-31 00:00:00',
      updated_at: '2019-10-31 00:00:00',


    },
    {
      id: 'f7c72ff4-82ff-4a5b-9dda-eb7d6b3f4513',
      name: 'Runens das Oliveiras',
      document: '909.712.890-00',
      token: 'c86av520NPFdOIiDvvJlGKKN8YjznkEW',
      expiration_date: '2019-10-31 00:00:00',
      created_at: '2019-10-31 00:00:00',
      updated_at: '2019-10-31 00:00:00',

    },
  ], {}),

  down: async (queryInterface) => {
    try {
      await queryInterface.dropTable('steps');
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  },
};
