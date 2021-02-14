'use strict';
const { USER_DB } = require('../../../utils/user_db');
var jwt = require('jsonwebtoken');

module.exports.auth = async (ctx, next) => {
  try {
    const user = await checkUser(
      ctx.request.body.login,
      ctx.request.body.password,
    );
    if (user) {
      ctx.body = {
        token: jwt.sign(
          {
            id: user.id,
            login: user.login,
            email: user.email,
          },
          'test',
        ),
      };
      ctx.status = 200;
    }
    next();
  } catch (err) {
    ctx.status = 401;
    ctx.body = {
      error: 'Authentication failed. ' + err,
    };
  }
};

async function checkUser(login, pass) {
  const user = await USER_DB.find(item => {
    if (item.login === login && item.password === pass) {
      return true;
    }
  });

  return user;
}
