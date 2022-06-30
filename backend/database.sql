--
-- Base de données :  `simple-mvc`
--
-- --------------------------------------------------------
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `firstname` varchar(40) NOT NULL,
  `lastname` varchar(70) NOT NULL,
  `job` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `frontend` varchar(255) NULL,
  `backend` varchar(255) NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `projects` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(150) NOT NULL,
  `body` mediumtext NOT NULL,
  `creator_id` INT NOT NULL,
  FOREIGN KEY (creator_id) REFERENCES users(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `users_projects` (
  `project_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES projects(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;