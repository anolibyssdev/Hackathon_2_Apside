const AbstractManager = require("./AbstractManager");

class UsersProjectsManager extends AbstractManager {
  static table = "usersProjets";

  insert(usersProjects) {
    return this.connection.query(
      `INSERT INTO ${UsersProjectsManager.table} (projets_id, user_id) VALUES (?, ?)`,
      [usersProjects.projets_id, usersProjects.user_id]
    );
  }

  update(usersProjects) {
    return this.connection.query(
      `UPDATE ${UsersProjectsManager.table} SET projets_id = ?, user_id = ? WHERE id = ?`,
      [usersProjects.projet_id, usersProjects.user_id]
    );
  }
}
module.exports = UsersProjectsManager;
