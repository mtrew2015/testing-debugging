import data from "../../data/courses.json";

const numItems = data.length;

test("number of items should equal 12", () => {
  expect(numItems).toBe(12);
});

test("number of items should be greater than or equal to 12", () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});
