/* eslint-disable prettier/prettier */
import { Content } from './content';

//Describe categoriza os testes
describe('Notification content', () => {
  //Começamos todos os teste com it. Ex:
  /* test('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma nova mensagem');

    expect(content).toBeTruthy();
  }); */

  //Sendo assim podemos substituir o "test" pelo "it" como feito abaixo

  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma nova mensagem');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
