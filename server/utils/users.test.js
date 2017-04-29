const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'User One',
      room: 'Test Room 1'
    }, {
      id: '2',
      name: 'User Two',
      room: 'Test Room 2'
    }, {
      id: '3',
      name: 'User Three',
      room: 'Test Room 1'
    }];
  });

  it('should add a new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Mike',
      room: 'Developers'
    };
    var res = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return a list of names for users in Test Room 1', () => {
    var userList = users.getUserList('Test Room 1');
    expect(userList).toEqual(['User One', 'User Three']);
  });

  it('should return a list of names for users in Test Room 2', () => {
    var userList = users.getUserList('Test Room 2');
    expect(userList).toEqual(['User Two']);
  });
});
