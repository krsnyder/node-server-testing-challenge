const db = require('../../data/db-config');

function getTeams() {
  return db('teams');
}
function getTeamById(team_id) {
  return db('teams')
    .where({ team_id }).first();
}
async function addTeam(newTeam) {
  const [team_id] = await db('teams')
    .insert(newTeam);

  return getTeamById(team_id);
}
function removeTeam() {
  return null;
}

module.exports = {
  getTeams,
  getTeamById,
  addTeam,
  removeTeam,
};
