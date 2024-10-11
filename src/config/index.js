const ENV = process.env;

export default {
  app: {
    env: ENV.ENV || 'dev',
    port: ENV.PORT || 3616,
  },
  winston: {
    level: ENV.LEVEL ?? 'info',
  },
  databases: {
    sequelize: {
      database: ENV.POSTGRES_DATABASE || 'racketondeck',
      username: ENV.POSTGRES_USERNAME || 'racketondeck',
      password: ENV.POSTGRES_PASSWORD || 'racketondeck',
      host: ENV.POSTGRES_HOST || 'localhost',
      port: Number.parseInt(ENV.POSTGRES_PORT, 10) || 5432,
      pool: {
        max: Number.parseInt(ENV.POSTGRES_POOL_MAX, 10) || 50,
      },
      logging: ENV.POSTGRES_LOGGING === false,
      dialect: 'postgres',
      dialectOptions: {
        statement_timeout: 300000,
      },
    },
  },
};
