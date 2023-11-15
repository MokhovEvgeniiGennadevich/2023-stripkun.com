"use strict";

module.exports = async function (fastify, opts) {
  fastify.get(
    "/",
    { preHandler: fastify.csrfMiddleware },
    async function (request, response) {
      return {
        result: "success",
        message: "pong",
      };
    }
  );
};
