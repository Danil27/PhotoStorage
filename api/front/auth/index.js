'use strict';

const Handlers = require('./handlers');

module.exports = Router => {
  const router = new Router();
  const endpoints = [
    {
      method: 'post',
      path: '/auth',
      handler: Handlers.auth,
    },
  ];

  for (const { method, path, handler } of endpoints) {
    router[method](path, handler);
  }

  return router;
};
