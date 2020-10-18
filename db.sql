CREATE TABLE  `roles` (
  id int(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  roleName varchar(255) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE  `users` (
  id int(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  firstName varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  active BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;