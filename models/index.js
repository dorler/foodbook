const user = require('./user')
const post = require('./post')
const comment = require('./comment')

user.hasMany(post, {
  foreignKey: 'userId'
})

post.belongsTo(user, {
    foreignKey:'userId'
});

post.hasMany(comment, {
    foreignKey: 'postId'
  });
  
 user.hasMany(comment, {
   foreignKey: 'userId'
 }); 


comment.belongsTo(user, {
    foreignKey: 'userId'
  });

  
  module.exports = { user, post, comment };

  