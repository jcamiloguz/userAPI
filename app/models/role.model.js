const sql = require("./db.js");

// constructor
const Role = function(role) {
  this.roleName = role.roleName;
};

Role.create = (newRole, result) => {
	console.log(newRole);
  sql.query("INSERT INTO roles SET ?", newRole, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created roles: ", { id: res.insertId, ...newRole });
    result(null, { id: res.insertId, ...newRole });
  });
};

Role.findById = (roleId, result) => {
  sql.query(`SELECT * FROM roles WHERE idRole = ${roleId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found a role: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Role.getAll = result => {
  sql.query("SELECT * FROM roles", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("roles: ", res);
    result(null, res);
  });
};

Role.updateById = (id, role, result) => {
  sql.query(
    "UPDATE roles SET roleName = ? WHERE idRole = ?",
    [role.email, role.firstName,role.lastName,role.roleName, role.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated role: ", { id: id, ...role });
      result(null, { id: id, ...role });
    }
  );
};

Role.remove = (id, result) => {
  sql.query("DELETE FROM roles WHERE idRole = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted role with id: ", id);
    result(null, res);
  });
};

Role.removeAll = result => {
  sql.query("DELETE FROM roles", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} roles`);
    result(null, res);
  });
};

module.exports = Role;
