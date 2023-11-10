import { Body, Injectable, Res } from '@nestjs/common';
import DatabaseService from 'src/database.service';
import {
  CreateSignupByLoginResponseV1Dto,
  CreateSignupByLoginV1Dto,
} from './dto/create-signup-by-login-v1.dto';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
class SignupByLoginV1Repository {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  async create(
    @Res({ passthrough: true }) response: Response,
    @Body() createSignupByLoginV1Dto: CreateSignupByLoginV1Dto,
  ) {
    // User Array
    let userId;
    let user: CreateSignupByLoginResponseV1Dto = {
      id: '',
      login: '',
    };

    // Start Transaction
    try {
      const startTransaction = await this.databaseService.runQuery(`
      START TRANSACTION;
    `);

      if (!startTransaction) {
        return {
          message: 'database',
        };
      }
    } catch (error) {
      return {
        message: 'database',
      };
    }

    // Get UUID

    try {
      const userResponse = await this.databaseService.runQuery(
        `INSERT INTO users (id) VALUES (default) RETURNING id`,
      );

      if (!userResponse.rows[0].id) {
        const rollbackTransaction = await this.databaseService.runQuery(`
          ROLLBACK;
        `);

        if (!rollbackTransaction) {
          return {
            message: 'database',
          };
        }

        return {
          message: 'database',
        };
      }

      // Response Result
      userId = userResponse.rows[0].id;
    } catch (error) {
      return {
        message: 'database',
      };
    }

    // Check if login is already exists

    try {
      const response = await this.databaseService.runQuery(
        `SELECT id FROM users_login WHERE login = $1`,
        [createSignupByLoginV1Dto.login],
      );

      if (response.rowCount > 0) {
        const rollbackTransaction = await this.databaseService.runQuery(`
          ROLLBACK;
        `);

        if (!rollbackTransaction) {
          return {
            message: 'database',
          };
        }

        return {
          message: 'login already exists',
        };
      }
    } catch (error) {
      return {
        message: 'database',
      };
    }

    // User Login: Create

    try {
      const userResponse = await this.databaseService.runQuery(
        `INSERT INTO users_login (id, login) VALUES ($1, $2) RETURNING *`,
        [userId, createSignupByLoginV1Dto.login],
      );

      if (!userResponse.rows[0].id) {
        const rollbackTransaction = await this.databaseService.runQuery(`
          ROLLBACK;
        `);

        if (!rollbackTransaction) {
          return {
            message: 'database',
          };
        }

        return {
          message: 'database',
        };
      }

      // Response Result
      user.login = userResponse.rows[0].login;
    } catch (error) {
      return {
        message: 'database' + String(error),
      };
    }

    // User Password: Create

    try {
      // Generate Password
      const generatePassword = bcrypt.hash(
        createSignupByLoginV1Dto.password,
        14,
      );

      const userResponse = await this.databaseService.runQuery(
        `INSERT INTO users_password (id, password) VALUES ($1, $2) RETURNING *`,
        [userId, generatePassword],
      );

      if (!userResponse.rows[0].id) {
        const rollbackTransaction = await this.databaseService.runQuery(`
          ROLLBACK;
        `);

        if (!rollbackTransaction) {
          return {
            message: 'database',
          };
        }

        return {
          message: 'database',
        };
      }
    } catch (error) {
      return {
        message: 'database' + String(error),
      };
    }

    // User: Sign Up Date

    try {
      const userResponse = await this.databaseService.runQuery(
        `INSERT INTO users_sign_up_date (id, date) VALUES ($1, default) RETURNING *`,
        [userId],
      );

      if (!userResponse.rows[0].id) {
        const rollbackTransaction = await this.databaseService.runQuery(`
          ROLLBACK;
        `);

        if (!rollbackTransaction) {
          return {
            message: 'database',
          };
        }

        return {
          message: 'database',
        };
      }
    } catch (error) {
      return {
        message: 'database' + String(error),
      };
    }

    // Commit Transaction

    try {
      const commitTransaction = await this.databaseService.runQuery(`
        COMMIT;
      `);

      if (!commitTransaction) {
        const rollbackTransaction = await this.databaseService.runQuery(`
          ROLLBACK;
        `);

        if (!rollbackTransaction) {
          return {
            message: 'database',
          };
        }

        return {
          message: 'database',
        };
      }
    } catch (error) {
      return {
        message: 'database',
      };
    }

    // Generate JWTtoken
    try {
      const payload = { id: userId, login: user.login };
      const jwtToken = this.jwtService.sign(payload, {
        expiresIn: '60s',
        secret: 'secret',
        algorithm: 'HS512',
      });

      response.cookie('jwt', jwtToken.toString());
    } catch (error) {
      return {
        message: 'server',
      };
    }

    return {
      id: userId,
      login: user.login,
    };
  }
}

export default SignupByLoginV1Repository;
