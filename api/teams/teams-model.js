const db = require('../../data/db-config');

function getTeams() {
  return db('teams');
}
function getTeamById(team_id) {
  return db('teams')
    .where({ team_id }).first();
}
function addTeam() {
  return null;
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
