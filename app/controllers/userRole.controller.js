const UserRoleM = require("../models/userRole.model.js");

// Create and Save a new Role
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Role
  const UserRole = new UserRoleM({
    idUserUR: req.params.userId,
    idRoleUR: req.params.roleId
  });

  // Save Role in the database
  UserRoleM.create(UserRole, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the role."
      });
    else res.send(data);
  });
};


// Find a single role with a roleId
exports.findByUserId = (req, res) => {
  Role.findByUserId(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Role with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving role with id " + req.params.userId
        });
      }
    } else res.send(data);
  });
};

// Find a single role with a roleId
exports.findByRoleId = (req, res) => {
  Role.findByRoleId(req.params.roleId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Role with id ${req.params.roleId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving role with id " + req.params.roleId
        });
      }
    } else res.send(data);
  });
};

// Delete a role	 with the specified roleId in the request
exports.delete = (req, res) => {
  UserRoleM.remove(req.params.userId,req.params.roleId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Role with user id ${req.params.userId} and  role id${req.params.roleId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Role with id " + req.params.roleId+" in user with id "+req.params.userId
        });
      }
    } else res.send({ message: `Role was deleted successfully!` });
  });
};

// Delete all role from the database.
exports.deleteAll = (req, res) => {
  UserRoleM.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all roles."
      });
    else res.send({ message: `All roles were deleted successfully!` });
  });
};
