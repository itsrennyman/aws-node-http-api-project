"use strict";

const { createUser } = require("./services/create-user");
const { fetchUsers } = require("./services/fetch-users");
const { JSONResponse } = require("./utils/response");

module.exports.createUser = async (event) => {
  const data = JSON.parse(event.body);
  const result = await createUser(data);

  return new JSONResponse(201, result);
};

module.exports.fetchUsers = async (event) => {
  const result = await fetchUsers();

  return new JSONResponse(200, result);
};
