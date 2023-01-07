const messages = require('../../src/messages');

test('show "Hello!" message', () => {
  expect(messages.sayHello()).toBe('Hello!');
});

test('show "Good-bye!" message', () => {
  expect(messages.sayGoodBye()).toBe('Good-bye!');
});
