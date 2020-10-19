CREATE TABLE  `roles` (
  idRole int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  roleName varchar(255) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE  `users` (
  idUser int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  firstName varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  active BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE  `users_role` (
  idUser_Role int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	idUserUR int
	idRoleUR int 
	FOREIGN KEY 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;