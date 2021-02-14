'use strict';

var jwt = require('jsonwebtoken');

module.exports.fromCtx = ctx => {
  const token = ctx.request.header.authorization;
  if (!token) {
    ctx.status = 401;
    return;
  }
  const decoded = jwt.decode(token, 'test');
  return decoded;
};
