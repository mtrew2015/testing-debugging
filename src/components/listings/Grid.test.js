import data from '../../data/courses.json';

const numItems = data.length;

// numbers

describe('Number test', () => {
  test('number of items should equal 12', () => {
    expect(numItems).toBe(12);
  });

  test('number of items should be greater than or equal to 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

const dataTest = data[0].title;

// strings

describe('string tests', () => {
  test('There is a JS in the title', () => {
    expect(dataTest).toMatch(/JS/);
  });

  test('The title contains React ', () => {
    expect(dataTest).toContain('ReactJS');
  });
});

// Arrays and Object
const data2 = ['React Native', 'React'];

describe('arrays and objects test', () => {
  test('The List Of Courses Contains React Native and React', () => {
    expect(['React Native', 'React']).toEqual(expect.arrayContaining(data2));
  });

  test('the first course to have a property of title', () => {
    expect(data[0]).toHaveProperty('title');
  });

  test('the first course to have a property of title and value of 31,266', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});
