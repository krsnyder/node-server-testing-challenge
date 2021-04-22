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
async function removeTeam(team_id) {
  const oldResource = await getTeamById(team_id);
  await db('teams').where({ team_id }).del();
  return oldResource;
}

module.exports = {
  getTeams,
  getTeamById,
  addTeam,
  removeTeam,
};
