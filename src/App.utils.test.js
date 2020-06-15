import { mergeByGender, filterByCats, sortByName } from "./App.utils";

describe("App.utils", () => {
  describe("mergeByGender", () => {
    const data = [
      { gender: "Male", pets: [{ type: "Cat" }] },
      { gender: "Male", pets: [{ type: "Dog" }] },
      { gender: "Female", pets: [{ type: "Cat" }] },
      { gender: "Female", pets: [{ type: "Dog" }] },
    ];

    it("merges gender", () => {
      const result = mergeByGender(data);

      expect(result).toEqual({
        Female: [{ type: "Cat" }, { type: "Dog" }],
        Male: [{ type: "Cat" }, { type: "Dog" }],
      });
    });
  });

  describe("filterByCats", () => {
    const data = {
      Female: [{ type: "Cat" }, { type: "Dog" }],
      Male: [{ type: "Cat" }, { type: "Dog" }],
    };

    it("filters by cat", () => {
      const result = filterByCats(data);

      expect(result).toEqual({
        Female: [{ type: "Cat" }],
        Male: [{ type: "Cat" }],
      });
    });
  });

  describe("sortByName", () => {
    const data = {
      Female: [
        { name: "Sam", type: "Cat" },
        { name: "Rex", type: "Cat" },
      ],
      Male: [
        { name: "Kitty", type: "Cat" },
        { name: "Felix", type: "Cat" },
      ],
    };

    it("sorts by name", () => {
      const result = sortByName(data);

      expect(result).toEqual({
        Female: [
          { name: "Rex", type: "Cat" },
          { name: "Sam", type: "Cat" },
        ],
        Male: [
          { name: "Felix", type: "Cat" },
          { name: "Kitty", type: "Cat" },
        ],
      });
    });
  });
});
