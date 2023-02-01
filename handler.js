"use strict";

module.exports.hello = async (event) => {
  const data = JSON.parse(event.body);
  const result = await createPDFDocument();

  return {
    statusCode: 200,
    body: JSON.stringify({ ...result, data }),
  };
};

const createPDFDocument = async () => {
  return {
    status: "success",
    message: "Champagne Per Nessuno!",
  };
};
