'use strict';

const Handlers = require('./handlers');

module.exports = Router => {
  const router = new Router();
  const endpoints = [
    {
      method: 'post',
      path: '/photos',
      handler: Handlers.photos,
    },
    {
      method: 'post',
      path: '/loadPhoto',
      handler: Handlers.loadPhoto,
    },
  ];

  for (const { method, path, handler } of endpoints) {
    router[method](path, handler);
  }

  return router;
};
