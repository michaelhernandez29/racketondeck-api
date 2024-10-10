const ENV = process.env;

export default {
  app: {
    env: ENV.ENV || 'dev',
    port: ENV.PORT || 3616,
  },
  winston: {
    level: ENV.LEVEL ?? 'info',
  },
};
