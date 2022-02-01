import data from '../../data/courses.json';

const numItems = data.length;

test('number of items should equal 12', () => {
  expect(numItems).toBe(12);
});

test('number of items should be greater than or equal to 12', () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = data[0].title;

test('There is a JS in the title', () => {
  expect(dataTest).toMatch(/JS/);
});

test('The title contains React ', () => {
  expect(dataTest).toContain('ReactJS');
});

// Arrays
const data2 = ['React Native', 'React'];

test('The List Of Courses Contains React Native and React', () => {
  expect(['React Native', 'React']).toEqual(expect.arrayContaining(data2));
});

// Objects

test('the first course to have a property of title', () => {
  expect(data[0]).toHaveProperty('title');
});

test('the first course to have a property of title and value of 31,266', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });

//adding commit to see if its verified