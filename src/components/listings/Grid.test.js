import data from "../../data/courses.json";

const numItems = data.length;

test("number of items should equal 12", () => {
  expect(numItems).toBe(12);
});

test("number of items should be greater than or equal to 12", () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});

const dataTest = data[0].title;

test("There is a JS in the title", () => {
  expect(dataTest).toMatch(/JS/);
});

test("The title contains React ", () => {
  expect(dataTest).toContain('ReactJS');
});
