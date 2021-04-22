const db = require('../../data/db-config');

function getTeams() {
  return db('teams');
}
function getTeamById() {
  return null;
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
