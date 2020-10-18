module.exports = app => {
  const users = require("../controllers/user.controller.js");
  const roles = require("../controllers/role.controller.js");

  // Create a new user
  app.post("/users", users.create);

  // Retrieve all users
  app.get("/users", users.findAll);

  // Retrieve a single user with userId
  app.get("/users/:userId", users.findOne);

  // Update a user with userId
  app.put("/users/:userId", users.update);

  // Delete a user with userId
  app.delete("/users/:userId", users.delete);

  // delete all users
	app.delete("/users", users.deleteAll);
	
  // Create a new role
  app.post("/roles", roles.create);

  // Retrieve all roles
  app.get("/roles", roles.findAll);

  // Retrieve a single role with roleId
  app.get("/roles/:roleId", roles.findOne);

  // Update a role with roleId
  app.put("/roles/:roleId", roles.update);

  // Delete a role with roleId
  app.delete("/roles/:roleId", roles.delete);

  // delete all roles
  app.delete("/roles", roles.deleteAll);
};
