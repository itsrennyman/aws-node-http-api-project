function JSONResponse(statusCode = 200, body) {
  this.statusCode = statusCode;
  this.body = JSON.stringify(body);

  return {
    statusCode: this.statusCode,
    body: this.body,
    headers: {
      "Content-Type": "application/json",
    },
  };
}

module.exports = { JSONResponse };
