import { createDayOfWeekNames } from '../components/Month';
describe('dateTools', () => {
  describe('createDayOfWeekNames', () => {
    it('should return an array', () => {
      expect(createDayOfWeekNames().toEqual(expect.any(Array)));
    });

    it('should have 7 items', () => {
      expect(createDayOfWeekNames()).toHaveLength(7);
    });
  });
});
