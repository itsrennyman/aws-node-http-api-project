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

module.exports = { fetchUsers };
