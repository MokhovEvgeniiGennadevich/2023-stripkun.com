"use strict";

const bcrypt = require("bcrypt");

module.exports = async function (fastify, opts) {
  fastify.post("/", async function (request, response) {
    // Response: User Object
    let user = {
      id: "",
      login: "",
    };

    // Request: Validate: Field Types (string, number, object etc.)

    // Business logic

    // Storage & Database

    // Storage: Transaction
    try {
      const result = await fastify.pg.query(
        "START TRANSACTION;"
      );
    } catch (error) {
      const result = await fastify.pg.query("ROLLBACK;");

      return {
        result: "error",
        message: "database error",
      };
    }

    // Storage: Create userId
    try {
      const { rows } = await fastify.pg.query(
        "INSERT INTO users (id) VALUES (default) RETURNING id"
      );

      user.id = rows[0].id;
    } catch (error) {
      const result = await fastify.pg.query("ROLLBACK");

      return {
        result: "error",
        message: "database error",
      };
    }

    // Storage: Check if userLogin exists
    try {
      const { rows } = await fastify.pg.query(
        "SELECT id FROM users_login WHERE login = $1",
        [request.body.login]
      );

      if (rows[0].id) {
        return {
          result: "error",
          message: "user already exists",
        };
      }
    } catch (error) {}

    // Storage: Create User Login
    try {
      const { rows } = await fastify.pg.query(
        "INSERT INTO users_login (id, login) VALUES ($1, $2) RETURNING login",
        [user.id, request.body.login]
      );

      user.login = rows[0].login;
    } catch (error) {
      const result = await fastify.pg.query("ROLLBACK");

      return {
        result: "error",
        message: "database error",
      };
    }

    // Storage: Create User Password
    try {
      // Generate Password
      const generatePassword = await bcrypt.hash(
        request.body.password,
        14
      );

      const passwordCheck = await bcrypt.compare(
        request.body.password,
        generatePassword
      );

      if (!passwordCheck) {
        throw new Error("bcrypt govno");
      }

      const { rows } = await fastify.pg.query(
        "INSERT INTO users_password (id, password) VALUES ($1, $2) RETURNING password",
        [user.id, generatePassword]
      );

      if (!rows[0].password) {
        return {
          result: "error",
          message: "database error",
        };
      }
    } catch (error) {
      const result = await fastify.pg.query("ROLLBACK");

      return {
        result: "error",
        message: "database error",
      };
    }

    // Storage: Create User Sign Up
    try {
      const { rows } = await fastify.pg.query(
        "INSERT INTO users_sign_up_date (id, date) VALUES ($1, default) RETURNING date",
        [user.id]
      );

      if (!rows[0].date) {
        return {
          result: "error",
          message: "database error",
        };
      }
    } catch (error) {
      const result = await fastify.pg.query("ROLLBACK");

      return {
        result: "error",
        message: "database error",
      };
    }

    // Storage: Create Refresh Token (Session)

    // Cookie: Create Access Token

    // Storage: Transaction
    try {
      const result = await fastify.pg.query("COMMIT;");
    } catch (error) {
      const result = await fastify.pg.query("ROLLBACK");

      return {
        result: "error",
        message: "database error",
      };
    }

    // Response
    return {
      result: "success",
      message: "sign up by login",
      data: user,
    };
  });
};
