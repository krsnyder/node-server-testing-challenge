// DO NOT CHANGE THIS FILE
const knex = require('knex');
const configs = require('../knexfile.js');

// const environment = process.env.NODE_ENV || 'development';

const environment = 'testing';

module.exports = knex(configs[environment]);
