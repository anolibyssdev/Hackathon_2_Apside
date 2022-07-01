const AbstractManager = require("./AbstractManager");

class ProjectsManager extends AbstractManager {
  static table = "projects";

  insert(projects) {
    return this.connection.query(
      `INSERT INTO ${ProjectsManager.table} (title, body, creator_id) VALUES (?, ?, ?)`,
      [projects.title, projects.body, projects.creator_id]
    );
  }

  update(projects) {
    return this.connection.query(
      `update ${ProjectsManager.table} SET title = ?, body = ?, creator_id = ? WHERE id = ?`,
      [projects.title, projects.body, projects.creator_id, projects.id]
    );
  }
}

module.exports = ProjectsManager;
