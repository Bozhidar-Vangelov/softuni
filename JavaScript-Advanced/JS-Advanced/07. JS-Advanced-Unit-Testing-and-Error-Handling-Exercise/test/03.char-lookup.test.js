let { expect } = require("chai");
let lookupChar = require("../03.char-lookup");

describe("lookupChar", () => {
  it("Should return undefined when first parameter is not a string", () => {
    expect(lookupChar(1, 1)).to.equal(undefined);
    expect(lookupChar(undefined, 1)).to.equal(undefined);
    expect(lookupChar(null, 1)).to.equal(undefined);
    expect(lookupChar(["test"], 1)).to.equal(undefined);
  });

  it("Should return undefined when second parameter is not an integer", () => {
    expect(lookupChar("test", 1.1)).to.equal(undefined);
    expect(lookupChar("test", undefined)).to.equal(undefined);
    expect(lookupChar("test", null)).to.equal(undefined);
    expect(lookupChar("test", "1")).to.equal(undefined);
  });

  it('Should return "Incorrect index" the second parameter is out of range index', () => {
    expect(lookupChar("foo", 3)).to.equal("Incorrect index");
    expect(lookupChar("foo", -1)).to.equal("Incorrect index");
  });

  it("Should return specific character when both parameters are with correct type and value", () => {
    expect(lookupChar("moo", 2)).to.equal("o");
    expect(lookupChar("moo", 0)).to.equal("m");
  });
});
