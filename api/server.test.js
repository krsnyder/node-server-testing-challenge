const request = require('supertest');
const server = require('./server');
const db = require('../data/db-config');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});

// sanity test
it('process.env.NODE_ENV must be "testing"', () => {
  expect(process.env.NODE_ENV).toBe('testing');
});

describe('Teams Endpoints', () => {
  describe('[POST] request', () => {
    it('adds a record to the db', async () => {
      await request(server)
        .post('/teams')
        .send({
          team_name: 'My Guy Tucker',
          team_manager: 'Matty',
        });
      expect(await db('teams')).toHaveLength(4);
    });
    it('responds with the new record', async () => {
      const res = await request(server)
        .post('/teams')
        .send({
          team_name: 'My Guy Tucker',
          team_manager: 'Matty',
        });
      expect(res.body).toMatchObject({
        team_name: 'My Guy Tucker',
        team_manager: 'Matty',
      });
    });
  });
  describe('[DELETE] request', () => {
    it('removes a record from the db', () => {

    });
    it('responds with the deleted record', () => {

    });
  });
});
