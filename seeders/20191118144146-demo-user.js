'use strict';
const Article = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(Article, [{
      title: 'test',
      author: 'test-article',
      body: null
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(Article, null, {});
  }
};
