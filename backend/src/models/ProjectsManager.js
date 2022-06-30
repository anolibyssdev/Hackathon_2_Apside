const AbstractManager = require("./AbstractManager");

class ProjectsManager extends AbstractManager {
  static table = "projects";

  insert(projects) {
    return this.connection.query(
      `INSERT INTO ${ProjectsManager.table} (title, body) VALUES id = (?, ?)`,
      [projects.title, projects.body]
    );
  }

  update(projects) {
    return this.connection.query(
      `update ${ProjectsManager.table} SET title, body = ?, ? WHERE id = ?`,
      [projects.title, projects.body, projects.id]
    );
  }
}

module.exports = ProjectsManager;
