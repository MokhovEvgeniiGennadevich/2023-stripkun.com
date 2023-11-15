"use strict";

const path = require("node:path");
const AutoLoad = require("@fastify/autoload");

const csrfMiddleware = require("./middlewares/csrf");

// Pass --options via CLI arguments in command to enable these options.
const options = {};

// Middleware: Token

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // JWT Token Plugin
  fastify.register(require("@fastify/jwt"), {
    secret: process.env.JWT_TOKEN_SECRET,
  });

  // Cookie Plugin
  fastify.register(require("@fastify/cookie"), {
    secret: process.env.COOKIE_SECRET, // for cookies signature
    hook: "onRequest", // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
    parseOptions: {}, // options for parsing cookies
  });

  // PostgreSQL
  fastify.register(require("@fastify/postgres"), {
    connectionString:
      "postgres://root:root@localhost:5432/backend_monolith_fastify4?sslmode=disable",
  });

  // Inject Middleware to Fastify
  fastify.addHook("preHandler", csrfMiddleware);

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });
};

module.exports.options = options;
