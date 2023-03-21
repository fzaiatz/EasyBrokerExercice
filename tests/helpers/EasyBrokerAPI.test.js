const EasyBrokerAPI = require('../../src/helpers/EasyBrokerAPI');

describe('EasyBrokerAPI', () => {
  const easyBroker = new EasyBrokerAPI('l7u502p8v46ba3ppgvj5y2aad50lb9');

  describe('getProperties', () => {
    test('Should return an array of properties', async () => {
      const properties = await easyBroker.getProperties();
      expect(Array.isArray(properties.content)).toBe(true);
    });
  });
});