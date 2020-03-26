var User = require('./user.js')

var userHandler = {
  login: function(user, callback) {
    if(!user.username || !user.password) {
      return callback({
        status: 'ERROR',
        data: { user: null },
        msg: 'Please enter your account name and password'
      })
    } else {
      User.get(user.username, function(err, u) {
        if(err) {
          return callback({status: 'ERROR',meta: 'user',data: {user: null},msg: 'Server error'})
        } else if (!u) {
          return callback({status: 'ERROR',meta: 'user',data: {user: null},msg: 'Not a useful account'})
        } else if (u.password !== user.password) {
          return callback({status: 'ERROR',meta: 'user',data: {user: null},msg: 'Please enter corrcet password'})
        } else {
          return callback({status: 'OK',meta: 'user',data: {user: u},msg: 'Successful log in'})
        }
      })
    }
  },
  addUser: function(user, callback) {
    User.get(user.username, function(err, u) {
      if(err) {
        return callback({
          status: 'ERROR',
          meta: 'user',
          data: {
            user: null
          },
          msg: 'Server Error'
        }) 
      } else if(u) {
        return callback({
          status: 'ERROR',
          meta: 'user',
          data: {
            user: null
          },
          msg: 'The user name already exists'
        }) 
      } else {
        var userModel = new User(user)
        userModel.save(function(err, u) {
          if(err) {
            return callback({
              status: 'ERROR',
              meta: 'user',
              data: {
                user: null
              },
              msg: 'Server error'
            }) 
          } else {
            return callback({
              status: 'OK',
              meta: 'user',
              data: {
                user: u
              },
              msg: 'New user created successfully'
            }) 
          }
        })
      }

      

    })
  },
  updateUser: function(user, callback) {
    User.update(user, function(err, u) {
      if(err) {
        return callback({
          status: 'ERROR',
          meta: 'user',
          data: {
              user: null
          },
          message: 'Server error'
        })
      }
      return callback({
        status: 'OK',
        meta: 'user',
        data: {
            user: u
        },
        message: 'Update the information successfully'
      })
    })
  },
  deleteUser: function(user, callback) {
    User.delete(user, function(err, u) {
      if(err) {
        return callback({
          status: 'ERROR',
            meta: 'user',
            data: {
              user: u
            },
            msg: 'Server error'
        })
      } else {
        return callback({
          status: 'OK',
            meta: 'user',
            data: {
              user_id: u
            },
            msg: 'Delete'
        })
      }
    }) 
  },
  getUser: function(username, callback) {
    User.getUserList(username, function(err, u) {
      if(err) {
        return callback({
          status: 'ERROR',
            meta: 'user',
            data: {
              user: u
            },
            msg: 'Server Error'
        })
      } else {
        return callback({
          status: 'OK',
            meta: 'user',
            data: {
              user: u
            },
            msg: 'Get the information'
        })
      }
    })
  },
  getUserList: function(username, callback) {
    User.getUserList(username, function(err, u) {
      if(err) {
        return callback({
          status: 'ERROR',
            meta: 'user',
            data: {
              user: null
            },
            msg: 'Server error'
        })
      } else {
        return callback({
          status: 'OK',
          meta: 'user',
          data: {
            user: u
          },
          msg: 'Get the user list'
        })
      }
    })
  },
  getUserInfo: function(username, callback) {
    User.get(username, function(err, u) {
      if(err) {
        return callback({
          status: 'ERROR',
            meta: 'user',
            data: {
              user: null
            },
            msg: 'Server Error'
        })
      } else {
        return callback({
          status: 'OK',
          meta: 'user',
          data: {
            user: u
          },
          msg: 'Get the user information'
        })
      }
    })
  }
}

module.exports = userHandler