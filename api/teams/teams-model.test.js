const Teams = require('./teams-model');
const db = require('../../data/db-config');

beforeEach(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  // Wipe table clean before each test
  await db('teams').truncate();
  // seeding database
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});

describe('Team model', () => {
  it('passes', () => {
    expect(true).toBe(true);
  });

  describe('getTeams', () => {
    let teams;
    beforeEach(async () => {
      teams = await Teams.getTeams();
    });
    it('can retrieve all teams', async () => {
      expect(teams).toHaveLength(3);
    });
    it('retrieves teams in the correct shape', () => {
      expect(teams[0]).toMatchObject({
        team_id: 1,
        team_name: 'Built for the Future',
        team_manager: 'Kirk Snyder',
      });
      expect(teams[2]).toMatchObject({
        team_id: 3,
        team_name: 'Silverback Nation',
        team_manager: 'Rusty',
      });
    });
  });

  describe('getTeamById', () => {
    it('can retrieve a team by the id', () => {

    });
  });

  describe('  addTeam', () => {
    it.todo('Todo test', () => {

    });
  });

  describe('  removeTeam', () => {
    it.todo('Todo test', () => {

    });
  });
});
