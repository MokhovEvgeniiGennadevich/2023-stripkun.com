// Request: Validate: Security: CSRF

// Request: Validate: Security: Form Hash

const csrfMiddleware = async (request, response) => {
  const apiKey = request.headers["x-api-key"];

  if (!apiKey || apiKey !== "secret") {
    return response.code(401).send({
      result: "error",
      message: "Unauthorized",
    });
  }
};

module.exports = csrfMiddleware;
