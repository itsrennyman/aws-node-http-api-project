"use strict";

module.exports.createUser = async (event) => {
  const data = JSON.parse(event.body);
  const result = await createUser(data);

  return {
    statusCode: 201,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(...result),
  };
};

module.exports.fetchUsers = async (event) => {
  const result = await fetchUsers();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(...result),
  };
};

const createUser = async (data) => {
  return {
    status: "success",
    message: "User created.",
    data: data,
  };
};

const fetchUsers = async () => {
  return {
    status: "success",
    data: [
      { id: 1, firstname: "John", lastname: "Doe" },
      { id: 2, firstname: "June", lastname: "Price" },
      { id: 3, firstname: "Jack", lastname: "Ma" },
    ],
  };
};
