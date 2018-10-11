import { Greeter } from '../index';

test('my Greeter', () => {
  expect(Greeter("David")).toBe("Hello David");
});
