import Validate from "../app";

test('Валидация проходит успешно', () => {
  const nick = new Validate('betiwe-_225a');
  expect(nick.validateUsername()).toEqual(true);
})

test('Валидация проходит успешно 2', () => {
  const nick = new Validate('betiwe-_225');
  expect(nick.validateUsername()).toEqual(false);
})

test('Валидация проходит успешно 3', () => {
  const nick = new Validate('BETIWE225a');
  expect(nick.validateUsername()).toEqual(true);
})

test('Валидация проходит успешно 4', () => {
  const nick = new Validate('BETIWE225543534a');
  expect(nick.validateUsername()).toEqual(false);
})