'use strict';
const { USER_DB } = require('../../../utils/user_db');
const UserData = require('../../../utils/user_data');

module.exports.photos = async (ctx, next) => {
  const photos = await getPhoto(UserData.fromCtx(ctx).id);
  ctx.body = photos;
  ctx.status = 200;
  next();
};

async function getPhoto(id) {
  const user = await USER_DB.find(item => {
    if (item.id === id) {
      return true;
    }
  });
  return user.imgs;
}
