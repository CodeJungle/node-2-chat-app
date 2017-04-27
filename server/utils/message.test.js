const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Michael';
    var text = 'This is a test';
    var message = generateMessage(from, text)

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});