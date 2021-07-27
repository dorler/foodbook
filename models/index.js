const user = require('./user')
const post = require('./post')
const comment = require('./comment')

post.belongsTo(user, {
    foreignKey:'userId'
});

post.hasMany(comment, {
    foreignKey: 'postId'
  });
  
Comment.belongsTo(User, {
    foreignKey: 'userId'
  });
  
  module.exports = { user, post, comment };

  