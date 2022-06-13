import { Validator, phonePurification } from '../app';

test.each([
  ['John', true],
  ['3John', false],
  ['Johh3', false],
  ['Jo3hn', true],
  ['Jo3000hn', false],
  ['-John', false],
  ['John_', false],
])('test Validator', (username, result) => {
  const validator = new Validator();
  expect(validator.validateUsername(username)).toBe(result);
});

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['8 915 33333-33', '+79153333333'],
])('test phonePurification', (phone, result) => {
  expect(phonePurification(phone)).toBe(result);
});
