const teams = [
  {
    team_name: 'Built for the Future',
    team_manager: 'Kirk Snyder',
  },
  {
    team_name: "Dabo's Dynasty",
    team_manager: 'Greg Daly',
  },
  {
    team_name: 'Silverback Nation',
    team_manager: 'Rusty',
  },
];

exports.teams = teams;

exports.seed = function (knex) {
  return knex('teams').insert(teams);
};
