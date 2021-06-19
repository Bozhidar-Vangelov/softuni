let { expect } = require("chai");
let isOddOrEven = require("../02.even-or-odd");

describe("isOddOrEven", () => {
  it("Should return undefined when the parameter is not a string", () => {
    expect(isOddOrEven([])).to.equal(undefined);
    expect(isOddOrEven(1)).to.equal(undefined);
    expect(isOddOrEven({})).to.equal(undefined);
    expect(isOddOrEven(null)).to.equal(undefined);
    expect(isOddOrEven(true)).to.equal(undefined);
  });

  it("Should return even when the parameter is even stirng", () => {
    expect(isOddOrEven("test")).to.equal("even");
    expect(isOddOrEven("te")).to.equal("even");
  });

  it("Should return oddn when the parameter is pdd stirng", () => {
    expect(isOddOrEven("tes")).to.equal("odd");
    expect(isOddOrEven("t")).to.equal("odd");
  });
});
