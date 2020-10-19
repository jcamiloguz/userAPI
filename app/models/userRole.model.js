const sql = require("./db.js");

// constructor
const userRole = function(role) {
  this.idUserUR = role.idUserUR;
  this.idRoleUR = role.idRoleUR;
};

userRole.create = (newUserRole, result) => {
	console.log(newUserRole);
  sql.query("INSERT INTO users_role SET ?", newUserRole, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created User_roles: ", { id: res.insertId, ...newUserRole });
    result(null, { id: res.insertId, ...newUserRole });
  });
};

userRole.findByUserId = (userId, result) => {
  sql.query(`SELECT * FROM users_role WHERE idUserUR = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found a relation(s): ", res[0]);
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

userRole.findByRoleId = (roleId, result) => {
  sql.query(`select * from users u, users_role ur, roles r WHERE u.idUser =ur.idUserUR and ur.idRoleUR=r.idRole and r.idRole= ${roleId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found a relation(s): ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};


userRole.remove = (userId,roleId, result) => {
  sql.query("DELETE FROM users_role WHERE idUserUR = ? AND idRoleUR =?", [userId, roleId], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted relation with id: ", id);
    result(null, res);
  });
};

userRole.removeAll = result => {
  sql.query("DELETE FROM users_role", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} users_roles`);
    result(null, res);
  });
};

module.exports = userRole;
