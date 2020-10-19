CREATE TABLE  roles (idRole int NOT NULL PRIMARY KEY AUTO_INCREMENT, roleName varchar(255) NOT NULL) ;

CREATE TABLE  users (
  idUser int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  firstName varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  active BOOLEAN DEFAULT false
) ;
ALTER TABLE users ADD userName varchar(40) NOT NULL;

CREATE TABLE  users_role (
  idUser_Role int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	idUserUR int NOT NULL,
	idRoleUR int NOT NULL,
	FOREIGN KEY (idUserUR) REFERENCES users(idUser),
	FOREIGN KEY (idRoleUR) REFERENCES roles(idRole));