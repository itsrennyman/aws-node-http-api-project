const createUser = async (data) => {
  return {
    status: "success",
    message: "User created.",
    data: data,
  };
};

module.exports = { createUser };
