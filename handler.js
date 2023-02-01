"use strict";

module.exports.hello = async (event) => {
  const result = await createPDFDocument();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        ...result,
        input: event,
      },
      null,
      2
    ),
  };
};

const createPDFDocument = async () => {
  return {
    status: "success",
    message: "Champagne Per Nessuno!",
  };
};
