let { expect } = require("chai");
let isSymmetric = require("./05.check-for-symmetry");

describe("Is the array Symmetric?", () => {
  it("receives array input", () => {
    expect(isSymmetric(0)).to.equal(false);
    expect(isSymmetric({})).to.equal(false);
    expect(isSymmetric("")).to.equal(false);
  });

  it("receives symmetric arr", () => {
    expect(isSymmetric([1, 2, 2, 1])).to.equal(true);
  });

  it("receives asymmetric arr", () => {
    expect(isSymmetric([1, 1, 25, 6, 7])).to.equal(false);
  });

  it("receives array with different value types", () => {
    expect(isSymmetric([1, "1"])).to.equal(false);
  });
});
